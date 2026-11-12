/* ==========================================================================
   Data Resmi Pricelist Kendaraan Toyota Wilayah Palembang & Sekitarnya
   Sumber: Pricelist Per 24 Oktober 2026 (Berlaku SPK Oktober - Desember 2026)
   Reguler Order & Spot Order / CBU — Berjalan lokal (file://) tanpa server.
   ========================================================================== */

const PRICELIST_META = {
  region: "Palembang dan Sekitarnya",
  effectiveDate: "Per 24 Oktober 2026",
  validPeriod: "Berlaku untuk SPK Bulan Oktober s/d Desember 2026",
  notes: [
    "Harga sewaktu-waktu dapat berubah.",
    "Harga tidak termasuk Nopol pilihan.",
    "Hilux, Dyna, dan Hi Ace sudah termasuk KEUR.",
    "Untuk PC, AP, TB selama persediaan masih ada.",
    "Pesanan di luar warna Basic masuk ke Spot Order."
  ],
  merchandiseGR: [
    "Paket A: 1 Racing Cap + 1 Umbrella",
    "Paket B: 1 T-Shirt + 1 Tumbler",
    "Paket C: 1 Softshell Jacket + 1 Mechanic"
  ]
};

const TOYOTA_COLORS = {
  white: { name: "Platinum White Pearl", swatch: "#f8fafc", light: "#ffffff", mid: "#e2e8f0", dark: "#94a3b8" },
  silver: { name: "Silver Metallic", swatch: "#cbd5e1", light: "#f1f5f9", mid: "#cbd5e1", dark: "#64748b" },
  gray: { name: "Dark Gray Metallic", swatch: "#64748b", light: "#94a3b8", mid: "#475569", dark: "#1e293b" },
  black: { name: "Attitude Black", swatch: "#18181b", light: "#52525b", mid: "#27272a", dark: "#09090b" },
  red: { name: "Emotional Red", swatch: "#dc2626", light: "#f87171", mid: "#dc2626", dark: "#7f1d1d" },
  darkred: { name: "Dark Red Mica", swatch: "#991b1b", light: "#ef4444", mid: "#b91c1c", dark: "#7f1d1d" },
  blue: { name: "Turquoise / Sporty Blue", swatch: "#0284c7", light: "#38bdf8", mid: "#0284c7", dark: "#0369a1" },
  yellow: { name: "Yellow SE", swatch: "#eab308", light: "#fde047", mid: "#eab308", dark: "#a16207" },
  bronze: { name: "Bronze Mica", swatch: "#92400e", light: "#d97706", mid: "#92400e", dark: "#451a03" },
  purplish: { name: "Purplish Silver", swatch: "#a8a29e", light: "#e7e5e4", mid: "#a8a29e", dark: "#57534e" }
};

const CAR_COLOR_OPTIONS = {
  calya: [{ key: "white", image: "images/mobil/calya.png", studio: "light" }, "silver", "bronze", "black"],
  avanza: [{ key: "black", image: "images/mobil/avanza.png", studio: "light" }, "silver", "white", "purplish"],
  veloz: [{ key: "white", image: "images/mobil/veloz.png", studio: "light" }, "silver", "darkred", "black"],
  "innova-reborn": [{ key: "white", image: "images/mobil/innova-reborn.png", studio: "light" }, "silver", "gray", "black"],
  "innova-zenix": [{ key: "gray", image: "images/mobil/zenix.png", studio: "light" }, "white", "silver", "black"],
  voxy: [{ key: "white", image: "images/mobil/voxy.png", studio: "light" }, "black", "silver", "gray"],
  alphard: [{ key: "silver", image: "images/mobil/alphard.png", studio: "light" }, "white", "black", "gray"],
  vellfire: [{ key: "black", image: "images/mobil/velfire.png", studio: "light" }, "white", "gray", "darkred"],
  raize: [{ key: "red", image: "images/mobil/raize.jpeg", studio: "light" }, "blue", "yellow", "white", "black"],
  rush: [{ key: "white", image: "images/mobil/rush.png", studio: "light" }, "darkred", "silver", "black"],
  "yaris-cross": [{ key: "white", image: "images/mobil/yaris-cross.png", studio: "light" }, "red", "silver", "black"],
  "corolla-cross": [{ key: "red", image: "images/mobil/corolla-cross.png", studio: "light" }, "white", "silver", "black"],
  fortuner: [{ key: "white", image: "images/mobil/fortuner.png", studio: "light" }, "black", "gray", "silver"],
  "urban-cruiser": [{ key: "black", image: "images/mobil/urban-cruiser.png", studio: "light" }, "white", "blue", "silver"],
  bz4x: [{ key: "white", image: "images/mobil/bz4x.png", studio: "light" }, "silver", "gray", "black"],
  "land-cruiser": [{ key: "gray", image: "images/mobil/land-cruiser-300.jpeg", studio: "light" }, "black", "white", "bronze"],
  agya: [{ key: "red", image: "images/mobil/agya.png", studio: "light" }, "yellow", "white", "black"],
  yaris: [{ key: "white", image: "images/mobil/yaris-gr.png", studio: "light" }, "red", "yellow", "black"],
  vios: [{ key: "silver", image: "images/mobil/vios.png", studio: "light" }, "gray", "white", "red", "black"],
  "corolla-altis": [{ key: "gray", image: "images/mobil/altis.png", studio: "light" }, "white", "silver", "red", "black"],
  camry: [{ key: "silver", image: "images/mobil/camry.png", studio: "light" }, "black", "white", "gray"],
  "gr-86": [{ key: "red", image: "images/mobil/gr86.png", studio: "light" }, "white", "blue", "black"],
  "gr-supra": [{ key: "white", image: "images/mobil/supra.png", studio: "light" }, "red", "yellow", "black"],
  "hilux-rangga": [{ key: "white", image: "images/mobil/rangga.png", studio: "light" }, "silver", "gray", "black"],
  hilux: [{ key: "silver", image: "images/mobil/hilux-dc.png", studio: "light" }, "white", "gray", "black", "red"],
  dyna: [{ key: "red", image: "images/mobil/dyna.png", studio: "light" }, "white", "silver"],
  hiace: [{ key: "white", image: "images/mobil/hiace.png", studio: "light" }, "silver", "gray", "black"]
};

const TOYOTA_2026_MODELS = [
  // ------------------------------------------------------------------------
  // 1. MPV & KELUARGA (8 Model)
  // ------------------------------------------------------------------------
  {
    id: "calya",
    name: "Toyota Calya",
    category: "mpv",
    categoryLabel: "MPV Keluarga (LCGC)",
    tag: "Reguler Order",
    electrified: false,
    price: 208500000,
    priceRange: "Rp 208,5 Jt – Rp 232,4 Jt",
    promo: "Fasilitas: V500 + Tcare Lite+ (DP Ringan Palembang)",
    specs: [
      "4 Pilihan Tipe: 1.2 E STD M/T hingga 1.2 G A/T",
      "Kabin 7 penumpang ekonomis & irit bahan bakar",
      "Perawatan mudah & hemat biaya untuk mobilitas harian"
    ],
    variants: [
      { type: "CALYA 1.2 E STD M/T", order: "Reguler", price: 208500000, facility: "V500 + Tcare Lite+" },
      { type: "CALYA 1.2 E M/T", order: "Reguler", price: 211700000, facility: "V500 + Tcare Lite+" },
      { type: "CALYA 1.2 G M/T", order: "Reguler", price: 217700000, facility: "V500 + Tcare Lite+" },
      { type: "CALYA 1.2 G A/T", order: "Reguler", price: 232400000, facility: "V500 + Tcare Lite+" }
    ],
    chassis: "compact-mpv",
    studio: "light"
  },
  {
    id: "avanza",
    name: "Toyota New Avanza",
    image: "images/mobil/avanza.png",
    category: "mpv",
    categoryLabel: "MPV Keluarga",
    tag: "Reguler Order",
    electrified: false,
    price: 280700000,
    priceRange: "Rp 280,7 Jt – Rp 319,2 Jt",
    promo: "Fasilitas: V500 + FP 60K (Program Kredit Ringan)",
    specs: [
      "4 Pilihan Tipe: 1.3 E M/T, 1.3 E CVT, 1.5 G M/T, 1.5 G CVT",
      "Kabin lega 7-Seater Long Sofa Mode",
      "Penggerak roda depan (FWD) dengan kenyamanan berkendara maksimal"
    ],
    variants: [
      { type: "NEW AVANZA 1.3 E M/T", order: "Reguler", price: 280700000, facility: "V500 + FP 60K" },
      { type: "NEW AVANZA 1.3 E CVT", order: "Reguler", price: 296100000, facility: "V500 + FP 60K" },
      { type: "NEW AVANZA 1.5 G M/T", order: "Reguler", price: 304000000, facility: "V500 + FP 60K" },
      { type: "NEW AVANZA 1.5 G CVT", order: "Reguler", price: 319200000, facility: "V500 + FP 60K" }
    ],
    chassis: "mpv",
    studio: "light"
  },
  {
    id: "veloz",
    name: "Toyota Veloz Hybrid",
    category: "mpv",
    categoryLabel: "MPV Keluarga Hybrid",
    tag: "Reguler Order",
    electrified: true,
    powerBadge: "HEV",
    price: 313000000,
    priceRange: "Rp 313,0 Jt – Rp 402,0 Jt",
    promo: "Fasilitas: V500 + FP 60K (Paket B untuk Q TSS Modellista)",
    specs: [
      "12 Varian lengkap tipe V, Q, Modellista & Q TSS",
      "Pilihan warna Non-Premium, Premium, One Tone & Two Tone",
      "Teknologi Hybrid EV hemat bahan bakar"
    ],
    variants: [
      { type: "VELOZ 1.5 V HYBRID CVT (Non Premium Color)", order: "Reguler", price: 313000000, facility: "V500 + FP 60K" },
      { type: "VELOZ 1.5 V HYBRID CVT (Premium Color)", order: "Reguler", price: 314500000, facility: "V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT (Non Premium Color)", order: "Reguler", price: 335000000, facility: "V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT (Premium Color)", order: "Reguler", price: 336500000, facility: "V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT MODELLISTA One Tone (Non Premium)", order: "Reguler", price: 363000000, facility: "V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT MODELLISTA One Tone (Premium)", order: "Reguler", price: 364500000, facility: "V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT MODELLISTA Two Tone (Non Premium)", order: "Reguler", price: 365500000, facility: "V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT MODELLISTA Two Tone (Premium)", order: "Reguler", price: 367000000, facility: "V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT TSS MODELLISTA One Tone (Non Premium)", order: "Reguler", price: 398000000, facility: "Paket B + V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT TSS MODELLISTA One Tone (Premium)", order: "Reguler", price: 399500000, facility: "Paket B + V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT TSS MODELLISTA Two Tone (Non Premium)", order: "Reguler", price: 400500000, facility: "Paket B + V500 + FP 60K" },
      { type: "VELOZ 1.5 Q HYBRID CVT TSS MODELLISTA Two Tone (Premium)", order: "Reguler", price: 402000000, facility: "Paket B + V500 + FP 60K" }
    ],
    chassis: "mpv-sport",
    studio: "eco"
  },
  {
    id: "innova-reborn",
    name: "Toyota New Innova (Diesel)",
    category: "mpv",
    categoryLabel: "MPV Diesel",
    tag: "Reguler Order",
    electrified: false,
    price: 448900000,
    priceRange: "Rp 448,9 Jt – Rp 470,7 Jt",
    promo: "Fasilitas: V500 + FP 60K",
    specs: [
      "Tersedia tipe 2.4 G M/T Diesel & 2.4 G A/T Diesel",
      "Mesin 2.4L Diesel tangguh dengan penggerak RWD",
      "Cocok untuk keluarga maupun fleet perjalanan Sumsel"
    ],
    variants: [
      { type: "NEW INNOVA 2.4 G M/T DIESEL", order: "Reguler", price: 448900000, facility: "V500 + FP 60K" },
      { type: "NEW INNOVA 2.4 G A/T DIESEL", order: "Reguler", price: 470700000, facility: "V500 + FP 60K" }
    ],
    chassis: "innova-mpv",
    studio: "dark"
  },
  {
    id: "innova-zenix",
    name: "Toyota New Innova Zenix",
    category: "mpv",
    categoryLabel: "MPV Bensin & Hybrid",
    tag: "Reguler & Spot",
    electrified: true,
    powerBadge: "HEV",
    price: 471200000,
    priceRange: "Rp 471,2 Jt – Rp 663,0 Jt",
    promo: "Fasilitas: V500 + Board Assy Deck + TB + FP 60K",
    specs: [
      "Pilihan lengkap 2.0 G/V Bensin hingga 2.0 Q HV TSS Modellista",
      "Opsi warna Non-Premium dan Premium Color",
      "Platform TNGA nyaman dengan fitur Toyota Safety Sense"
    ],
    variants: [
      { type: "INNOVA ZENIX 2.0 G CVT (Non Premium Color)", order: "Reguler", price: 471200000, facility: "V500 + Board Assy Deck + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 G CVT (Premium Color)", order: "Reguler", price: 474200000, facility: "V500 + Board Assy Deck + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 G HV CVT (Non Premium Color)", order: "Reguler", price: 509600000, facility: "V500 + Board Assy Deck + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 G HV CVT (Premium Color)", order: "Reguler", price: 512700000, facility: "V500 + Board Assy Deck + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 V CVT (Non Premium Color)", order: "Spot Order", price: 510600000, facility: "VI + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 V CVT (Premium Color)", order: "Spot Order", price: 513700000, facility: "VI + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 V CVT (Non Premium - Reguler)", order: "Reguler", price: 518400000, facility: "V500 + Board Assy Deck + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 V HV CVT (Non Premium Color)", order: "Reguler", price: 552100000, facility: "V500 + Board Assy Deck + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 V HV CVT (Premium Color)", order: "Reguler", price: 555200000, facility: "V500 + Board Assy Deck + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 V HV CVT MODELISTA (Non Premium)", order: "Reguler", price: 574800000, facility: "VI + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 V HV CVT MODELISTA (Premium)", order: "Reguler", price: 577700000, facility: "VI + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 Q HV CVT TSS MODELISTA (Non Premium)", order: "Reguler", price: 654700000, facility: "VI + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 Q HV CVT TSS MODELISTA (Premium)", order: "Reguler", price: 657300000, facility: "VI + TB + FP 60K" },
      { type: "INNOVA ZENIX 2.0 Q HV Modelista CVT TSS (Reguler Awal)", order: "Reguler", price: 663000000, facility: "VI + TB + FP 60K" }
    ],
    chassis: "crossover-mpv",
    studio: "dark"
  },
  {
    id: "voxy",
    name: "Toyota Voxy",
    category: "mpv",
    categoryLabel: "High MPV Premium",
    tag: "Spot Order",
    electrified: false,
    price: 665300000,
    priceRange: "Rp 665,3 Jt – Rp 668,4 Jt",
    promo: "Fasilitas: FP 60K (Dual Power Sliding Door)",
    specs: [
      "Varian 2.0 CVT Non-Premium & Premium Color",
      "Pintu geser elektrik ganda dengan kabin luas",
      "Dilengkapi fitur keselamatan Toyota Safety Sense"
    ],
    variants: [
      { type: "VOXY 2.0 CVT (Non Premium Color)", order: "Spot Order", price: 665300000, facility: "FP 60K" },
      { type: "VOXY 2.0 CVT (Premium Color)", order: "Spot Order", price: 668400000, facility: "FP 60K" }
    ],
    chassis: "boxy-mpv",
    studio: "dark"
  },
  {
    id: "alphard",
    name: "Toyota Alphard (Bensin & HEV)",
    category: "mpv",
    categoryLabel: "Luxury MPV",
    tag: "Spot Order CBU",
    electrified: true,
    powerBadge: "HEV",
    price: 1323000000,
    priceRange: "Rp 1,323 M – Rp 1,813 M",
    promo: "Fasilitas: Paket C + TB + FP 60K",
    specs: [
      "Tersedia 2.5 XE CVT, 2.5 XE Hybrid, 2.5 G CVT & 2.5 Hybrid CVT",
      "Kursi Executive Lounge dengan kenyamanan premium",
      "Pilihan Non-Premium dan Premium Color"
    ],
    variants: [
      { type: "ALPHARD 2.5 XE CVT (Non Premium Color)", order: "Spot Order", price: 1323000000, facility: "Paket C + TB + FP 60K" },
      { type: "ALPHARD 2.5 XE CVT (Premium Color)", order: "Spot Order", price: 1326500000, facility: "Paket C + TB + FP 60K" },
      { type: "ALPHARD 2.5 XE HYBRID CVT (Non Premium Color)", order: "Spot Order", price: 1423000000, facility: "Paket C + TB + FP 60K" },
      { type: "ALPHARD 2.5 XE HYBRID CVT (Premium Color)", order: "Spot Order", price: 1426500000, facility: "Paket C + TB + FP 60K" },
      { type: "ALPHARD 2.5 G CVT (Non Premium Color)", order: "Spot Order", price: 1724500000, facility: "Paket C + TB + FP 60K" },
      { type: "ALPHARD 2.5 G CVT (Premium Color)", order: "Spot Order", price: 1727900000, facility: "Paket C + TB + FP 60K" },
      { type: "ALPHARD 2.5 HYBRID CVT (Non Premium Color)", order: "Spot Order", price: 1810000000, facility: "Paket C + TB + FP 60K" },
      { type: "ALPHARD 2.5 HYBRID CVT (Premium Color)", order: "Spot Order", price: 1813600000, facility: "Paket C + TB + FP 60K" }
    ],
    chassis: "luxury-mpv",
    studio: "dark"
  },
  {
    id: "vellfire",
    name: "Toyota Vellfire VIP Hybrid",
    category: "mpv",
    categoryLabel: "Luxury MPV",
    tag: "Spot Order CBU",
    electrified: true,
    powerBadge: "HEV",
    price: 1949700000,
    priceRange: "Rp 1,949 M – Rp 1,953 M",
    promo: "Fasilitas: Paket C + TB + FP 60K",
    specs: [
      "Varian 2.5 VIP Hybrid CVT Non-Premium & Premium Color",
      "Eksterior bold dengan kabin VIP mewah",
      "Teknologi Hybrid EV halus & bertenaga"
    ],
    variants: [
      { type: "VELLFIRE 2.5 VIP HYBRID CVT (Non Premium Color)", order: "Spot Order", price: 1949700000, facility: "Paket C + TB + FP 60K" },
      { type: "VELLFIRE 2.5 VIP HYBRID CVT (Premium Color)", order: "Spot Order", price: 1953100000, facility: "Paket C + TB + FP 60K" }
    ],
    chassis: "luxury-mpv",
    studio: "dark"
  },

  // ------------------------------------------------------------------------
  // 2. SUV & CROSSOVER (8 Model)
  // ------------------------------------------------------------------------
  {
    id: "raize",
    name: "Toyota Raize New",
    category: "suv",
    categoryLabel: "Compact SUV",
    tag: "Reguler & Spot",
    electrified: false,
    price: 273700000,
    priceRange: "Rp 273,7 Jt – Rp 348,3 Jt",
    promo: "Fasilitas: V500 + FP 60K (Paket A untuk varian GR Sport)",
    specs: [
      "7 Varian: 1.2 G M/T & CVT hingga 1.0T GR Sport TSS Two Tone",
      "Lincah dengan pilihan mesin 1.0L Turbo & 1.2L",
      "Tersedia opsi One Tone dan Two Tone"
    ],
    variants: [
      { type: "RAIZE 1.2 G M/T ONE TONE", order: "Spot Order", price: 273700000, facility: "V500 + FP 60K" },
      { type: "RAIZE 1.2 G CVT ONE TONE", order: "Reguler", price: 289200000, facility: "V500 + FP 60K" },
      { type: "RAIZE 1.0T G M/T ONE TONE", order: "Reguler", price: 293300000, facility: "V500 + FP 60K" },
      { type: "RAIZE 1.0T G CVT ONE TONE", order: "Reguler", price: 308500000, facility: "V500 + FP 60K" },
      { type: "RAIZE 1.0T GR Sport CVT ONE TONE", order: "Reguler", price: 323000000, facility: "Paket A + V500 + FP 60K" },
      { type: "RAIZE 1.0T GR Sport CVT TWO TONE", order: "Reguler", price: 325600000, facility: "Paket A + V500 + FP 60K" },
      { type: "RAIZE 1.0T GR Sport CVT TSS TWO TONE", order: "Spot Order", price: 348300000, facility: "Paket A + V500 + FP 60K" }
    ],
    chassis: "urban-suv",
    twoToneRoof: true,
    studio: "light"
  },
  {
    id: "rush",
    name: "Toyota New Rush",
    category: "suv",
    categoryLabel: "SUV 7-Seater",
    tag: "Reguler Order",
    electrified: false,
    price: 325300000,
    priceRange: "Rp 325,3 Jt – Rp 351,7 Jt",
    promo: "Fasilitas: V500 + FP 60K (Paket A untuk GR Sport)",
    specs: [
      "4 Pilihan Tipe: 1.5 G M/T, 1.5 G A/T, 1.5 S M/T GR, 1.5 S A/T GR",
      "Penggerak roda belakang (RWD) & ground clearance tinggi",
      "Kapasitas 7 penumpang tangguh untuk segala jalan"
    ],
    variants: [
      { type: "NEW RUSH 1.5 G M/T", order: "Reguler", price: 325300000, facility: "V500 + FP 60K" },
      { type: "NEW RUSH 1.5 G A/T", order: "Reguler", price: 336600000, facility: "V500 + FP 60K" },
      { type: "NEW RUSH 1.5 S M/T GR SPORT", order: "Reguler", price: 340800000, facility: "Paket A + V500 + FP 60K" },
      { type: "NEW RUSH 1.5 S A/T GR SPORT", order: "Reguler", price: 351700000, facility: "Paket A + V500 + FP 60K" }
    ],
    chassis: "full-suv",
    studio: "light"
  },
  {
    id: "yaris-cross",
    name: "Toyota Yaris Cross (Bensin & HV)",
    category: "suv",
    categoryLabel: "Urban SUV & Hybrid",
    tag: "Reguler & Spot",
    electrified: true,
    powerBadge: "HEV",
    price: 383400000,
    priceRange: "Rp 383,4 Jt – Rp 488,9 Jt",
    promo: "Fasilitas: V500 + FP 60K (Paket B untuk varian GR)",
    specs: [
      "18 Pilihan Tipe Bensin (1.5 G/S/GR) & Hybrid EV (G HV/S HV/GR)",
      "Opsi One Tone, Dual Tone, Non-Premium & Premium Color",
      "Dilengkapi fitur keselamatan TSS pada tipe S & GR"
    ],
    variants: [
      { type: "YARIS CROSS 1.5 G MT", order: "Spot Order", price: 383400000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 G CVT", order: "Spot Order", price: 397200000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 G HV CVT (Non Premium Color)", order: "Reguler", price: 425500000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 G HV CVT (Premium Color)", order: "Reguler", price: 428000000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 G HV CVT Dual Tone (Non Premium)", order: "Reguler", price: 429500000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 G HV CVT Dual Tone (Premium)", order: "Reguler", price: 430500000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S CVT TSS", order: "Spot Order", price: 442100000, facility: "Paket B + V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S CVT TSS (Premium Color)", order: "Spot Order", price: 444600000, facility: "Paket B + V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S CVT TSS GR", order: "Spot Order", price: 451500000, facility: "Paket B + V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S CVT TSS GR (Premium Color)", order: "Spot Order", price: 454500000, facility: "Paket B + V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S HV CVT TSS (Non Premium)", order: "Spot Order", price: 474300000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S HV CVT TSS (Premium Color)", order: "Reguler", price: 476900000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S HV CVT TSS Dual Tone", order: "Reguler", price: 478600000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S HV CVT TSS Dual Tone (Premium)", order: "Spot Order", price: 479500000, facility: "V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S HV CVT TSS GR", order: "Reguler", price: 483900000, facility: "Paket B + V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S HV CVT TSS GR (Premium Color)", order: "Reguler", price: 486500000, facility: "Paket B + V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S HV CVT TSS GR Dual Tone", order: "Reguler", price: 488100000, facility: "Paket B + V500 + FP 60K" },
      { type: "YARIS CROSS 1.5 S HV CVT TSS GR Dual Tone (Premium)", order: "Reguler", price: 488900000, facility: "Paket B + V500 + FP 60K" }
    ],
    chassis: "urban-suv",
    twoToneRoof: true,
    studio: "eco"
  },
  {
    id: "corolla-cross",
    name: "Toyota Corolla Cross Hybrid",
    category: "suv",
    categoryLabel: "Crossover Hybrid",
    tag: "Spot Order",
    electrified: true,
    powerBadge: "HEV",
    price: 637200000,
    priceRange: "Rp 637,2 Jt – Rp 683,3 Jt",
    promo: "Fasilitas: V500 (Tersedia Hybrid & GR-S)",
    specs: [
      "4 Varian: 1.8 Hybrid A/T & 1.8 Hybrid GR-S A/T",
      "Pilihan Non-Premium, Premium & Dual Tone",
      "Efisiensi tinggi berbasis platform TNGA-C"
    ],
    variants: [
      { type: "COROLLA CROSS 1.8 HYBRID A/T (Non Premium)", order: "Spot Order", price: 637200000, facility: "V500" },
      { type: "COROLLA CROSS 1.8 HYBRID A/T (Premium)", order: "Spot Order", price: 640100000, facility: "V500" },
      { type: "COROLLA CROSS 1.8 HYBRID GR-S A/T (Non Premium)", order: "Spot Order", price: 678200000, facility: "V500" },
      { type: "COROLLA CROSS 1.8 HYBRID GR-S A/T (Premium Dual Tone)", order: "Spot Order", price: 683300000, facility: "V500" }
    ],
    chassis: "urban-suv",
    studio: "eco"
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    category: "suv",
    categoryLabel: "High SUV 4x2 / 4x4",
    tag: "Reguler & Spot",
    electrified: false,
    price: 616100000,
    priceRange: "Rp 616,1 Jt – Rp 829,9 Jt",
    promo: "Fasilitas: VI + TB + FP 60K (Paket B/C untuk GR Sport)",
    specs: [
      "Lengkap mulai 2.4 G Diesel, 2.7 SRZ Bensin, hingga 2.8 VRZ & GR-S 4x4",
      "Tersedia paket GR Parts Aero Package & TSS",
      "Tangguh dengan pilihan 4x2 dan 4x4"
    ],
    variants: [
      { type: "FORTUNER 2.4 G 4x2 M/T", order: "Spot Order", price: 616100000, facility: "VI + TB + FP 60K" },
      { type: "FORTUNER 2.4 G 4x2 A/T", order: "Spot Order", price: 634400000, facility: "VI + TB + FP 60K" },
      { type: "FORTUNER 2.7 SRZ 4x2 A/T", order: "Spot Order", price: 658200000, facility: "VI + TB + FP 60K" },
      { type: "FORTUNER 2.7 SRZ GR PARTS AERO 4x2 A/T One Tone (Non Prem)", order: "Spot Order", price: 667900000, facility: "Paket B + VI + TB + FP 60K" },
      { type: "FORTUNER 2.7 SRZ GR PARTS AERO 4x2 A/T One Tone (Premium)", order: "Spot Order", price: 670900000, facility: "Paket B + VI + TB + FP 60K" },
      { type: "FORTUNER 2.7 SRZ GR PARTS AERO 4x2 A/T Two Tone (Premium)", order: "Spot Order", price: 672800000, facility: "Paket B + VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 VRZ 4X2 A/T Non RSE", order: "Spot Order", price: 679700000, facility: "VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 VRZ 4X2 A/T", order: "Spot Order", price: 685200000, facility: "VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 VRZ TSS 4X2 A/T", order: "Spot Order", price: 701300000, facility: "VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 VRZ GR PARTS AERO TSS 4X2 One Tone (Non Prem)", order: "Reguler", price: 711900000, facility: "Paket B + VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 VRZ GR PARTS AERO TSS 4X2 One Tone (Premium)", order: "Reguler", price: 715100000, facility: "Paket B + VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 VRZ GR PARTS AERO TSS 4X2 Two Tone (Premium)", order: "Reguler", price: 717100000, facility: "Paket B + VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 VRZ 4X4 A/T", order: "Spot Order", price: 793100000, facility: "VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 GR-SPORT TSS 4X4 A/T ONE TONE", order: "Reguler", price: 824800000, facility: "Paket B + VI + TB + FP 60K" },
      { type: "FORTUNER 2.8 GR-SPORT TSS 4X4 A/T TWO TONE (Premium)", order: "Reguler", price: 829900000, facility: "Paket B + VI + TB + FP 60K" }
    ],
    chassis: "full-suv",
    grAccent: true,
    studio: "dark"
  },
  {
    id: "urban-cruiser",
    name: "Toyota Urban Cruiser",
    category: "suv",
    categoryLabel: "Compact Crossover",
    tag: "Spot Order CBU",
    electrified: true,
    powerBadge: "EV",
    price: 772200000,
    priceRange: "Rp 772,2 Jt – Rp 776,3 Jt",
    promo: "Model Terbaru 2026 — Tersedia Mono-Tone & Two-Tone",
    specs: [
      "Varian Urban Cruiser A/T Mono-Tone & Two-Tone",
      "Desain modern ringkas untuk mobilitas urban",
      "Status pemesanan Spot Order resmi"
    ],
    variants: [
      { type: "URBAN CRUISER A/T (SZ181CR-ZG12) Mono-Tone", order: "Spot Order", price: 772200000, facility: "Spot Order CBU" },
      { type: "URBAN CRUISER A/T (SZ181CR-ZG12) Two-Tone", order: "Spot Order", price: 776300000, facility: "Spot Order CBU" }
    ],
    chassis: "bev-suv",
    twoToneRoof: true,
    studio: "eco"
  },
  {
    id: "bz4x",
    name: "Toyota bZ4X",
    category: "suv",
    categoryLabel: "Electric SUV (BEV)",
    tag: "100% Listrik BEV",
    electrified: true,
    powerBadge: "BEV",
    price: 811700000,
    priceRange: "Rp 811,7 Jt – Rp 900,1 Jt",
    promo: "Tersedia varian bZ4X A/T & bZ4X Touring A/T",
    specs: [
      "100% Battery Electric Vehicle (Nol Emisi)",
      "2 Pilihan Tipe: bZ4X A/T & bZ4X Touring A/T",
      "Platform e-TNGA dengan Toyota Safety Sense"
    ],
    variants: [
      { type: "BZ4X A/T (XEAM11R-DWDHQW00)", order: "Spot Order", price: 811700000, facility: "Spot Order CBU" },
      { type: "BZ4X TOURING A/T (XEAM17R-MWDHNW00)", order: "Spot Order", price: 900100000, facility: "Spot Order CBU" }
    ],
    chassis: "bev-suv",
    twoToneRoof: true,
    studio: "eco"
  },
  {
    id: "land-cruiser",
    name: "Toyota Land Cruiser 300",
    category: "suv",
    categoryLabel: "Flagship 4x4 SUV",
    tag: "Spot Order CBU",
    electrified: true,
    powerBadge: "HEV / 4x4",
    price: 2737700000,
    priceRange: "Rp 2,737 M – Rp 2,896 M",
    promo: "Fasilitas: Paket C + TB + FP 60K",
    specs: [
      "Varian VX-R 4x4, GR-S 4x4, VX-R HEV & GR-S HEV",
      "Opsi Non-Premium dan Premium Color",
      "SUV flagship mewah dengan kemampuan off-road legendaris"
    ],
    variants: [
      { type: "LAND CRUISER 300 VX-R 4x4 A/T (Non Premium)", order: "Spot Order", price: 2737700000, facility: "Paket C + TB + FP 60K" },
      { type: "LAND CRUISER 300 VX-R 4x4 A/T (Premium)", order: "Spot Order", price: 2743700000, facility: "Paket C + TB + FP 60K" },
      { type: "LAND CRUISER 300 VX-R HEV A/T (Non Premium)", order: "Spot Order", price: 2765000000, facility: "Paket C + TB + FP 60K" },
      { type: "LAND CRUISER 300 VX-R HEV A/T (Premium)", order: "Spot Order", price: 2771100000, facility: "Paket C + TB + FP 60K" },
      { type: "LAND CRUISER 300 GR-S 4x4 A/T (Non Premium)", order: "Spot Order", price: 2842200000, facility: "Paket C + TB + FP 60K" },
      { type: "LAND CRUISER 300 GR-S 4x4 A/T (Premium)", order: "Spot Order", price: 2846700000, facility: "Paket C + TB + FP 60K" },
      { type: "LAND CRUISER 300 GR-S HEV A/T (Non Premium)", order: "Spot Order", price: 2889000000, facility: "Paket C + TB + FP 60K" },
      { type: "LAND CRUISER 300 GR-S HEV A/T (Premium)", order: "Spot Order", price: 2896000000, facility: "Paket C + TB + FP 60K" }
    ],
    chassis: "full-suv",
    studio: "dark"
  },

  // ------------------------------------------------------------------------
  // 3. HATCHBACK & CITY CAR (2 Model)
  // ------------------------------------------------------------------------
  {
    id: "agya",
    name: "Toyota Agya (G, Stylix & GR)",
    category: "hatchback",
    categoryLabel: "City Car / Hatchback",
    tag: "Reguler & Spot",
    electrified: false,
    price: 207400000,
    priceRange: "Rp 207,4 Jt – Rp 298,3 Jt",
    promo: "Fasilitas: V500 + Tcare Lite+ (Paket A untuk Stylix & GR)",
    specs: [
      "12 Pilihan Tipe: 1.2 E/G, Stylix GR Aero, hingga GR-S & GR",
      "Tersedia transmisi M/T & CVT dengan opsi One Tone / Two Tone",
      "Lincah & hemat BBM untuk aktivitas harian di Palembang"
    ],
    variants: [
      { type: "AGYA 1.2 E M/T", order: "Spot Order", price: 207400000, facility: "V500 + T-CARELITE" },
      { type: "AGYA 1.2 G M/T", order: "Reguler", price: 214900000, facility: "V500 + Tcare Lite+" },
      { type: "AGYA 1.2 G CVT", order: "Reguler", price: 231700000, facility: "V500 + Tcare Lite+" },
      { type: "AGYA STYLIX 1.2 G CVT WITH GR PARTS AERO PACKAGE", order: "Reguler", price: 232600000, facility: "Paket A + V500 + Tcare Lite+" },
      { type: "AGYA 1.2 GR-S M/T (One Tone)", order: "Spot Order", price: 269600000, facility: "Paket A + V500 + FP 60K" },
      { type: "AGYA 1.2 GR-S M/T (Two Tone)", order: "Spot Order", price: 272200000, facility: "Paket A + V500 + FP 60K" },
      { type: "AGYA 1.2 GR M/T (One Tone)", order: "Spot Order", price: 279000000, facility: "Paket A + V500 + FP 60K" },
      { type: "AGYA 1.2 GR M/T (Two Tone)", order: "Spot Order", price: 281500000, facility: "Paket A + V500 + FP 60K" },
      { type: "AGYA 1.2 GR-S CVT (One Tone)", order: "Spot Order", price: 286800000, facility: "Paket A + V500 + FP 60K" },
      { type: "AGYA 1.2 GR-S CVT (Two Tone)", order: "Spot Order", price: 289200000, facility: "Paket A + V500 + FP 60K" },
      { type: "AGYA 1.2 GR CVT (One Tone)", order: "Spot Order", price: 295800000, facility: "Paket A + V500 + FP 60K" },
      { type: "AGYA 1.2 GR CVT (Two Tone)", order: "Spot Order", price: 298300000, facility: "Paket A + V500 + FP 60K" }
    ],
    chassis: "city-hatch",
    grAccent: true,
    studio: "light"
  },
  {
    id: "yaris",
    name: "Toyota Yaris GR Sport",
    category: "hatchback",
    categoryLabel: "Hatchback Sporty",
    tag: "Spot Order",
    electrified: false,
    price: 370800000,
    priceRange: "Rp 370,8 Jt – Rp 374,9 Jt",
    promo: "Fasilitas: Paket B + V500 + FP 60K",
    specs: [
      "Varian 1.5 S CVT GR Sport 3 Airbags (One Tone & Dual Tone)",
      "Handling lincah dengan tampilan sporty Gazoo Racing",
      "Termasuk Paket B Merchandise GR"
    ],
    variants: [
      { type: "YARIS 1.5 S CVT GR SPORT 3 Airbags (One Tone)", order: "Spot Order", price: 370800000, facility: "Paket B + V500 + FP 60K" },
      { type: "YARIS 1.5 S CVT GR SPORT 3 Airbags (Dual Tone)", order: "Spot Order", price: 374900000, facility: "Paket B + V500 + FP 60K" }
    ],
    chassis: "city-hatch",
    grAccent: true,
    studio: "light"
  },

  // ------------------------------------------------------------------------
  // 4. SEDAN & SPORTS COUPE (5 Model)
  // ------------------------------------------------------------------------
  {
    id: "vios",
    name: "Toyota Vios (G & Hybrid)",
    category: "sedan",
    categoryLabel: "Compact Sedan",
    tag: "Spot Order",
    electrified: true,
    powerBadge: "HEV",
    price: 405600000,
    priceRange: "Rp 405,6 Jt – Rp 480,7 Jt",
    promo: "Fasilitas: V500 + FP 60K (Tersedia Hybrid EV)",
    specs: [
      "5 Varian: All New Vios 1.5 G CVT hingga 1.5 Hybrid CVT Two Tone",
      "Desain fastback modern & efisien bahan bakar",
      "Pilihan warna One Tone, Two Tone, Non-Premium & Premium"
    ],
    variants: [
      { type: "ALL NEW VIOS 1.5 G CVT (Non Premium Color)", order: "Spot Order", price: 405600000, facility: "V500 + FP 60K" },
      { type: "VIOS 1.5 HYBRID CVT One Tone (Non Premium)", order: "Spot Order", price: 475700000, facility: "V500 + FP 60K" },
      { type: "VIOS 1.5 HYBRID CVT One Tone (Premium)", order: "Spot Order", price: 478200000, facility: "V500 + FP 60K" },
      { type: "VIOS 1.5 HYBRID CVT Two Tone (Non Premium)", order: "Spot Order", price: 479700000, facility: "V500 + FP 60K" },
      { type: "VIOS 1.5 HYBRID CVT Two Tone (Premium)", order: "Spot Order", price: 480700000, facility: "V500 + FP 60K" }
    ],
    chassis: "sedan",
    studio: "light"
  },
  {
    id: "corolla-altis",
    name: "Toyota Corolla Altis Hybrid",
    category: "sedan",
    categoryLabel: "Medium Sedan Hybrid",
    tag: "Spot Order",
    electrified: true,
    powerBadge: "HEV",
    price: 671500000,
    priceRange: "Rp 671,5 Jt – Rp 680,5 Jt",
    promo: "Fasilitas: V500 + FP 60K",
    specs: [
      "4 Varian: 1.8L Hybrid A/T & 1.8L Hybrid A/T GR-S",
      "Pilihan Non-Premium dan Premium Color",
      "Kenyamanan sedan premium dengan teknologi Hybrid EV"
    ],
    variants: [
      { type: "COROLLA ALTIS 1.8L HYBRID A/T (Non Premium)", order: "Spot Order", price: 671500000, facility: "V500 + FP 60K" },
      { type: "COROLLA ALTIS 1.8L HYBRID A/T (Premium)", order: "Spot Order", price: 674500000, facility: "V500 + FP 60K" },
      { type: "COROLLA ALTIS 1.8L HYBRID A/T GR-S (Non Premium)", order: "Spot Order", price: 677600000, facility: "V500 + FP 60K" },
      { type: "COROLLA ALTIS 1.8L HYBRID A/T GR-S (Premium)", order: "Spot Order", price: 680500000, facility: "V500 + FP 60K" }
    ],
    chassis: "sedan",
    studio: "eco"
  },
  {
    id: "camry",
    name: "Toyota Camry (V & Hybrid)",
    category: "sedan",
    categoryLabel: "Executive Sedan",
    tag: "Spot Order CBU",
    electrified: true,
    powerBadge: "HEV",
    price: 891300000,
    priceRange: "Rp 891,3 Jt – Rp 1,017 M",
    promo: "Fasilitas: V500 + TB + FP 60K",
    specs: [
      "4 Varian: 2.5 V A/T & 2.5 L Hybrid A/T",
      "Kabin eksekutif senyap dengan fitur premium",
      "Pilihan Non-Premium dan Premium Color"
    ],
    variants: [
      { type: "CAMRY 2.5 V A/T (Non Premium Color)", order: "Spot Order", price: 891300000, facility: "V500 + TB + FP 60K" },
      { type: "CAMRY 2.5 V A/T (Premium Color)", order: "Spot Order", price: 894200000, facility: "V500 + TB + FP 60K" },
      { type: "CAMRY 2.5 L HYBRID A/T (Non Premium Color)", order: "Spot Order", price: 1014200000, facility: "V500 + TB + FP 60K" },
      { type: "CAMRY 2.5 L HYBRID A/T (Premium Color)", order: "Spot Order", price: 1017100000, facility: "V500 + TB + FP 60K" }
    ],
    chassis: "sedan",
    studio: "dark"
  },
  {
    id: "gr-86",
    name: "Toyota GR 86",
    category: "sedan",
    categoryLabel: "Sports Coupe",
    tag: "Spot Order CBU",
    electrified: false,
    powerBadge: "GR",
    price: 1099900000,
    priceRange: "Rp 1,099 M – Rp 1,138 M",
    promo: "Fasilitas: Paket C + V500 + TB + FP 60K",
    specs: [
      "Tersedia varian 2.4L M/T dan 2.4L A/T",
      "Sports coupe penggerak roda belakang (RWD)",
      "Termasuk Paket C Merchandise GR"
    ],
    variants: [
      { type: "GR 86 2.4L M/T", order: "Spot Order", price: 1099900000, facility: "Paket C + V500 + TB + FP 60K" },
      { type: "GR 86 2.4L A/T", order: "Spot Order", price: 1138500000, facility: "Paket C + V500 + TB + FP 60K" }
    ],
    chassis: "coupe",
    grAccent: true,
    studio: "dark"
  },
  {
    id: "gr-supra",
    name: "Toyota Supra",
    category: "sedan",
    categoryLabel: "Flagship Sports Car",
    tag: "Spot Order CBU",
    electrified: false,
    powerBadge: "GR",
    price: 2366700000,
    priceRange: "Rp 2,366 M (3.0L A/T)",
    promo: "Fasilitas: Paket C + FP 60K",
    specs: [
      "Varian Toyota Supra 3.0L A/T",
      "Performa sports car flagship Gazoo Racing",
      "Termasuk Paket C Merchandise GR"
    ],
    variants: [
      { type: "TOYOTA SUPRA 3.0L A/T", order: "Spot Order", price: 2366700000, facility: "Paket C + FP 60K" }
    ],
    chassis: "coupe",
    grAccent: true,
    studio: "dark"
  },

  // ------------------------------------------------------------------------
  // 5. COMMERCIAL / NIAGA (4 Model)
  // ------------------------------------------------------------------------
  {
    id: "hilux-rangga",
    name: "Toyota New Hilux Rangga",
    category: "commercial",
    categoryLabel: "Pick-Up & Karoseri Niaga",
    tag: "Spot Order",
    electrified: false,
    price: 216600000,
    priceRange: "Rp 216,6 Jt – Rp 403,5 Jt",
    promo: "Fasilitas: FP 10K (Tersedia 2.0 Bensin & 2.4 Diesel + Box)",
    specs: [
      "20+ Varian: Cab-Chassis, Pick Up 3-Way, Dry Box & Refrigerated Box",
      "Pilihan mesin 2.0 Bensin (M/T) & 2.4 Diesel (M/T & A/T)",
      "Solusi niaga modular paling fleksibel untuk bisnis"
    ],
    variants: [
      { type: "HILUX RANGGA CAB-CHASSIS PU 2.0 STANDARD M/T", order: "Spot Order", price: 216600000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS MB 2.0 STANDARD M/T", order: "Spot Order", price: 216600000, facility: "FP 10K" },
      { type: "HILUX RANGGA PICK UP 2.0 STANDARD M/T", order: "Spot Order", price: 221600000, facility: "FP 10K" },
      { type: "HILUX RANGGA PICK UP 2.0 STANDARD M/T 3WAY", order: "Spot Order", price: 222800000, facility: "FP 10K" },
      { type: "HILUX RANGGA PICK UP 2.0 HIGH M/T", order: "Spot Order", price: 244700000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS PU 2.0 STD M/T (DRY BOX REAR)", order: "Spot Order", price: 261300000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS PU 2.0 STD M/T (DRY BOX REAR+SIDE)", order: "Spot Order", price: 263800000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS PU 2.4 DSL STANDARD M/T", order: "Spot Order", price: 272500000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS MB 2.4 DSL STANDARD M/T", order: "Spot Order", price: 274300000, facility: "FP 10K" },
      { type: "HILUX RANGGA PICK UP 2.4 DSL STANDARD M/T", order: "Spot Order", price: 277500000, facility: "FP 10K" },
      { type: "HILUX RANGGA PICK UP 2.4 DSL STANDARD M/T 3WAY", order: "Spot Order", price: 278500000, facility: "FP 10K" },
      { type: "HILUX RANGGA PICK UP 2.4 DSL HIGH M/T", order: "Spot Order", price: 313500000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS PU 2.4 DSL STD (DRY BOX REAR)", order: "Spot Order", price: 317000000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS PU 2.4 DSL STD (DRY BOX REAR+SIDE)", order: "Spot Order", price: 319500000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS PU/MB 2.4 DSL HIGH A/T", order: "Spot Order", price: 328600000, facility: "FP 10K" },
      { type: "HILUX RANGGA PICK UP 2.4 DSL HIGH A/T", order: "Spot Order", price: 334700000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS PU 2.0 STD M/T (REFRIGERATED BOX)", order: "Spot Order", price: 347800000, facility: "FP 10K" },
      { type: "HILUX RANGGA CAB-CHASSIS PU 2.4 DSL STD M/T (REFRIGERATED BOX)", order: "Spot Order", price: 403500000, facility: "FP 10K" }
    ],
    chassis: "rangga-pickup",
    studio: "light"
  },
  {
    id: "hilux",
    name: "Toyota Hilux (4x4 & BEV)",
    category: "commercial",
    categoryLabel: "Pick-Up 4x4 & Listrik",
    tag: "Spot Order (Inc. KEUR)",
    electrified: true,
    powerBadge: "4x4 / EV",
    price: 457200000,
    priceRange: "Rp 457,2 Jt – Rp 1,028 M",
    promo: "Sudah termasuk KEUR • Tersedia 2.8 DSL & Hilux BEV",
    specs: [
      "8 Varian: Pick Up 4x4, Double Cabin 2.4G, 2.8 E/G/V & Hilux BEV",
      "Harga OTR Palembang sudah termasuk pengurusan KEUR",
      "Andalan perkebunan, tambang & operasional berat Sumsel"
    ],
    variants: [
      { type: "HILUX 2.8 DSL PICK UP 4X4 M/T", order: "Spot Order", price: 457200000, facility: "Termasuk KEUR" },
      { type: "HILUX 2.8 DSL PICK UP RTS 4X4 M/T", order: "Spot Order", price: 464100000, facility: "Termasuk KEUR" },
      { type: "HILUX 2.8 E DOUBLE CABIN 4X4 M/T", order: "Spot Order", price: 494100000, facility: "Termasuk KEUR" },
      { type: "HILUX 2.8 E DOUBLE CABIN RTS 4X4 M/T", order: "Spot Order", price: 501000000, facility: "Termasuk KEUR" },
      { type: "HILUX DOUBLE CABIN 2.4 G (4X4) M/T DIESEL", order: "Spot Order", price: 516300000, facility: "Paket C + TB + FP 60K (KEUR)" },
      { type: "HILUX 2.8 G DOUBLE CABIN 4X4 M/T", order: "Spot Order", price: 526000000, facility: "Termasuk KEUR" },
      { type: "HILUX 2.8 V DOUBLE CABIN 4x4 A/T", order: "Spot Order", price: 603400000, facility: "Termasuk KEUR" },
      { type: "HILUX BEV DOUBLE CABIN 4x4", order: "Spot Order", price: 1028000000, facility: "Termasuk KEUR" }
    ],
    chassis: "hilux-dcab",
    studio: "dark"
  },
  {
    id: "dyna",
    name: "Toyota Dyna 136 HT",
    category: "commercial",
    categoryLabel: "Truk Niaga Heavy Duty",
    tag: "Spot Order (Inc. KEUR)",
    electrified: false,
    price: 523200000,
    priceRange: "Rp 523,2 Jt – Rp 528,1 Jt",
    promo: "Sudah termasuk KEUR • Tersedia Varian PTO",
    specs: [
      "Tersedia 136 HT HI-GEAR 4X2 6M/T & varian PTO",
      "Harga OTR Palembang sudah termasuk KEUR",
      "Rangka kokoh untuk angkutan logistik & konstruksi"
    ],
    variants: [
      { type: "DYNA 136 HT HI-GEAR 4X2 6M/T", order: "Spot Order", price: 523200000, facility: "Termasuk KEUR" },
      { type: "DYNA 136 HT HI-GEAR 4X2 6M/T (PTO)", order: "Spot Order", price: 528100000, facility: "Termasuk KEUR" }
    ],
    chassis: "dyna-truck",
    studio: "light"
  },
  {
    id: "hiace",
    name: "Toyota Hi Ace (Commuter & Premio)",
    category: "commercial",
    categoryLabel: "Van Pariwisata & Travel",
    tag: "Spot Order (Inc. KEUR)",
    electrified: false,
    price: 621300000,
    priceRange: "Rp 621,3 Jt – Rp 722,6 Jt",
    promo: "Fasilitas: V500 + FP 60K (Sudah termasuk KEUR)",
    specs: [
      "Pilihan Hi Ace Commuter & Hiace 2.8 M/T (Premio)",
      "Harga OTR Palembang sudah termasuk KEUR",
      "Standar utama travel, shuttle & pariwisata"
    ],
    variants: [
      { type: "HI ACE COMMUTER", order: "Spot Order", price: 621300000, facility: "V500 + FP 60K (KEUR)" },
      { type: "HIACE 2.8 M/T (GDH321R-EDFDYD)", order: "Spot Order", price: 722600000, facility: "V500 + FP 60K (KEUR)" }
    ],
    chassis: "hiace-van",
    studio: "light"
  }
];

/* ==========================================================================
   Renderer SVG Studio Otomotif (Membuat gambar unik tiap arsitektur bodi)
   ========================================================================== */
let svgRenderCounter = 0;

function createCarIllustrationSvg(car) {
  svgRenderCounter += 1;
  const uid = car.id.replace(/[^a-z0-9]/gi, "") + "_" + svgRenderCounter;
  const c = car.color || { light: "#f8fafc", mid: "#cbd5e1", dark: "#64748b" };

  let bgTop = "#e2e8f0";
  let bgBot = "#cbd5e1";
  let floorCol = "#94a3b8";
  let accentLine = "#eb0a1e";

  if (car.studio === "dark") {
    bgTop = "#0f172a";
    bgBot = "#1e293b";
    floorCol = "#090d16";
  } else if (car.studio === "eco") {
    bgTop = "#0f172a";
    bgBot = "#0f3d4c";
    floorCol = "#091821";
    accentLine = "#38bdf8";
  }

  const profiles = {
    "compact-mpv": {
      body: "M152 282 L156 238 Q162 218 195 212 L252 204 L322 156 Q348 144 398 144 L556 146 Q596 148 618 184 L638 232 Q646 250 644 278 L628 288 L168 288 Z",
      win1: "M268 202 L332 158 Q354 150 398 150 L438 150 L438 202 Z",
      win2: "M450 150 L546 152 Q580 154 600 188 L604 202 L450 202 Z",
      wx1: 244, wx2: 552, wr: 37, wy: 290, fx: 158, fy: 224, rx: 634, ry: 222
    },
    "mpv": {
      body: "M145 282 L150 236 Q156 214 190 208 L254 200 L328 150 Q356 138 404 138 L558 140 Q600 144 622 182 L646 232 Q654 250 650 278 L634 290 L162 290 Z",
      win1: "M270 198 L338 152 Q360 144 404 144 L444 144 L444 198 Z",
      win2: "M456 144 L548 146 Q584 150 604 186 L608 198 L456 198 Z",
      wx1: 242, wx2: 556, wr: 39, wy: 292, fx: 152, fy: 222, rx: 640, ry: 220
    },
    "mpv-sport": {
      body: "M142 282 L148 234 Q154 212 188 206 L254 198 L330 148 Q358 136 406 136 L562 138 Q604 142 626 180 L648 232 Q656 250 652 280 L634 290 L160 290 Z",
      win1: "M270 196 L340 150 Q362 142 406 142 L446 142 L446 196 Z",
      win2: "M458 142 L552 144 Q588 148 608 184 L612 196 L458 196 Z",
      wx1: 242, wx2: 558, wr: 40, wy: 292, fx: 150, fy: 220, rx: 642, ry: 218
    },
    "innova-mpv": {
      body: "M138 282 L142 232 Q148 208 184 202 L254 194 L334 144 Q362 132 410 132 L568 134 Q608 138 630 176 L654 228 Q662 248 658 278 L640 290 L154 290 Z",
      win1: "M272 192 L344 146 Q366 138 410 138 L450 138 L450 192 Z",
      win2: "M462 138 L558 140 Q592 144 612 180 L616 192 L462 192 Z",
      wx1: 240, wx2: 562, wr: 41, wy: 292, fx: 144, fy: 218, rx: 648, ry: 216
    },
    "crossover-mpv": {
      body: "M135 282 L140 232 Q145 208 178 202 L248 194 L328 146 Q356 132 408 132 L560 134 Q604 138 628 178 L656 226 Q664 244 662 276 L644 290 L152 290 Z",
      win1: "M264 193 L338 148 Q360 140 408 140 L448 140 L448 194 Z",
      win2: "M460 140 L550 142 Q586 146 608 184 L612 194 L460 194 Z",
      wx1: 240, wx2: 560, wr: 42, wy: 294, fx: 142, fy: 216, rx: 650, ry: 216
    },
    "boxy-mpv": {
      body: "M145 282 L148 228 Q154 204 186 196 L236 188 L286 122 Q306 112 346 112 L592 114 Q626 118 636 156 L648 232 Q652 256 648 282 L630 290 L162 290 Z",
      win1: "M250 186 L296 128 Q314 120 348 120 L424 120 L424 186 Z",
      win2: "M436 120 L584 122 Q612 126 620 162 L624 186 L436 186 Z",
      wx1: 236, wx2: 558, wr: 39, wy: 292, fx: 150, fy: 212, rx: 642, ry: 210
    },
    "luxury-mpv": {
      body: "M142 282 L144 220 Q148 196 178 190 L226 184 L276 116 Q298 106 340 106 L602 108 Q634 112 642 152 L652 232 Q656 258 650 282 L634 290 L158 290 Z",
      win1: "M242 182 L286 122 Q306 114 342 114 L424 114 L424 182 Z",
      win2: "M436 114 L594 116 Q620 120 628 158 L630 182 L436 182 Z",
      wx1: 234, wx2: 562, wr: 41, wy: 292, fx: 146, fy: 206, rx: 646, ry: 206
    },
    "urban-suv": {
      body: "M144 276 L148 228 Q154 204 188 198 L256 190 L330 142 Q358 130 408 130 L548 132 Q592 136 618 176 L644 224 Q654 244 650 272 L632 284 L162 284 Z",
      win1: "M272 188 L340 144 Q362 136 408 136 L446 136 L446 188 Z",
      win2: "M458 136 L540 138 Q576 142 598 178 L602 188 L458 188 Z",
      wx1: 242, wx2: 556, wr: 42, wy: 290, fx: 150, fy: 212, rx: 638, ry: 210
    },
    "full-suv": {
      body: "M128 274 L134 218 Q140 194 178 190 L254 182 L330 130 Q360 120 412 120 L582 124 Q624 128 646 170 L668 220 Q674 244 670 270 L648 284 L148 284 Z",
      win1: "M270 182 L340 136 Q364 128 412 128 L450 128 L450 182 Z",
      win2: "M462 128 L566 130 Q602 134 622 174 L624 182 L462 182 Z",
      wx1: 236, wx2: 564, wr: 45, wy: 292, fx: 136, fy: 204, rx: 660, ry: 206,
      roofRail: "M348 122 L572 122"
    },
    "bev-suv": {
      body: "M138 276 L142 232 Q152 204 196 196 L266 186 L346 136 Q378 124 434 124 L560 128 Q604 134 630 174 L656 218 Q664 238 656 270 L636 284 L158 284 Z",
      win1: "M282 184 L354 138 Q382 130 434 130 L462 130 L462 184 Z",
      win2: "M474 130 L554 134 Q590 140 612 176 L614 184 L474 184 Z",
      wx1: 244, wx2: 562, wr: 44, wy: 290, fx: 146, fy: 214, rx: 646, ry: 208
    },
    "city-hatch": {
      body: "M158 284 L162 238 Q170 216 204 210 L264 202 L338 156 Q368 144 418 144 L518 146 Q562 150 586 188 L612 232 Q620 250 614 278 L596 290 L176 290 Z",
      win1: "M282 200 L348 158 Q374 150 418 150 L448 150 L448 200 Z",
      win2: "M460 150 L514 152 Q548 156 568 190 L572 200 L460 200 Z",
      wx1: 244, wx2: 536, wr: 38, wy: 292, fx: 164, fy: 222, rx: 604, ry: 218
    },
    "sedan": {
      body: "M134 284 L140 238 Q150 216 190 210 L268 200 L348 150 Q382 138 438 138 L528 142 Q566 156 594 194 L646 206 Q662 216 662 248 L652 280 L634 290 L152 290 Z",
      win1: "M284 198 L356 154 Q386 144 438 144 L464 144 L464 198 Z",
      win2: "M476 144 L524 148 Q554 160 572 194 L476 198 Z",
      wx1: 238, wx2: 562, wr: 40, wy: 292, fx: 142, fy: 222, rx: 650, ry: 214
    },
    "coupe": {
      body: "M126 284 L132 242 Q146 218 194 210 L292 198 L368 152 Q408 138 468 140 L548 152 Q594 176 626 204 L654 208 Q664 222 660 256 L644 284 L144 284 Z",
      win1: "M314 196 L378 156 Q412 146 468 148 L522 156 Q554 172 570 196 Z",
      win2: "",
      wx1: 234, wx2: 562, wr: 42, wy: 292, fx: 136, fy: 224, rx: 648, ry: 214,
      spoiler: "M610 202 L658 190 L656 204 Z"
    },
    "rangga-pickup": {
      body: "M142 280 L146 226 Q152 204 186 200 L236 194 L274 132 Q292 122 330 122 L384 122 L388 214 L648 214 L652 268 L636 282 L158 282 Z",
      win1: "M250 190 L284 134 Q298 128 332 128 L374 128 L374 190 Z",
      win2: "",
      wx1: 236, wx2: 556, wr: 40, wy: 290, fx: 148, fy: 214, rx: 644, ry: 222
    },
    "hilux-dcab": {
      body: "M130 274 L136 222 Q142 198 182 194 L256 186 L326 134 Q354 124 404 124 L468 124 L472 202 L658 202 L664 264 L644 278 L148 278 Z",
      win1: "M270 184 L334 138 Q356 130 404 130 L458 130 L458 184 Z",
      win2: "",
      wx1: 238, wx2: 566, wr: 45, wy: 290, fx: 138, fy: 210, rx: 652, ry: 210
    },
    "dyna-truck": {
      body: "M154 276 L158 148 Q162 118 198 118 L314 118 L322 214 L654 214 L658 268 L640 278 L170 278 Z",
      win1: "M166 184 L172 132 Q180 126 206 126 L298 126 L298 184 Z",
      win2: "",
      wx1: 234, wx2: 558, wr: 44, wy: 290, fx: 158, fy: 210, rx: 648, ry: 222
    },
    "hiace-van": {
      body: "M138 284 L140 220 Q144 192 174 186 L216 178 L254 110 Q272 100 314 100 L612 102 Q644 106 650 144 L658 232 Q662 260 656 284 L638 292 L154 292 Z",
      win1: "M232 176 L264 116 Q282 108 318 108 L398 108 L398 176 Z",
      win2: "M410 108 L602 110 Q626 114 634 152 L636 176 L410 176 Z",
      wx1: 232, wx2: 566, wr: 40, wy: 294, fx: 142, fy: 204, rx: 646, ry: 208
    }
  };

  const p = profiles[car.chassis] || profiles["mpv"];

  const twoTonePath = car.twoToneRoof
    ? `<path d="${p.win1}" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round" opacity="0.55"/>`
    : "";

  const extraTrim = `
    ${p.roofRail ? `<path d="${p.roofRail}" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>` : ""}
    ${p.spoiler ? `<path d="${p.spoiler}" fill="#0f172a" stroke="${accentLine}" stroke-width="1.2"/>` : ""}
    ${car.grAccent ? `<path d="M${p.wx1 + 48} ${p.wy - 14} L${p.wx2 - 48} ${p.wy - 14}" stroke="#eb0a1e" stroke-width="3.5" stroke-linecap="round"/>` : ""}
  `;

  function renderWheel(cx, cy, r) {
    const rim = Math.round(r * 0.64);
    const hub = Math.round(r * 0.16);
    const caliperColor = car.grAccent ? "#eb0a1e" : "#64748b";
    return `
      <path d="M${cx - r - 8} ${cy - 2} A${r + 8} ${r + 8} 0 0 1 ${cx + r + 8} ${cy - 2} Z" fill="#090d16"/>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#111827" stroke="#334155" stroke-width="2.5"/>
      <circle cx="${cx}" cy="${cy}" r="${rim}" fill="#e2e8f0"/>
      <circle cx="${cx}" cy="${cy}" r="${Math.round(rim * 0.78)}" fill="#1e293b"/>
      <path d="M${cx + 4} ${cy - rim * 0.5} A${rim * 0.6} ${rim * 0.6} 0 0 1 ${cx + rim * 0.6} ${cy + 4}" stroke="${caliperColor}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <g stroke="#cbd5e1" stroke-width="2.6" stroke-linecap="round">
        <line x1="${cx}" y1="${cy - rim + 3}" x2="${cx}" y2="${cy + rim - 3}"/>
        <line x1="${cx - rim + 3}" y1="${cy}" x2="${cx + rim - 3}" y2="${cy}"/>
        <line x1="${cx - rim * 0.68}" y1="${cy - rim * 0.68}" x2="${cx + rim * 0.68}" y2="${cy + rim * 0.68}"/>
        <line x1="${cx + rim * 0.68}" y1="${cy - rim * 0.68}" x2="${cx - rim * 0.68}" y2="${cy + rim * 0.68}"/>
      </g>
      <circle cx="${cx}" cy="${cy}" r="${hub}" fill="#eb0a1e"/>
    `;
  }

  return `
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustrasi ${car.name}">
      <defs>
        <linearGradient id="bg_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBot}"/>
        </linearGradient>
        <radialGradient id="spot_${uid}" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.26"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="paint_${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${c.light}"/>
          <stop offset="52%" stop-color="${c.mid}"/>
          <stop offset="100%" stop-color="${c.dark}"/>
        </linearGradient>
        <linearGradient id="glass_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>

      <!-- Latar & Lantai Showroom -->
      <rect width="800" height="450" fill="url(#bg_${uid})"/>
      <rect width="800" height="450" fill="url(#spot_${uid})"/>
      <rect y="314" width="800" height="136" fill="${floorCol}" fill-opacity="0.72"/>
      <line x1="70" y1="314" x2="730" y2="314" stroke="${accentLine}" stroke-opacity="0.5" stroke-width="2"/>

      <!-- Bayangan Mobil -->
      <ellipse cx="400" cy="336" rx="270" ry="20" fill="#000000" fill-opacity="0.45"/>

      <!-- Bodi Utama -->
      <path d="${p.body}" fill="url(#paint_${uid})" stroke="#94a3b8" stroke-opacity="${c.dark === "#09090b" ? "0.75" : "0.45"}" stroke-width="1.6"/>
      ${twoTonePath}

      <!-- Kaca Kabin -->
      <path d="${p.win1}" fill="url(#glass_${uid})"/>
      ${p.win2 ? `<path d="${p.win2}" fill="url(#glass_${uid})"/>` : ""}

      <!-- Garis Karakter & Hendel Pintu -->
      <path d="M${p.fx + 30} ${p.fy + 16} Q400 218 ${p.rx - 20} ${p.ry + 12}" fill="none" stroke="#ffffff" stroke-opacity="0.32" stroke-width="2"/>
      <rect x="${p.wx1 + 36}" y="${p.fy + 10}" width="18" height="4" rx="2" fill="#94a3b8"/>

      <!-- Lampu Depan LED & Lampu Belakang -->
      <path d="M${p.fx} ${p.fy} L${p.fx + 38} ${p.fy - 6} L${p.fx + 30} ${p.fy + 8} L${p.fx - 2} ${p.fy + 10} Z" fill="#e0f2fe"/>
      <path d="M${p.fx} ${p.fy + 3} L${p.fx + 34} ${p.fy - 2}" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M${p.rx - 28} ${p.ry - 4} L${p.rx + 4} ${p.ry + 4} L${p.rx} ${p.ry + 18} L${p.rx - 32} ${p.ry + 10} Z" fill="#eb0a1e"/>

      <!-- Gril Depan -->
      <path d="M${p.fx - 4} ${p.fy + 22} L${p.fx + 24} ${p.fy + 22} L${p.fx + 18} ${p.fy + 52} L${p.fx - 4} ${p.fy + 50} Z" fill="#111827" opacity="0.85"/>
      ${extraTrim}

      <!-- Roda Depan & Belakang -->
      ${renderWheel(p.wx1, p.wy, p.wr)}
      ${renderWheel(p.wx2, p.wy, p.wr)}
    </svg>
  `;
}

/* Mengambil 1 warna utama untuk setiap model (dari konfigurasi gambar permanen) */
function getCarPrimarySlide(car) {
  const keys = CAR_COLOR_OPTIONS[car.id] || ["white"];
  const entry = keys[0];
  const colorKey = typeof entry === "string" ? entry : entry.key;
  const base = TOYOTA_COLORS[colorKey] || TOYOTA_COLORS.white;
  const staticImg =
    typeof entry === "object" && entry.image
      ? entry.image
      : car.image || null;
  const studioBg =
    typeof entry === "object" && entry.studio
      ? entry.studio
      : car.studio || "dark";
  return { ...base, key: colorKey, image: staticImg, studio: studioBg };
}

/* Menampilkan 1 foto produk atau ilustrasi SVG 1 warna utama */
function renderCarMedia(car, loadingMode = "lazy") {
  const activeSlide = getCarPrimarySlide(car);
  if (activeSlide && activeSlide.image) {
    const studioClass = activeSlide.studio === "light" ? " studio-light" : " studio-dark";
    const loadingAttr = loadingMode === "eager" ? "eager" : "lazy";
    return `<div class="car-media-slot${studioClass}"><img src="${activeSlide.image}" alt="${car.name}" loading="${loadingAttr}" onerror="handleCarImgError(this, '${car.id}')" /></div>`;
  }
  const coloredCar = activeSlide ? { ...car, color: activeSlide } : car;
  return `<div class="car-media-slot">${createCarIllustrationSvg(coloredCar)}</div>`;
}

function handleCarImgError(imgEl, carId) {
  if (imgEl && imgEl.dataset.retriedAltExt !== "1") {
    const rawSrc = imgEl.getAttribute("src") || "";
    if (/\.jpg$/i.test(rawSrc)) {
      imgEl.dataset.retriedAltExt = "1";
      imgEl.src = rawSrc.replace(/\.jpg$/i, ".jpeg");
      return;
    }
    if (/\.jpeg$/i.test(rawSrc)) {
      imgEl.dataset.retriedAltExt = "1";
      imgEl.src = rawSrc.replace(/\.jpeg$/i, ".jpg");
      return;
    }
  }
  const car = TOYOTA_2026_MODELS.find((m) => m.id === carId);
  if (car && imgEl && imgEl.parentElement) {
    imgEl.parentElement.classList.remove("studio-light", "studio-dark");
    const activeSlide = getCarPrimarySlide(car);
    const coloredCar = activeSlide ? { ...car, color: activeSlide } : car;
    imgEl.parentElement.innerHTML = createCarIllustrationSvg(coloredCar);
  }
}

/* ==========================================================================
   Data Tambahan Tampilan Katalog ala tagtoyota.co.id/catalog/
   (Filter Gazoo Racing, Spesifikasi & Keselamatan)
   ========================================================================== */
const GR_MODEL_IDS = new Set([
  "agya",
  "yaris",
  "raize",
  "rush",
  "yaris-cross",
  "corolla-cross",
  "fortuner",
  "land-cruiser",
  "corolla-altis",
  "gr-86",
  "gr-supra",
  "hilux"
]);

function isGrModel(car) {
  return GR_MODEL_IDS.has(car.id);
}

function getCarDetailedSpecs(car) {
  const isCommercial = car.category === "commercial";
  const hasTss = ["veloz", "innova-zenix", "voxy", "alphard", "vellfire", "raize", "yaris-cross", "corolla-cross", "fortuner", "bz4x", "land-cruiser", "corolla-altis", "camry"].includes(car.id);

  return {
    performa: [
      car.electrified
        ? "Tersedia pilihan elektrifikasi ramah lingkungan (Hybrid EV / BEV) dengan respons instan."
        : "Mesin Toyota bertenaga efisien dengan perawatan mudah di bengkel resmi TAG.",
      "Pilihan transmisi sesuai varian resmi pada daftar tipe (M/T, CVT, atau Automatic).",
      isCommercial
        ? "Rangka kokoh berstandar kendaraan niaga (Hilux, Dyna, Hi Ace sudah termasuk KEUR)."
        : "Handling stabil untuk perjalanan harian dalam kota maupun luar kota Palembang."
    ],
    eksterior: [
      "Desain eksterior modern khas Toyota 2026 dengan pencahayaan LED tajam.",
      "Tersedia opsi warna Basic, Premium Color, serta One Tone / Two Tone sesuai tipe.",
      isGrModel(car)
        ? "Tersedia varian GAZOO Racing (GR / GR Sport) dengan sentuhan aero kit sporty."
        : "Proporsi bodi fungsional dengan visibilitas pengemudi luas."
    ],
    interior: [
      ["alphard", "vellfire", "voxy"].includes(car.id)
        ? "Kabin VIP lapang dengan kursi nyaman kelas eksekutif & pintu geser praktis."
        : isCommercial
        ? "Kabin fungsional dengan posisi duduk ergonomis untuk operasional kerja."
        : "Kabin lega dengan tata letak dasbor modern & ruang penyimpanan fleksibel.",
      "Sistem hiburan layar sentuh serta pengaturan AC yang nyaman untuk seluruh penumpang.",
      "Material jok berkualitas dengan ruang kaki dan bagasi serbaguna."
    ],
    keselamatan: [
      "Sistem pengereman ABS + EBD + BA serta struktur bodi penyerap benturan.",
      "Dilengkapi SRS Airbags, Vehicle Stability Control (VSC), dan Hill-Start Assist (HSA) pada tipe tertentu.",
      hasTss
        ? "Tersedia paket keselamatan aktif canggih Toyota Safety Sense (TSS) pada varian TSS."
        : "Fitur keselamatan standar Toyota & kamera/sensor parkir pendukung manuver."
    ]
  };
}
