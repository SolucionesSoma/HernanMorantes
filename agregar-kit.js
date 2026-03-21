// ═══════════════════════════════════════════════════════════════════════════
// AGREGAR NUEVOS KITS JURÍDICOS
// ═══════════════════════════════════════════════════════════════════════════
// 
// INSTRUCCIONES:
// 1. Copia el template de abajo
// 2. Completa la información de tu nuevo kit
// 3. Pégalo en el array de kits en: /mnt/okcomputer/output/app/src/config.ts
// 4. Guarda el archivo y reconstruye el proyecto
//
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// TEMPLATE PARA NUEVO KIT - Copia desde aquí
// ═══════════════════════════════════════════════════════════════════════════

{
  id: "kit-nombre-unico",              // ← Cambia esto (solo letras, números y guiones)
  title: "Nombre del Kit",              // ← Título del kit
  description: "Descripción breve del kit jurídico. Máximo 2 líneas.",  // ← Descripción
  category: "Derecho Ambiental",        // ← Categoría: Derecho Ambiental, Derecho del Consumidor, etc.
  image: "/images/abogado.jpg",         // ← Imagen (puedes usar /images/abogado.jpg o /images/logo.jpg)
  driveLink: "https://drive.google.com/drive/folders/TU_LINK_AQUI",  // ← Link de Google Drive
  featured: false,                      // ← true = tarjeta grande, false = tarjeta normal
},

// ═══════════════════════════════════════════════════════════════════════════
// EJEMPLOS DE KITS (Copia y modifica)
// ═══════════════════════════════════════════════════════════════════════════

// Ejemplo 1: Kit de Derecho de Petición
{
  id: "kit-derecho-peticion",
  title: "Derecho de Petición",
  description: "Modelos y guías para presentar derechos de petición efectivos ante entidades públicas y privadas.",
  category: "Derecho Administrativo",
  image: "/images/abogado.jpg",
  driveLink: "https://drive.google.com/drive/folders/TU_LINK_AQUI",
  featured: false,
},

// Ejemplo 2: Kit de Tutelas
{
  id: "kit-tutelas",
  title: "Acciones de Tutela",
  description: "Modelos de tutelas para la protección de derechos fundamentales. Incluye guías paso a paso.",
  category: "Derecho Constitucional",
  image: "/images/abogado.jpg",
  driveLink: "https://drive.google.com/drive/folders/TU_LINK_AQUI",
  featured: false,
},

// Ejemplo 3: Kit de Servicios Públicos
{
  id: "kit-servicios-publicos",
  title: "Servicios Públicos Domiciliarios",
  description: "Defensa ante cobros excesivos, suspensiones indebidas y mala prestación del servicio.",
  category: "Derecho Administrativo",
  image: "/images/abogado.jpg",
  driveLink: "https://drive.google.com/drive/folders/TU_LINK_AQUI",
  featured: false,
},

// ═══════════════════════════════════════════════════════════════════════════
// PASOS PARA AGREGAR UN KIT
// ═══════════════════════════════════════════════════════════════════════════
//
// 1. Abre el archivo: /mnt/okcomputer/output/app/src/config.ts
//
// 2. Busca la sección "legalKitsConfig" (línea ~231)
//
// 3. Dentro del array "kits: [...]", agrega una coma después del último kit
//    y pega tu nuevo kit
//
// 4. El resultado debe verse así:
//    
//    kits: [
//      {
//        id: "kit-1",
//        title: "Productos Defectuosos",
//        ...
//      },
//      {
//        id: "kit-2", 
//        title: "Contaminación Auditiva",
//        ...
//      },
//      {
//        id: "kit-nuevo",     // ← TU NUEVO KIT AQUÍ
//        title: "Nuevo Kit",
//        ...
//      },
//    ],
//
// 5. Guarda el archivo
//
// 6. Reconstruye el proyecto ejecutando en terminal:
//    cd /mnt/okcomputer/output/app && npm run build
//
// 7. ¡Listo! Tu nuevo kit aparecerá en la página
//
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORÍAS SUGERIDAS
// ═══════════════════════════════════════════════════════════════════════════
//
// • Derecho Ambiental
// • Derecho Administrativo
// • Derecho Constitucional
// • Derecho del Consumidor
// • Derecho Minero-Energético
// • Servicios Públicos
// • Educación Legal
// • Derechos Humanos
//
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// NOTAS IMPORTANTES
// ═══════════════════════════════════════════════════════════════════════════
//
// • El campo "id" debe ser ÚNICO para cada kit
// • El campo "featured" solo puede ser true en UN kit (el más importante)
// • La descripción debe ser breve (máximo 150 caracteres)
// • El link de Google Drive debe ser público
// • Después de agregar un kit, siempre reconstruye el proyecto
//
// ═══════════════════════════════════════════════════════════════════════════
