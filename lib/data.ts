// Mock data for TechNova Journal — Turkish technology publication.
// Frontend-only demo content. No backend.

export type Category = {
  slug: string
  name: string
  description: string
  image: string
}

export type Author = {
  slug: string
  name: string
  role: string
  bio: string
  avatarColor: string
  twitter: string
  linkedin: string
}

export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string
  categorySlug: string
  authorSlug: string
  date: string // ISO
  readingTime: number
  image: string
  tags: string[]
  featured?: boolean
  trending?: boolean
  review?: { score: number; verdict: string }
}

export const categories: Category[] = [
  {
    slug: 'teknoloji',
    name: 'Teknoloji',
    description:
      'Dünyayı şekillendiren en son teknoloji gelişmeleri, ürünler ve trendler.',
    image: '/images/industry.png',
  },
  {
    slug: 'yapay-zeka',
    name: 'Yapay Zeka',
    description:
      'Yapay zeka modelleri, araçları ve sektörü dönüştüren AI gelişmeleri.',
    image: '/images/ai-tools.png',
  },
  {
    slug: 'yazilim',
    name: 'Yazılım',
    description:
      'Programlama, web teknolojileri, açık kaynak ve bulut dünyasından haberler.',
    image: '/images/software.png',
  },
  {
    slug: 'donanim',
    name: 'Donanım',
    description:
      'İşlemciler, ekran kartları, monitörler ve dizüstü bilgisayarlar hakkında her şey.',
    image: '/images/gpu.png',
  },
  {
    slug: 'mobil',
    name: 'Mobil',
    description: 'Akıllı telefonlar, tabletler ve giyilebilir teknolojiler.',
    image: '/images/mobile.png',
  },
  {
    slug: 'oyun',
    name: 'Oyun',
    description: 'PC, konsol ve espor dünyasından oyun haberleri.',
    image: '/images/gaming.png',
  },
  {
    slug: 'siber-guvenlik',
    name: 'Siber Güvenlik',
    description:
      'Veri güvenliği, gizlilik, saldırılar ve dijital savunma stratejileri.',
    image: '/images/security.png',
  },
  {
    slug: 'incelemeler',
    name: 'İncelemeler',
    description: 'Bağımsız, derinlemesine ürün incelemeleri ve karşılaştırmalar.',
    image: '/images/laptop.png',
  },
  {
    slug: 'rehberler',
    name: 'Rehberler',
    description: 'Adım adım teknoloji rehberleri, ipuçları ve nasıl yapılır içerikleri.',
    image: '/images/cpu.png',
  },
  {
    slug: 'sektor',
    name: 'Sektör',
    description: 'Teknoloji şirketleri, yatırımlar ve ekonomi dünyasından analizler.',
    image: '/images/industry.png',
  },
]

export const authors: Author[] = [
  {
    slug: 'elif-yildirim',
    name: 'Elif Yıldırım',
    role: 'Baş Editör · Yapay Zeka',
    bio: 'On yılı aşkın süredir teknoloji gazeteciliği yapan Elif, yapay zeka ve makine öğrenmesi konularında uzmanlaşmıştır.',
    avatarColor: 'oklch(0.55 0.2 26)',
    twitter: '@elifyildirim',
    linkedin: 'elif-yildirim',
  },
  {
    slug: 'kerem-aksoy',
    name: 'Kerem Aksoy',
    role: 'Kıdemli Yazar · Donanım',
    bio: 'İşlemci ve ekran kartı mimarileri üzerine derinlemesine analizler yapan Kerem, donanım incelemelerinin baş ismi.',
    avatarColor: 'oklch(0.5 0.12 230)',
    twitter: '@keremaksoy',
    linkedin: 'kerem-aksoy',
  },
  {
    slug: 'zeynep-demir',
    name: 'Zeynep Demir',
    role: 'Editör · Yazılım',
    bio: 'Web teknolojileri ve açık kaynak ekosistemi üzerine yazan Zeynep, geliştirici topluluklarının yakın takipçisi.',
    avatarColor: 'oklch(0.6 0.13 160)',
    twitter: '@zeynepdemir',
    linkedin: 'zeynep-demir',
  },
  {
    slug: 'mert-can',
    name: 'Mert Can',
    role: 'Yazar · Mobil & Oyun',
    bio: 'Akıllı telefonlardan espor sahnesine kadar mobil ve oyun dünyasını kapsayan içerikler üretiyor.',
    avatarColor: 'oklch(0.58 0.16 50)',
    twitter: '@mertcan',
    linkedin: 'mert-can',
  },
  {
    slug: 'aylin-koc',
    name: 'Aylin Koç',
    role: 'Editör · Siber Güvenlik',
    bio: 'Veri gizliliği ve siber savunma alanında uzman Aylin, kurumsal güvenlik trendlerini analiz ediyor.',
    avatarColor: 'oklch(0.52 0.15 300)',
    twitter: '@aylinkoc',
    linkedin: 'aylin-koc',
  },
  {
    slug: 'burak-sahin',
    name: 'Burak Şahin',
    role: 'Analist · Sektör',
    bio: 'Teknoloji ekonomisi, girişimler ve yatırım dünyasını takip eden Burak, sektör analizleri kaleme alıyor.',
    avatarColor: 'oklch(0.45 0.05 65)',
    twitter: '@buraksahin',
    linkedin: 'burak-sahin',
  },
]

const imageByCategory: Record<string, string[]> = {
  teknoloji: ['/images/industry.png', '/images/cloud.png'],
  'yapay-zeka': ['/images/ai-tools.png', '/images/hero-ai.png'],
  yazilim: ['/images/software.png', '/images/cloud.png'],
  donanim: ['/images/gpu.png', '/images/cpu.png', '/images/monitor.png'],
  mobil: ['/images/mobile.png'],
  oyun: ['/images/gaming.png'],
  'siber-guvenlik': ['/images/security.png'],
  incelemeler: ['/images/laptop.png', '/images/monitor.png', '/images/mobile.png'],
  rehberler: ['/images/cpu.png', '/images/software.png'],
  sektor: ['/images/industry.png', '/images/cloud.png'],
}

type Seed = {
  title: string
  excerpt: string
  category: string
  author: string
  tags: string[]
  read: number
  review?: { score: number; verdict: string }
}

const seeds: Seed[] = [
  {
    title: 'Yeni Nesil Yapay Zeka Modeli Akıl Yürütmede Çığır Açıyor',
    excerpt:
      'Araştırmacılar, karmaşık matematik ve mantık problemlerinde insan seviyesine yaklaşan yeni bir dil modelini tanıttı.',
    category: 'yapay-zeka',
    author: 'elif-yildirim',
    tags: ['Yapay Zeka', 'LLM', 'Araştırma'],
    read: 7,
  },
  {
    title: 'Açık Kaynak Yapay Zeka Araçları Kurumsal Dünyada Yükselişte',
    excerpt:
      'Şirketler maliyet ve gizlilik avantajları nedeniyle açık kaynak yapay zeka modellerine giderek daha fazla yöneliyor.',
    category: 'yapay-zeka',
    author: 'elif-yildirim',
    tags: ['Yapay Zeka', 'Açık Kaynak', 'Kurumsal'],
    read: 6,
  },
  {
    title: 'Yapay Zeka Ajanları İş Akışlarını Nasıl Otomatikleştiriyor?',
    excerpt:
      'Otonom yapay zeka ajanları, tekrarlayan görevleri devralarak ekiplerin üretkenliğini katlıyor.',
    category: 'yapay-zeka',
    author: 'zeynep-demir',
    tags: ['Yapay Zeka', 'Otomasyon', 'Verimlilik'],
    read: 5,
  },
  {
    title: 'Görüntü Üreten Yapay Zekalar Yaratıcı Sektörü Dönüştürüyor',
    excerpt:
      'Tasarımcılar ve sanatçılar, üretken yapay zeka araçlarını günlük iş akışlarına entegre etmenin yollarını arıyor.',
    category: 'yapay-zeka',
    author: 'mert-can',
    tags: ['Yapay Zeka', 'Tasarım', 'Üretken AI'],
    read: 6,
  },
  {
    title: 'Yapay Zeka Düzenlemeleri: Avrupa Yeni Yasayı Yürürlüğe Koydu',
    excerpt:
      'Yeni düzenleme, yüksek riskli yapay zeka sistemleri için şeffaflık ve denetim zorunlulukları getiriyor.',
    category: 'yapay-zeka',
    author: 'burak-sahin',
    tags: ['Yapay Zeka', 'Regülasyon', 'Politika'],
    read: 8,
  },
  {
    title: 'Modern Web Geliştirmede Sunucu Bileşenleri Devrimi',
    excerpt:
      'React sunucu bileşenleri, performans ve geliştirici deneyimini yeniden tanımlayarak web mimarisini değiştiriyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['Web', 'React', 'Performans'],
    read: 9,
  },
  {
    title: 'TypeScript 6.0 ile Gelen Yenilikler Geliştiricileri Heyecanlandırdı',
    excerpt:
      'Yeni sürüm, daha hızlı derleme süreleri ve gelişmiş tip çıkarımı ile öne çıkıyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['TypeScript', 'Programlama', 'Araçlar'],
    read: 5,
  },
  {
    title: 'Rust, Sistem Programlamada Neden Standart Haline Geliyor?',
    excerpt:
      'Bellek güvenliği ve performansı bir araya getiren Rust, büyük teknoloji şirketlerinin gözdesi oldu.',
    category: 'yazilim',
    author: 'kerem-aksoy',
    tags: ['Rust', 'Programlama', 'Performans'],
    read: 7,
  },
  {
    title: 'Bulut Maliyetlerini Optimize Etmenin Akıllı Yolları',
    excerpt:
      'Artan bulut harcamaları karşısında şirketler FinOps yaklaşımıyla verimliliği artırıyor.',
    category: 'yazilim',
    author: 'burak-sahin',
    tags: ['Bulut', 'FinOps', 'Altyapı'],
    read: 6,
  },
  {
    title: 'Açık Kaynak Projeleri Sürdürülebilirlik Sorunuyla Karşı Karşıya',
    excerpt:
      'Kritik altyapı kütüphanelerinin bakımı, gönüllü geliştiricilerin omuzlarında ağır bir yük oluşturuyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['Açık Kaynak', 'Topluluk', 'Sürdürülebilirlik'],
    read: 8,
  },
  {
    title: 'Yeni Nesil İşlemciler 2 Nanometre Üretim Sürecine Geçiyor',
    excerpt:
      'Çip üreticileri, enerji verimliliği ve performansta büyük sıçrama vaat eden 2nm sürecini devreye alıyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['İşlemci', 'Üretim', 'Çip'],
    read: 7,
  },
  {
    title: 'Ekran Kartı Pazarında Rekabet Yeniden Kızışıyor',
    excerpt:
      'Yeni nesil GPU\u2019lar, oyun ve yapay zeka iş yükleri için çıtayı belirgin şekilde yükseltiyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['GPU', 'Ekran Kartı', 'Oyun'],
    read: 6,
  },
  {
    title: 'OLED Monitörler Profesyoneller İçin Yeni Standart mı?',
    excerpt:
      'Renk doğruluğu ve kontrast oranıyla OLED paneller, içerik üreticilerinin ilk tercihi olmaya başladı.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['Monitör', 'OLED', 'Ekran'],
    read: 5,
  },
  {
    title: 'Dizüstü Bilgisayarlarda ARM Mimarisinin Yükselişi',
    excerpt:
      'Enerji verimliliği ve sessiz çalışma ile ARM tabanlı dizüstüler pazarda hızla pay kazanıyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['Laptop', 'ARM', 'Pil Ömrü'],
    read: 6,
  },
  {
    title: 'Mekanik Klavyeden Özel Su Soğutmaya: Donanım Tutkunlarının Dünyası',
    excerpt:
      'Performansın ötesinde, kişiselleştirme kültürü donanım meraklıları arasında giderek büyüyor.',
    category: 'donanim',
    author: 'mert-can',
    tags: ['Periferi', 'Modlama', 'Soğutma'],
    read: 5,
  },
  {
    title: 'Yeni Amiral Gemisi Akıllı Telefon Kamerada Sınırları Zorluyor',
    excerpt:
      'Gelişmiş sensör ve yapay zeka destekli görüntü işleme, mobil fotoğrafçılıkta yeni bir dönem başlatıyor.',
    category: 'mobil',
    author: 'mert-can',
    tags: ['Akıllı Telefon', 'Kamera', 'Mobil'],
    read: 6,
  },
  {
    title: 'Katlanabilir Telefonlar Nihayet Olgunlaşıyor',
    excerpt:
      'Dayanıklılık ve fiyat sorunları azaldıkça katlanabilir cihazlar ana akıma yaklaşıyor.',
    category: 'mobil',
    author: 'mert-can',
    tags: ['Katlanabilir', 'Akıllı Telefon', 'Yenilik'],
    read: 5,
  },
  {
    title: 'Akıllı Saatler Sağlık Takibinde Tıbbi Cihazlara Rakip Oluyor',
    excerpt:
      'Yeni nesil sensörler, kalp ritmi ve kan oksijeni ölçümünde klinik doğruluğa yaklaşıyor.',
    category: 'mobil',
    author: 'elif-yildirim',
    tags: ['Giyilebilir', 'Sağlık', 'Akıllı Saat'],
    read: 6,
  },
  {
    title: 'Tabletler Dizüstü Bilgisayarların Yerini Alabilir mi?',
    excerpt:
      'Güçlü işlemciler ve gelişen yazılım ekosistemiyle tabletler üretkenlik cihazına dönüşüyor.',
    category: 'mobil',
    author: 'mert-can',
    tags: ['Tablet', 'Üretkenlik', 'Mobil'],
    read: 5,
  },
  {
    title: 'PC Oyunculuğu İçin Altın Çağ: Yeni Nesil Optimizasyonlar',
    excerpt:
      'Gelişmiş yükseltme teknolojileri, eski donanımlarda bile etkileyici performans sunuyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['PC Oyun', 'Performans', 'Grafik'],
    read: 6,
  },
  {
    title: 'Konsol Savaşları Yeni Bir Boyuta Taşınıyor',
    excerpt:
      'Bulut oyun ve abonelik modelleri, konsol rekabetinin kurallarını yeniden yazıyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['Konsol', 'Bulut Oyun', 'Abonelik'],
    read: 5,
  },
  {
    title: 'Espor Endüstrisi Milyar Dolarlık Bir Ekosisteme Dönüştü',
    excerpt:
      'Profesyonel turnuvalar, yayın gelirleri ve sponsorluklarla espor küresel bir güç haline geldi.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['Espor', 'Turnuva', 'Endüstri'],
    read: 7,
  },
  {
    title: 'Bağımsız Oyunlar Büyük Stüdyolara Meydan Okuyor',
    excerpt:
      'Yaratıcı özgürlük ve özgün hikayelerle indie oyunlar oyuncuların kalbini kazanıyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['Indie', 'Oyun Geliştirme', 'Tasarım'],
    read: 5,
  },
  {
    title: 'Fidye Yazılımı Saldırıları Kritik Altyapıları Hedef Alıyor',
    excerpt:
      'Enerji ve sağlık sektörleri, giderek karmaşıklaşan fidye yazılımı tehditleriyle mücadele ediyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['Fidye Yazılımı', 'Güvenlik', 'Altyapı'],
    read: 7,
  },
  {
    title: 'Sıfır Güven Mimarisi Kurumsal Güvenliğin Geleceği',
    excerpt:
      '\u201CHiçbir şeye güvenme, her şeyi doğrula\u201D ilkesi modern güvenlik stratejilerinin merkezine yerleşiyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['Zero Trust', 'Kurumsal', 'Güvenlik'],
    read: 8,
  },
  {
    title: 'Parolasız Kimlik Doğrulama Yaygınlaşıyor',
    excerpt:
      'Passkey teknolojisi, daha güvenli ve kullanıcı dostu bir giriş deneyimi vaat ediyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['Passkey', 'Kimlik', 'Güvenlik'],
    read: 5,
  },
  {
    title: 'Yapay Zeka Destekli Siber Saldırılar Yeni Tehdit',
    excerpt:
      'Saldırganlar yapay zekayı kullanarak daha ikna edici oltalama kampanyaları düzenliyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['Yapay Zeka', 'Oltalama', 'Tehdit'],
    read: 6,
  },
  {
    title: 'Premium Ultrabook İncelemesi: İnce, Güçlü ve Pahalı',
    excerpt:
      'En yeni amiral gemisi dizüstü bilgisayarı haftalarca test ettik. İşte detaylı değerlendirmemiz.',
    category: 'incelemeler',
    author: 'kerem-aksoy',
    tags: ['Laptop', 'İnceleme', 'Ultrabook'],
    read: 9,
    review: { score: 9.1, verdict: 'Mükemmel yapı kalitesi ve performans, ancak fiyatı yüksek.' },
  },
  {
    title: 'Yeni Amiral Gemisi Telefon İncelemesi: Beklentileri Karşılıyor mu?',
    excerpt:
      'Kamera, performans ve pil ömrünü mercek altına aldığımız kapsamlı inceleme.',
    category: 'incelemeler',
    author: 'mert-can',
    tags: ['Akıllı Telefon', 'İnceleme', 'Mobil'],
    read: 8,
    review: { score: 8.6, verdict: 'Etkileyici kamera ve ekran, pil ömrü ortalama.' },
  },
  {
    title: 'Oyuncu Monitörü İncelemesi: 240Hz Gerçekten Fark Yaratıyor mu?',
    excerpt:
      'Yüksek yenileme hızlı bu monitörü rekabetçi oyunlarda test ettik.',
    category: 'incelemeler',
    author: 'kerem-aksoy',
    tags: ['Monitör', 'İnceleme', 'Oyun'],
    read: 6,
    review: { score: 8.9, verdict: 'Rakipsiz akıcılık ve renk kalitesi, oyuncular için ideal.' },
  },
  {
    title: 'Kablosuz Kulaklık İncelemesi: Gürültü Engelleme Şampiyonu',
    excerpt:
      'Aktif gürültü engelleme ve ses kalitesini detaylıca değerlendirdik.',
    category: 'incelemeler',
    author: 'mert-can',
    tags: ['Kulaklık', 'İnceleme', 'Ses'],
    read: 5,
    review: { score: 8.3, verdict: 'Sınıfının en iyi gürültü engellemesi, konfor ortalama.' },
  },
  {
    title: 'Yeni Başlayanlar İçin Programlamaya Başlama Rehberi',
    excerpt:
      'Hangi dili seçmelisiniz, nereden başlamalısınız? Sıfırdan kodlamaya adım adım rehber.',
    category: 'rehberler',
    author: 'zeynep-demir',
    tags: ['Rehber', 'Programlama', 'Eğitim'],
    read: 10,
  },
  {
    title: 'Bilgisayarınızı Hızlandırmanın 10 Etkili Yolu',
    excerpt:
      'Donanım ve yazılım ipuçlarıyla sisteminizden en iyi performansı nasıl alırsınız?',
    category: 'rehberler',
    author: 'kerem-aksoy',
    tags: ['Rehber', 'Performans', 'İpuçları'],
    read: 6,
  },
  {
    title: 'Dijital Gizliliğinizi Korumanın Pratik Yöntemleri',
    excerpt:
      'Verilerinizi güvende tutmak için kullanabileceğiniz araçlar ve alışkanlıklar.',
    category: 'rehberler',
    author: 'aylin-koc',
    tags: ['Rehber', 'Gizlilik', 'Güvenlik'],
    read: 7,
  },
  {
    title: 'Evden Çalışma İçin İdeal Teknoloji Kurulumu',
    excerpt:
      'Üretkenliğinizi artıracak ergonomik ve verimli bir çalışma alanı nasıl oluşturulur?',
    category: 'rehberler',
    author: 'zeynep-demir',
    tags: ['Rehber', 'Üretkenlik', 'Kurulum'],
    read: 5,
  },
  {
    title: 'Teknoloji Devleri Rekor Çeyrek Sonuçları Açıkladı',
    excerpt:
      'Yapay zeka yatırımları, büyük teknoloji şirketlerinin gelirlerini yukarı taşımaya devam ediyor.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['Sektör', 'Finans', 'Büyüme'],
    read: 6,
  },
  {
    title: 'Girişim Yatırımları Yapay Zeka Alanına Akıyor',
    excerpt:
      'Risk sermayesi fonları, yapay zeka girişimlerine rekor seviyede yatırım yapıyor.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['Girişim', 'Yatırım', 'Yapay Zeka'],
    read: 7,
  },
  {
    title: 'Yarı İletken Tedarik Zinciri Yeniden Şekilleniyor',
    excerpt:
      'Jeopolitik gerilimler, ülkeleri yerli çip üretimine yatırım yapmaya itiyor.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['Çip', 'Tedarik Zinciri', 'Ekonomi'],
    read: 8,
  },
  {
    title: 'Uzaktan Çalışma Teknoloji İstihdamını Nasıl Değiştirdi?',
    excerpt:
      'Hibrit çalışma modelleri, teknoloji sektöründe yetenek savaşlarının dinamiklerini değiştiriyor.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['İstihdam', 'Uzaktan Çalışma', 'Sektör'],
    read: 6,
  },
  {
    title: 'Kuantum Bilişim Pratik Uygulamalara Yaklaşıyor',
    excerpt:
      'Araştırmacılar, kuantum bilgisayarların gerçek dünya problemlerini çözmedeki ilk adımlarını atıyor.',
    category: 'teknoloji',
    author: 'elif-yildirim',
    tags: ['Kuantum', 'Araştırma', 'Bilişim'],
    read: 9,
  },
  {
    title: 'Artırılmış Gerçeklik Gözlükleri Günlük Hayata Giriyor',
    excerpt:
      'Hafif ve şık AR gözlükleri, akıllı telefonun yerini almaya aday yeni bir platform sunuyor.',
    category: 'teknoloji',
    author: 'mert-can',
    tags: ['AR', 'Giyilebilir', 'Yenilik'],
    read: 6,
  },
  {
    title: 'Elektrikli Araçlarda Batarya Teknolojisi Sıçrama Yapıyor',
    excerpt:
      'Katı hal bataryalar, menzil ve şarj süresi konusunda devrim yaratmaya hazırlanıyor.',
    category: 'teknoloji',
    author: 'kerem-aksoy',
    tags: ['Elektrikli Araç', 'Batarya', 'Enerji'],
    read: 7,
  },
  {
    title: 'Uydu İnternet Kırsal Bağlantıyı Dönüştürüyor',
    excerpt:
      'Alçak yörünge uyduları, dünyanın en uzak bölgelerine yüksek hızlı internet getiriyor.',
    category: 'teknoloji',
    author: 'burak-sahin',
    tags: ['İnternet', 'Uydu', 'Bağlantı'],
    read: 6,
  },
  {
    title: 'Robotik Otomasyon Üretim Sektörünü Yeniden Tasarlıyor',
    excerpt:
      'Akıllı robotlar, fabrikalarda esneklik ve verimliliği aynı anda artırıyor.',
    category: 'teknoloji',
    author: 'elif-yildirim',
    tags: ['Robotik', 'Otomasyon', 'Üretim'],
    read: 7,
  },
  {
    title: 'Veri Merkezlerinde Enerji Verimliliği Yarışı',
    excerpt:
      'Artan yapay zeka iş yükleri, veri merkezlerini sürdürülebilir enerji çözümlerine yöneltiyor.',
    category: 'teknoloji',
    author: 'burak-sahin',
    tags: ['Veri Merkezi', 'Enerji', 'Sürdürülebilirlik'],
    read: 6,
  },
  {
    title: 'Geliştirici Araçlarında Yapay Zeka Asistanları Standart Oldu',
    excerpt:
      'Kod tamamlama ve hata ayıklamada yapay zeka, yazılım geliştirmenin ayrılmaz parçası haline geldi.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['Yapay Zeka', 'Geliştirici', 'Araçlar'],
    read: 5,
  },
  {
    title: 'WebAssembly Tarayıcıda Yüksek Performansın Anahtarı',
    excerpt:
      'WASM, web uygulamalarını masaüstü performansına yaklaştıran teknolojiyle dikkat çekiyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['WebAssembly', 'Performans', 'Web'],
    read: 6,
  },
  {
    title: 'Mobil Oyun Pazarı Konsolları Geride Bıraktı',
    excerpt:
      'Küresel oyun gelirlerinin büyük kısmı artık mobil platformlardan geliyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['Mobil Oyun', 'Pazar', 'Gelir'],
    read: 5,
  },
  {
    title: 'Yapay Zeka Çiplerinde Yeni Mimari Yarışı Başladı',
    excerpt:
      'Özel yapay zeka işlemcileri, eğitim ve çıkarım maliyetlerini düşürmek için yeniden tasarlanıyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['Yapay Zeka', 'Çip', 'Donanım'],
    read: 7,
  },
  {
    title: 'Akıllı Ev Cihazları Arasında Birlikte Çalışabilirlik Dönemi',
    excerpt:
      'Yeni ortak standart, farklı markaların akıllı ev cihazlarının sorunsuz çalışmasını sağlıyor.',
    category: 'teknoloji',
    author: 'mert-can',
    tags: ['Akıllı Ev', 'IoT', 'Standart'],
    read: 5,
  },
  {
    title: 'Büyük Dil Modelleri Cihaz Üzerinde Çalışmaya Başladı',
    excerpt:
      'Optimize edilmiş modeller, internet bağlantısı olmadan telefonlarda çalışabiliyor.',
    category: 'yapay-zeka',
    author: 'elif-yildirim',
    tags: ['Yapay Zeka', 'Mobil', 'Edge AI'],
    read: 6,
  },
  {
    title: 'Açık Kaynak Veritabanları Kurumsal Pazarda Pay Kazanıyor',
    excerpt:
      'Esneklik ve maliyet avantajıyla açık kaynak veritabanları büyük şirketlerin tercihi oluyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['Veritabanı', 'Açık Kaynak', 'Kurumsal'],
    read: 6,
  },
  {
    title: 'Bulut Tabanlı Oyun Servisleri Donanım İhtiyacını Azaltıyor',
    excerpt:
      'Güçlü sunucular sayesinde oyuncular pahalı donanıma gerek kalmadan yüksek kaliteli oyun oynayabiliyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['Bulut Oyun', 'Servis', 'Donanım'],
    read: 5,
  },
]

function daysAgoISO(days: number): string {
  const d = new Date('2026-06-22T09:00:00')
  d.setDate(d.getDate() - days)
  d.setHours(9 + (days % 8), (days * 7) % 60, 0, 0)
  return d.toISOString()
}

function slugify(input: string): string {
  const map: Record<string, string> = {
    ç: 'c',
    ğ: 'g',
    ı: 'i',
    İ: 'i',
    ö: 'o',
    ş: 's',
    ü: 'u',
    Ç: 'c',
    Ğ: 'g',
    Ö: 'o',
    Ş: 's',
    Ü: 'u',
  }
  return input
    .split('')
    .map((c) => map[c] ?? c)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 70)
}

export const articles: Article[] = seeds.map((s, i) => {
  const imgs = imageByCategory[s.category] ?? ['/images/industry.png']
  return {
    id: `art-${i + 1}`,
    slug: `${slugify(s.title)}-${i + 1}`,
    title: s.title,
    excerpt: s.excerpt,
    categorySlug: s.category,
    authorSlug: s.author,
    date: daysAgoISO(i),
    readingTime: s.read,
    image: imgs[i % imgs.length],
    tags: s.tags,
    featured: i < 6,
    trending: [0, 5, 10, 23, 27, 39].includes(i),
    review: s.review,
  }
})

// ---- Helpers ----

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function articlesByCategory(slug: string): Article[] {
  return articles.filter((a) => a.categorySlug === slug)
}

export function articlesByAuthor(slug: string): Article[] {
  return articles.filter((a) => a.authorSlug === slug)
}

export function relatedArticles(article: Article, count = 3): Article[] {
  return articles
    .filter((a) => a.id !== article.id && a.categorySlug === article.categorySlug)
    .slice(0, count)
}

export function authorArticleCount(slug: string): number {
  return articlesByAuthor(slug).length + (slug.charCodeAt(2) % 40) + 18
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)),
  )
}

export const trendingTopics: string[] = [
  'Yapay Zeka Modelleri',
  '2nm İşlemciler',
  'Katlanabilir Telefonlar',
  'Kuantum Bilişim',
  'Siber Güvenlik',
  'Açık Kaynak',
  'OLED Monitörler',
  'Bulut Oyun',
  'Elektrikli Araçlar',
  'Espor',
]

export function formatDate(iso: string): string {
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
  ]
  const d = new Date(iso)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

export function timeAgo(iso: string): string {
  const now = new Date('2026-06-22T18:00:00').getTime()
  const then = new Date(iso).getTime()
  const diffH = Math.round((now - then) / 36e5)
  if (diffH < 1) return 'az önce'
  if (diffH < 24) return `${diffH} saat önce`
  const days = Math.round(diffH / 24)
  if (days < 7) return `${days} gün önce`
  const weeks = Math.round(days / 7)
  return `${weeks} hafta önce`
}

// ---- Article body (shared rich content for detail page) ----

export function articleBody(article: Article): { toc: string[]; html: string } {
  const cat = getCategory(article.categorySlug)?.name ?? 'Teknoloji'
  const toc = ['Genel Bakış', 'Neden Önemli', 'Detaylar', 'Sektöre Etkisi', 'Sonuç']
  const html = `
<p>${article.excerpt} ${cat} dünyasında son dönemde yaşanan gelişmeler, hem tüketicilerin hem de profesyonellerin gündemini belirlemeye devam ediyor. Bu yazıda konuyu tüm yönleriyle ele alıyor, uzman görüşlerini ve sektörel etkilerini değerlendiriyoruz.</p>
<h2>Genel Bakış</h2>
<p>Teknoloji ekosisteminde yaşanan dönüşüm, beraberinde yeni fırsatlar ve zorluklar getiriyor. Önümüzdeki dönemde bu alanda atılacak adımlar, yalnızca büyük şirketleri değil, son kullanıcıyı da doğrudan etkileyecek. Uzmanlar, gelişmelerin uzun vadeli sonuçlarına dikkat çekiyor.</p>
<h2>Neden Önemli</h2>
<p>Söz konusu gelişmeler, sektörün geleceğine dair önemli ipuçları barındırıyor. Rekabetin giderek arttığı bu alanda, yenilikçi yaklaşımlar fark yaratmaya devam ediyor. İşte öne çıkan başlıklar:</p>
<ul>
<li>Performans ve verimlilikte gözle görülür iyileştirmeler</li>
<li>Maliyet avantajları ve erişilebilirliğin artması</li>
<li>Yeni kullanım senaryolarının ortaya çıkması</li>
<li>Sürdürülebilirlik odaklı çözümlerin yaygınlaşması</li>
</ul>
<h3>Detaylar</h3>
<p>Teknik açıdan bakıldığında, sunulan yenilikler önceki nesle kıyasla belirgin bir sıçramayı temsil ediyor. Erken testler ve saha deneyimleri, vaat edilen iyileştirmelerin büyük ölçüde karşılandığını gösteriyor. Bununla birlikte, bazı senaryolarda hâlâ optimize edilmesi gereken noktalar bulunuyor.</p>
<h2>Sektöre Etkisi</h2>
<p>Bu gelişmelerin sektör genelinde domino etkisi yaratması bekleniyor. Şirketler, stratejilerini yeni gerçeklere göre güncellerken, kullanıcılar da değişen ihtiyaçlarına uygun çözümler arıyor. Analistler, önümüzdeki çeyrekte bu alanda daha fazla hareketlilik öngörüyor.</p>
<h2>Sonuç</h2>
<p>Sonuç olarak, ${cat.toLowerCase()} alanındaki bu gelişmeler, teknolojinin nasıl evrildiğine dair güçlü bir örnek sunuyor. TechNova Journal olarak, konuyu yakından takip etmeye ve okuyucularımıza en güncel analizleri ulaştırmaya devam edeceğiz.</p>
`
  return { toc, html }
}

export const pullQuote =
  'Teknolojinin gerçek gücü, onu kullanan insanların hayatını ne kadar kolaylaştırdığında gizlidir.'

// ---- Videos ----

export type Video = {
  id: string
  title: string
  duration: string
  views: string
  category: string
  image: string
  author: string
}

export const videos: Video[] = [
  { id: 'v1', title: 'Yeni Amiral Gemisi Telefon: 48 Saatlik İlk İzlenimler', duration: '14:32', views: '248B', category: 'Mobil', image: '/images/mobile.png', author: 'Mert Can' },
  { id: 'v2', title: 'En Güçlü Ekran Kartını Test Ettik', duration: '22:10', views: '512B', category: 'Donanım', image: '/images/gpu.png', author: 'Kerem Aksoy' },
  { id: 'v3', title: 'Yapay Zeka ile Kod Yazmak: Gerçek mi Hype mı?', duration: '18:45', views: '189B', category: 'Yazılım', image: '/images/software.png', author: 'Zeynep Demir' },
  { id: 'v4', title: 'Ultrabook İncelemesi: Bu Para Buna Değer mi?', duration: '16:08', views: '321B', category: 'İnceleme', image: '/images/laptop.png', author: 'Kerem Aksoy' },
  { id: 'v5', title: 'Siber Güvenlik 101: Kendinizi Nasıl Korursunuz?', duration: '12:55', views: '156B', category: 'Güvenlik', image: '/images/security.png', author: 'Aylin Koç' },
  { id: 'v6', title: 'Yeni Nesil İşlemci Mimarisi Açıklandı', duration: '20:30', views: '278B', category: 'Donanım', image: '/images/cpu.png', author: 'Kerem Aksoy' },
  { id: 'v7', title: 'Espor Sahnesinin Perde Arkası', duration: '25:14', views: '402B', category: 'Oyun', image: '/images/gaming.png', author: 'Mert Can' },
  { id: 'v8', title: 'Bulut Teknolojileri Basit Anlatım', duration: '11:20', views: '134B', category: 'Yazılım', image: '/images/cloud.png', author: 'Zeynep Demir' },
  { id: 'v9', title: 'OLED Monitör Karşılaştırması', duration: '17:42', views: '198B', category: 'Donanım', image: '/images/monitor.png', author: 'Kerem Aksoy' },
]

// ---- Forum ----

export type ForumThread = {
  id: string
  title: string
  category: string
  author: string
  badge: string
  replies: number
  views: string
  lastActivity: string
  pinned?: boolean
}

export const forumCategories = [
  { name: 'Genel Teknoloji', threads: 1284, color: 'oklch(0.55 0.2 26)' },
  { name: 'Donanım & Toplama PC', threads: 982, color: 'oklch(0.5 0.12 230)' },
  { name: 'Yazılım & Programlama', threads: 1567, color: 'oklch(0.6 0.13 160)' },
  { name: 'Mobil Cihazlar', threads: 743, color: 'oklch(0.58 0.16 50)' },
  { name: 'Oyun & Espor', threads: 1129, color: 'oklch(0.52 0.15 300)' },
  { name: 'Yapay Zeka', threads: 658, color: 'oklch(0.45 0.05 65)' },
]

export const forumThreads: ForumThread[] = [
  { id: 't1', title: 'Yeni nesil ekran kartı almaya değer mi yoksa beklemeli mi?', category: 'Donanım', author: 'tekno_meraklisi', badge: 'Kıdemli Üye', replies: 142, views: '8.2B', lastActivity: '12 dk önce', pinned: true },
  { id: 't2', title: 'Yapay zeka ile kodlama deneyimlerinizi paylaşır mısınız?', category: 'Yazılım', author: 'kod_ustasi', badge: 'Moderatör', replies: 98, views: '5.4B', lastActivity: '34 dk önce' },
  { id: 't3', title: 'En iyi bütçe dostu mekanik klavye önerileri', category: 'Donanım', author: 'klavye_tutkunu', badge: 'Üye', replies: 67, views: '3.1B', lastActivity: '1 saat önce' },
  { id: 't4', title: 'Hangi Linux dağıtımı yeni başlayanlar için ideal?', category: 'Yazılım', author: 'linux_yolcusu', badge: 'Kıdemli Üye', replies: 211, views: '14.7B', lastActivity: '2 saat önce', pinned: true },
  { id: 't5', title: 'Amiral gemisi telefonların kamera karşılaştırması', category: 'Mobil', author: 'foto_avcisi', badge: 'Uzman', replies: 156, views: '9.8B', lastActivity: '3 saat önce' },
  { id: 't6', title: 'Espor kariyerine nasıl başlanır? Tavsiye arıyorum', category: 'Oyun', author: 'rekabetci_oyuncu', badge: 'Üye', replies: 45, views: '2.3B', lastActivity: '5 saat önce' },
  { id: 't7', title: 'Ev için NAS kurulumu: deneyimlerinizi merak ediyorum', category: 'Donanım', author: 'veri_koruyucu', badge: 'Kıdemli Üye', replies: 78, views: '4.6B', lastActivity: '6 saat önce' },
  { id: 't8', title: 'Yerel olarak çalışan dil modelleri gerçekten kullanışlı mı?', category: 'Yapay Zeka', author: 'ai_arastirmaci', badge: 'Uzman', replies: 123, views: '7.1B', lastActivity: '8 saat önce' },
]

export const forumStats = [
  { label: 'Toplam Konu', value: '6.363' },
  { label: 'Toplam Mesaj', value: '184.527' },
  { label: 'Aktif Üye', value: '42.918' },
  { label: 'Çevrimiçi', value: '1.247' },
]

export const comments = [
  { author: 'Ahmet Yılmaz', time: '2 saat önce', text: 'Çok kapsamlı bir analiz olmuş, teşekkürler. Özellikle sektöre etkisi bölümü oldukça aydınlatıcıydı.', likes: 24 },
  { author: 'Selin Aydın', time: '4 saat önce', text: 'Bu konuda farklı bir bakış açısı bekliyordum ama yazı gerçekten dengeli yazılmış. Devamını merakla bekliyorum.', likes: 18 },
  { author: 'Murat Demir', time: '6 saat önce', text: 'Teknik detaylar biraz daha derinleştirilebilirdi ama genel olarak başarılı bir içerik.', likes: 9 },
]
