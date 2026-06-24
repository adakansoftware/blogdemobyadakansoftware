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
  specialties: string[]
}

export type Review = {
  score: number
  verdict: string
}

export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string
  categorySlug: string
  authorSlug: string
  date: string
  readingTime: number
  image: string
  tags: string[]
  featured?: boolean
  trending?: boolean
  editorsPick?: boolean
  weeklyHighlight?: boolean
  review?: Review
  commentCount: number
  views: number
}

export type Video = {
  id: string
  slug: string
  title: string
  excerpt: string
  duration: string
  views: string
  category: string
  image: string
  author: string
  publishedAt: string
}

export type ForumThread = {
  id: string
  slug?: string
  title: string
  category: string
  author: string
  badge: string
  replies: number
  views: string
  lastActivity: string
  lastReplyBy: string
  pinned?: boolean
  solved?: boolean
  needsAnswer?: boolean
  tags: string[]
}

export type Comment = {
  author: string
  time: string
  text: string
  likes: number
}

export type ForumMember = {
  name: string
  role: string
  posts: string
}

export type NavGroup = {
  label: string
  slug: string
  subcategories: string[]
}

export type TocItem = {
  label: string
  id: string
}

export const validSorts = ['latest', 'popular', 'commented'] as const
export type SortOption = (typeof validSorts)[number]

export const categories: Category[] = [
  {
    slug: 'teknoloji',
    name: 'Teknoloji',
    description:
      'Teknoloji dünyasının yönünü belirleyen ürünler, altyapılar ve trendler.',
    image: '/images/industry.png',
  },
  {
    slug: 'yapay-zeka',
    name: 'Yapay Zeka',
    description:
      'Modeller, araçlar, regülasyonlar ve gerçek kullanım senaryolarıyla yapay zeka gündemi.',
    image: '/images/ai-tools.png',
  },
  {
    slug: 'donanim',
    name: 'Donanım',
    description:
      'İşlemci, ekran kartı, monitör, laptop ve çevre birimleri tarafındaki son gelişmeler.',
    image: '/images/gpu.png',
  },
  {
    slug: 'yazilim',
    name: 'Yazılım',
    description:
      'Web geliştirme, açık kaynak, bulut ve geliştirici araçlarına odaklanan yazılım haberleri.',
    image: '/images/software.png',
  },
  {
    slug: 'mobil',
    name: 'Mobil',
    description:
      'Akıllı telefon, tablet ve giyilebilir teknoloji ekosistemindeki yenilikler.',
    image: '/images/mobile.png',
  },
  {
    slug: 'oyun',
    name: 'Oyun',
    description:
      'PC, konsol ve espor sahnesinden oyuncuların gündemini belirleyen gelişmeler.',
    image: '/images/gaming.png',
  },
  {
    slug: 'siber-guvenlik',
    name: 'Siber Güvenlik',
    description:
      'Gizlilik, savunma, siber tehditler ve kurumsal güvenlik stratejileri.',
    image: '/images/security.png',
  },
  {
    slug: 'incelemeler',
    name: 'İncelemeler',
    description:
      'Telefon, laptop, monitör ve aksesuarlar için derinlemesine ürün incelemeleri.',
    image: '/images/laptop.png',
  },
  {
    slug: 'rehberler',
    name: 'Rehberler',
    description:
      'Teknolojiyi daha iyi kullanmak için adım adım anlatımlar ve satın alma rehberleri.',
    image: '/images/cpu.png',
  },
  {
    slug: 'sektor',
    name: 'Sektör',
    description:
      'Teknoloji şirketleri, yatırımlar, pazar dinamikleri ve iş dünyası analizleri.',
    image: '/images/cloud.png',
  },
]

export const navigationGroups: NavGroup[] = [
  {
    label: 'Yapay Zeka',
    slug: 'yapay-zeka',
    subcategories: ['Haberler', 'Araçlar', 'Rehberler', 'Sektör'],
  },
  {
    label: 'Donanım',
    slug: 'donanim',
    subcategories: ['İşlemci', 'Ekran Kartı', 'Monitör', 'Laptop', 'Çevre Birimleri'],
  },
  {
    label: 'Yazılım',
    slug: 'yazilim',
    subcategories: ['Web Geliştirme', 'Açık Kaynak', 'Bulut', 'Geliştirici Araçları'],
  },
  {
    label: 'Mobil',
    slug: 'mobil',
    subcategories: ['Akıllı Telefon', 'Tablet', 'Giyilebilir Teknoloji'],
  },
  {
    label: 'Oyun',
    slug: 'oyun',
    subcategories: ['PC', 'Konsol', 'Espor'],
  },
]

export const authors: Author[] = [
  {
    slug: 'elif-yildirim',
    name: 'Elif Yıldırım',
    role: 'Baş Editör · Yapay Zeka',
    bio: 'Elif, yapay zeka ürünleri, model ekonomisi ve teknoloji regülasyonlarını takip ediyor.',
    avatarColor: 'oklch(0.55 0.2 26)',
    twitter: '@elifyildirim',
    linkedin: 'elif-yildirim',
    specialties: ['Yapay Zeka', 'Regülasyon', 'Ürün'],
  },
  {
    slug: 'kerem-aksoy',
    name: 'Kerem Aksoy',
    role: 'Kıdemli Yazar · Donanım',
    bio: 'Kerem; işlemci, ekran kartı ve laptop testlerinde derin teknik analizleriyle öne çıkıyor.',
    avatarColor: 'oklch(0.5 0.12 230)',
    twitter: '@keremaksoy',
    linkedin: 'kerem-aksoy',
    specialties: ['GPU', 'CPU', 'Laptop'],
  },
  {
    slug: 'zeynep-demir',
    name: 'Zeynep Demir',
    role: 'Editör · Yazılım',
    bio: 'Zeynep; açık kaynak, frontend mimarisi ve bulut araçları etrafında yazılar hazırlıyor.',
    avatarColor: 'oklch(0.6 0.13 160)',
    twitter: '@zeynepdemir',
    linkedin: 'zeynep-demir',
    specialties: ['Web', 'Açık Kaynak', 'Bulut'],
  },
  {
    slug: 'mert-can',
    name: 'Mert Can',
    role: 'Yazar · Mobil & Oyun',
    bio: 'Mert; mobil ekosistem, oyun kültürü ve oyuncu ekipmanları üzerine içerikler üretiyor.',
    avatarColor: 'oklch(0.58 0.16 50)',
    twitter: '@mertcan',
    linkedin: 'mert-can',
    specialties: ['Mobil', 'Oyun', 'Aksesuar'],
  },
  {
    slug: 'aylin-koc',
    name: 'Aylin Koç',
    role: 'Editör · Siber Güvenlik',
    bio: 'Aylin; veri gizliliği, sıfır güven mimarisi ve kimlik doğrulama teknolojilerine odaklanıyor.',
    avatarColor: 'oklch(0.52 0.15 300)',
    twitter: '@aylinkoc',
    linkedin: 'aylin-koc',
    specialties: ['Güvenlik', 'Gizlilik', 'Kurumsal BT'],
  },
  {
    slug: 'burak-sahin',
    name: 'Burak Şahin',
    role: 'Analist · Sektör',
    bio: 'Burak; yatırımlar, bulut ekonomisi ve teknoloji şirketlerinin büyüme stratejileri üzerine yazıyor.',
    avatarColor: 'oklch(0.45 0.05 65)',
    twitter: '@buraksahin',
    linkedin: 'burak-sahin',
    specialties: ['Sektör', 'Yatırım', 'Bulut'],
  },
]

const imageByCategory: Record<string, string[]> = {
  teknoloji: ['/images/industry.png', '/images/cloud.png', '/images/hero-ai.png'],
  'yapay-zeka': ['/images/ai-tools.png', '/images/hero-ai.png'],
  donanim: ['/images/gpu.png', '/images/cpu.png', '/images/monitor.png', '/images/laptop.png'],
  yazilim: ['/images/software.png', '/images/cloud.png'],
  mobil: ['/images/mobile.png', '/images/laptop.png'],
  oyun: ['/images/gaming.png', '/images/monitor.png'],
  'siber-guvenlik': ['/images/security.png', '/images/cloud.png'],
  incelemeler: ['/images/laptop.png', '/images/mobile.png', '/images/monitor.png'],
  rehberler: ['/images/software.png', '/images/cpu.png', '/images/mobile.png'],
  sektor: ['/images/industry.png', '/images/cloud.png'],
}

type Seed = {
  title: string
  excerpt: string
  category: string
  author: string
  tags: string[]
  read: number
  review?: Review
}

const seeds: Seed[] = [
  {
    title: 'Yeni nesil yapay zeka modeli akıl yürütme testlerinde dikkat çekti',
    excerpt:
      'Akademi ve endüstrinin ortak geliştirdiği model, çok adımlı problem çözmede önceki nesli geride bıraktı.',
    category: 'yapay-zeka',
    author: 'elif-yildirim',
    tags: ['LLM', 'Model', 'Araştırma'],
    read: 8,
  },
  {
    title: 'Kurumsal ekipler için en verimli yapay zeka araç setleri açıklandı',
    excerpt:
      'İş akışını hızlandıran üretken yapay zeka araçları, BT ekiplerinin satın alma planlarını yeniden şekillendiriyor.',
    category: 'yapay-zeka',
    author: 'elif-yildirim',
    tags: ['Araçlar', 'Kurumsal', 'Verimlilik'],
    read: 6,
  },
  {
    title: 'Yerelde çalışan büyük dil modelleri mobil tarafta yeni dönem başlatıyor',
    excerpt:
      'Cihaz üstünde çalışan optimize modeller, gizlilik ve gecikme avantajıyla telefon üreticilerinin odağına girdi.',
    category: 'yapay-zeka',
    author: 'mert-can',
    tags: ['Edge AI', 'Mobil', 'Gizlilik'],
    read: 7,
  },
  {
    title: 'Yapay zeka düzenlemeleri Avrupa pazarında ürün stratejilerini değiştiriyor',
    excerpt:
      'Üreticiler artık şeffaflık, risk sınıflandırması ve dokümantasyon tarafında daha sıkı kurallarla karşılaşıyor.',
    category: 'yapay-zeka',
    author: 'burak-sahin',
    tags: ['Regülasyon', 'AB', 'Politika'],
    read: 9,
  },
  {
    title: 'Yapay zeka ajanları ekip içi operasyonlarda gerçekten fark yaratıyor mu?',
    excerpt:
      'Pilot projeler, toplantı özetleme ve görev otomasyonunda ajan tabanlı sistemlerin verimli sonuçlar verdiğini gösteriyor.',
    category: 'yapay-zeka',
    author: 'zeynep-demir',
    tags: ['Ajanlar', 'Otomasyon', 'İş Akışı'],
    read: 5,
  },
  {
    title: 'Tasarım ekipleri üretken yapay zeka ile içerik üretim hızını ikiye katladı',
    excerpt:
      'Görsel üretim araçlarının yaratıcı süreçlere eklenmesi, ajans ve medya ekiplerinde yeni roller doğuruyor.',
    category: 'yapay-zeka',
    author: 'elif-yildirim',
    tags: ['Tasarım', 'Üretken AI', 'Medya'],
    read: 6,
  },
  {
    title: 'Açık kaynak yapay zeka ekosistemi kurumsal tarafta hız kesmeden büyüyor',
    excerpt:
      'Lisans esnekliği ve maliyet avantajı, şirketleri kapalı kutu modellere alternatif çözümlere yöneltiyor.',
    category: 'yapay-zeka',
    author: 'zeynep-demir',
    tags: ['Açık Kaynak', 'Kurumsal', 'Model'],
    read: 6,
  },
  {
    title: '2 nanometre işlemci yarışında üreticiler verimlilik kartını oynuyor',
    excerpt:
      'Yeni nesil üretim süreci, dizüstü bilgisayarlar ve veri merkezleri için ciddi watt başına performans artışı vadediyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['İşlemci', '2nm', 'Verimlilik'],
    read: 8,
  },
  {
    title: 'Yeni ekran kartı ailesi yapay zeka ve oyun performansını aynı anda yükseltiyor',
    excerpt:
      'Üreticiler, içerik üreticileri ve oyuncular için ortak mimari avantajları sunan hibrit çözümlere odaklanıyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['GPU', 'Oyun', 'Yapay Zeka'],
    read: 7,
  },
  {
    title: 'OLED monitörler profesyonel üretim stüdyolarında standart olmaya yaklaşıyor',
    excerpt:
      'Renk doğruluğu, tepki süresi ve HDR kalitesi; yeni nesil OLED panelleri öne çıkaran başlıca faktörler oldu.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['Monitör', 'OLED', 'HDR'],
    read: 5,
  },
  {
    title: 'ARM tabanlı laptop dalgası Windows ekosisteminde yeni bir sayfa açtı',
    excerpt:
      'Pil ömrü, sessizlik ve günlük kullanım akıcılığı, ARM mimarisini ana akım dizüstülerde daha görünür hale getiriyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['Laptop', 'ARM', 'Windows'],
    read: 6,
  },
  {
    title: 'Çevre birimlerinde premium segment neden yeniden yükselişte?',
    excerpt:
      'Mekanik klavyeler, yayıncı mikrofonları ve hassas oyuncu fareleri yeniden uzun vadeli yatırım ürünü olarak görülüyor.',
    category: 'donanim',
    author: 'mert-can',
    tags: ['Çevre Birimleri', 'Klavye', 'Oyuncu'],
    read: 5,
  },
  {
    title: 'Ev kullanıcıları için NAS kurulumları hiç olmadığı kadar erişilebilir',
    excerpt:
      'Daha düşük güç tüketen mini sunucular ve basit yazılımlar, ev içinde veri güvenliğini kolaylaştırıyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['NAS', 'Depolama', 'Ev Ofis'],
    read: 7,
  },
  {
    title: 'Oyuncu laptoplarında termal tasarım yarışı yeni bir seviyeye taşındı',
    excerpt:
      'Buhar odası soğutma ve yapay zeka destekli fan eğrileri, ince kasalarda sürdürülebilir performans sunuyor.',
    category: 'donanim',
    author: 'kerem-aksoy',
    tags: ['Oyuncu Laptopu', 'Soğutma', 'Performans'],
    read: 6,
  },
  {
    title: 'Modern frontend ekipleri sunucu bileşenlerini gerçek projelerde nasıl kullanıyor?',
    excerpt:
      'Sunucu tarafı veri erişimi ile daha hafif istemci paketleri, modern web mimarilerinde dengeli bir deneyim sunuyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['React', 'Frontend', 'Mimari'],
    read: 9,
  },
  {
    title: 'TypeScript ekosisteminde geliştirici deneyimini iyileştiren küçük ama etkili yenilikler',
    excerpt:
      'Yeni tanılama araçları ve tip iyileştirmeleri, büyük kod tabanlarında bakım maliyetini hissedilir biçimde düşürüyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['TypeScript', 'DX', 'Araçlar'],
    read: 6,
  },
  {
    title: 'Açık kaynak bakım krizi kritik altyapı projelerini zorluyor',
    excerpt:
      'Gönüllü bakım modeliyle ayakta duran popüler kütüphaneler, sürdürülebilir finansman arayışını hızlandırdı.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['Açık Kaynak', 'Topluluk', 'Bakım'],
    read: 7,
  },
  {
    title: 'Bulut maliyetlerini düşürmek için ürün ekipleri hangi hatalardan kaçınmalı?',
    excerpt:
      'Kaynak hakları, gözlemleme araçları ve FinOps kültürü; sürdürülebilir bulut bütçelerinin merkezinde yer alıyor.',
    category: 'yazilim',
    author: 'burak-sahin',
    tags: ['Bulut', 'FinOps', 'Maliyet'],
    read: 5,
  },
  {
    title: 'WebAssembly kurumsal web uygulamalarında performans kartını oynuyor',
    excerpt:
      'Tarayıcı içinde yüksek performanslı görevlerin çoğalması, WASM tabanlı araçların kullanım alanını genişletiyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['WASM', 'Performans', 'Web'],
    read: 6,
  },
  {
    title: 'Geliştirici araçlarında yapay zeka asistanları yeni standart haline geldi',
    excerpt:
      'Kod tamamlama, refactor önerileri ve hata açıklamaları, ekiplerin günlük geliştirme rutinini dönüştürüyor.',
    category: 'yazilim',
    author: 'zeynep-demir',
    tags: ['Copilot', 'Araçlar', 'Yapay Zeka'],
    read: 5,
  },
  {
    title: 'Açık kaynak veritabanları yüksek trafikli girişimlerde neden daha çok tercih ediliyor?',
    excerpt:
      'Topluluk desteği, geniş eklenti ekosistemi ve esnek lisans yapısı girişim ekiplerini açık çözümlere çekiyor.',
    category: 'yazilim',
    author: 'burak-sahin',
    tags: ['Veritabanı', 'Açık Kaynak', 'Girişim'],
    read: 6,
  },
  {
    title: 'Yeni amiral gemisi telefon kamera yarışında çıtayı yeniden yükseltti',
    excerpt:
      'Daha büyük sensör, daha iyi gece modu ve gelişmiş görüntü işleme; mobil fotoğrafçılıkta rekabeti sertleştiriyor.',
    category: 'mobil',
    author: 'mert-can',
    tags: ['Akıllı Telefon', 'Kamera', 'Fotoğraf'],
    read: 7,
  },
  {
    title: 'Katlanabilir telefonlar tasarım deneyinde değil, olgun ürün sınıfında',
    excerpt:
      'Daha dayanıklı menteşe sistemleri ve optimize edilmiş uygulamalar, katlanabilirleri ana akıma yaklaştırıyor.',
    category: 'mobil',
    author: 'mert-can',
    tags: ['Katlanabilir', 'Tasarım', 'Android'],
    read: 5,
  },
  {
    title: 'Tabletler üretkenlik aksesuarlarıyla dizüstü bilgisayarlara daha çok yaklaşıyor',
    excerpt:
      'Yeni klavye ve çoklu pencere çözümleri, hafif cihazlarla ciddi iş akışlarını mümkün hale getiriyor.',
    category: 'mobil',
    author: 'mert-can',
    tags: ['Tablet', 'Üretkenlik', 'Aksesuar'],
    read: 6,
  },
  {
    title: 'Akıllı saatlerde sağlık sensörleri tüketici elektroniğinin sınırlarını zorluyor',
    excerpt:
      'Yeni biyometrik ölçümler, sağlık takibi ve erken uyarı sistemleri açısından giyilebilir pazarı ileri taşıyor.',
    category: 'mobil',
    author: 'elif-yildirim',
    tags: ['Akıllı Saat', 'Sağlık', 'Giyilebilir'],
    read: 6,
  },
  {
    title: 'Mobil işlemcilerde enerji verimliliği artık ham güç kadar kritik',
    excerpt:
      'Uzun pil ömrü ve termal yönetim, kullanıcı deneyiminde sentetik benchmark sonuçlarının önüne geçmeye başladı.',
    category: 'mobil',
    author: 'kerem-aksoy',
    tags: ['Mobil İşlemci', 'Pil', 'Verimlilik'],
    read: 5,
  },
  {
    title: 'Premium orta segment telefonlar fiyat-performans dengesini yeniden tanımlıyor',
    excerpt:
      'Üreticiler, amiral gemisi özelliklerini daha ulaşılabilir fiyat bandına taşımakta hiç olmadığı kadar agresif.',
    category: 'mobil',
    author: 'mert-can',
    tags: ['Fiyat/Performans', 'Android', 'Tüketici'],
    read: 4,
  },
  {
    title: 'Giyilebilir teknoloji markaları halka açık ekosistemlerden neden vazgeçmiyor?',
    excerpt:
      'Saat, kulaklık ve sağlık hizmetlerinin bağlandığı ekosistem stratejisi markalar için büyük bir sadakat motoru yaratıyor.',
    category: 'mobil',
    author: 'burak-sahin',
    tags: ['Ekosistem', 'Giyilebilir', 'Pazar'],
    read: 5,
  },
  {
    title: 'PC oyunculuğunda yükseltme teknolojileri performans algısını tamamen değiştirdi',
    excerpt:
      'Çözünürlük yükseltme ve kare üretme teknolojileri, orta segment ekran kartlarına yeni bir ömür kazandırıyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['PC', 'Grafik', 'Performans'],
    read: 6,
  },
  {
    title: 'Konsol üreticileri abonelik modeliyle gelir yapısını yeniden kuruyor',
    excerpt:
      'Birinci parti içerik stratejisi, bulut oyun ve abonelik servisleriyle birlikte yepyeni bir rekabet dengesi oluşturuyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['Konsol', 'Abonelik', 'Bulut Oyun'],
    read: 5,
  },
  {
    title: 'Espor yayıncılığı bölgesel lig yatırımlarıyla büyümesini sürdürüyor',
    excerpt:
      'Yerel sponsorlar ve içerik platformları, espor sahnesinin ticari büyümesine önemli katkı sunuyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['Espor', 'Yayıncılık', 'Lig'],
    read: 6,
  },
  {
    title: 'Bağımsız stüdyolar yaratıcı risk alarak oyuncu kitlesini büyütüyor',
    excerpt:
      'Daha küçük ekipler, benzersiz hikaye ve mekaniklerle büyük yapımların bıraktığı boşlukları dolduruyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['Indie', 'Tasarım', 'Stüdyo'],
    read: 5,
  },
  {
    title: 'Bulut oyun servisleri düşük donanımlı cihazlar için yeniden umut oldu',
    excerpt:
      'Gecikme iyileştirmeleri ve geniş kataloglarla birlikte bulut oyun platformları daha ikna edici bir deneyim sunuyor.',
    category: 'oyun',
    author: 'burak-sahin',
    tags: ['Bulut Oyun', 'Servis', 'Platform'],
    read: 4,
  },
  {
    title: 'Taşınabilir oyun bilgisayarları PC ekosisteminin yeni gözdesi',
    excerpt:
      'El konsolu formundaki güçlü cihazlar, mobil oyun ile masaüstü kütüphanesi arasında ilginç bir köprü kuruyor.',
    category: 'oyun',
    author: 'mert-can',
    tags: ['El Konsolu', 'PC', 'Taşınabilir'],
    read: 7,
  },
  {
    title: 'Rekabetçi oyunlarda çevre birimi tercihi gerçekten sonuçları etkiliyor mu?',
    excerpt:
      'Mouse sensörü, klavye gecikmesi ve monitör yenileme hızı gibi bileşenler performansı belirgin şekilde etkileyebiliyor.',
    category: 'oyun',
    author: 'kerem-aksoy',
    tags: ['Oyuncu Donanımı', 'Espor', 'Monitör'],
    read: 5,
  },
  {
    title: 'Fidye yazılımı saldırıları orta ölçekli şirketler için daha yıkıcı hale geldi',
    excerpt:
      'Saldırı zincirleri artık yalnızca büyük kurumları değil, savunması zayıf ancak kritik veriye sahip KOBİ’leri de hedefliyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['Fidye Yazılımı', 'KOBİ', 'Tehdit'],
    read: 7,
  },
  {
    title: 'Passkey tabanlı giriş deneyimi uygulamalarda sessizce yaygınlaşıyor',
    excerpt:
      'Parolasız kimlik doğrulama, güvenliği artırırken kullanıcıların giriş sürtünmesini belirgin biçimde azaltıyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['Passkey', 'Kimlik', 'Uygulama'],
    read: 5,
  },
  {
    title: 'Sıfır güven mimarisi kurumların güvenlik yatırımında merkez rol üstleniyor',
    excerpt:
      'Ağ çevresine güvenmek yerine kimliği, cihazı ve davranışı doğrulayan modeller artık temel yaklaşım haline geliyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['Zero Trust', 'Kurumsal', 'BT'],
    read: 8,
  },
  {
    title: 'Yapay zeka destekli oltalama kampanyaları savunma ekiplerini zorluyor',
    excerpt:
      'Kişiselleştirilmiş ve dil açısından daha doğal sahte iletiler, güvenlik farkındalık eğitimlerini yeniden düşündürüyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['Oltalama', 'Yapay Zeka', 'E-posta'],
    read: 6,
  },
  {
    title: 'Şirketler veri ihlali sonrası iletişim planlarını neden güncelliyor?',
    excerpt:
      'Yalnızca teknik müdahale değil, kullanıcı güvenini koruyan şeffaf iletişim adımları da kriz yönetiminin kritik parçası oldu.',
    category: 'siber-guvenlik',
    author: 'burak-sahin',
    tags: ['Veri İhlali', 'İletişim', 'Kriz'],
    read: 5,
  },
  {
    title: 'Tedarik zinciri güvenliği yazılım ekiplerinin öncelik listesinde üst sıralara çıktı',
    excerpt:
      'Bağımlılık yönetimi ve imza doğrulama, özellikle açık kaynak temelli büyük projelerde kritik önem taşıyor.',
    category: 'siber-guvenlik',
    author: 'zeynep-demir',
    tags: ['Supply Chain', 'Açık Kaynak', 'Bağımlılık'],
    read: 7,
  },
  {
    title: 'Kurumsal VPN alışkanlıkları SASE yaklaşımıyla hızlı biçimde değişiyor',
    excerpt:
      'Dağıtık ekipler ve çok bulutlu altyapılar, ağ güvenliği tarafında daha esnek erişim katmanlarını zorunlu kılıyor.',
    category: 'siber-guvenlik',
    author: 'aylin-koc',
    tags: ['SASE', 'VPN', 'Ağ'],
    read: 6,
  },
  {
    title: 'Premium ultrabook incelemesi: sessiz çalışan ama ödün vermeyen iş makinesi',
    excerpt:
      'Yeni nesil ultrabook; ekran, pil ömrü ve klavye deneyimiyle profesyonel kullanıcılar için dengeli bir paket sunuyor.',
    category: 'incelemeler',
    author: 'kerem-aksoy',
    tags: ['Laptop', 'İnceleme', 'Ultrabook'],
    read: 10,
    review: {
      score: 9.2,
      verdict: 'Pil ömrü, ekran kalitesi ve taşınabilirlik çok güçlü; fiyatı ise premium seviyede.',
    },
  },
  {
    title: 'Amiral gemisi telefon incelemesi: kamera ve ekran tarafında çok iddialı',
    excerpt:
      'Yeni model; fotoğraf kalitesi, ekran parlaklığı ve uzun yazılım desteğiyle zirve segmentte güçlü bir seçenek.',
    category: 'incelemeler',
    author: 'mert-can',
    tags: ['Telefon', 'İnceleme', 'Kamera'],
    read: 9,
    review: {
      score: 8.8,
      verdict: 'Kamera ve ekran çok iyi, şarj süresi ise rakiplerinin biraz gerisinde kalıyor.',
    },
  },
  {
    title: '240Hz oyuncu monitörü incelemesi: rekabetçi oyuncular için güçlü aday',
    excerpt:
      'Düşük giriş gecikmesi ve temiz hareket netliği, bu monitörü hızlı tempolu oyunlar için dikkat çekici hale getiriyor.',
    category: 'incelemeler',
    author: 'kerem-aksoy',
    tags: ['Monitör', 'İnceleme', 'Oyuncu'],
    read: 7,
    review: {
      score: 8.9,
      verdict: 'Hız ve renk dengesi başarılı; HDR performansı ise sınırlı.',
    },
  },
  {
    title: 'Kablosuz kulaklık incelemesi: şehir içinde en iyi gürültü engelleme deneyimlerinden biri',
    excerpt:
      'Uzun pil ömrü ve temiz mikrofon performansı, bu modeli günlük kullanım için öne çıkarıyor.',
    category: 'incelemeler',
    author: 'mert-can',
    tags: ['Kulaklık', 'İnceleme', 'Ses'],
    read: 6,
    review: {
      score: 8.4,
      verdict: 'Gürültü engelleme çok etkileyici, konforu ise herkes için ideal olmayabilir.',
    },
  },
  {
    title: 'Mini masaüstü bilgisayar incelemesi: ofis ve ev için şaşırtıcı derecede güçlü',
    excerpt:
      'Kompakt tasarımına rağmen günlük üretkenlik işlerinde ve hafif içerik üretiminde tatmin edici performans sunuyor.',
    category: 'incelemeler',
    author: 'kerem-aksoy',
    tags: ['Mini PC', 'İnceleme', 'Ofis'],
    read: 5,
    review: {
      score: 8.1,
      verdict: 'Sessiz çalışması büyük artı; yükseltme seçenekleri sınırlı.',
    },
  },
  {
    title: 'Akıllı saat incelemesi: sağlık odaklı kullanıcılar için dengeli tercih',
    excerpt:
      'Yeni model; sensör doğruluğu, akıcı yazılımı ve hafif gövdesiyle günlük kullanımda güven veriyor.',
    category: 'incelemeler',
    author: 'mert-can',
    tags: ['Akıllı Saat', 'İnceleme', 'Sağlık'],
    read: 6,
    review: {
      score: 8.7,
      verdict: 'Sağlık takibi güçlü, uygulama mağazası tarafı biraz daha gelişebilir.',
    },
  },
  {
    title: 'Mekanik klavye incelemesi: yazı yazanlar ve oyuncular için ortak zemin',
    excerpt:
      'Sessiz switch seçeneği, sağlam gövde yapısı ve sade tasarımıyla çok yönlü kullanım sunuyor.',
    category: 'incelemeler',
    author: 'kerem-aksoy',
    tags: ['Klavye', 'İnceleme', 'Çevre Birimleri'],
    read: 5,
    review: {
      score: 8.5,
      verdict: 'Tuş hissi ve gövde kalitesi başarılı; kablosuz modda gecikme biraz yüksek.',
    },
  },
  {
    title: 'Programlamaya başlamak isteyenler için güncel yol haritası',
    excerpt:
      'Hangi dili seçeceğinizden proje pratiğine kadar, sıfırdan başlayanlar için sade ve uygulanabilir bir başlangıç planı hazırladık.',
    category: 'rehberler',
    author: 'zeynep-demir',
    tags: ['Programlama', 'Başlangıç', 'Eğitim'],
    read: 11,
  },
  {
    title: 'Yeni bilgisayar toplarken bütçeyi en verimli kullanmanın 7 yolu',
    excerpt:
      'İhtiyaç odaklı parça seçimi ve doğru yükseltme sırası, gereksiz harcamadan kaçınmanın en pratik yolu olabilir.',
    category: 'rehberler',
    author: 'kerem-aksoy',
    tags: ['PC Toplama', 'Satın Alma', 'Donanım'],
    read: 7,
  },
  {
    title: 'Dijital gizliliğinizi korumak için hemen uygulayabileceğiniz alışkanlıklar',
    excerpt:
      'Tarayıcı ayarlarından iki faktörlü kimlik doğrulamaya kadar günlük kullanımda büyük fark yaratan adımlar burada.',
    category: 'rehberler',
    author: 'aylin-koc',
    tags: ['Gizlilik', 'Güvenlik', 'Pratik'],
    read: 8,
  },
  {
    title: 'Evden çalışma düzeni için verimli masa kurulumu rehberi',
    excerpt:
      'Monitör yüksekliği, klavye yerleşimi, aydınlatma ve ses ekipmanlarıyla daha konforlu bir çalışma alanı oluşturabilirsiniz.',
    category: 'rehberler',
    author: 'zeynep-demir',
    tags: ['Ev Ofis', 'Ergonomi', 'Kurulum'],
    read: 6,
  },
  {
    title: 'Telefon satın alırken sadece teknik tabloya bakmak neden yetmiyor?',
    excerpt:
      'Kamera tutarlılığı, yazılım güncellemesi, servis kalitesi ve pil döngüsü gibi başlıklar karar anında kritik olabilir.',
    category: 'rehberler',
    author: 'mert-can',
    tags: ['Telefon', 'Satın Alma', 'Rehber'],
    read: 5,
  },
  {
    title: 'Yapay zeka araçlarını ekip içinde güvenli biçimde kullanmanın temel kuralları',
    excerpt:
      'Veri gizliliği, erişim kontrolü ve doğrulama süreçleri olmadan üretken araçlar beklenmedik riskler doğurabilir.',
    category: 'rehberler',
    author: 'aylin-koc',
    tags: ['Yapay Zeka', 'Kurumsal', 'Politika'],
    read: 7,
  },
  {
    title: 'Bulut hizmeti seçerken teknik ekiplerin sorması gereken kritik sorular',
    excerpt:
      'Faturalama modeli, bölgesel erişim, gözlemlenebilirlik ve satıcı bağımlılığı gibi başlıklar seçim aşamasında önem kazanıyor.',
    category: 'rehberler',
    author: 'burak-sahin',
    tags: ['Bulut', 'Planlama', 'Mimari'],
    read: 6,
  },
  {
    title: 'Teknoloji devlerinin yapay zeka harcamaları veri merkezi yarışını hızlandırdı',
    excerpt:
      'Yeni kampüs yatırımları ve hızlanan donanım siparişleri, önümüzdeki iki yılın rekabet dinamiklerini belirleyecek.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['Yatırım', 'Veri Merkezi', 'Yapay Zeka'],
    read: 7,
  },
  {
    title: 'Yarı iletken tedarik zinciri yeniden dengelenirken hangi bölgeler öne çıkıyor?',
    excerpt:
      'Jeopolitik gerilimler ve teşvik paketleri, üretimin coğrafi dağılımında kalıcı değişiklikler yaratıyor.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['Yarı İletken', 'Tedarik Zinciri', 'Ekonomi'],
    read: 8,
  },
  {
    title: 'Girişim yatırımlarında üretken yapay zeka heyecanı hâlâ güçlü',
    excerpt:
      'Yatırımcılar, dikey ürünlere ve gerçek problem çözen yapay zeka şirketlerine daha seçici ama iştahlı yaklaşıyor.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['Girişim', 'Yatırım', 'AI'],
    read: 6,
  },
  {
    title: 'Uzaktan ve hibrit çalışma teknoloji istihdamını sessizce yeniden biçimlendiriyor',
    excerpt:
      'Şirketler, yetenek havuzunu genişletirken ofis bütçelerini ve ekip ritüellerini aynı anda yeniden tasarlıyor.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['İstihdam', 'Hibrit', 'Şirket'],
    read: 5,
  },
  {
    title: 'Bulut servis sağlayıcıları fiyat savaşından çok platform bağımlılığına odaklanıyor',
    excerpt:
      'Müşteriyi ekosistemde tutmak artık yalnızca fiyat değil, araç derinliği ve entegrasyon gücüyle ilişkili.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['Bulut', 'Platform', 'Pazar'],
    read: 5,
  },
  {
    title: 'Abonelik ekonomisi tüketici elektroniğinde yeni büyüme motoru haline geldi',
    excerpt:
      'Donanımın yanına eklenen servis katmanı, markalar için daha öngörülebilir gelir akışı yaratıyor.',
    category: 'sektor',
    author: 'burak-sahin',
    tags: ['Abonelik', 'Tüketici Elektroniği', 'Gelir'],
    read: 4,
  },
  {
    title: 'Robotik otomasyon üretim hatlarında daha çevik süreçler yaratıyor',
    excerpt:
      'Yeni sensör katmanları ve görsel analiz sistemleri, fabrikalarda esnek üretimi daha erişilebilir kılıyor.',
    category: 'teknoloji',
    author: 'elif-yildirim',
    tags: ['Robotik', 'Üretim', 'Otomasyon'],
    read: 7,
  },
  {
    title: 'Kuantum bilişim pratik kullanım senaryolarına tahmin edilenden daha hızlı yaklaşıyor',
    excerpt:
      'Kimya, optimizasyon ve simülasyon alanlarındaki pilot çalışmalar, kurumsal ilginin hızla artmasına neden oluyor.',
    category: 'teknoloji',
    author: 'elif-yildirim',
    tags: ['Kuantum', 'Araştırma', 'Simülasyon'],
    read: 9,
  },
  {
    title: 'Akıllı ev standartlarının birleşmesi kullanıcı deneyimini sadeleştiriyor',
    excerpt:
      'Birlikte çalışabilirlik odaklı yeni protokoller, farklı markaların cihazlarını kurmayı ve yönetmeyi kolaylaştırıyor.',
    category: 'teknoloji',
    author: 'mert-can',
    tags: ['Akıllı Ev', 'IoT', 'Standart'],
    read: 5,
  },
  {
    title: 'Uydu internet ağları kırsal bağlantı haritasını yeniden çiziyor',
    excerpt:
      'Düşük yörüngeli ağlar, kapsama dışında kalan bölgelerde eğitimden tarıma kadar pek çok alanı etkileyebilir.',
    category: 'teknoloji',
    author: 'burak-sahin',
    tags: ['Uydu İnternet', 'Bağlantı', 'Altyapı'],
    read: 6,
  },
  {
    title: 'Veri merkezlerinde sürdürülebilirlik hedefleri donanım kararlarını doğrudan etkiliyor',
    excerpt:
      'Sıvı soğutma, enerji geri kazanımı ve verimli işlemciler artık yalnızca opsiyon değil, yatırım önceliği haline geldi.',
    category: 'teknoloji',
    author: 'kerem-aksoy',
    tags: ['Veri Merkezi', 'Enerji', 'Sürdürülebilirlik'],
    read: 6,
  },
  {
    title: 'Artırılmış gerçeklik gözlükleri gündelik kullanım için daha ikna edici hale geliyor',
    excerpt:
      'Daha hafif tasarımlar, daha net ekranlar ve uygulama desteği; AR ürünlerini kademeli biçimde güçlendiriyor.',
    category: 'teknoloji',
    author: 'mert-can',
    tags: ['AR', 'Giyilebilir', 'Ekran'],
    read: 6,
  },
  {
    title: 'Elektrikli araç bataryalarında yeni kimyalar maliyet baskısını hafifletiyor',
    excerpt:
      'Daha düşük kobalt kullanımı ve hızlı şarj odaklı çözümler, otomotiv tarafındaki teknoloji rekabetini kızıştırıyor.',
    category: 'teknoloji',
    author: 'kerem-aksoy',
    tags: ['Batarya', 'Elektrikli Araç', 'Enerji'],
    read: 7,
  },
]

/**
 * Intentionally hardcoded to keep demo content dates stable across environments and reruns.
 */
function daysAgoISO(days: number): string {
  const d = new Date('2026-06-22T10:00:00')
  d.setDate(d.getDate() - days)
  d.setHours(9 + (days % 9), (days * 11) % 60, 0, 0)
  return d.toISOString()
}

export function slugify(input: string): string {
  return input
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80)
}

export const articles: Article[] = seeds.map((seed, index) => {
  const categoryImages = imageByCategory[seed.category] ?? ['/images/industry.png']
  const views = 4200 + (index % 9) * 1350 + (60 - index) * 310
  const commentCount = 6 + (index % 7) * 5 + (index % 3) * 2
  return {
    id: `article-${index + 1}`,
    slug: `${slugify(seed.title)}-${index + 1}`,
    title: seed.title,
    excerpt: seed.excerpt,
    categorySlug: seed.category,
    authorSlug: seed.author,
    date: daysAgoISO(index),
    readingTime: seed.read,
    image: categoryImages[index % categoryImages.length],
    tags: seed.tags,
    featured: index < 8,
    trending: [0, 3, 7, 14, 21, 33, 45, 57].includes(index),
    editorsPick: [1, 4, 10, 17, 24, 39, 52].includes(index),
    weeklyHighlight: index < 7 || [15, 22, 29].includes(index),
    review: seed.review,
    commentCount,
    views,
  }
})

export const trendingTopics: string[] = [
  'Yapay Zeka Modelleri',
  '2nm İşlemciler',
  'Katlanabilir Telefonlar',
  'Açık Kaynak',
  'OLED Monitörler',
  'Bulut Oyun',
  'Siber Güvenlik',
  'Kuantum Bilişim',
  'Veri Merkezi',
  'Espor',
]

export const videos: Video[] = [
  {
    id: 'video-1',
    slug: 'amiral-gemisi-telefon-ilk-izlenim',
    title: 'Yeni amiral gemisi telefon: 48 saatlik ilk izlenimler',
    excerpt: 'Kamera, ekran ve pil ömrüne odaklanan ilk izlenim videosu.',
    duration: '14:32',
    views: '248B',
    category: 'Mobil',
    image: '/images/mobile.png',
    author: 'Mert Can',
    publishedAt: daysAgoISO(1),
  },
  {
    id: 'video-2',
    slug: 'ekran-karti-test',
    title: 'Yeni ekran kartını test ettik: 4K oyunda neler değişti?',
    excerpt: 'Güncel AAA oyunlarda performans, sıcaklık ve güç tüketimi ölçümleri.',
    duration: '22:10',
    views: '512B',
    category: 'Donanım',
    image: '/images/gpu.png',
    author: 'Kerem Aksoy',
    publishedAt: daysAgoISO(2),
  },
  {
    id: 'video-3',
    slug: 'ai-ile-kod-yazmak',
    title: 'Yapay zeka ile kod yazmak: hype mı gerçekten verimli mi?',
    excerpt: 'Gerçek proje senaryolarında araçları karşılaştırdık.',
    duration: '18:45',
    views: '189B',
    category: 'Yazılım',
    image: '/images/software.png',
    author: 'Zeynep Demir',
    publishedAt: daysAgoISO(4),
  },
  {
    id: 'video-4',
    slug: 'ultrabook-inceleme',
    title: 'Ultrabook incelemesi: bu fiyat bandında mantıklı mı?',
    excerpt: 'Ekran, pil, klavye ve sıcaklık performansını değerlendirdik.',
    duration: '16:08',
    views: '321B',
    category: 'İnceleme',
    image: '/images/laptop.png',
    author: 'Kerem Aksoy',
    publishedAt: daysAgoISO(5),
  },
  {
    id: 'video-5',
    slug: 'guvenlik-101',
    title: 'Siber güvenlik 101: günlük kullanıcılar nereden başlamalı?',
    excerpt: 'Şifre yöneticileri, passkey ve iki aşamalı doğrulama rehberi.',
    duration: '12:55',
    views: '156B',
    category: 'Güvenlik',
    image: '/images/security.png',
    author: 'Aylin Koç',
    publishedAt: daysAgoISO(6),
  },
  {
    id: 'video-6',
    slug: 'islemci-mimarisi',
    title: 'Yeni işlemci mimarisi neden bu kadar önemli?',
    excerpt: 'Verimlilik ve performans çekirdekleri tarafındaki yenilikleri anlatıyoruz.',
    duration: '20:30',
    views: '278B',
    category: 'Donanım',
    image: '/images/cpu.png',
    author: 'Kerem Aksoy',
    publishedAt: daysAgoISO(7),
  },
  {
    id: 'video-7',
    slug: 'espor-perde-arkasi',
    title: 'Espor sahnesinin perde arkası: takımlar nasıl hazırlanıyor?',
    excerpt: 'Antrenman düzeni, yayın ekonomisi ve turnuva takvimi üzerine bir bakış.',
    duration: '25:14',
    views: '402B',
    category: 'Oyun',
    image: '/images/gaming.png',
    author: 'Mert Can',
    publishedAt: daysAgoISO(9),
  },
  {
    id: 'video-8',
    slug: 'bulut-basit-anlatim',
    title: 'Bulut teknolojileri basit anlatım: ekipler neyi neden kullanıyor?',
    excerpt: 'Sunucu, depolama ve konteyner tarafındaki temel kavramları sade biçimde anlattık.',
    duration: '11:20',
    views: '134B',
    category: 'Yazılım',
    image: '/images/cloud.png',
    author: 'Zeynep Demir',
    publishedAt: daysAgoISO(10),
  },
  {
    id: 'video-9',
    slug: 'oled-monitor-karsilastirma',
    title: 'OLED monitör karşılaştırması: içerik üreticileri için hangisi mantıklı?',
    excerpt: 'Parlaklık, renk ve yanma koruması taraflarını masaya yatırıyoruz.',
    duration: '17:42',
    views: '198B',
    category: 'Donanım',
    image: '/images/monitor.png',
    author: 'Kerem Aksoy',
    publishedAt: daysAgoISO(11),
  },
  {
    id: 'video-10',
    slug: 'tablet-uretkenlik',
    title: 'Tablet ile bir hafta çalıştık: gerçekten laptop yerine geçer mi?',
    excerpt: 'Not alma, ofis belgeleri ve uzaktan toplantı deneyimlerini karşılaştırdık.',
    duration: '13:28',
    views: '143B',
    category: 'Mobil',
    image: '/images/mobile.png',
    author: 'Mert Can',
    publishedAt: daysAgoISO(12),
  },
  {
    id: 'video-11',
    slug: 'yerel-llm-kurulumu',
    title: 'Yerel LLM kurulumu: evde deney yapmak isteyenler için pratik rehber',
    excerpt: 'Donanım ihtiyaçları ve başlangıç araç setlerini anlattık.',
    duration: '19:54',
    views: '267B',
    category: 'Yapay Zeka',
    image: '/images/hero-ai.png',
    author: 'Elif Yıldırım',
    publishedAt: daysAgoISO(13),
  },
  {
    id: 'video-12',
    slug: 'oyuncu-masasi-kurulum',
    title: 'Oyuncu masası kurulum rehberi: işlev, ergonomi ve estetik dengesi',
    excerpt: 'Monitör kolu, ışık ve ses tarafında doğru ürünleri konuştuk.',
    duration: '15:17',
    views: '175B',
    category: 'Rehber',
    image: '/images/monitor.png',
    author: 'Mert Can',
    publishedAt: daysAgoISO(15),
  },
]

export const forumThreads: ForumThread[] = [
  {
    id: 'thread-1',
    slug: 'thread-1',
    title: 'Yeni nesil ekran kartı almak için yaz sonunu beklemek mantıklı mı?',
    category: 'Donanım',
    author: 'tekno_meraklisi',
    badge: 'Kıdemli Üye',
    replies: 142,
    views: '8.2B',
    lastActivity: '12 dk önce',
    lastReplyBy: 'gpu_avcisi',
    pinned: true,
    tags: ['Ekran Kartı', 'Satın Alma', 'Tavsiye'],
  },
  {
    id: 'thread-2',
    slug: 'thread-2',
    title: 'Yapay zeka ile kod yazarken hangi görevlerde gerçekten zaman kazanıyorsunuz?',
    category: 'Yazılım',
    author: 'kod_ustasi',
    badge: 'Moderatör',
    replies: 98,
    views: '5.4B',
    lastActivity: '34 dk önce',
    lastReplyBy: 'debugcununotlari',
    tags: ['Yapay Zeka', 'Kodlama', 'Araçlar'],
  },
  {
    id: 'thread-3',
    slug: 'thread-3',
    title: 'Bütçe dostu mekanik klavye önerileri: yazı ve oyun için ortak model arıyorum',
    category: 'Donanım',
    author: 'klavye_tutkunu',
    badge: 'Üye',
    replies: 67,
    views: '3.1B',
    lastActivity: '1 saat önce',
    lastReplyBy: 'switch_arsivi',
    needsAnswer: true,
    tags: ['Klavye', 'Çevre Birimleri', 'Öneri'],
  },
  {
    id: 'thread-4',
    slug: 'thread-4',
    title: 'Hangi Linux dağıtımı yeni başlayanlar için daha az sürpriz çıkarıyor?',
    category: 'Yazılım',
    author: 'linux_yolcusu',
    badge: 'Kıdemli Üye',
    replies: 211,
    views: '14.7B',
    lastActivity: '2 saat önce',
    lastReplyBy: 'penguenadam',
    pinned: true,
    solved: true,
    tags: ['Linux', 'Başlangıç', 'Dağıtım'],
  },
  {
    id: 'thread-5',
    slug: 'thread-5',
    title: 'Amiral gemisi telefonlarda kamera kararlılığı mı ham kalite mi daha önemli?',
    category: 'Mobil',
    author: 'foto_avcisi',
    badge: 'Uzman',
    replies: 156,
    views: '9.8B',
    lastActivity: '3 saat önce',
    lastReplyBy: 'maviportre',
    tags: ['Kamera', 'Telefon', 'Fotoğraf'],
  },
  {
    id: 'thread-6',
    slug: 'thread-6',
    title: 'Espor kariyerine başlamak isteyen biri hangi alışkanlıkları önce oturtmalı?',
    category: 'Oyun',
    author: 'rekabetci_oyuncu',
    badge: 'Üye',
    replies: 45,
    views: '2.3B',
    lastActivity: '5 saat önce',
    lastReplyBy: 'coach_arda',
    needsAnswer: true,
    tags: ['Espor', 'Kariyer', 'Antrenman'],
  },
  {
    id: 'thread-7',
    slug: 'thread-7',
    title: 'Ev için NAS kurulumunda sessizlik mi yedeklilik mi öncelikli olmalı?',
    category: 'Donanım',
    author: 'veri_koruyucu',
    badge: 'Kıdemli Üye',
    replies: 78,
    views: '4.6B',
    lastActivity: '6 saat önce',
    lastReplyBy: 'raidnotlari',
    tags: ['NAS', 'Yedekleme', 'Ev Ofis'],
  },
  {
    id: 'thread-8',
    slug: 'thread-8',
    title: 'Yerel çalışan dil modelleri gündelik kullanımda gerçekten yeterli mi?',
    category: 'Yapay Zeka',
    author: 'ai_arastirmaci',
    badge: 'Uzman',
    replies: 123,
    views: '7.1B',
    lastActivity: '8 saat önce',
    lastReplyBy: 'yerelgpu',
    solved: true,
    tags: ['LLM', 'Yerel Model', 'Benchmark'],
  },
  {
    id: 'thread-9',
    slug: 'thread-9',
    title: 'Bulut maliyeti kontrolden çıkmadan ekip içinde görünürlük nasıl sağlanır?',
    category: 'Yazılım',
    author: 'cloud_yolcusu',
    badge: 'Uzman',
    replies: 51,
    views: '2.8B',
    lastActivity: '9 saat önce',
    lastReplyBy: 'finops_tr',
    needsAnswer: true,
    tags: ['Bulut', 'FinOps', 'Gözlemleme'],
  },
  {
    id: 'thread-10',
    slug: 'thread-10',
    title: 'OLED monitörde yanma riskini azaltmak için günlük kullanımda ne yapıyorsunuz?',
    category: 'Donanım',
    author: 'pikselavcisi',
    badge: 'Üye',
    replies: 84,
    views: '4.2B',
    lastActivity: '11 saat önce',
    lastReplyBy: 'hdrrehberi',
    solved: true,
    tags: ['OLED', 'Monitör', 'Bakım'],
  },
]

export const forumStats = [
  { label: 'Toplam Konu', value: '6.363' },
  { label: 'Toplam Mesaj', value: '184.527' },
  { label: 'Aktif Üye', value: '42.918' },
  { label: 'Bugün Yeni', value: '187' },
]

export const forumTags = [
  'RTX 60',
  'Yerel LLM',
  'PC Toplama',
  'Passkey',
  'Bulut Maliyeti',
  'Klavye',
  'OLED',
  'Katlanabilir',
  'Linux',
  'Espor',
]

export const activeMembers: ForumMember[] = [
  { name: 'gpu_avcisi', role: 'Donanım Uzmanı', posts: '4.812 mesaj' },
  { name: 'debugcununotlari', role: 'Yazılım Moderatörü', posts: '3.406 mesaj' },
  { name: 'maviportre', role: 'Mobil Editör', posts: '2.984 mesaj' },
  { name: 'coach_arda', role: 'Espor Koçu', posts: '1.672 mesaj' },
]

export const comments: Comment[] = [
  {
    author: 'Ahmet Yılmaz',
    time: '2 saat önce',
    text: 'Yazı hem teknik hem de anlaşılır. Özellikle gerçek kullanım etkisini ayrı başlıkta işlemeniz çok iyi olmuş.',
    likes: 24,
  },
  {
    author: 'Selin Aydın',
    time: '4 saat önce',
    text: 'Karşılaştırmalı tablo olmasa da karar vermeye yardımcı olacak kadar net bir çerçeve sunuyor.',
    likes: 18,
  },
  {
    author: 'Murat Demir',
    time: '6 saat önce',
    text: 'Daha fazla örnek görmek isterdim ama genel akış ve bağlamlandırma oldukça başarılı.',
    likes: 9,
  },
]

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getAuthor(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug)
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function articlesByCategory(slug: string): Article[] {
  return articles.filter((article) => article.categorySlug === slug)
}

export function articlesByAuthor(slug: string): Article[] {
  return articles.filter((article) => article.authorSlug === slug)
}

export function relatedArticles(article: Article, count = 3): Article[] {
  return articles
    .filter(
      (item) => item.id !== article.id && item.categorySlug === article.categorySlug,
    )
    .slice(0, count)
}

export function getRelatedByTags(article: Article, count = 4): Article[] {
  const articleTags = new Set(article.tags.map((tag) => normalize(tag)))

  return articles
    .filter((item) => item.id !== article.id)
    .map((item) => ({
      article: item,
      sharedTagCount: item.tags.filter((tag) => articleTags.has(normalize(tag))).length,
    }))
    .filter((item) => item.sharedTagCount > 0)
    .sort((a, b) => {
      if (b.sharedTagCount !== a.sharedTagCount) {
        return b.sharedTagCount - a.sharedTagCount
      }
      return b.article.views - a.article.views
    })
    .slice(0, count)
    .map((item) => item.article)
}

export function authorArticleCount(slug: string): number {
  return articlesByAuthor(slug).length
}

function normalize(input: string): string {
  return input
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
}

export function searchArticles(query: string): Article[] {
  const normalizedQuery = normalize(query.trim())
  if (!normalizedQuery) return []
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean)

  return articles
    .map((article) => {
      let score = 0
      const title = normalize(article.title)
      const titleWords = title.split(/\s+/)
      const excerpt = normalize(article.excerpt)
      const categoryName = normalize(getCategory(article.categorySlug)?.name ?? '')
      const authorName = normalize(getAuthor(article.authorSlug)?.name ?? '')
      const tags = article.tags.map((tag) => normalize(tag))

      for (const token of tokens) {
        if (titleWords.includes(token)) score += 10
        else if (title.includes(token)) score += 6
        score += tags.filter((tag) => tag === token).length * 8
        if (categoryName.includes(token)) score += 5
        if (authorName.includes(token)) score += 4
        if (excerpt.includes(token)) score += 3
      }

      return { article, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.article)
}

export function sortArticles(
  items: Article[],
  sort: SortOption = 'latest',
): Article[] {
  const copy = [...items]
  if (sort === 'popular') {
    return copy.sort((a, b) => b.views - a.views)
  }
  if (sort === 'commented') {
    return copy.sort((a, b) => b.commentCount - a.commentCount)
  }
  return copy.sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function paginate<T>(items: T[], page: number, perPage: number) {
  const currentPage = Number.isFinite(page) && page > 0 ? page : 1
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const safePage = Math.min(currentPage, totalPages)
  const start = (safePage - 1) * perPage
  return {
    items: items.slice(start, start + perPage),
    page: safePage,
    totalPages,
  }
}

export function getMostReadArticles(count = 5): Article[] {
  return sortArticles(articles, 'popular').slice(0, count)
}

export function getMostCommentedArticles(count = 5): Article[] {
  return sortArticles(articles, 'commented').slice(0, count)
}

export function getWeeklyHighlights(count = 6): Article[] {
  return articles.filter((article) => article.weeklyHighlight).slice(0, count)
}

export function getEditorPicks(count = 6): Article[] {
  return articles.filter((article) => article.editorsPick).slice(0, count)
}

export function getReviewArticles(count = 6): Article[] {
  return articles.filter((article) => article.review).slice(0, count)
}

export function getPopularInCategory(
  slug: string,
  count = 3,
  excludeId?: string,
): Article[] {
  const categoryArticles = articles.filter(
    (article) =>
      article.categorySlug === slug &&
      (excludeId === undefined || article.id !== excludeId),
  )

  return categoryArticles
    .sort((a, b) => b.views - a.views)
    .slice(0, count)
}

export function formatViews(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${Math.round(value / 100) / 10}B`
  return String(value)
}

export function formatDate(iso: string): string {
  const months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ]
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return '—'
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export function timeAgo(iso: string): string {
  const now = new Date('2026-06-22T18:00:00').getTime()
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return 'Bilinmiyor'
  const diffHours = Math.round((now - then) / 36e5)
  if (diffHours < 1) return 'az önce'
  if (diffHours < 24) return `${diffHours} saat önce`
  const days = Math.round(diffHours / 24)
  if (days < 7) return `${days} gün önce`
  const weeks = Math.round(days / 7)
  return `${weeks} hafta önce`
}

export function articleBody(article: Article): {
  toc: TocItem[]
  html: string
} {
  const categoryName = getCategory(article.categorySlug)?.name ?? 'Teknoloji'
  const headings = [
    'Genel Bakış',
    'Öne Çıkan Noktalar',
    'Detaylar',
    'Sektöre Etkisi',
    'Sonuç',
  ]

  const baseHtml = `
<p>${article.excerpt} ${categoryName} odağında hızlanan dönüşüm, kullanıcı deneyiminden yatırım kararlarına kadar geniş bir alanı etkilemeye devam ediyor. Bu içerikte gelişmenin teknik tarafını, pratik etkilerini ve pazar karşılığını birlikte değerlendiriyoruz.</p>
<h2>Genel Bakış</h2>
<p>Son dönemde gelen duyurular, ürünlerin yalnızca daha güçlü hale gelmediğini; aynı zamanda daha verimli, daha erişilebilir ve daha bütüncül deneyimler sunduğunu gösteriyor. TechNova Journal olarak konuştuğumuz uzmanlar, bu değişimin birkaç çeyrek boyunca etkisini sürdüreceği görüşünde birleşiyor.</p>
<h2>Öne Çıkan Noktalar</h2>
<ul>
  <li>Daha olgun ürün stratejileri ve daha net kullanım senaryoları</li>
  <li>Maliyet, performans ve enerji verimliliği arasında daha dengeli tercihler</li>
  <li>Kurumsal ekiplerle son kullanıcı ihtiyaçlarının giderek birbirine yaklaşması</li>
  <li>Regülasyon, güvenlik ve sürdürülebilirlik başlıklarının karar süreçlerinde ağırlık kazanması</li>
</ul>
<h3>Detaylar</h3>
<p>Teknik tarafta yapılan güncellemeler kağıt üzerindeki iyileştirmelerle sınırlı değil. Testler, günlük kullanım senaryolarında daha akıcı deneyimler, daha iyi güç yönetimi ve daha istikrarlı performans sunulduğunu gösteriyor. Bununla birlikte, ekosistem uyumu ve yazılım optimizasyonu gibi alanlar hâlâ markalar arasında ciddi fark yaratıyor.</p>
<h2>Sektöre Etkisi</h2>
<p>Bu tablo, yalnızca bir ürün kategorisini değil; tedarik zincirinden içerik üretimine, geliştirici araçlarından abonelik servislerine kadar uzanan çok katmanlı bir etki yaratıyor. Şirketler daha hızlı karar almak zorunda kalırken kullanıcılar da satın alma ve benimseme tarafında daha bilinçli davranıyor.</p>
<h2>Sonuç</h2>
<p>Özetle ${categoryName.toLocaleLowerCase('tr')} eksenindeki bu gelişme, teknolojinin nereye gittiğine dair güçlü bir işaret veriyor. TechNova Journal, konuyu hem haber hem analiz hem de pratik rehber boyutuyla izlemeyi sürdürecek.</p>
`

  const toc: TocItem[] = []
  const html = baseHtml.replace(/<h2>(.*?)<\/h2>/g, (_match, label: string) => {
    const id = slugify(label)
    toc.push({ label, id })
    return `<h2 id="${id}">${label}</h2>`
  })

  return { toc, html }
}

export const pullQuote =
  'Teknolojiyi değerli yapan şey, yalnızca daha güçlü olması değil; günlük hayatı daha akıllı ve daha anlaşılır hale getirmesidir.'
