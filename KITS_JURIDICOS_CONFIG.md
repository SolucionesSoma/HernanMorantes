# 🗂️ CONFIGURACIÓN DE KITS JURÍDICOS

## Archivo de configuración para agregar nuevos kits jurídicos

Este archivo te permite agregar, modificar o eliminar kits jurídicos de la página web de forma sencilla. **No necesitas modificar el código de los componentes**, solo actualizar este archivo.

---

## 📍 Ubicación del archivo de configuración

El archivo principal de configuración está en:
```
/mnt/okcomputer/output/app/src/config.ts
```

Dentro de ese archivo, busca la sección `legalKitsConfig`.

---

## 📝 Cómo agregar un nuevo kit jurídico

### Paso 1: Copiar el formato de un kit existente

Cada kit tiene el siguiente formato:

```typescript
{
  id: "kit-unico",                    // ID único (sin espacios, solo letras, números y guiones)
  title: "Nombre del Kit",            // Título que aparecerá en la tarjeta
  description: "Descripción del kit", // Descripción breve (máximo 2 líneas)
  category: "Categoría",              // Ej: Derecho Ambiental, Derecho del Consumidor
  image: "/images/abogado.jpg",       // Imagen de la tarjeta
  driveLink: "https://drive.google.com/...", // Link de Google Drive
  featured: false,                    // true = tarjeta grande, false = tarjeta normal
}
```

### Paso 2: Agregar el nuevo kit al array

Busca esta sección en `config.ts`:

```typescript
export const legalKitsConfig: LegalKitsConfig = {
  label: "Kits Jurídicos",
  heading: "Recursos legales gratuitos para la comunidad",
  description: "Documentos, guías y herramientas jurídicas...",
  kits: [
    // ← AQUÍ VAN LOS KITS
    {
      id: "kit-1",
      title: "Productos Defectuosos",
      ...
    },
    // Agrega tu nuevo kit aquí
  ],
  ...
};
```

### Paso 3: Ejemplo completo

Para agregar un kit sobre "Derecho de Petición", copia y pega esto dentro del array `kits`:

```typescript
{
  id: "kit-derecho-peticion",
  title: "Derecho de Petición",
  description: "Modelos y guías para presentar derechos de petición efectivos ante entidades públicas y privadas.",
  category: "Derecho Administrativo",
  image: "/images/abogado.jpg",
  driveLink: "https://drive.google.com/drive/folders/TU_LINK_AQUI",
  featured: false,
},
```

---

## 🎨 Opciones de configuración

### Campo `featured`

- `featured: true` → El kit aparece como tarjeta grande (ocupa 2 columnas)
- `featured: false` → El kit aparece como tarjeta normal

**Solo puede haber UN kit con `featured: true`**.

### Campo `image`

Puedes usar:
- `/images/abogado.jpg` - Imagen del abogado (por defecto)
- `/images/logo.jpg` - Logo del bufete
- O subir una imagen nueva a `/public/images/` y usar `/images/tu-imagen.jpg`

---

## 🔗 Cómo obtener el link de Google Drive

1. Abre la carpeta de Google Drive que quieres compartir
2. Haz clic en el botón "Compartir"
3. Cambia los permisos a "Cualquiera con el enlace"
4. Copia el link y pégalo en el campo `driveLink`

---

## ✅ Kits actuales (ejemplos)

```typescript
kits: [
  {
    id: "kit-1",
    title: "Productos Defectuosos",
    description: "Kit completo para la defensa del consumidor ante productos con fallas de fabricación. Incluye modelos de reclamaciones, tutelas y acciones legales.",
    category: "Derecho del Consumidor",
    image: "/images/abogado.jpg",
    driveLink: "https://drive.google.com/drive/folders/1SbAkUZYxz8IFaRgYTB75zAw9Cl4MfRLp?usp=drive_link",
    featured: true,
  },
  {
    id: "kit-2",
    title: "Contaminación Auditiva",
    description: "Herramientas jurídicas para combatir el ruido excesivo en tu comunidad. Guías de medición, modelos de derechos de petición y acciones constitucionales.",
    category: "Derecho Ambiental",
    image: "/images/abogado.jpg",
    driveLink: "https://drive.google.com/drive/mobile/folders/1o9tSNNBf16nUYsdCg4ZyE0MgIdbUO5bQ?usp=drive_link",
  },
  {
    id: "kit-3",
    title: "Contaminación del Aire",
    description: "Recursos para la defensa de la calidad del aire en tu territorio. Documentos técnicos y jurídicos para exigir el derecho a un ambiente sano.",
    category: "Derecho Ambiental",
    image: "/images/abogado.jpg",
    driveLink: "https://drive.google.com/drive/folders/1XQYBGOwpAVlXXLXLohNEvBzOEQPXolO5?usp=drive_link",
  },
],
```

---

## 🚀 Después de hacer cambios

1. Guarda el archivo `config.ts`
2. Reconstruye el proyecto:
   ```bash
   cd /mnt/okcomputer/output/app && npm run build
   ```
3. Vuelve a desplegar el sitio

---

## 💡 Consejos

- **ID único**: Cada kit debe tener un `id` diferente
- **Categorías consistentes**: Usa las mismas categorías para agrupar kits similares
- **Descripciones breves**: Máximo 150 caracteres para mejor visualización
- **Links de Drive**: Asegúrate de que los links sean públicos

---

## 📞 ¿Necesitas ayuda?

Si necesitas agregar muchos kits o hacer cambios complejos, puedes:
1. Copiar este formato para cada nuevo kit
2. Pedirme que agregue los kits por ti
3. Modificar otros campos como títulos y descripciones de secciones en el mismo archivo `config.ts`
