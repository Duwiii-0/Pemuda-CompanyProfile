export interface Competition {
  id: number;
  title: string;
  description: string;
  logoUrl: string;
  logoAlt: string;
  registrationLink: string;
  proposalLink?: string;
  websiteLink?: string;
  category: 'sports' | 'academic' | 'creative' | 'business' | 'technology';
  status: 'open' | 'closed' | 'coming-soon';
  deadline?: string;
  prize?: string;
  featured?: boolean;
}

export const competitions: Competition[] = [
  {
    id: 1,
    title: "Sriwijaya International Taekwondo Championship 2025",
    description: "Kompetisi taekwondo internasional bergengsi yang menggabungkan tradisi dan inovasi, menghadirkan standar kompetisi kelas dunia untuk para atlet berprestasi di Asia Tenggara.",
    logoUrl: "/assets/logos/sriwijaya-logo.png",
    logoAlt: "Sriwijaya Taekwondo Championship Logo",
    registrationLink: "https://forms.gle/sriwijaya-taekwondo-2025",
    proposalLink: "https://drive.google.com/file/d/1vA7Rc6scIsrEHVjajt3WIagbhx_9i_po/view?usp=sharing",
    websiteLink: "https://sriwijaya-taekwondo.com",
    category: 'sports',
    status: 'open',
    deadline: "15 Oktober 2025",
    prize: "Total hadiah 500 juta rupiah",
    featured: true
  },
  {
    id: 2,
    title: "Palembang Mathematics Olympiad 2025",
    description: "Olimpiade matematika tingkat nasional untuk siswa SMA/MA sederajat. Ajang bergengsi untuk mengasah kemampuan logika dan analitis dalam matematika dengan soal-soal berkualitas internasional.",
    logoUrl: "/assets/logos/math-olympiad-logo.png",
    logoAlt: "Mathematics Olympiad Logo",
    registrationLink: "https://forms.gle/palembang-math-olympiad-2025",
    proposalLink: "https://drive.google.com/file/d/math-olympiad-proposal/view?usp=sharing",
    category: 'academic',
    status: 'open',
    deadline: "30 September 2025",
    prize: "Beasiswa dan uang pembinaan",
    featured: true
  },
  {
    id: 3,
    title: "Pemuda Berprestasi Futsal Cup 2025",
    description: "Turnamen futsal antar sekolah dan universitas se-Sumatera Selatan. Membangun sportivitas dan mengembangkan bakat olahraga futsal di kalangan pemuda dengan sistem kompetisi profesional.",
    logoUrl: "/assets/logos/futsal-cup-logo.png",
    logoAlt: "Futsal Cup Logo",
    registrationLink: "https://forms.gle/pemuda-berprestasi-futsal-2025",
    websiteLink: "https://futsal.pemudaberprestasi.org",
    category: 'sports',
    status: 'open',
    deadline: "20 Oktober 2025",
    prize: "Trofi dan uang pembinaan"
  },
  {
    id: 4,
    title: "Creative Design Competition 2025",
    description: "Kompetisi desain kreatif untuk mahasiswa dan profesional muda. Kategori meliputi graphic design, UI/UX design, dan digital illustration dengan penilaian dari desainer profesional.",
    logoUrl: "/assets/logos/design-competition-logo.png",
    logoAlt: "Creative Design Competition Logo",
    registrationLink: "https://forms.gle/creative-design-competition-2025",
    proposalLink: "https://drive.google.com/file/d/design-competition-proposal/view?usp=sharing",
    websiteLink: "https://design.pemudaberprestasi.org",
    category: 'creative',
    status: 'open',
    deadline: "25 September 2025",
    prize: "Sertifikat dan peluang magang"
  },
  {
    id: 5,
    title: "Entrepreneur Summit & Business Plan Competition 2025",
    description: "Summit kewirausahaan dengan kompetisi business plan untuk generasi muda. Mengembangkan jiwa entrepreneur dan inovasi bisnis berkelanjutan dengan mentoring dari praktisi bisnis sukses.",
    logoUrl: "/assets/logos/entrepreneur-summit-logo.png",
    logoAlt: "Entrepreneur Summit Logo",
    registrationLink: "https://forms.gle/entrepreneur-summit-2025",
    proposalLink: "https://drive.google.com/file/d/entrepreneur-summit-proposal/view?usp=sharing",
    websiteLink: "https://entrepreneur.pemudaberprestasi.org",
    category: 'business',
    status: 'open',
    deadline: "10 Oktober 2025",
    prize: "Modal usaha dan mentoring bisnis",
    featured: true
  },
  {
    id: 6,
    title: "Palembang Debate Tournament 2025",
    description: "Turnamen debat bahasa Indonesia dan Inggris tingkat nasional. Mengasah kemampuan public speaking, critical thinking, dan argumentasi dengan topik-topik kontemporer.",
    logoUrl: "/assets/logos/debate-tournament-logo.png",
    logoAlt: "Debate Tournament Logo",
    registrationLink: "https://forms.gle/palembang-debate-tournament-2025",
    proposalLink: "https://drive.google.com/file/d/debate-tournament-proposal/view?usp=sharing",
    category: 'academic',
    status: 'open',
    deadline: "5 Oktober 2025",
    prize: "Piala dan sertifikat prestasi"
  },
  {
    id: 7,
    title: "Innovation Technology Challenge 2025",
    description: "Kompetisi inovasi teknologi untuk mahasiswa dan startup muda. Mengembangkan solusi teknologi untuk permasalahan sosial dan lingkungan dengan pendekatan sustainable development.",
    logoUrl: "/assets/logos/tech-innovation-logo.png",
    logoAlt: "Technology Innovation Logo",
    registrationLink: "https://forms.gle/tech-innovation-challenge-2025",
    proposalLink: "https://drive.google.com/file/d/tech-innovation-proposal/view?usp=sharing",
    websiteLink: "https://tech.pemudaberprestasi.org",
    category: 'technology',
    status: 'coming-soon',
    deadline: "1 November 2025",
    prize: "Inkubasi startup dan dana seed funding"
  },
  {
    id: 8,
    title: "Palembang Literary Festival 2025",
    description: "Festival sastra dengan kompetisi menulis cerpen, puisi, dan esai untuk pelajar dan mahasiswa. Menumbuhkan minat baca dan tulis serta apresiasi terhadap karya sastra Indonesia.",
    logoUrl: "/assets/logos/literary-festival-logo.png",
    logoAlt: "Literary Festival Logo",
    registrationLink: "https://forms.gle/literary-festival-2025",
    proposalLink: "https://drive.google.com/file/d/literary-festival-proposal/view?usp=sharing",
    category: 'creative',
    status: 'open',
    deadline: "15 September 2025",
    prize: "Publikasi karya dan workshop menulis"
  }
];

// Helper functions for filtering and managing competitions
export const getCompetitionsByCategory = (category: Competition['category']) => {
  return competitions.filter(comp => comp.category === category);
};

export const getFeaturedCompetitions = () => {
  return competitions.filter(comp => comp.featured === true);
};

export const getOpenCompetitions = () => {
  return competitions.filter(comp => comp.status === 'open');
};

export const getCompetitionById = (id: number) => {
  return competitions.find(comp => comp.id === id);
};

// Categories configuration
export const categories = [
  {
    id: 'sports',
    name: 'Olahraga',
    icon: '🏆',
    color: 'bg-red-500',
    description: 'Kompetisi olahraga berbagai cabang'
  },
  {
    id: 'academic',
    name: 'Akademik',
    icon: '📚',
    color: 'bg-blue-500',
    description: 'Olimpiade dan kompetisi akademik'
  },
  {
    id: 'creative',
    name: 'Kreatif',
    icon: '🎨',
    color: 'bg-purple-500',
    description: 'Kompetisi seni dan desain kreatif'
  },
  {
    id: 'business',
    name: 'Bisnis',
    icon: '💼',
    color: 'bg-green-500',
    description: 'Kompetisi kewirausahaan dan bisnis'
  },
  {
    id: 'technology',
    name: 'Teknologi',
    icon: '💻',
    color: 'bg-indigo-500',
    description: 'Inovasi dan pengembangan teknologi'
  }
] as const;