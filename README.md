# 🍷 SARMIA

Aplicación web desarrollada con **Angular** para la presentación de la marca de vinos **SARMIA** y su catálogo de productos.

El proyecto ha sido desarrollado como práctica de desarrollo frontend, aplicando conceptos de **Angular, TypeScript, componentes, servicios, routing y diseño responsive**.

---

## 📖 Sobre el proyecto

SARMIA es una aplicación web enfocada en la presentación de una marca de vinos y sus diferentes productos.

La aplicación combina una interfaz visual y minimalista con una estructura basada en componentes de Angular.

El objetivo principal del proyecto es desarrollar una aplicación organizada, reutilizable y responsive, aplicando buenas prácticas de desarrollo frontend.

---

## ✨ Características

La aplicación cuenta con las siguientes funcionalidades:

- 🏠 Página de inicio
- 🌿 Sección "Sobre nosotros"
- 🍷 Catálogo de productos
- 🔎 Página de detalle de cada producto
- 🧭 Navegación mediante Angular Router
- 📦 Gestión de productos mediante un Service
- 🔗 Rutas dinámicas para los productos
- 🖼️ Imágenes asociadas a cada producto
- 📱 Diseño responsive
- 💻 Adaptación para escritorio, tablet y móvil

---

## 🛠️ Tecnologías utilizadas

### Frontend

- Angular
- TypeScript
- HTML5
- CSS3

### Angular

- Componentes Standalone
- Angular Router
- Services
- Dependency Injection
- Interpolación
- Property Binding
- Event Binding
- Parámetros de ruta

### CSS

- Flexbox
- Media Queries
- CSS Variables
- `clamp()`
- Unidades relativas
- Diseño responsive

---
## 🚀 Cómo arrancar el proyecto

### 📋 Requisitos previos

Antes de ejecutar el proyecto, necesitas tener instalado:

- [Node.js](https://nodejs.org/)
- npm
- Angular CLI
- Git

## 📂 Estructura del proyecto

Una estructura aproximada del proyecto es:

```text
SARMIA/
│
├── public/
│   └── img/
│       ├── 1.png
│       ├── 2.png
│       └── ...
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── components/
│   │   │   ├── menu/
│   │   │   ├── footer/
│   │   │   ├── inicio/
│   │   │   ├── sobre-nosotros/
│   │   │   ├── productos/
│   │   │   └── detalle-producto/
│   │   │
│   │   ├── services/
│   │   │   └── producto.service.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.routes.ts
│   │
│   ├── styles.css
│   └── main.ts
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
