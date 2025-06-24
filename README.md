# NavegaLasRutas+Grebosz

Tienda online desarrollada con React, Vite y Bootstrap, que permite navegar entre el catálogo de productos, filtrar por categorías, ver el detalle de cada producto y agregar productos a un carrito de compras.

## Características principales
- Navegación entre vistas usando React Router.
- Catálogo general y filtrado por categorías.
- Vista en detalle de cada producto.
- Carrito de compras interactivo (agregar, quitar, vaciar).
- Manejo de rutas dinámicas y página 404.
- Componentes contenedores y de presentación separados.
- Consumo de datos desde [DummyJSON API](https://dummyjson.com/).
- Interfaz moderna con Bootstrap.

## Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd <carpeta-del-proyecto>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura de carpetas
```
src/
  components/
    layout/
    products/
    ui/
  containers/
  pages/
    CartPage.jsx
    HomePage.jsx
    NotFoundPage.jsx
  context/
    CartContext.jsx
  App.jsx
  main.jsx
```

## Funcionamiento del carrito
- El carrito es global y se maneja con contexto (`CartContext`).
- Puedes agregar productos desde la vista de detalle.
- El botón del carrito en el navbar muestra la cantidad total de productos agregados.
- En la vista de carrito puedes ver los productos agregados, quitarlos o vaciar el carrito.

## Rutas principales
- `/` — Página de inicio
- `/productos` — Catálogo de productos
- `/categoria/:categoryId` — Productos filtrados por categoría
- `/producto/:id` — Detalle de producto
- `/carrito` — Carrito de compras
- `*` — Página 404

## Tecnologías utilizadas
- React
- Vite
- React Router DOM
- Bootstrap
- JavaScript

## API pública utilizada
[DummyJSON API](https://dummyjson.com/)

## Autor
Grebosz

---
Entrega para el curso de React: "NavegaLasRutas+Grebosz" 