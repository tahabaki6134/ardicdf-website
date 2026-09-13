export type Language = "en" | "tr";
export type MethodCopy = {
  title: string; summary: string; intro: string; costLabel: string;
  cost: string; detail: string; mechanical: string; weight: string;
  environment: string; volume: string; finish: string;
  steps: string[]; uses: string[]; drivers: string[]; limits: string[];
  processes?: { title: string; how: string; fit: string; tradeoff: string }[];
  faqs: { question: string; answer: string }[];
};
export type ManufacturingMethod = {
  id: string; slug: Record<Language, string>; portfolio: string;
  copy: Record<Language, MethodCopy>;
};

// Material guidance is qualitative. It is not a quotation or a structural specification.
// Keep stable IDs separate from translated URLs for future country/language editions.
export const manufacturingMethods: ManufacturingMethod[] = [
  {
    id: "foam", slug: { en: "eps-xps-foam", tr: "strafor-eps-xps" },
    portfolio: "/works/cnc-manufacturing-processes",
    copy: {
      en: {
        title: "EPS / XPS foam fabrication", summary: "Large forms with a low starting material cost.",
        intro: "We shape foam into large volumes, reliefs and master patterns. Start with the size and viewing distance, then choose the foam density, detail level and protective finish together.",
        costLabel: "Low starting cost",
        cost: "Often economical for large, simple, one-off volumes. Fine finishing, a composite skin, reinforcement and assembly can become the main cost of the finished piece.",
        detail: "EPS has a bead structure: small edges and fine texture can break away or need filling. XPS has a more uniform cell structure and can be a better starting point for finer machining. Density, tool size and finishing still matter.",
        mechanical: "Bare foam dents and breaks relatively easily. A reinforced shell and internal frame change the finished construction; the strength of that assembly cannot be inferred from the foam alone.",
        weight: "Very light core. Coatings, frame, fixings and transport structure add weight.",
        environment: "Specify a compatible protective system for touch, moisture and sun exposure. Bare foam is not a durable exposed finish.",
        volume: "Well suited to large individual forms. For repeated pieces, a finished foam master can feed a separate mold-making process.",
        finish: "Raw cut surface, filled and painted surface, or a compatible reinforced skin. A smooth close-view finish adds preparation work.",
        steps: ["Choose EPS or XPS, density and the block layout.", "CNC-machine or cut the form, then join sections.", "Prepare the surface and add the agreed coating, reinforcement and finish."],
        uses: ["Large foam sculptures and display forms", "Reliefs, lettering and architectural profiles", "Masters for composite molds"],
        drivers: ["Volume and foam density", "Small details and tool access", "Coating and surface quality", "Frame, joints and delivery dimensions"],
        limits: ["Thin details and exposed edges need special attention.", "Resin compatibility must be planned: styrene-containing polyester can attack unprotected polystyrene."],
        faqs: [
          { question: "Is a foam sculpture always fragile?", answer: "A raw EPS sculpture and a framed, composite-coated sculpture are different constructions. We specify the core, shell and supports separately for the intended use." },
          { question: "EPS or XPS for fine detail?", answer: "XPS can offer a more even machining surface. For very fine features, we can assess a denser model material or a separately printed detail instead. The final choice depends on the geometry and finish." }
        ]
      },
      tr: {
        title: "Strafor imalatı · EPS / XPS", summary: "Büyük hacimli formlar için düşük başlangıç maliyeti.",
        intro: "Straforu büyük hacimli formlara, rölyeflere ve kalıp modellerine dönüştürüyoruz. Ölçü ve bakış mesafesine göre malzeme yoğunluğunu, detay seviyesini ve koruyucu kaplamayı birlikte seçiyoruz.",
        costLabel: "Düşük başlangıç maliyeti",
        cost: "Büyük, sade ve tek adet işlerde çoğu zaman ekonomik bir başlangıçtır. İnce yüzey işçiliği, kompozit kaplama, karkas ve montaj bitmiş ürün maliyetinin büyük bölümünü oluşturabilir.",
        detail: "EPS boncuklu yapıdadır; küçük kenarlar ve ince dokular kopabilir veya dolgu gerektirebilir. XPS daha homojen hücre yapısıyla ince işlemede avantaj sağlayabilir. Yoğunluk, takım çapı ve son yüzey işlemi de sonucu belirler.",
        mechanical: "Ham strafor kolay ezilebilir ve kırılabilir. Cam elyaf kabuk ve iç karkas eklendiğinde bitmiş ürünün yapısı değişir; bütünün dayanımı yalnızca strafora bakılarak belirlenemez.",
        weight: "Çekirdek çok hafiftir. Kaplama, karkas, bağlantılar ve taşıma düzeni ağırlık ekler.",
        environment: "Temas, nem ve güneş için uygun bir koruyucu sistem seçilir. Ham strafor, açıkta bırakılacak dayanıklı bir son yüzey değildir.",
        volume: "Büyük ve tekil formlara uygundur. Tekrarlı üretimde, tamamlanmış strafor modelden ayrıca kalıp alınabilir.",
        finish: "Ham kesim, macun ve boya ya da uyumlu elyaf kaplama. Yakından görülecek pürüzsüz yüzey daha fazla hazırlık ister.",
        steps: ["EPS/XPS türünü, yoğunluğu ve blok yerleşimini seçeriz.", "CNC veya kesimle formu çıkarır, bölümleri birleştiririz.", "Yüzeyi hazırlayıp kararlaştırılan kaplama, takviye ve boyayı uygularız."],
        uses: ["Büyük strafor heykeller ve teşhir formları", "Rölyef, yazı ve mimari profiller", "Kompozit kalıp için ana modeller"],
        drivers: ["Hacim ve strafor yoğunluğu", "Küçük detaylar ve takım erişimi", "Kaplama ve yüzey beklentisi", "Karkas, birleşimler ve sevkiyat ölçüsü"],
        limits: ["İnce detaylar ve açıkta kalan kenarlar ayrıca ele alınır.", "Reçine uyumu planlanmalıdır: stiren içeren polyester, korunmamış polistirene zarar verebilir."],
        faqs: [
          { question: "Strafor heykel her zaman dayanıksız mı?", answer: "Ham EPS heykel ile karkaslı ve cam elyaf kaplı heykel farklı yapılardır. Kullanım yerine göre çekirdeği, kabuğu ve taşıyıcıları ayrı ayrı belirliyoruz." },
          { question: "İnce detay için EPS mi XPS mi?", answer: "XPS daha homojen bir işleme yüzeyi sağlayabilir. Çok ince ayrıntıda daha yoğun model malzemesi veya ayrıca basılmış bir 3D parça da değerlendirilebilir. Seçimi geometri ve son yüzey belirler." }
        ]
      }
    }
  },
  {
    id: "glass", slug: { en: "fiberglass-grp", tr: "cam-elyaf-polyester" },
    portfolio: "/works/molds-composite-production",
    copy: {
      en: {
        title: "Fiberglass / GRP fabrication", summary: "Durable shells with a practical cost balance.",
        intro: "Glass fiber reinforcement and a compatible resin create a composite shell. We plan whether to laminate over a master or core, or use a mold for repeated parts.",
        costLabel: "Medium · tooling extra",
        cost: "Glass reinforcement is generally less expensive than carbon. A new mold adds an initial cost; its value improves when the same shape is produced repeatedly.",
        detail: "The visible surface follows the master and mold quality. Fine detail is possible, but draft, parting lines and access for lamination must be designed.",
        mechanical: "A designed laminate is much more resistant to handling than bare foam. Stiffness, impact response and load capacity depend on the laminate, geometry, resin and supports.",
        weight: "Hollow shells avoid a solid fill. A comparable stiffness target generally requires more weight than a well-designed carbon laminate.",
        environment: "Resin, gelcoat or paint, sealed joints and fixings are chosen for the exposure. Outdoor suitability belongs to the complete system.",
        volume: "A useful route for repeated shells and durable display pieces, once mold setup is justified.",
        finish: "Gelcoat, paint or a prepared textured finish. The mold-contact face and the rear laminate can have different finishes.",
        steps: ["Develop the master, mold or core and the part split.", "Laminate glass reinforcement with the selected resin and cure it.", "Demold or trim, add attachments and finish the surface."],
        uses: ["Hollow sculpture and decorative shells", "Repeated panels, covers and display parts", "Glass-fiber molds and reinforced foam skins"],
        drivers: ["Master and mold preparation", "Surface area and laminate schedule", "Part quantity and split lines", "Finish, inserts and reinforcement"],
        limits: ["A thin shell still needs correctly designed supports and attachment zones.", "A cosmetic gelcoat is not a substitute for a structural laminate."],
        faqs: [
          { question: "How is fiberglass different from polyester?", answer: "Glass fiber is the reinforcement; polyester is one possible resin matrix. Epoxy or other resin systems may be selected for a particular process or requirement." },
          { question: "Why choose fiberglass instead of carbon?", answer: "For many decorative shells, its cost and useful durability make more sense. Carbon becomes more relevant when stiffness at low weight justifies the extra material and process cost." }
        ]
      },
      tr: {
        title: "Cam elyaf / polyester imalatı", summary: "Dayanıklı kabuklarda dengeli maliyet.",
        intro: "Cam elyaf takviye ve uygun reçineyle kompozit kabuk üretiyoruz. Model veya çekirdek üstü kaplama ile kalıptan tekrarlı üretim seçeneklerini ihtiyaca göre planlıyoruz.",
        costLabel: "Orta · kalıp ayrıca",
        cost: "Cam elyaf takviye genellikle karbondan daha ekonomiktir. Yeni kalıp ilk maliyeti artırır; aynı formdan birden fazla üretildikçe bu yatırımın anlamı artar.",
        detail: "Görünen yüzey, model ve kalıp kalitesini takip eder. İnce detay alınabilir; kalıptan çıkış, ayrım çizgileri ve elyafın yerleştirileceği alanlar tasarlanmalıdır.",
        mechanical: "Doğru tasarlanmış laminat, ham strafordan çok daha fazla kullanım dayanımı sağlar. Rijitlik, darbe davranışı ve yük kapasitesi; katmanlara, geometriye, reçineye ve taşıyıcılara bağlıdır.",
        weight: "İçi boş kabukla gereksiz dolgu ağırlığı önlenir. Aynı rijitlik hedefinde iyi tasarlanmış karbon laminata göre genellikle daha fazla ağırlık gerekir.",
        environment: "Reçine, jelkot veya boya, kapalı birleşimler ve bağlantılar kullanım ortamına göre seçilir. Dış mekân uygunluğu bütün sistemin özelliğidir.",
        volume: "Kalıp maliyeti karşılandığında tekrarlı kabuklar ve dayanıklı teşhir parçaları için uygundur.",
        finish: "Jelkot, boya veya hazırlanmış dokulu yüzey. Kalıba bakan ön yüz ile arka laminatın yüzey kalitesi farklı olabilir.",
        steps: ["Modeli, kalıbı veya çekirdeği ve parça ayrımlarını hazırlarız.", "Cam elyafı seçilen reçineyle yatırır ve kürlenmesini sağlarız.", "Kalıptan çıkarır veya keser, bağlantıları ve son yüzeyi tamamlarız."],
        uses: ["İçi boş heykel ve dekor kabukları", "Tekrarlı panel, kapak ve teşhir parçaları", "Cam elyaf kalıplar ve strafor üstü takviye"],
        drivers: ["Ana model ve kalıp hazırlığı", "Yüzey alanı ve katman planı", "Adet ve kalıp ayrımları", "Boya, bağlantılar ve takviyeler"],
        limits: ["İnce kabuklarda taşıyıcı ve bağlantı bölgeleri ayrıca tasarlanır.", "Görsel amaçlı jelkot, taşıyıcı elyaf katmanının yerini tutmaz."],
        faqs: [
          { question: "Cam elyaf ile polyester aynı şey mi?", answer: "Cam elyaf takviyedir; polyester ise kullanılabilecek reçinelerden biridir. İmalat yöntemine ve beklentiye göre epoksi veya başka bir reçine sistemi de seçilebilir." },
          { question: "Neden karbon yerine cam elyaf?", answer: "Birçok dekor kabuğunda maliyeti ve kullanım dayanımı daha uygun bir denge sunar. Düşük ağırlıkta rijitlik özellikle önemliyse karbonun ek malzeme ve işçilik maliyeti anlam kazanır." }
        ]
      }
    }
  },
  {
    id: "carbon", slug: { en: "carbon-fiber", tr: "karbon-fiber" },
    portfolio: "/works/molds-composite-production",
    copy: {
      en: {
        title: "Carbon fiber fabrication", summary: "High stiffness with carefully controlled weight.",
        intro: "We produce carbon-fiber parts and molds using hand layup, vacuum bagging and vacuum resin infusion. We select the route for the geometry, weight, finish and quantity; these are process options, not three compulsory stages.",
        costLabel: "High relative cost",
        cost: "Fiber, resin, tooling, layup and process control usually cost more than a glass-fiber alternative. Carbon is most useful when the weight or stiffness target earns that investment.",
        detail: "Mold quality controls the surface. Tight corners, visible weave alignment and complex split molds add labor; a carbon appearance alone does not describe the underlying structure.",
        mechanical: "Carbon can offer high stiffness for its weight. Impact damage, brittle fracture and fiber direction must be considered separately; it is not automatically tougher in every situation.",
        weight: "A good option when low weight and stiffness are both priorities. The actual saving depends on the laminate and the equivalent design target.",
        environment: "Service temperature depends on the resin and cure, not the fiber name alone. UV finish and isolation from incompatible metal contacts may need specification.",
        volume: "Specialist parts and tools where performance justifies tooling and process costs. Repetition can spread mold setup across more parts.",
        finish: "Visible weave with a specified clear finish, or paint. Cosmetic skins and load-carrying laminates are different specifications.",
        processes: [
          { title: "Hand layup / wet layup", how: "We place the carbon fabric in the mold and wet it with resin by hand, using brushes or rollers.", fit: "An accessible route for custom shapes, small quantities and work where minimum weight is not the main target.", tradeoff: "Lower equipment setup; resin content and air removal rely closely on workmanship. Vacuum consolidation can be added where needed." },
          { title: "Vacuum bagging", how: "After wetting the reinforcement, we seal it under a vacuum bag. Atmospheric pressure consolidates the layers while the resin cures.", fit: "Useful when closer control of consolidation and laminate weight is needed after hand layup.", tradeoff: "Adds bagging materials, sealing and setup work. The result depends on the layup, resin and a reliable seal." },
          { title: "Vacuum resin infusion", how: "We place dry fabric in the mold, seal the bag and draw suitable liquid resin through the reinforcement under vacuum.", fit: "Suitable for shells and panels where the resin flow can be planned for the geometry.", tradeoff: "Requires flow planning, leak checks and infusion consumables. Dry areas and resin flow need control; the process alone does not guarantee strength." }
        ],
        steps: ["Define the weight, loads, exposure and whether the request is for a part or a mold.", "Choose hand layup, vacuum bagging or infusion, then prepare the mold, fiber directions and resin.", "Cure to the resin specification, trim and assess the agreed finish and dimensions."],
        uses: ["Lightweight covers and prototype shells", "Stiff panels and custom laminated components", "Molds for carbon parts or carbon-composite tooling"],
        drivers: ["Fiber type, orientation and layer count", "Tool geometry and temperature requirement", "Layup and process control", "Visible weave, trimming and inspection"],
        limits: ["Carbon is not a universal upgrade for impact resistance.", "High-temperature or certified structural work requires a separately agreed process and verification scope."],
        faqs: [
          { question: "I need a carbon fiber mold. What should I specify?", answer: "Tell us whether you need a mold used to produce carbon parts, or a mold whose own structure is carbon composite. They are different requests. Include the part size, resin/cure temperature, required quantity and surface tolerance." },
          { question: "Is carbon always stronger than fiberglass?", answer: "No single ranking covers stiffness, impact, tension and damage tolerance. We compare equivalent constructions and the actual load case, not just the names of the fibers." }
        ]
      },
      tr: {
        title: "Karbon fiber imalatı", summary: "Kontrollü ağırlıkla yüksek rijitlik.",
        intro: "Karbon fiber parça ve kalıp üretiminde elle serme, vakum torbalama ve vakum infüzyon yöntemlerini kullanıyoruz. Geometri, ağırlık, yüzey ve adede göre uygun yöntemi seçiyoruz; bunlar her ürüne sırayla uygulanan üç zorunlu aşama değildir.",
        costLabel: "Yüksek göreli maliyet",
        cost: "Elyaf, reçine, kalıp, katman yerleştirme ve proses kontrolü genellikle cam elyaf alternatifinden daha maliyetlidir. Ağırlık veya rijitlik hedefi bu yatırımı gerektiriyorsa karbon anlam kazanır.",
        detail: "Yüzeyi kalıp kalitesi belirler. Dar köşeler, görünür dokuma hizası ve karmaşık kalıp ayrımları işçiliği artırır; karbon görünümü tek başına taşıyıcı yapıyı tarif etmez.",
        mechanical: "Karbon, ağırlığına göre yüksek rijitlik sağlayabilir. Darbe hasarı, gevrek kırılma ve elyaf yönü ayrıca değerlendirilir; her koşulda daha tok veya darbeye daha dayanıklı değildir.",
        weight: "Hafiflik ve rijitlik birlikte önemliyse güçlü bir seçenektir. Gerçek ağırlık kazancı, katman planına ve eşdeğer tasarım hedefine bağlıdır.",
        environment: "Çalışma sıcaklığını yalnızca elyaf adı değil, reçine ve kürleme belirler. UV koruması ve uygun olmayan metal temaslarından yalıtım gerekebilir.",
        volume: "Performansın kalıp ve üretim maliyetini haklı çıkardığı özel parçalar ve kalıplar. Tekrarlı üretimde kalıp gideri daha fazla parçaya dağılır.",
        finish: "Belirlenen şeffaf son katla görünür dokuma veya boya. Görsel kaplama ile yük taşıyan karbon laminat farklı tariflerdir.",
        processes: [
          { title: "Elle serme / ıslak yatırma", how: "Karbon kumaşı kalıba yerleştirip reçineyi fırça veya ruloyla elle uygularız.", fit: "Özel formlar, az adetli işler ve en düşük ağırlığın öncelik olmadığı parçalar için değerlendirilebilir.", tradeoff: "Ekipman hazırlığı daha sınırlıdır; reçine miktarı ve havanın uzaklaştırılması işçiliğe bağlıdır. İhtiyaç halinde ardından vakum torbalama uygulanabilir." },
          { title: "Vakum torbalama", how: "Reçineyle ıslatılmış elyafı sızdırmaz bir torba altında vakuma alırız. Atmosfer basıncı, kürlenme sırasında katmanların sıkışmasını sağlar.", fit: "Elle serme sonrasında katman sıkışmasını ve laminat ağırlığını daha kontrollü yönetmek için kullanılır.", tradeoff: "Torbalama sarfları, sızdırmazlık ve hazırlık işçiliği eklenir. Sonuç; katman yerleşimi, reçine ve vakum sızdırmazlığına bağlıdır." },
          { title: "Vakum infüzyon", how: "Kuru karbon kumaşı kalıba serer, torbayı kapatır ve uygun sıvı reçineyi vakumla elyafın içinden geçiririz.", fit: "Reçine akışının geometriye göre planlanabildiği kabuk ve panellerde değerlendirilebilir.", tradeoff: "Akış planı, kaçak kontrolü ve infüzyon sarfları gerekir. Kuru bölge ve reçine akışı kontrol edilir; yöntemin adı tek başına dayanım garantisi vermez." }
        ],
        steps: ["Ağırlığı, yükleri, ortamı ve talebin parça mı kalıp mı olduğunu netleştiririz.", "Elle serme, vakum torbalama veya infüzyonu seçip kalıbı, elyaf yönlerini ve reçineyi hazırlarız.", "Reçineye uygun kürleme, kenar işleme ve kararlaştırılan ölçü/yüzey kontrolünü yaparız."],
        uses: ["Hafif kapaklar ve prototip kabuklar", "Rijit paneller ve özel laminasyon parçaları", "Karbon parça üretim kalıbı veya karbon kompozit kalıp"],
        drivers: ["Elyaf tipi, yönü ve katman sayısı", "Kalıp geometrisi ve sıcaklık ihtiyacı", "Katman işçiliği ve proses kontrolü", "Görünür dokuma, kesim ve kontrol"],
        limits: ["Karbon, darbe dayanımı için her durumda daha iyi bir seçim değildir.", "Yüksek sıcaklık veya sertifikalı taşıyıcı işler için üretim ve doğrulama kapsamı ayrıca belirlenir."],
        faqs: [
          { question: "Karbon fiber kalıp istiyorum. Neyi belirtmeliyim?", answer: "Karbon parça üretmek için bir kalıp mı, yoksa kendisi karbon kompozitten üretilmiş bir kalıp mı istediğinizi belirtin. Bunlar farklı taleplerdir. Parça ölçüsü, reçine/kür sıcaklığı, adet ve yüzey toleransı da seçimi etkiler." },
          { question: "Karbon her zaman cam elyaftan daha dayanıklı mı?", answer: "Rijitlik, darbe, çekme ve hasar toleransını tek bir sıralama açıklamaz. Yalnızca elyaf isimlerini değil, eşdeğer yapıları ve gerçek yük durumunu karşılaştırıyoruz." }
        ]
      }
    }
  },
  {
    id: "printing", slug: { en: "3d-printing", tr: "3d-baski" },
    portfolio: "/works",
    copy: {
      en: {
        title: "Large-format 3D printing", summary: "Complex digital forms without a production mold.",
        intro: "FDM printing builds a plastic part layer by layer from a digital model. We plan material, wall thickness, orientation and section joints around the final use.",
        costLabel: "Geometry dependent",
        cost: "Avoids a production mold for individual parts. Printing time, material quantity, supports and finishing can make a large solid-looking form more expensive than foam.",
        detail: "Complex geometry is possible, but nozzle size, layer height and orientation limit detail. Layer lines and section joints may remain unless finishing is included.",
        mechanical: "Material, wall thickness, infill and layer bonding all affect strength. Printed parts can be weaker across layer interfaces; joints and inserts require planning.",
        weight: "Walls and infill can reduce material. Light construction is possible, but increasing strength or adding a frame changes the total.",
        environment: "Select the polymer for heat, sun and moisture. Standard PLA is not the default choice for a hot exterior application.",
        volume: "Useful for unique or changing shapes and small runs. Repeated large runs may favor a printed master followed by molding.",
        finish: "As-printed layers, filled and painted surfaces, or a separately specified composite coating.",
        steps: ["Check the digital model, scale and smallest features.", "Choose material, orientation, walls and section connections; print the parts.", "Assemble and apply the agreed surface preparation and finish."],
        uses: ["Detailed forms and product replicas", "Prototype components and assembly models", "Masters for molds and separately printed fine details"],
        drivers: ["Print time and material quantity", "Layer height, nozzle and supports", "Wall/infill specification", "Section joints and visible-surface finishing"],
        limits: ["As-printed surfaces are not automatically smooth.", "Fine layer height over a very large object can significantly increase production time."],
        faqs: [
          { question: "Is printing always more detailed than foam?", answer: "It can help with complex small features, but a large-nozzle print is not a miniature resin print. We compare the actual nozzle, layer height, machining route and required finished surface." },
          { question: "Can a print become a fiberglass part?", answer: "A print can be a master for a mold or a base for an agreed composite skin. The finished construction, cost and weight then belong to that combined process." }
        ]
      },
      tr: {
        title: "Büyük ebatlı 3D baskı", summary: "Üretim kalıbı gerektirmeden karmaşık dijital formlar.",
        intro: "FDM baskıyla dijital modeli katman katman plastik parçaya dönüştürüyoruz. Malzemeyi, duvar kalınlığını, baskı yönünü ve bölüm birleşimlerini son kullanıma göre planlıyoruz.",
        costLabel: "Geometriye bağlı",
        cost: "Tekil parçada üretim kalıbı gerektirmez. Baskı süresi, malzeme, destekler ve son işlem nedeniyle büyük hacimli bir form strafordan daha pahalıya gelebilir.",
        detail: "Karmaşık geometri üretilebilir; detay sınırını nozul çapı, katman yüksekliği ve baskı yönü belirler. Son işlem yapılmazsa katmanlar ve bölüm birleşimleri görülebilir.",
        mechanical: "Malzeme, duvar, dolgu ve katman yapışması dayanımı etkiler. Katmanlar arası yönde daha zayıf davranış görülebilir; birleşimler ve bağlantı elemanları ayrıca planlanır.",
        weight: "Duvar ve dolgu ayarıyla malzeme azaltılabilir. Dayanımı artırmak veya karkas eklemek toplam ağırlığı değiştirir.",
        environment: "Plastiği sıcaklık, güneş ve neme göre seçeriz. Standart PLA, sıcak dış mekân için varsayılan seçenek değildir.",
        volume: "Tekil, değişen geometriler ve az adet için uygundur. Yüksek tekrarda baskıdan ana model üretip kalıba geçmek değerlendirilebilir.",
        finish: "Ham katmanlı baskı, macun ve boya veya ayrıca tariflenmiş kompozit kaplama.",
        steps: ["Dijital modeli, ölçeği ve en küçük detayları kontrol ederiz.", "Malzeme, baskı yönü, duvar ve birleşimleri seçip parçaları basarız.", "Montajı ve kararlaştırılan yüzey hazırlığı ile boyayı tamamlarız."],
        uses: ["Detaylı formlar ve ürün replikaları", "Prototip parçalar ve montaj modelleri", "Kalıp ana modelleri ve ayrı basılan ince detaylar"],
        drivers: ["Baskı süresi ve malzeme miktarı", "Katman, nozul ve destek yapıları", "Duvar ve dolgu tarifi", "Parça birleşimi ve görünen yüzey işçiliği"],
        limits: ["Ham baskı yüzeyi kendiliğinden pürüzsüz değildir.", "Çok büyük bir üründe ince katman seçimi üretim süresini belirgin artırabilir."],
        faqs: [
          { question: "3D baskı her zaman strafordan daha detaylı mı?", answer: "Karmaşık küçük ayrıntıda avantaj sağlayabilir; ancak büyük nozulla baskı, minyatür reçine baskısı değildir. Gerçek nozul, katman, CNC yöntemi ve istenen son yüzeyi karşılaştırıyoruz." },
          { question: "Baskıdan cam elyaf ürün yapılabilir mi?", answer: "Baskı, kalıp alınacak ana model veya belirlenen kompozit kaplamanın tabanı olabilir. Bitmiş ürünün yapısı, maliyeti ve ağırlığı bu birleşik yönteme göre değerlendirilir." }
        ]
      }
    }
  },
  {
    id: "pu", slug: { en: "polyurethane", tr: "poliuretan" }, portfolio: "/works/molds-composite-production",
    copy: {
      en: {
        title: "Polyurethane machining & casting", summary: "Machined masters and repeatable cast details.",
        intro: "Polyurethane describes a family of materials. A machinable model board, a rigid non-foaming casting resin and an expanding foam have different uses and properties.",
        costLabel: "Medium · grade dependent",
        cost: "Material grade and density affect cost. Casting adds mold setup, which can be shared across repeated parts; machining a one-off master has a different cost structure.",
        detail: "A suitable dense board machines cleanly, while casting can reproduce the mold surface. Bubbles, shrinkage and thin sections must be considered for the selected resin.",
        mechanical: "Rigid, flexible and foamed PU grades behave differently. Hardness, impact performance and fixing design are specified from the actual product, not from the PU name alone.",
        weight: "Density and whether the part is solid, hollow or filled control weight. PU is not necessarily a lightweight foam.",
        environment: "Heat, moisture and UV suitability depend on the formulation and protective finish.",
        volume: "Machining for masters and individual forms; casting for repeated details once the mold is prepared.",
        finish: "Prepared machined surface, molded texture, painted finish or a specified wood-effect cast surface.",
        steps: ["Choose model board or casting resin and define the required properties.", "Machine the model, or prepare a mold and cast the part.", "Trim, fit attachments and complete the specified surface finish."],
        uses: ["Dense model-board masters", "Repeated decorative details", "Rigid cast components and wood-effect pieces"],
        drivers: ["Material grade and density", "Mold complexity and quantity", "Casting thickness or machining time", "Surface preparation and attachments"],
        limits: ["Expanding PU foam and solid casting PU are not interchangeable.", "Large casting sections need a suitable resin and process plan."],
        faqs: [{ question: "Will polyurethane expand?", answer: "Only if the selected formulation is designed to foam. For dimensioned cast parts, the resin, mold and cure behavior must be specified together." }]
      },
      tr: {
        title: "Poliüretan işleme ve döküm", summary: "İşlenmiş modeller ve tekrarlı döküm detayları.",
        intro: "Poliüretan bir malzeme ailesidir. CNC model plakası, şişmeyen sert döküm reçinesi ve genleşen köpük farklı amaçlara ve özelliklere sahiptir.",
        costLabel: "Orta · ürüne bağlı",
        cost: "Ürün tipi ve yoğunluk maliyeti değiştirir. Dökümde kalıp gideri tekrarlı parçalara bölünebilir; tek seferlik CNC ana modelin maliyet yapısı farklıdır.",
        detail: "Uygun yoğun model plakası temiz işlenebilir; döküm ise kalıp yüzeyini kopyalar. Seçilen reçinede kabarcık, çekme ve ince kesitler dikkate alınır.",
        mechanical: "Sert, esnek ve köpük PU farklı davranır. Sertlik, darbe performansı ve bağlantılar yalnızca PU adına göre değil, kullanılacak ürüne göre belirlenir.",
        weight: "Yoğunluk ve parçanın dolu, boş veya dolgulu olması ağırlığı belirler. Her poliüretan hafif köpük değildir.",
        environment: "Sıcaklık, nem ve UV uygunluğu ürün formülüne ve koruyucu son kata bağlıdır.",
        volume: "CNC ile tekil model; hazırlanan kalıpla tekrarlı döküm detayları.",
        finish: "Hazırlanmış CNC yüzeyi, kalıptan alınan doku, boya veya tariflenmiş ahşap görünümlü döküm yüzeyi.",
        steps: ["Model plakası veya döküm reçinesini ve gereken özellikleri seçeriz.", "Modeli işler veya kalıbı hazırlayıp dökümü yaparız.", "Çapak alma, bağlantı ve son yüzey işlemlerini tamamlarız."],
        uses: ["Yoğun model plakasından ana modeller", "Tekrarlı dekoratif detaylar", "Sert döküm parçaları ve ahşap görünümlü elemanlar"],
        drivers: ["Ürün türü ve yoğunluğu", "Kalıp karmaşıklığı ve adet", "Döküm kalınlığı veya CNC süresi", "Yüzey hazırlığı ve bağlantılar"],
        limits: ["Genleşen PU köpük ile dolu döküm PU birbirinin yerine geçmez.", "Kalın döküm kesitlerinde uygun reçine ve işlem planı gerekir."],
        faqs: [{ question: "Poliüretan şişer mi?", answer: "Yalnızca köpürmek üzere formüle edilmiş ürünler bu amaçla genleşir. Ölçülü döküm parçada reçine, kalıp ve kür davranışı birlikte belirlenmelidir." }]
      }
    }
  },
  {
    id: "epoxy", slug: { en: "epoxy-resin-casting", tr: "epoksi-recine-dokum" }, portfolio: "/works/molds-composite-production",
    copy: {
      en: {
        title: "Epoxy resin casting", summary: "Clear, coloured or filled castings for objects and furniture.",
        intro: "We cast epoxy resin into prepared molds and combine it with timber or other compatible materials. Decorative objects, custom components, display pieces and resin furniture details can be supplied individually or within a complete furniture project.",
        costLabel: "Volume and finish dependent",
        cost: "Resin volume, mold preparation and finishing drive the quotation. Thick clear castings, multiple pours and polished faces can increase both material cost and workshop time.",
        detail: "A prepared mold can reproduce fine surface detail. Clear faces also reveal bubbles, inclusions and mold imperfections, so preparation and finishing matter.",
        mechanical: "A solid resin casting is a different construction from fiber-reinforced epoxy. Resin grade, section shape and supports determine its behaviour; thin edges and attachment points need attention.",
        weight: "Solid castings can be heavy as volume increases. Cavities, inserts or a mixed-material design can reduce resin use where the geometry allows.",
        environment: "Heat, sunlight and repeated surface contact affect resin selection and the protective finish. Clear epoxy can change colour under UV exposure; outdoor use needs a suitable complete system.",
        volume: "Suitable for individual pieces and repeat casting from a mold. Pour limits, cure time and finishing determine the production schedule.",
        finish: "Clear, translucent, pigmented or filled surfaces with an agreed matte or polished finish. A resin casting does not leave every mold ready for display.",
        steps: ["Define the colour, transparency, dimensions and resin system; prepare the mold and any inserts.", "Mix and cast within the resin supplier's depth and temperature limits, using staged pours where required.", "Allow the specified cure, demold, machine or polish, and assemble the finished piece."],
        uses: ["Decorative objects, replicas and custom cast parts", "Clear or coloured display pieces and encapsulated details", "Solid timber and epoxy tabletops, furniture inserts and handles", "Pattern details and project-specific cast components"],
        drivers: ["Resin volume and casting thickness", "Mold preparation and quantity", "Transparency, pigments, fillers and inserts", "Cure schedule, machining and polishing"],
        limits: ["Pour depth and cure time depend on the selected resin; a large casting may need staged pours.", "Curing releases heat. Resin choice, casting volume and workshop temperature must be planned together."],
        faqs: [
          { question: "Is epoxy casting the same as carbon fiber production?", answer: "Epoxy casting forms the resin itself into a part. In carbon or glass-fiber lamination, the resin binds reinforcing fibers. We select a resin formulated for casting, lamination or infusion as appropriate." },
          { question: "Can you produce the complete furniture around an epoxy detail?", answer: "Yes. We can manufacture an epoxy insert, handle or tabletop as an individual item, or combine it with the timber structure, hardware and finish in a complete furniture commission. Delivery and installation are defined with the project." }
        ]
      },
      tr: {
        title: "Epoksi reçine dökümü", summary: "Objeler ve mobilyalar için şeffaf, renkli veya dolgulu dökümler.",
        intro: "Epoksi reçineyi hazırlanmış kalıplara döküyor; ahşap ve diğer uyumlu malzemelerle birlikte kullanıyoruz. Dekoratif objeler, özel parçalar, teşhir ürünleri ve epoksili mobilya detaylarını tekil olarak veya komple mobilya projesi içinde üretebiliyoruz.",
        costLabel: "Hacim ve yüzeye bağlı",
        cost: "Reçine hacmi, kalıp hazırlığı ve son yüzey işçiliği fiyatı belirler. Kalın şeffaf dökümler, aşamalı döküm ve polisajlı yüzeyler malzeme maliyetini ve atölye süresini artırabilir.",
        detail: "Hazırlanmış kalıptan ince yüzey detayı alınabilir. Şeffaf yüzeyler hava kabarcıklarını, kalıntıları ve kalıp kusurlarını da gösterdiği için hazırlık ve son işlem önemlidir.",
        mechanical: "Dolu reçine dökümü ile elyaf takviyeli epoksi farklı yapılardır. Davranışı reçine türü, kesit ve taşıyıcılar belirler; ince kenarlar ile bağlantı noktaları ayrıca ele alınır.",
        weight: "Hacim büyüdükçe dolu döküm ağırlaşabilir. Geometri uygunsa boşluk, iç parça veya farklı malzemelerle birleşim reçine tüketimini azaltabilir.",
        environment: "Sıcaklık, güneş ve yüzey teması reçine ve koruyucu son kat seçimini etkiler. Şeffaf epokside UV etkisiyle renk değişimi olabilir; dış mekân için uygun bir bütün sistem seçilir.",
        volume: "Tekil işler ve kalıptan tekrarlı döküm için uygundur. Döküm sınırları, kürlenme ve son işlem süresi üretim takvimini belirler.",
        finish: "Şeffaf, yarı saydam, pigmentli veya dolgulu yüzey; kararlaştırılan mat ya da polisajlı bitiş. Her reçine dökümü kalıptan teşhire hazır çıkmaz.",
        steps: ["Renk, şeffaflık, ölçü ve reçine sistemini belirler; kalıbı ve yerleştirilecek parçaları hazırlarız.", "Üreticinin kalınlık ve sıcaklık sınırlarına göre karıştırıp döker, gerekirse aşamalı döküm yaparız.", "Belirlenen kürlenme sonrası kalıptan çıkarır, işler veya polisaj yapar ve ürünü tamamlarız."],
        uses: ["Dekoratif objeler, replikalar ve özel döküm parçaları", "Şeffaf veya renkli teşhir ürünleri ve içine obje alınmış detaylar", "Masif ahşap ve epoksili masa tablaları, mobilya dolguları ve kulplar", "Model detayları ve projeye özel döküm bileşenleri"],
        drivers: ["Reçine hacmi ve döküm kalınlığı", "Kalıp hazırlığı ve adet", "Şeffaflık, pigment, dolgu ve gömülecek parçalar", "Kürlenme planı, işleme ve polisaj"],
        limits: ["Döküm kalınlığı ve kürlenme süresi seçilen reçineye bağlıdır; büyük döküm aşamalar gerektirebilir.", "Kürlenme ısı açığa çıkarır. Reçine seçimi, döküm hacmi ve atölye sıcaklığı birlikte planlanır."],
        faqs: [
          { question: "Epoksi dökümü ile karbon fiber imalatı aynı mı?", answer: "Epoksi dökümünde reçinenin kendisini parça hâline getiririz. Karbon veya cam elyaf laminasyonunda reçine, takviye elyaflarını birbirine bağlar. Döküm, laminasyon veya infüzyon için o yönteme uygun formüle edilmiş reçine seçilir." },
          { question: "Epoksi detayın bulunduğu mobilyayı da komple yapıyor musunuz?", answer: "Evet. Epoksi dolgu, kulp veya masa tablasını tekil üretebilir; ahşap taşıyıcı, donanım ve son yüzeyle birlikte komple mobilyayı da tamamlayabiliriz. Sevkiyat ve montaj kapsamını projeyle birlikte belirleriz." }
        ]
      }
    }
  },
  {
    id: "tooling", slug: { en: "molds-patterns", tr: "kalip-model" }, portfolio: "/works/molds-composite-production",
    copy: {
      en: {
        title: "Molds, masters & patterns", summary: "The production route behind a repeatable shape.",
        intro: "A master defines the form; a mold reproduces it. We develop the split lines, release direction, flanges and support before choosing the tooling material.",
        costLabel: "Upfront tooling investment",
        cost: "Model and mold preparation are paid before the finished parts. Cost per part can fall with repetition, but the break-even quantity depends on the geometry and production route.",
        detail: "The master surface is carried into the mold and then the part. Tolerance, shrinkage, draft and parting lines must be planned together.",
        mechanical: "Tools are designed for demolding, handling, pressure or vacuum and the agreed cycle count. This is different from the strength requirement of the final part.",
        weight: "Tool stiffness, dimensional stability and handling usually matter more than minimizing weight alone.",
        environment: "Resin compatibility and actual cure temperature determine the tooling system. A room-temperature mold is not automatically suitable for heated curing.",
        volume: "A key route for repeated parts. A temporary prototype tool and a production tool have different life and cost expectations.",
        finish: "A sealed, prepared master and a specified mold surface. Polishing and visible split lines affect the final result.",
        steps: ["Review the model, tolerances, quantity and production resin.", "Produce and finish the master; build or machine the agreed mold.", "Prepare release surfaces and check the tool and first-part requirements."],
        uses: ["Molds for fiberglass and carbon parts", "Silicone molds for suitable casting systems", "CNC or printed masters and plugs"],
        drivers: ["Master development and geometry", "Number of mold sections", "Temperature and cycle requirements", "Surface finish and first-part checks"],
        limits: ["Tool life and dimensional tolerance need a project-specific agreement.", "A mold for carbon parts does not necessarily need to be made of carbon."],
        faqs: [{ question: "Can I order only the mold?", answer: "Yes. Specify the intended part material, process, temperature, dimensions and expected quantity so the tooling scope can be quoted separately from part production." }]
      },
      tr: {
        title: "Kalıp, ana model ve mastar", summary: "Aynı formu tekrar üretmek için hazırlık.",
        intro: "Ana model formu tanımlar; kalıp bu formu tekrar üretir. Kalıp malzemesini seçmeden önce ayrımları, çıkış yönünü, flanşları ve taşıyıcıları planlıyoruz.",
        costLabel: "Başlangıçta kalıp yatırımı",
        cost: "Model ve kalıp, ürünler çıkmadan önce maliyet oluşturur. Adet arttıkça parça başına pay azalabilir; kalıbın hangi adette avantajlı olduğu geometriye ve yönteme bağlıdır.",
        detail: "Ana modelin yüzeyi önce kalıba, sonra ürüne aktarılır. Tolerans, çekme, çıkış açısı ve kalıp izleri birlikte planlanır.",
        mechanical: "Kalıp; söküm, taşıma, basınç veya vakum ve belirlenen üretim çevrimleri için tasarlanır. Bu ihtiyaç, son ürünün dayanımından farklıdır.",
        weight: "Kalıpta yalnızca hafiflik değil, rijitlik, ölçü kararlılığı ve taşınabilirlik önemlidir.",
        environment: "Reçine uyumu ve gerçek kür sıcaklığı kalıp sistemini belirler. Oda sıcaklığı kalıbı kendiliğinden sıcak kürlemeye uygun olmaz.",
        volume: "Tekrarlı üretimin temel yollarından biridir. Geçici prototip kalıbı ile seri üretim kalıbının ömür ve maliyet beklentileri farklıdır.",
        finish: "Sızdırmaz ve hazırlanmış ana model ile tariflenmiş kalıp yüzeyi. Polisaj ve görünen kalıp ayrımları sonucu etkiler.",
        steps: ["Modeli, toleransları, adedi ve üretim reçinesini değerlendiririz.", "Ana modeli üretip bitirir; kararlaştırılan kalıbı çıkarır veya işleriz.", "Ayırıcı yüzeylerini hazırlayıp kalıp ve ilk parça kontrol kapsamını uygularız."],
        uses: ["Cam elyaf ve karbon parçalar için kalıplar", "Uygun döküm sistemlerine yönelik silikon kalıplar", "CNC veya 3D baskı ana modeller"],
        drivers: ["Ana model hazırlığı ve geometri", "Kalıp parça sayısı", "Sıcaklık ve üretim çevrimi", "Yüzey ve ilk parça kontrolleri"],
        limits: ["Kalıp ömrü ve ölçü toleransı proje için ayrıca belirlenir.", "Karbon parça üretilecek kalıbın kendisi mutlaka karbon olmak zorunda değildir."],
        faqs: [{ question: "Yalnızca kalıp sipariş edebilir miyim?", answer: "Evet. Üretilecek parçanın malzemesini, yöntemi, sıcaklığı, ölçüleri ve beklenen adedi belirtin; kalıp kapsamı parça üretiminden ayrı fiyatlandırılabilir." }]
      }
    }
  },
  {
    id: "wood", slug: { en: "wood-cnc", tr: "ahsap-cnc" }, portfolio: "/works/cnc-manufacturing-processes",
    copy: {
      en: {
        title: "Wood, CNC & furniture fabrication", summary: "Solid timber components, fitted cabinetry and complete furniture.",
        intro: "We produce custom components and complete fitted or freestanding furniture in solid wood, MDF and plywood. A solid timber cabinet door can be ordered individually or as part of a complete cabinet with carcass, shelves, drawers, hardware, finish and installation. Our production covers design development through delivery of the finished project.",
        costLabel: "Material and labor dependent",
        cost: "Simple panel parts can be economical. Solid timber, deep 3D machining, intricate joints and furniture-grade finishing can raise cost substantially.",
        detail: "Tool diameter, grain direction and access limit sharp internal corners and deep recesses. Assembly can provide geometry that a single machining setup cannot reach.",
        mechanical: "Board or timber grade, grain, thickness and joint design govern stiffness and strength. MDF, plywood and solid wood are not interchangeable structures.",
        weight: "Panel thickness and the assembly layout control weight. Hollow or ribbed construction can reduce material compared with a solid block.",
        environment: "Specify the board, adhesive, sealing and finish for humidity or exterior exposure. Standard interior MDF is not an exposed outdoor material.",
        volume: "Suitable for individual assemblies or repeat CNC-cut components. Fixtures and repeat cutting can reduce preparation per part.",
        finish: "Paint, veneer, clear finish or a specified texture; substrate and edge preparation affect the result.",
        steps: ["Develop dimensions, shop drawings, timber or board selection, joints and hardware.", "Machine the components, complete joinery and assemble the cabinet or furniture.", "Apply the finish, check fit and function, then pack, deliver and install within the agreed scope."],
        uses: ["Solid timber doors, CNC reliefs and shaped components", "Complete cabinets, wardrobes, storage walls and fitted furniture", "Freestanding tables, desks, sideboards and custom furniture", "Reception counters, retail displays and project-specific joinery", "Wood or MDF masters and patterns"],
        drivers: ["Timber or panel specification", "Machining depth and tool access", "Carcass, drawers, hardware and assembly", "Veneer, paint, edge finish, delivery and installation"],
        limits: ["Grain movement and moisture must be considered.", "Tool access can require splitting a deep or undercut form."],
        faqs: [
          { question: "Can you make the complete cabinet, including a solid timber door?", answer: "Yes. We can supply the individual door or develop and manufacture the complete cabinet, including the carcass, shelves, drawers, hinges, runners and finish. Drawings, delivery and installation are defined in the project scope; door and carcass materials can differ." },
          { question: "Can wood be combined with composites?", answer: "Yes. A panel or timber structure can support a separate decorative shell. Connections, movement and the different materials' exposure requirements are designed as an assembly." }
        ]
      },
      tr: {
        title: "Ahşap, CNC ve mobilya imalatı", summary: "Masif parçalardan sabit ve hareketli mobilyanın tamamına.",
        intro: "Masif ahşap, MDF ve kontrplakla özel parçalar, sabit ve hareketli mobilyalar üretiyoruz. Masif bir dolap kapağını tek başına veya gövde, raf, çekmece, donanım, yüzey işlemi ve montajıyla komple dolabın parçası olarak sipariş edebilirsiniz. Üretim hattımız projelendirmeden bitmiş projenin teslimine kadar uzanır.",
        costLabel: "Malzeme ve işçiliğe bağlı",
        cost: "Sade panel parçaları ekonomik olabilir. Masif türü, derin 3D işleme, karmaşık birleşimler ve mobilya kalitesinde yüzey maliyeti belirgin artırabilir.",
        detail: "Takım çapı, lif yönü ve erişim; keskin iç köşeleri ve derin oyukları sınırlar. Tek bağlamada işlenemeyen form, parçalara ayrılıp birleştirilebilir.",
        mechanical: "Plaka veya masif türü, lif, kalınlık ve birleşim tasarımı rijitlik ile dayanımı belirler. MDF, kontrplak ve masif birbirinin doğrudan yerine geçmez.",
        weight: "Plaka kalınlığı ve montaj düzeni ağırlığı belirler. İçi boş veya kaburgalı yapı, dolu bloğa göre malzemeyi azaltabilir.",
        environment: "Nem ve dış ortam için plaka, yapıştırıcı, yalıtım ve son kat seçilir. Standart iç mekân MDF'si açık dış ortam malzemesi değildir.",
        volume: "Tekil montajlar veya tekrarlı CNC parçaları için uygundur. Fikstür ve tekrarlı kesim, parça başına hazırlığı azaltabilir.",
        finish: "Boya, kaplama, vernik veya belirlenen doku; altyapı ve kenar hazırlığı sonucu etkiler.",
        steps: ["Ölçüleri, imalat çizimlerini, masif/plaka seçimini, birleşimleri ve donanımı planlarız.", "Parçaları işler, doğrama ve birleştirmeleri tamamlayıp dolap veya mobilyayı monte ederiz.", "Son yüzeyi, ölçü ve işlev kontrollerini tamamlar; belirlenen kapsamda paketleme, sevkiyat ve yerinde montajı yaparız."],
        uses: ["Masif kapaklar, CNC rölyefler ve şekilli parçalar", "Komple dolap, gardırop, depolama ve sabit mobilyalar", "Masa, sehpa, konsol ve özel tasarım hareketli mobilyalar", "Karşılama bankosu, mağaza teşhir ünitesi ve projeye özel doğrama", "Ahşap veya MDF ana modeller"],
        drivers: ["Masif veya plaka türü", "İşleme derinliği ve takım erişimi", "Gövde, çekmece, donanım ve birleştirme", "Kaplama, boya, kenar işçiliği, sevkiyat ve montaj"],
        limits: ["Ahşabın çalışması ve nem etkisi dikkate alınır.", "Derin veya ters açılı form, takım erişimi için bölünebilir."],
        faqs: [
          { question: "Masif kapakla birlikte dolabın tamamını yapıyor musunuz?", answer: "Evet. Tek kapak veya gövde, raf, çekmece, menteşe, ray ve son yüzeyiyle komple dolap üretebiliriz. Çizim, sevkiyat ve yerinde montaj proje kapsamında belirlenir; kapağın ve gövdenin malzemeleri ihtiyaca göre farklı seçilebilir." },
          { question: "Ahşap ile kompozit birlikte kullanılabilir mi?", answer: "Evet. Panel veya ahşap yapı ayrı bir dekor kabuğunu taşıyabilir. Bağlantılar, malzeme hareketleri ve ortam gereklilikleri bir bütün olarak tasarlanır." }
        ]
      }
    }
  }
];

export const getMethod = (id: string) => manufacturingMethods.find((method) => method.id === id);
export const getMethodBySlug = (slug: string, lang: Language) =>
  manufacturingMethods.find((method) => method.slug[lang] === slug);
export const methodPath = (method: ManufacturingMethod, lang: Language) =>
  `${lang === "tr" ? "/imalat" : "/manufacturing"}/${method.slug[lang]}`;
export const comparePath = (lang: Language) => lang === "tr" ? "/karsilastir" : "/compare";

export const comparisonFields = ["cost", "detail", "mechanical", "weight", "environment", "volume", "finish"] as const;
export const fieldNames: Record<Language, Record<typeof comparisonFields[number], string>> = {
  en: { cost: "Cost & setup", detail: "Detail & surface", mechanical: "Strength & stiffness", weight: "Weight", environment: "Use & exposure", volume: "One-off or repeated", finish: "Delivered finish" },
  tr: { cost: "Maliyet ve hazırlık", detail: "Detay ve yüzey", mechanical: "Dayanım ve rijitlik", weight: "Ağırlık", environment: "Kullanım ortamı", volume: "Tekil veya tekrarlı üretim", finish: "Teslim yüzeyi" }
};
