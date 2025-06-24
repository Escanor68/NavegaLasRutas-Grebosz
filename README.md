# NavegaLasRutas+Grebosz

Tienda online desarrollada con React, Vite y React Router, que permite navegar entre el catálogo de productos, filtrar por categorías y ver el detalle de cada producto usando una API pública.

## Características principales
- Navegación entre vistas usando React Router.
- Catálogo general y filtrado por categorías.
- Vista en detalle de cada producto.
- Contador de unidades en la vista de detalle (preparado para carrito).
- Manejo de rutas dinámicas y página 404.
- Componentes contenedores y de presentación separados.
- Consumo de datos desde [Fake Store API](https://fakestoreapi.com/).

## Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd <carpeta-del-proyecto>
   cd src
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
    ItemListContainer.jsx
    ItemDetailContainer.jsx
    ItemList.jsx
    Item.jsx
    ItemDetail.jsx
    ItemCount.jsx
    Item.css
    ItemDetail.css
    ItemList.css
  App.jsx
  main.jsx
```

## Tecnologías utilizadas
- React
- Vite
- React Router DOM
- JavaScript
- CSS

## API pública utilizada
[Fake Store API](https://fakestoreapi.com/)

## Autor
Grebosz

---
Entrega para el curso de React: "NavegaLasRutas+Grebosz"
