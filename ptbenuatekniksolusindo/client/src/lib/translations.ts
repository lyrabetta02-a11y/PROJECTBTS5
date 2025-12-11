export type Language = "en" | "id";

export interface TranslationKeys {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    whatsapp: string;
    contactUs: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    portfolioBtn: string;
    contactBtn: string;
    scrollDown: string;
  };
  about: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    button: string;
    points: {
      certified: string;
      iso: string;
      experience: string;
      support: string;
    };
  };
  services: {
    badge: string;
    title: string;
    description: string;
    items: {
      installation: { title: string; desc: string };
      ducting: { title: string; desc: string };
      maintenance: { title: string; desc: string };
      design: { title: string; desc: string };
    };
  };
  projects: {
    badge: string;
    title: string;
    viewAll: string;
    filterAll: string;
    categories: {
      chiller: string;
      ducting: string;
      vrv: string;
      maintenance: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    office: string;
    phone: string;
    email: string;
    hours: string;
    formTitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
    days: {
      weekdays: string;
      weekend: string;
    };
  };
  cta: {
    title: string;
    description: string;
    quoteBtn: string;
    brochureBtn: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    ourServices: string;
    contactUs: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      whatsapp: "WhatsApp",
      contactUs: "Contact Us",
    },
    hero: {
      badge: "HVAC Contractor Specialist",
      title: "Engineering Comfort\nThrough Excellence.",
      subtitle: "Through Excellence.",
      description: "PT Benua Teknik Solusindo delivers premium HVAC solutions for commercial and industrial facilities. We ensure optimal climate control with efficiency and precision.",
      portfolioBtn: "View Our Portfolio",
      contactBtn: "Contact Us",
      scrollDown: "Scroll Down",
    },
    about: {
      badge: "About Us",
      title: "Leading the Way in Climate Control Engineering",
      description1: "At PT Benua Teknik Solusindo, we combine technical expertise with a commitment to quality. Our mission is to provide energy-efficient and reliable HVAC solutions that create comfortable and productive environments for our clients.",
      description2: "From skyscrapers to industrial plants, our team brings precision engineering and luxury service standards to every project we undertake.",
      button: "Learn More About Us",
      points: {
        certified: "Certified HVAC Engineers",
        iso: "ISO 9001 Compliant Processes",
        experience: "10+ Years of Experience",
        support: "24/7 Emergency Support",
      },
    },
    services: {
      badge: "Our Expertise",
      title: "Comprehensive HVAC Solutions",
      description: "We provide end-to-end services from initial design to installation and long-term maintenance, ensuring your facility operates at peak performance.",
      items: {
        installation: {
          title: "Installation",
          desc: "Expert installation of Chiller, VRV/VRF, and Split systems for commercial and industrial needs."
        },
        ducting: {
          title: "Ducting Works",
          desc: "Custom fabrication and installation of high-quality ductwork for optimal airflow efficiency."
        },
        maintenance: {
          title: "Maintenance",
          desc: "Comprehensive maintenance contracts to ensure your systems run at peak efficiency year-round."
        },
        design: {
          title: "System Design",
          desc: "Professional HVAC engineering and design services tailored to your building's specifications."
        }
      }
    },
    projects: {
      badge: "Our Portfolio",
      title: "Featured Projects",
      viewAll: "View All Projects",
      filterAll: "All",
      categories: {
        chiller: "Chiller",
        ducting: "Ducting",
        vrv: "VRV/VRF",
        maintenance: "Maintenance"
      }
    },
    contact: {
      badge: "Get In Touch",
      title: "Contact Information",
      subtitle: "Get in touch with our team for consultations, quotes, or emergency support.",
      infoTitle: "Contact Information",
      office: "Our Office",
      phone: "Phone & WhatsApp",
      email: "Email",
      hours: "Working Hours",
      formTitle: "Send us a Message",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company (Optional)",
        message: "Message",
        submit: "Send Message",
      },
      days: {
        weekdays: "Mon - Fri",
        weekend: "Sat - Sun",
      }
    },
    cta: {
      title: "Ready to Start Your Project?",
      description: "Contact our team today for a consultation and discover how we can deliver superior climate control solutions for your business.",
      quoteBtn: "Get a Quote",
      brochureBtn: "Download Brochure",
    },
    footer: {
      description: "Professional HVAC contractor providing world-class installation, maintenance, and design solutions for commercial and industrial clients.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactUs: "Contact Us",
      rights: "© 2025 PT Benua Teknik Solusindo. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      projects: "Proyek",
      contact: "Kontak",
      whatsapp: "WhatsApp",
      contactUs: "Hubungi Kami",
    },
    hero: {
      badge: "Spesialis Kontraktor HVAC",
      title: "Kenyamanan Melalui\nKeunggulan Teknik.",
      subtitle: "Keunggulan Teknik.",
      description: "PT Benua Teknik Solusindo menghadirkan solusi HVAC premium untuk fasilitas komersial dan industri. Kami memastikan kontrol iklim yang optimal dengan efisiensi dan presisi tinggi.",
      portfolioBtn: "Lihat Portofolio Kami",
      contactBtn: "Hubungi Kami",
      scrollDown: "Gulir ke Bawah",
    },
    about: {
      badge: "Tentang Kami",
      title: "Terdepan dalam Teknik Kontrol Iklim",
      description1: "Di PT Benua Teknik Solusindo, kami menggabungkan keahlian teknis dengan komitmen terhadap kualitas. Misi kami adalah menyediakan solusi HVAC yang hemat energi dan andal yang menciptakan lingkungan nyaman dan produktif bagi klien kami.",
      description2: "Dari gedung pencakar langit hingga pabrik industri, tim kami membawa teknik presisi dan standar layanan mewah untuk setiap proyek yang kami kerjakan.",
      button: "Pelajari Lebih Lanjut",
      points: {
        certified: "Insinyur HVAC Bersertifikat",
        iso: "Proses Sesuai ISO 9001",
        experience: "Pengalaman 10+ Tahun",
        support: "Dukungan Darurat 24/7",
      },
    },
    services: {
      badge: "Keahlian Kami",
      title: "Solusi HVAC Komprehensif",
      description: "Kami menyediakan layanan menyeluruh mulai dari desain awal hingga instalasi dan pemeliharaan jangka panjang, memastikan fasilitas Anda beroperasi pada kinerja puncak.",
      items: {
        installation: {
          title: "Instalasi",
          desc: "Instalasi ahli sistem Chiller, VRV/VRF, dan Split untuk kebutuhan komersial dan industri."
        },
        ducting: {
          title: "Pekerjaan Ducting",
          desc: "Fabrikasi khusus dan instalasi saluran udara berkualitas tinggi untuk efisiensi aliran udara yang optimal."
        },
        maintenance: {
          title: "Pemeliharaan",
          desc: "Kontrak pemeliharaan komprehensif untuk memastikan sistem Anda berjalan pada efisiensi puncak sepanjang tahun."
        },
        design: {
          title: "Desain Sistem",
          desc: "Layanan teknik dan desain HVAC profesional yang disesuaikan dengan spesifikasi bangunan Anda."
        }
      }
    },
    projects: {
      badge: "Portofolio Kami",
      title: "Proyek Unggulan",
      viewAll: "Lihat Semua Proyek",
      filterAll: "Semua",
      categories: {
        chiller: "Chiller",
        ducting: "Ducting",
        vrv: "VRV/VRF",
        maintenance: "Pemeliharaan"
      }
    },
    contact: {
      badge: "Hubungi Kami",
      title: "Informasi Kontak",
      subtitle: "Hubungi tim kami untuk konsultasi, penawaran, atau dukungan darurat.",
      infoTitle: "Informasi Kontak",
      office: "Kantor Kami",
      phone: "Telepon & WhatsApp",
      email: "Email",
      hours: "Jam Kerja",
      formTitle: "Kirim Pesan",
      form: {
        name: "Nama Lengkap",
        email: "Alamat Email",
        company: "Perusahaan (Opsional)",
        message: "Pesan",
        submit: "Kirim Pesan",
      },
      days: {
        weekdays: "Sen - Jum",
        weekend: "Sab - Ming",
      }
    },
    cta: {
      title: "Siap Memulai Proyek Anda?",
      description: "Hubungi tim kami hari ini untuk konsultasi dan temukan bagaimana kami dapat memberikan solusi kontrol iklim yang unggul untuk bisnis Anda.",
      quoteBtn: "Dapatkan Penawaran",
      brochureBtn: "Unduh Brosur",
    },
    footer: {
      description: "Kontraktor HVAC profesional yang menyediakan solusi instalasi, pemeliharaan, dan desain kelas dunia untuk klien komersial dan industri.",
      quickLinks: "Tautan Cepat",
      ourServices: "Layanan Kami",
      contactUs: "Hubungi Kami",
      rights: "© 2025 PT Benua Teknik Solusindo. Hak cipta dilindungi undang-undang.",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
    },
  },
};
