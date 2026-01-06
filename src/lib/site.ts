export const site = {
  name: "Yunus Emre KIRBAYIR",
  role: "Full‑Stack Developer",
  location: "Türkiye",
  email: "emrekirbayir@gmail.com",
  phone: "+90 539 573 46 36",
  links: {
    linkedin: "https://www.linkedin.com/in/emrekrbyr/",
    github: "https://github.com/emrekrbyrr",
  },
  seo: {
    title: "Yunus Emre KIRBAYIR | Full‑Stack Developer",
    description:
      "Elektronik ve Haberleşme Mühendisliği temeliyle donanım + yazılım sinerjisini birleştiren Full‑Stack Geliştirici. React.js, Node.js, PostgreSQL, AWS, Docker ve Linux.",
  },
  hero: {
    headline: "Donanım disiplinini modern yazılımla birleştiriyorum.",
    subheadline:
      "Mühendislik kökenli bakış açımla, karmaşık iş akışlarını analiz ederek bunları yüksek performanslı dijital çözümlere dönüştürüyorum. Donanım ve yazılım dünyasının farklı dinamiklerine olan hakimiyetim, her projeye daha geniş bir pencereden ve sonuç odaklı bir vizyonla bakmamı sağlıyor.",
  },
  about: {
    title: "Hakkımda",
    paragraphs: [
      "Kocaeli Üniversitesi Elektronik ve Haberleşme Mühendisi mezunu olarak akademik ve profesyonel hayatım boyunca donanım ve yazılımın sinerjisine odaklandım.",
      "Lisans eğitimim sırasında Elektromanyetik Uyumluluk (EMC) alanına yoğunlaşarak mikrodalga fırın camlarında uzay girişiminin önlenmesi, Faraday kafesi prensibiyle iletken duvar projeleri ve otonom araç sensörlerinin elektromanyetik paketlemesi gibi kritik mühendislik çalışmaları yürüttüm.",
      "Mühendislikteki bu teknik derinliğimi, modern yazılım dünyasına taşıyarak Full‑Stack Geliştirici kimliğimle React.js, Node.js ve PostgreSQL teknolojilerinde uzmanlaştım.",
      "Halihazırda bulut sistemleri (AWS), Docker ve Linux sunucu yönetimi gibi alanlarda projeler geliştirirken, elektromanyetik teori disiplini ile yazılımın esnekliğini birleştirerek karmaşık problemlere yenilikçi çözümler üretmeye devam ediyorum.",
      "Sadece kod yazmaya değil; UI/UX tasarım süreçlerinden SEO stratejilerine ve yapay zeka istem mühendisliğine (Prompt Engineering) kadar dijital dünyanın farklı alanlarına ilgi duyuyor, kendimi sürekli geliştiriyorum.",
      "Karmaşık sistemleri daha verimli hale getirmek ve teknolojiyle katma değer yaratmak en büyük motivasyonumdur.",
    ],
  },
  focus: {
    title: "Odak Alanlarım",
    items: [
      {
        title: "Full‑Stack Uygulamalar",
        description:
          "React.js ile modern arayüzler, Node.js ile API’ler ve PostgreSQL ile sağlam veri katmanları.",
      },
      {
        title: "Bulut & DevOps",
        description:
          "AWS servisleri, Docker konteyner mimarileri ve Linux sunucu yönetimiyle üretim odaklı kurulumlar.",
      },
      {
        title: "EMC / Elektromanyetik Disiplin",
        description:
          "Elektromanyetik uyumluluk odaklı mühendislik yaklaşımını yazılım projelerine sistematik düşünce olarak taşıyorum.",
      },
      {
        title: "UI/UX & SEO & Prompt Engineering",
        description:
          "Kullanıcı deneyimi, arama görünürlüğü ve yapay zeka ile verimli iş akışları.",
      },
    ],
  },
  projects: {
    title: "Projeler",
    items: [
      {
        title: "Varlık ve Kiralama Yönetim Sistemi",
        description:
          "Şirketlerin ürün kiralama süreçlerini teklif aşamasından başlayarak sözleşme, ödeme ve cari takibiyle birlikte tek merkezden yönetmesini sağlar. Operasyonel yükü azaltırken, finansal akışın hatasız ve şeffaf şekilde izlenmesine olanak tanır.",
        tags: ["React.js", "Node.js", "Bootstrap"],
        kind: "Software",
      },
      {
        title: "İtfaiye Bilgi Sistemi (Arayüz & Backend)",
        description:
          "İtfaiye operasyonlarını destekleyen bilgi sisteminde arayüz ve backend geliştirme çalışmaları.",
        tags: ["React.js", "Node.js"],
        kind: "Software",
      },
      {
        title: "Şirket Web Siteleri Kurulumu & SEO Çalışmaları",
        description:
          "Kurumsal web sitesi kurulumları ve SEO iyileştirme çalışmaları ile görünürlük ve performans odaklı teslimatlar.",
        tags: ["SEO", "Kurulum", "Performans"],
        kind: "Software",
      },
      {
        title: "EMC Uyumlu Elektrikli Araç Sensör Dizilimi",
        description:
          "Elektrikli araçlarda sensör diziliminin elektromanyetik uyumluluk (EMC) prensipleriyle tasarlanması ve paketleme yaklaşımı.",
        tags: ["EMC", "Elektromanyetik Uyumluluk"],
        kind: "EMC",
      },
      {
        title: "Mikrodalga Fırın Bal Peteği Cam Tasarımı (EMC)",
        description:
          "Mikrodalga fırın bal peteği cam yapısında uzay girişiminin/kaçaklarının azaltılmasına yönelik EMC odaklı tasarım yaklaşımı.",
        tags: ["EMC", "Faraday Kafesi", "Tasarım"],
        kind: "EMC",
      },
    ],
  },
} as const;

