# Petura.shop 🐾

**Petura.shop** (alias *peturashop*) es una tienda demo de productos para mascotas construída con React, Vite y TailwindCSS. Está diseñada como proyecto de referencia para mostrar un catálogo, páginas de categoría, detalle de producto y un carrito de compras simple con estado en contexto.

---

## 📋 Tabla de contenido

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Scripts útiles](#-scripts-útiles)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Cómo añadir/editar productos](#-cómo-añadireditar-productos)
- [Notas importantes](#-notas-importantes)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 📝 Descripción

Proyecto demo que simula una tienda de mascotas online. Incluye:
- Catálogo filtrable por categorías.
- Páginas de categoría (Comida, Juguetes, Accesorios, Salud, Tecnología, ...).
- Página de detalle de producto (`/producto/:id`).
- Carrito con `CartContext` para añadir y gestionar productos.
- Banner de consentimiento de cookies con persistencia en `localStorage`.
- Páginas informativas (Política de Cookies, Privacidad, Términos).

---

## ✅ Características principales

- Filtro por categorías y paginación interna ("Cargar más").
- Enlaces a detalle de producto desde cada tarjeta.
- Componentes reutilizables y hooks personalizados (`useProducts`, `useProductFilters`).
- Accesibilidad básica y mejoras (atributos aria, manejadores de teclado para banner de cookies).
- Configuración de linter (ESLint) y scripts de build / dev.

---

## 🛠 Tecnologías

- React 18
- Vite
- Tailwind CSS
- React Router v6
- Framer Motion
- Lucide Icons
- ESLint

---

## ⚙️ Instalación

Requisitos: Node.js 18+ / npm

```bash
# clonar el repo
git clone <url-del-repo>
cd petura

# instalar dependencias
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

### Construir para producción

```bash
npm run build
```

### Previsualizar build

```bash
npm run preview
```

---

## 📜 Scripts (package.json)

- `dev` — iniciar servidor de desarrollo (Vite)
- `build` — construir para producción
- `preview` — servir build localmente
- `lint` — ejecutar ESLint

---

## 📁 Estructura del proyecto

- `src/`
  - `components/` — Header, Footer, ProductCatalog, ProductCard, CookieConsent, etc.
  - `pages/` — Home, ProductDetail, CookiePolicy, Comida, Juguetes, etc.
  - `hooks/` — `useProducts`, `useProductFilters`, `useMobileMenu`
  - `context/` — `CartContext.jsx`
  - `data/products.js` — datos de ejemplo de productos
  - `services/` — `productService.jsx`
  - `lib/` — utilidades
- `tools/` — scripts auxiliares (incluye placeholder `generate-llms.js`)

---

## ➕ Cómo añadir o editar productos

Los productos están en `src/data/products.js`. Para añadir productos:
1. Añade un objeto con `id`, `title`, `price`, `category`, `image`, `description`, etc.
2. Si la categoría es nueva, añade la etiqueta en `CATEGORIES` en `src/components/ProductCatalog.jsx` para que aparezca en los filtros.

---

## ⚠️ Notas importantes

- Vulnerabilidades: `npm audit` puede reportar vulnerabilidades relacionadas con `esbuild`/`vite`. Recomendado revisar y actualizar `vite` y `esbuild` con pruebas de compatibilidad.
- `tools/generate-llms.js` actualmente es un placeholder; eliminar o sustituir según el flujo de CI que uses.
- Prettier/Husky/lint-staged no están completamente configurados por defecto (puedo añadirlos si quieres).

---

## 🤝 Contribuir

1. Fork + branch nueva: `git checkout -b feat/nueva-funcionalidad`
2. Añade pruebas si procede.
3. Abre un Pull Request describiendo los cambios.

Si quieres, puedo crear plantillas de PR/Issue y configurar CI básico.

---

## 📝 Licencia

Por defecto, añade `LICENSE` con MIT si quieres permitir uso libre. (Puedo añadirla si me lo pides).

---

## ✉️ Contacto

Soporte de ejemplo: `support@petura.shop`

---

Gracias por revisar el proyecto. Si quieres, puedo:
- Añadir `CONTRIBUTING.md` y plantillas de PR/Issue,
- Configurar Prettier + Husky + lint-staged y hooks de commit,
- Intentar actualizar dependencias para corregir advertencias de seguridad con pruebas.
