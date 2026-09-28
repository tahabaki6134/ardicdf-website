const assert = require('node:assert/strict');
const fs = require('node:fs');
const { test } = require('node:test');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText, filename);
const { sendEnquiry, EnquiryRequestError } = require('../lib/enquiry-request.ts');

test('client delivery does not report success for failures or leave a stalled request pending', async t => {
  const originalFetch = global.fetch;
  t.after(() => { global.fetch = originalFetch; });
  await t.test('a stalled request aborts once without retrying', async () => {
    let count = 0;
    global.fetch = async (_url, options) => {
      count++;
      return new Promise((_resolve, reject) => options.signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }));
    };
    await assert.rejects(sendEnquiry({ message: 'Example brief' }, 'tr', 5), e => e instanceof EnquiryRequestError && e.reason === 'timeout');
    assert.equal(count, 1);
  });
  await t.test('provider rejection and localized field errors remain failures', async () => {
    global.fetch = async () => Response.json({ error: 'Bitte prüfen', fields: { email: 'E-Mail prüfen' } }, { status: 400 });
    await assert.rejects(sendEnquiry({}, 'de'), e => e.reason === 'response' && e.status === 400 && e.fields.email === 'E-Mail prüfen');
    global.fetch = async () => new Response('<html>Error</html>', { status: 502 });
    await assert.rejects(sendEnquiry({}, 'en'), e => e.reason === 'response' && e.status === 502);
    global.fetch = async () => Response.json({ ok: false });
    await assert.rejects(sendEnquiry({}, 'en'), e => e.reason === 'response');
  });
  await t.test('accepted notification succeeds without a customer confirmation', async () => {
    global.fetch = async (url, options) => {
      assert.equal(url, '/api/contact');
      assert.equal(options.headers['X-ARDIC-Language'], 'ar');
      assert.equal(JSON.parse(options.body).message, 'Example brief');
      return Response.json({ ok: true, confirmationSent: false });
    };
    assert.deepEqual(await sendEnquiry({ message: 'Example brief' }, 'ar'), { confirmationSent: false });
  });
  await t.test('network errors remain an unconfirmed send', async () => {
    global.fetch = async () => { throw new TypeError('connection lost'); };
    await assert.rejects(sendEnquiry({}, 'fr'), e => e.reason === 'network');
  });
});
