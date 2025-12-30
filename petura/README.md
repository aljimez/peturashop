# Petura.shop 🐾

**Petura.shop** es una tienda demo de productos para mascotas construída con React + Vite y TailwindCSS. El proyecto incluye catálogo de productos, páginas de categoría, detalle de producto, carrito con contexto, y un sistema de consentimiento de cookies. Este README resume cómo instalar, ejecutar y contribuir al proyecto.

---

## 📋 Tabla de contenido

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Scripts útiles](#-scripts-útiles)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Cómo añadir/editar productos](#-cómo-añadireditar-productos)
- [Puntos importantes / notas](#-puntos-importantes--notas)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## ✅ Características

- Catálogo de productos con filtrado por categorías.
- Páginas de categoría (Comida, Juguetes, Accesorios, Salud, Tecnología, etc.).
- Página de detalle de producto (`/producto/:id`).
- Carrito de compras mediante `CartContext` (añadir / eliminar / abrir carrito).
- Banner de consentimiento de cookies con persistencia en `localStorage`.
- Footer y páginas estáticas (Política de Cookies, Privacidad, Términos, Empresa, Soporte).
- Linter configurado (ESLint) y scripts de desarrollo / build.

---

## 🛠 Tecnologías

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Router v6
- ESLint

---

## ⚙️ Instalación

Requisitos previos:
- Node.js (recomendado 18+ / 20+)
- npm

Pasos:

```bash
# clonar el repo
git clone <tu-repositorio>
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

### Servir build estático (opcional)

```bash
npm run preview
```

---

## 📜 Scripts útiles (en `package.json`)

- `npm run dev` — iniciar servidor de desarrollo (Vite)
- `npm run build` — construir bundle de producción
- `npm run preview` — previsualizar build de producción
- `npm run lint` — ejecutar ESLint

---

## 🔧 Estructura del proyecto (resumen)

- `src/`
  - `components/` — componentes visuales (Header, Footer, ProductCard, CookieConsent, etc.)
  - `pages/` — páginas (Home, ProductDetail, CookiePolicy, Comida, Juguetes, etc.)
  - `hooks/` — hooks personalizados (`useProducts`, `useProductFilters`, `useMobileMenu`)
  - `context/` — `CartContext.jsx`
  - `data/products.js` — datos estáticos de productos
  - `services/productService.jsx` — acceso a datos de productos
  - `lib/utils.js` — utilidades
- `tools/` — scripts auxiliares (contiene `generate-llms.js` de placeholder)
- `index.html`, `package.json`, `vite.config.js`, `tailwind.config.js`

---

## 💡 Cómo añadir o editar productos

Los productos están en `src/data/products.js`. Cada producto sigue la estructura del array exportado. Para añadir productos:

1. Edita `src/data/products.js` y añade un nuevo objeto con `id`, `title`, `price`, `category`, `image`, `description`, etc.
2. Si añades una nueva categoría, añade también la opción en el listado `CATEGORIES` en `src/components/ProductCatalog.jsx` si quieres que aparezca en los filtros.

---

## ⚠️ Notas importantes / Known issues

- Seguridad: `npm audit` reporta vulnerabilidades moderadas relacionadas con `esbuild` / `vite`. Se recomienda actualizar `vite` a la versión que resuelva los avisos (p. ej. `vite@^7.3.0`) y probar la app después de la actualización.
- `tools/generate-llms.js` actualmente es un placeholder para evitar fallos en `npm run build` cuando se esperaba ese script.
- Prettier / Husky / lint-staged no están totalmente configurados (planificado como mejora).

---

## 🧪 Pruebas y QA

No hay suite de tests automatizados en este repositorio por ahora. Si deseas agregar tests, se recomienda usar `vitest` o `jest` + `react-testing-library`.

---

## 💳 Integración de Pago (Stripe Checkout — ejemplo)

Este repo incluye un **ejemplo** de servidor Express que crea sesiones de **Stripe Checkout** (carpeta `server/`). Pasos rápidos para probar localmente:

1. Copia `server/.env.example` a `server/.env` y pon tu clave secreta de Stripe (modo test):

```bash
cp server/.env.example server/.env
# editar server/.env y poner STRIPE_SECRET_KEY=sk_test_...
```

2. Instala dependencias en la carpeta `server`:

```bash
cd server
npm install express stripe dotenv cors
```

3. En la raíz del proyecto copia `.env.example` y añade tu clave pública de Stripe:

```bash
cp .env.example .env
# editar .env y poner VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

4. Instala las dependencias del servidor y en la raíz instala la librería cliente de Stripe:

```bash
# en server/
cd server && npm install
# en la raíz (opcional si no está instalado)
npm install @stripe/stripe-js
```

4. Ejecuta el server de ejemplo (por defecto en `http://localhost:4242`):

```bash
npm run dev:server
```

5. Inicia la app Vite en otra terminal:

```bash
npm run dev
```

6. En el checkout, rellena los datos y pulsa **Pagar con Stripe**: serás redirigido a la página segura de Stripe para completar el pago (modo test).

Notas de seguridad:
- Usa sólo claves de **test** en local. No subas claves reales al repositorio.
- Para producción, usa un Secret Manager para las claves y valida webhooks firmados.
- **Calcula los precios en el servidor** (no confíes en `unit_amount` enviado desde el cliente).
- **Verifica pagos con webhooks** en el servidor antes de confirmar envíos o vaciar carritos.
- Restringe CORS a orígenes confiables y asegúrate de que la app esté detrás de HTTPS en producción.


---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Buenas prácticas:

1. Haz un fork y crea una rama por feature: `git checkout -b feat/nueva-funcion`
2. Añade pruebas y documentación para tu cambio.
3. Abre un Pull Request con una descripción clara.

Si quieres que prepare configuraciones de CI (GitHub Actions), Prettier y hooks de commit, dímelo y lo implemento.

---

## 📝 Licencia

Este proyecto está bajo la **MIT License** (a determinar en el repo). Añade `LICENSE` si quieres que sea explícito.

---

## ✉️ Contacto

Para dudas o soporte, usa `support@petura.shop` (falso/email de ejemplo).

---

**Gracias por usar / revisar Petura.shop!** Si quieres, puedo:
- Añadir un `CONTRIBUTING.md` y plantillas de PR/Issue,
- Configurar Prettier + Husky + lint-staged y crear commit hooks,
- Actualizar dependencias para abordar los avisos de seguridad (con pruebas).

