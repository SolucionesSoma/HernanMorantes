// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN DEL SITIO WEB - ABOGADO HERNAN MORANTES
// ═══════════════════════════════════════════════════════════════════════════
// Este archivo contiene toda la configuración del sitio web.
// Para modificar el contenido, edita los valores dentro de las comillas.

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN GENERAL DEL SITIO
// ───────────────────────────────────────────────────────────────────────────
export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "es",
  title: "Abogado Hernan Morantes | Derecho Administrativo, Ambiental y Constitucional",
  description: "Defiendo personas y comunidades para que la ley deje de ser un muro y vuelva a ser puente hacia la dignidad. Especialista en derecho administrativo, ambiental, constitucional y minero-energético.",
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE NAVEGACIÓN
// ───────────────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoImage: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Hernan Morantes",
  logoImage: "/images/logo.png",
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Kits Jurídicos", href: "#kits" },
    { label: "Contacto", href: "#contacto" },
  ],
  contactLabel: "Agendar Consulta",
  contactHref: "#contacto",
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA SECCIÓN HERO
// ───────────────────────────────────────────────────────────────────────────
export interface HeroConfig {
  name: string;
  subtitle: string;
  roles: string[];
  backgroundImage: string;
  ctaText: string;
  ctaHref: string;
}

export const heroConfig: HeroConfig = {
  name: "Hernan Morantes",
  subtitle: "Litigio estratégico",
  roles: [
    "Derecho Administrativo",
    "Derecho Ambiental", 
    "Derecho Constitucional",
    "Derecho Minero-Energético",
    "Servicios Públicos",
  ],
  backgroundImage: "/images/abogado_3.jpeg?v=20260321",
  ctaText: "Agenda una consulta jurídica estratégica",
  ctaHref: "#contacto",
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA SECCIÓN SOBRE MÍ
// ───────────────────────────────────────────────────────────────────────────
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  heading: string;
  description: string;
  mission: string;
  vision: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "Sobre Mí",
  heading: "Justicia con Estrategia y Propósito",
  description: "El derecho no es para adornar estanterías. Es para ordenar el poder y proteger la vida. Convierto conflictos complejos en decisiones claras y soluciones con impacto ambiental, economico y social.",
  mission: "Brindar asesoría y defensa jurídica rigurosa para proteger los derechos de personas y comunidades, fortaleciendo el Estado de Derecho en los ámbitos administrativo, constitucional, ambiental, minero-energético y de servicios públicos, con ética, pedagogía y litigio estratégico.",
  vision: "Ser una referencia nacional e internacional en defensa jurídica de alto impacto social y ambiental, reconocida por transformar conflictos legales complejos en decisiones justas, sostenibles y comprensibles, donde el derecho no solo resuelve casos, sino mejora la vida colectiva.",
  experienceValue: "11+",
  experienceLabel: "Años de\nExperiencia",
  stats: [
    { value: "500+", label: "Casos Atendidos" },
    { value: "100%", label: "Compromiso" },
    { value: "24h", label: "Respuesta Ágil" },
  ],
  images: [
    { src: "/images/abogado.jpeg", alt: "Hernan Morantes - Abogado" },
    { src: "/images/abogado.jpeg", alt: "Hernan Morantes - Profesional" },
    { src: "/images/abogado.jpeg", alt: "Hernan Morantes - Experiencia" },
    { src: "/images/abogado.jpeg", alt: "Hernan Morantes - Dedicación" },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA SECCIÓN SERVICIOS
// ───────────────────────────────────────────────────────────────────────────
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Servicios",
  heading: "Asesoría y litigio estratégico con propósito",
  description: "Trabajamos con criterio, estrategia y resultados con impacto social, ecónomico y ambiental.",
  services: [
    {
      iconName: "Scale",
      title: "Asesoría y Consultoría Jurídica",
      description: "Análisis jurídico especializado con enfoque preventivo y visión territorial. Lenguaje claro sin sacrificar rigor técnico.",
      features: [
        "Análisis en derecho administrativo, ambiental, constitucional y minero-energético",
        "Conceptos escritos y revisión de proyectos de ley y actos administrativos",
        "Enfoque para comunidades, servidores públicos, ONG's y veedurías",
        "Hoja de ruta concreta desde la primera asesoría"
      ],
      image: "/images/consultoria.png",
    },
    {
      iconName: "Gavel",
      title: "Representación Judicial (Litigio Estratégico)",
      description: "No es litigio por volumen, es litigio con propósito. Casos pensados para generar impacto, no solo sentencias.",
      features: [
        "Acciones constitucionales y contencioso-administrativas",
        "Litigio en temas ambientales y minero-enérgeticos",
        "Litigio en servicios públicos",
        "Presentación rápida de acciones urgentes"
      ],
      image: "/images/litigio.jpeg",
    },
    {
      iconName: "BookOpen",
      title: "Educación Legal para Comunidades y Empresas",
      description: "Talleres y capacitaciones que empoderan.",
      features: [
        "Formación jurídica aplicada con casos reales",
        "Metodología práctica y ejemplos cotidianos",
        "Enfoque en mecanismos juridicos para la protección de derechos",
      ],
      image: "/images/educacion.png",
    },
    {
      iconName: "Shield",
      title: "Derecho Ambiental y Minero-Energético",
      description: "Defensa del territorio, el agua y el ambiente con visión constitucional y litigio estratégico.",
      features: [
        "Defensa de comunidades afectadas por proyectos extractivos",
        "Protección de los ecosistemas y el ambiente",
        "Asesoría en derecho minero-energético y transición enérgetica",
      ],
      image: "/images/ambiental.jpeg",
    },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA SECCIÓN KITS JURÍDICOS
// ───────────────────────────────────────────────────────────────────────────
// PARA AGREGAR NUEVOS KITS:
// 1. Copia el formato de un kit existente
// 2. Cambia el id (debe ser único)
// 3. Modifica el título, descripción, categoría, imagen y link
// 4. Guarda el archivo

export interface LegalKit {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  driveLink: string;
  featured?: boolean;
}

export interface LegalKitsConfig {
  label: string;
  heading: string;
  description: string;
  kits: LegalKit[];
  cta: {
    label: string;
    heading: string;
    linkText: string;
    linkHref: string;
  };
}

export const legalKitsConfig: LegalKitsConfig = {
  label: "Kits Jurídicos",
  heading: "Recursos legales gratuitos para la comunidad",
  description: "Documentos, guías y herramientas jurídicas diseñadas para empoderar a personas y comunidades en la defensa de sus derechos.",
  kits: [
    {
      id: "kit-1",
      title: "Productos Defectuosos",
      description: "Kit completo para la defensa del consumidor ante productos con fallas de fabricación. Incluye modelos de reclamaciones, tutelas y acciones legales.",
      category: "Derecho del Consumidor",
      image: "https://guialegal.com/wp-content/uploads/2021/03/productos-defectuosos-1400x1000.jpg",
      driveLink: "https://drive.google.com/drive/folders/1SbAkUZYxz8IFaRgYTB75zAw9Cl4MfRLp?usp=drive_link",
      featured: true,
    },
    {
      id: "kit-2",
      title: "Contra el ruido",
      description: "Herramientas jurídicas para combatir el ruido excesivo en tu comunidad. Guías de medición, modelos de derechos de petición y acciones constitucionales.",
      category: "Derecho Ambiental",
      image: "https://www.oemais.com/es/efectos-del-ruido-en-la-salud_img62130t1.jpg",
      driveLink: "https://drive.google.com/drive/mobile/folders/1o9tSNNBf16nUYsdCg4ZyE0MgIdbUO5bQ?usp=drive_link",
    },
    {
      id: "kit-3",
      title: "Contaminación del Aire",
      description: "Recursos para la defensa de la calidad del aire en tu territorio. Documentos técnicos y jurídicos para exigir el derecho a un ambiente sano.",
      category: "Derecho Ambiental",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      driveLink: "https://drive.google.com/drive/folders/1XQYBGOwpAVlXXLXLohNEvBzOEQPXolO5?usp=drive_link",
    },
{
  id: "kit-4",
  title: "Protección de datos (Habeas Data)",
  description: "Herramientas jurídicas para la protección de datos personales ante centrales de riesgo, sistema financiero, etc.",
  category: "Derecho de Protección de Datos",
  image: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  driveLink: "https://drive.google.com/drive/folders/1VnM1KZXsQ7TnFPAo0beNxAd0Z0X5GAzX?usp=drive_link",
}
  ],
  cta: {
    label: "¿Necesitas un kit específico?",
    heading: "Solicita un kit jurídico personalizado",
    linkText: "Contactar para más información",
    linkHref: "#contacto",
  },
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA SECCIÓN PORTAFOLIO (COMPATIBILIDAD CON TEMPLATE)
// ───────────────────────────────────────────────────────────────────────────
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Casos",
  heading: "Experiencia en defensa jurídica",
  description: "Casos representativos que demuestran el compromiso con la justicia y los derechos de las comunidades.",
  projects: [
    {
      title: "Defensa del Territorio",
      category: "Derecho Ambiental",
      year: "2024",
      image: "/images/abogado.jpg",
      featured: true,
    },
    {
      title: "Protección de Servicios Públicos",
      category: "Derecho Administrativo",
      year: "2024",
      image: "/images/abogado.jpg",
    },
    {
      title: "Acciones Constitucionales",
      category: "Derecho Constitucional",
      year: "2023",
      image: "/images/abogado.jpg",
    },
    {
      title: "Consultoría Minero-Energética",
      category: "Derecho Minero",
      year: "2023",
      image: "/images/abogado.jpg",
    },
    {
      title: "Capacitación Comunitaria",
      category: "Educación Legal",
      year: "2023",
      image: "/images/abogado.jpg",
    },
  ],
  cta: {
    label: "¿Tienes un caso similar?",
    heading: "Hablemos sobre tu situación",
    linkText: "Agendar consulta",
    linkHref: "#contacto",
  },
  viewAllLabel: "Ver todos los casos",
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA SECCIÓN TESTIMONIOS
// ───────────────────────────────────────────────────────────────────────────
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonios",
  heading: "Lo que dicen quienes han confiado en mi trabajo",
  testimonials: [
    {
      quote: "El doctor Morantes no solo resolvió nuestro caso, nos enseñó a entender el derecho como herramienta de empoderamiento. Su pedagogía legal es excepcional.",
      author: "María González",
      role: "Líder Comunitaria",
      company: "Veeduría Ciudadana del Agua",
      image: "/images/abogado.jpg",
      rating: 5,
    },
    {
      quote: "Profesionalismo, rigor técnico y una respuesta ágil que nos permitió actuar antes de que el daño fuera irreversible. Exactamente lo que necesitábamos.",
      author: "Carlos Ramírez",
      role: "Presidente",
      company: "Junta de Acción Comunal",
      image: "/images/abogado.jpg",
      rating: 5,
    },
    {
      quote: "Finalmente un abogado que habla claro, sin lenguaje críptico. Nos dio tranquilidad y resultados concretos en un caso que parecía perdido.",
      author: "Ana Patricia López",
      role: "Servidora Pública",
      company: "Alcaldía Municipal",
      image: "/images/abogado.jpg",
      rating: 5,
    },
  ],
};



// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE LA SECCIÓN CTA (LLAMADO A LA ACCIÓN)
// ───────────────────────────────────────────────────────────────────────────
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Derecho Administrativo", "Derecho Ambiental", "Derecho Constitucional", "Litigio Estratégico"],
  heading: "Agenda una consulta jurídica estratégica",
  description: "Un primer paso corto, para un conflicto que ya es largo. Te ayudo a convertir problemas jurídicos complejos en decisiones claras y soluciones efectivas.",
  buttonText: "Contactar por WhatsApp",
  buttonHref: "https://wa.me/573125841631",
  email: "abogadohm92@gmail.com",
  phone: "+57 312 584 1631",
  whatsappNumber: "573125841631",
  whatsappMessage: "Hola, estoy interesado en agendar una consulta jurídica estratégica. ¿Podemos hablar?",
  backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL FORMULARIO DE CONTACTO
// ───────────────────────────────────────────────────────────────────────────
export interface ContactConfig {
  label: string;
  heading: string;
  description: string;
  formLabels: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    submit: string;
  };
  whatsappMessageTemplate: string;
}

export const contactConfig: ContactConfig = {
  label: "Contacto",
  heading: "Hablemos de tu caso",
  description: "Completa el formulario y te responderé en menos de 24 horas. Tu consulta es confidencial y sin compromiso.",
  formLabels: {
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono",
    subject: "Asunto",
    message: "Cuéntame sobre tu caso",
    submit: "Enviar por WhatsApp",
  },
  whatsappMessageTemplate: "Hola, soy *{nombre}*.\n\n*Asunto:* {asunto}\n\n*Mensaje:* {mensaje}\n\n*Contacto:* {email} / {telefono}\n\nMe gustaría agendar una consulta jurídica estratégica.",
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL FOOTER
// ───────────────────────────────────────────────────────────────────────────
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  logoImage: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Hernan Morantes",
  logoImage: "/images/logo.png",
  description: "Defiendo personas y comunidades para que la ley deje de ser un muro y vuelva a ser puente: hacia la dignidad.",
  columns: [
    {
      title: "Servicios",
      links: [
        { label: "Asesoría Jurídica", href: "#servicios" },
        { label: "Litigio Estratégico", href: "#servicios" },
        { label: "Educación Legal", href: "#servicios" },
        { label: "Derecho Ambiental", href: "#servicios" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Kits Jurídicos", href: "#kits" },
        { label: "Productos Defectuosos", href: "#kits" },
        { label: "Contaminación Auditiva", href: "#kits" },
        { label: "Contaminación del Aire", href: "#kits" },
        { label: "Protección de datos personales (habeas Data)", href: "#kits" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "WhatsApp", href: "https://wa.me/573125841631" },
        { label: "Email", href: "mailto:abogadohm92@gmail.com" },
        { label: "Teléfono", href: "tel:+573125841631" },
        { label: "Agendar Consulta", href: "#contacto" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "TikTok", href: "https://www.tiktok.com/@hernanmorantes", label: "TikTok" },
     { iconName: "Youtube", href: "https://www.youtube.com/@hernanmorantes3474", label: "Youtube" },
    { iconName: "Facebook", href: "https://www.facebook.com/profile.php?id=61587600744452", label: "Facebook" },
    { iconName: "X", href: "https://x.com/HernanMorantes", label: "X" },
    { iconName: "Instagram", href: "https://www.instagram.com/abogadohernanmorantes/tagged/", label: "Instagram" },
  ],
  newsletterHeading: "Mantente informado",
  newsletterDescription: "Recibe actualizaciones jurídicas y nuevos kits directamente en tu correo solicitandolo por nuestros medios de comunicación.",
  newsletterButtonText: "Suscribirse",
  newsletterPlaceholder: "Tu correo electrónico",
  copyright: "© 2026 Hernan Morantes. Todos los derechos reservados.",
  credit: "Abogado especialista en derecho administrativo, ambiental y constitucional.",
};

// ───────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE VALORES DE LA MARCA
// ───────────────────────────────────────────────────────────────────────────
export interface ValueItem {
  title: string;
  description: string;
}

export interface BrandValuesConfig {
  label: string;
  heading: string;
  values: ValueItem[];
}

export const brandValuesConfig: BrandValuesConfig = {
  label: "Valores",
  heading: "Los principios que guían mi práctica",
  values: [
    { title: "Rectitud", description: "La ley como línea recta, no como laberinto conveniente." },
    { title: "Seriedad", description: "Rigor técnico sin solemnidad innecesaria." },
    { title: "Profesionalismo", description: "Método, estudio y responsabilidad en cada actuación." },
    { title: "Efectividad", description: "Resultados medibles, no promesas retóricas." },
    { title: "Celeridad", description: "El derecho llega a tiempo o no llega." },
    { title: "Cercanía", description: "Trato humano, escucha activa, acompañamiento real." },
    { title: "Respuesta Ágil", description: "Claridad y acción cuando el cliente más lo necesita." },
    { title: "Sinceridad", description: "Decir lo jurídicamente posible, no lo emocionalmente cómodo." },
    { title: "Experiencia", description: "Criterio formado en la práctica, no solo en los libros." },
  ],
};
