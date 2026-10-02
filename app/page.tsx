const services = [
  ["01","3D EPS Modelleme","Heykel, figür, obje, ürün replikası ve büyük ölçekli özel formların üretimi."],
  ["02","2D Kesim & Logo","Logo, yazı, panel, desen ve projeye özel geometrik kesimler."],
  ["03","Rölyef & Dekor","Duvar, tavan, vitrin ve sahne uygulamaları için rölyef ve dekoratif yüzeyler."],
  ["04","Mimari Elemanlar","Söve, denizlik, kemer, kolon, kat silmesi ve projeye özel mimari profiller."],
  ["05","Fuar & Etkinlik","Fuar, lansman ve sahne projeleri için hafif, büyük ölçekli EPS çözümleri."],
  ["06","Özel Proje Üretimi","STL, CAD, teknik çizim, eskiz veya referans görselden özel üretim."]
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="EPSLAM ana sayfa">
            <span className="brand-main">EPSLAM<sup>®</sup></span>
            <span className="brand-sub">Yapı San. ve Tic. Ltd. Şti.</span>
          </a>
          <nav className="nav-links" aria-label="Ana menü">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#projeler">Projeler</a>
            <a href="#uretim">Üretim</a>
            <a href="#kurumsal">Kurumsal</a>
          </nav>
          <a className="button small" href="#iletisim">Teklif Al</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">İstanbul • Ferhatpaşa</div>
              <h1>EPS ile fikrinize <span>form veriyoruz.</span></h1>
              <p className="lead">2D ve 3D modelleme, rölyef, mimari dekorasyon ve özel strafor üretimleri. Çizimden, modelden veya yalnızca referans görselden üretime geçiyoruz.</p>
              <div className="actions">
                <a className="button" href="#iletisim">Projeniz İçin Teklif Al</a>
                <a className="button outline" href="#projeler">Projeleri İncele</a>
              </div>
              <div className="stats">
                <div><strong>2D + 3D</strong><span>Özel üretim kabiliyeti</span></div>
                <div><strong>EPS</strong><span>Hafif ve ölçeklenebilir üretim</span></div>
                <div><strong>İstanbul</strong><span>Ferhatpaşa üretim tesisi</span></div>
              </div>
            </div>
            <div className="hero-visual" aria-label="Proje görseli daha sonra eklenecek">
              <div className="hero-ring ring-a" />
              <div className="hero-ring ring-b" />
              <div className="hero-plate">
                <span>EPSLAM</span>
                <small>Fikir → Model → Üretim → Teslim</small>
              </div>
            </div>
          </div>
        </section>

        <section id="hizmetler" className="section soft">
          <div className="wrap">
            <div className="section-head">
              <div><div className="eyebrow">Üretim alanları</div><h2>Strafordan çok daha fazlasını üretiyoruz.</h2></div>
              <p>Standart ürün satmaktan çok, ihtiyaca göre şekillenen proje bazlı üretime odaklanıyoruz.</p>
            </div>
            <div className="service-grid">
              {services.map(([no,title,desc]) => <article className="service-card" key={title}><span>{no}</span><h3>{title}</h3><p>{desc}</p></article>)}
            </div>
          </div>
        </section>

        <section id="projeler" className="section">
          <div className="wrap">
            <div className="section-head">
              <div><div className="eyebrow">Projeler</div><h2>Gerçek EPSLAM üretimleri burada yer alacak.</h2></div>
              <p>Proje fotoğraflarını hazırladıkça bu alanları gerçek üretimlerle değiştireceğiz.</p>
            </div>
            <div className="project-grid">
              {[
                ["01","3D Modelleme / Büyük Ölçek","wide"],
                ["02","Rölyef / Dekor",""],
                ["03","Mimari Uygulama",""],
                ["04","Özel Proje Üretimi","wide"]
              ].map(([n,title,size]) => <article className={"project "+size} key={n}>
                <div className="project-placeholder"><b>PROJE GÖRSELİ {n}</b><span>Sonradan eklenecek</span></div>
                <div className="project-label">{title}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="uretim" className="section dark">
          <div className="wrap">
            <div className="section-head">
              <div><div className="eyebrow red">Nasıl çalışıyoruz?</div><h2>Dosyadan bitmiş ürüne.</h2></div>
              <p>Üretime geçmeden önce ölçü, malzeme ve uygulama detaylarını netleştiriyoruz.</p>
            </div>
            <div className="process">
              <article><span>01 / BRİEF</span><h3>İhtiyacı Anlarız</h3><p>Ölçü, adet, kullanım alanı ve teslim beklentisini belirleriz.</p></article>
              <article><span>02 / MODEL</span><h3>Modeli Hazırlarız</h3><p>2D çizim, 3D model veya referans görsel üretime uygun hale getirilir.</p></article>
              <article><span>03 / ÜRETİM</span><h3>Kesim & Form</h3><p>CNC, sıcak tel ve el işçiliği ile EPS forma dönüştürülür.</p></article>
              <article><span>04 / TESLİM</span><h3>Yüzey & Sevkiyat</h3><p>Projeye göre yüzey, boya, paketleme ve teslim süreci tamamlanır.</p></article>
            </div>
          </div>
        </section>

        <section id="kurumsal" className="section">
          <div className="wrap about-grid">
            <div className="about-panel"><div className="eyebrow light">EPSLAM YAPI</div><div><strong>EPS</strong><p>Hafiflik, ölçeklenebilirlik ve tasarım özgürlüğünü üretim tecrübesiyle bir araya getiriyoruz.</p></div></div>
            <div className="about-copy">
              <div className="eyebrow">Kurumsal üretim</div>
              <h2>Projeyi yalnızca kesmiyoruz; üretilebilir hale getiriyoruz.</h2>
              <p>EPSLAM, İstanbul Ferhatpaşa’daki üretim yapısıyla mimari uygulamalardan etkinlik dekorlarına, rölyeflerden büyük ölçekli 3D formlara kadar farklı sektörler için özel üretim yapar.</p>
              <p>Çizim, 3D model, referans görsel veya fikir üzerinden ölçü ve uygulama koşullarına uygun üretim planı oluşturuyoruz.</p>
            </div>
          </div>
        </section>

        <section id="iletisim" className="section soft">
          <div className="wrap contact-grid">
            <div>
              <div className="eyebrow">Teklif alın</div>
              <h2>Bir fikriniz mi var?</h2>
              <p className="contact-lead">Ölçü, adet ve varsa çizim veya model bilgilerini iletin. Projenizi üretim yöntemi açısından değerlendirelim.</p>
              <div className="contact-info">
                <p><b>Lokasyon</b><br/>Ferhatpaşa, Ataşehir / İstanbul</p>
                <p><b>E-posta</b><br/><a href="mailto:info@epslam.com">info@epslam.com</a></p>
              </div>
            </div>
            <form className="form" action="mailto:info@epslam.com" method="post" encType="text/plain">
              <label>Ad Soyad<input name="ad" placeholder="Adınız" /></label>
              <label>Telefon<input name="telefon" placeholder="05xx xxx xx xx" /></label>
              <label className="full">E-posta<input type="email" name="email" placeholder="ornek@firma.com" /></label>
              <label className="full">Proje Açıklaması<textarea name="mesaj" placeholder="Ölçü, adet, kullanım alanı ve projenizi kısaca anlatın." /></label>
              <button className="button submit full" type="submit">Teklif Talebi Gönder</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-grid">
          <div className="brand footer-brand">
            <span className="brand-main">EPSLAM<sup>®</sup></span>
            <span className="brand-sub">Yapı San. ve Tic. Ltd. Şti.</span>
          </div>
          <p>İstanbul Ferhatpaşa’da 2D & 3D EPS modelleme, rölyef, mimari dekorasyon ve projeye özel strafor üretimi.</p>
          <div className="footer-bottom"><span>© 2026 EPSLAM Yapı San. ve Tic. Ltd. Şti.</span><span>epslam.com</span></div>
        </div>
      </footer>
    </>
  );
}
