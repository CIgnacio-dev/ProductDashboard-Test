# 🛒 Product Dashboard

Prueba técnica **FrontEnd Developer** — Aplicación Angular para la gestión de productos.

---

## ✨ Funcionalidades

- 📋 **Listado de productos** en una tabla responsive con Bootstrap.
- ➕ **Agregar producto** mediante un formulario modal (NgBootstrap).
  - Validaciones reactivas:  
    - Nombre obligatorio  
    - Precio mayor a 0  
    - Stock no negativo
- ❌ **Eliminar producto** directamente desde la tabla.
- 🌐 Datos persistidos en una API fake con **json-server**.
- 🎨 Estilos basados en **Bootstrap 5**.

---

## 🛠️ Tecnologías

- [Angular 19](https://angular.dev) (Standalone Components)
- [RxJS](https://rxjs.dev/) para consumo de API
- [NgBootstrap](https://ng-bootstrap.github.io) (modales)
- [Bootstrap 5](https://getbootstrap.com) (estilos)
- [json-server](https://github.com/typicode/json-server) (API mock)

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/CIgnacio-dev/ProductDashboard-Test.git
cd ProductDashboard-Test

2. Instalar dependencias
npm install

3. Levantar la API fake
npm run server
Esto dejará disponible la API en:
👉 http://localhost:3000/products

4. Levantar la aplicación Angular
npm start

📂 Estructura principal
src/
 ├── app/
 │   ├── components/
 │   │   └── product-dashboard/
 │   │       ├── product-dashboard.component.ts
 │   │       ├── product-dashboard.component.html
 │   │       └── product-dashboard.component.scss
 │   └── services/
 │       └── product.service.ts
 ├── assets/
 ├── db.json          # Base de datos para json-server

 ✅ Checklist de requisitos cumplidos

 Tabla con datos desde API

 Agregar producto con modal (NgBootstrap)

 Validaciones en formulario (Angular Reactive Forms)

 Eliminar producto desde la tabla

 Estilos Bootstrap aplicados




 👨‍💻 Autor

Carlos Roa Troncoso