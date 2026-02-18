# Municipalidad de José C. Paz - Portal Web

Portal oficial moderno de la Municipalidad de José C. Paz con gestión de trámites, servicios y panel de vecinos.

## 🚀 Tecnologías

- **React 19** - Framework principal
- **Tailwind CSS 4** - Framework de estilos (instalado localmente)
- **GSAP 3** - Animaciones y transiciones (instalado localmente)
- **Google Fonts** - Montserrat

## 📁 Estructura del Proyecto

```
municipalidad-jcp/
├── public/
│   └── index.html              # HTML base con meta tags y config inicial
├── src/
│   ├── app/
│   │   └── App.jsx             # Componente raíz, orquestador de vistas
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Navbar.jsx      # Barra de navegación (pública y dashboard)
│   │   ├── home/
│   │   │   ├── HomeView.jsx    # Vista home completa
│   │   │   ├── HeroSection.jsx # Sección hero con título y CTA
│   │   │   ├── ServicesSection.jsx # Cards de servicios
│   │   │   └── Footer.jsx      # Footer institucional
│   │   ├── login/
│   │   │   └── LoginView.jsx   # Modal/pantalla de login
│   │   └── dashboard/
│   │       └── DashboardView.jsx # Panel del vecino autenticado
│   ├── scripts/
│   │   └── municipalAnimations.js # Lógica GSAP y navegación
│   ├── index.css               # Estilos globales + config Tailwind v4
│   └── index.js                # Entry point de React
├── postcss.config.js           # Configuración PostCSS para Tailwind
└── package.json                # Dependencias del proyecto
```

## 🎨 Componentes

### Navbar
- **Ubicación**: `src/components/navbar/Navbar.jsx`
- **Funcionalidad**: 
  - Vista pública con links institucionales
  - Botón "Acceso Vecino"
  - Menú de usuario (dashboard)
  - Botón cerrar sesión

### Home
- **HeroSection**: Banner principal con texto gradient y elemento visual decorativo
- **ServicesSection**: Grid de 3 cards (Licencias, Salud, Tasas)
- **Footer**: Información institucional y links

### Login
- **Ubicación**: `src/components/login/LoginView.jsx`
- **Funcionalidad**: 
  - Formulario DNI + Contraseña
  - Botón volver al home
  - Link crear cuenta

### Dashboard
- **Ubicación**: `src/components/dashboard/DashboardView.jsx`
- **Funcionalidad**: Panel con 3 cards de servicios para usuario autenticado

## 🎭 Animaciones (GSAP)

Archivo: `src/scripts/municipalAnimations.js`

- **Navbar**: Fade in del logo y links al cargar
- **Hero**: Animación escalonada de badge → título → texto → botones
- **Service Cards**: Fade in con scroll trigger
- **Transiciones**: Navegación entre Home ↔ Login ↔ Dashboard
- **Hover**: Efectos magnéticos en botones

## 🎨 Estilos y Temas

### Colores Custom (Tailwind)
```css
--color-jcp: #0b4369        /* Azul institucional */
--color-jcp-light: #155d8d  /* Azul claro */
--color-jcp-dark: #062a42   /* Azul oscuro */
```

### Clases CSS Personalizadas
- `.glass`: Efecto glassmorphism claro
- `.glass-dark`: Efecto glassmorphism oscuro
- `.hero-container`: Contenedor hero con fondo azul
- `.login-input`: Inputs con animación al focus

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm start          # Inicia servidor en http://localhost:3000

# Producción
npm run build      # Genera build optimizado

# Testing
npm test          # Ejecuta tests
```

## 🔧 Configuración

### Tailwind CSS v4
- Configurado en `postcss.config.js` usando `@tailwindcss/postcss`
- Tema personalizado en `src/index.css` con directiva `@theme`

### GSAP
- Importado como módulo ES6 desde `gsap` package
- Plugin ScrollTrigger incluido

## 📝 Notas de Implementación

1. **IDs preservados**: Todos los IDs del HTML original se mantienen para la lógica GSAP
2. **Clases originales**: Se respetan las clases de Tailwind del diseño original
3. **Sin modificaciones funcionales**: El JavaScript de animaciones se adaptó a ES6 modules sin cambiar la lógica

## 🚧 Advertencias ESLint

Actualmente hay warnings de accesibilidad en links con `href="#"`. Para producción, considerar:
- Usar `href="javascript:void(0)"` o
- Reemplazar por `<button>` con estilos de link

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^19.2.4",
    "gsap": "^3.14.2"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "autoprefixer": "^10.4.24"
  }
}
```

## 👨‍💻 Desarrollo

El proyecto usa Create React App como base. Todas las dependencias están instaladas localmente (no CDN) para builds de producción optimizados.

