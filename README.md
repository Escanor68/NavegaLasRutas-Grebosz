# NavegaLasRutas+Grebosz

Tienda online desarrollada con React, Vite y React Router, que permite navegar entre el catálogo de productos, filtrar por categorías y ver el detalle de cada producto usando una API pública.

---

## Explicación de este README y del proyecto

### 1. Título y Descripción
El título identifica la entrega y el propósito del proyecto: una tienda online hecha con tecnologías modernas de React, usando rutas y una API real para los productos.

### 2. Características principales
- **Navegación entre vistas usando React Router:** Puedes navegar entre distintas páginas (catálogo, categorías, detalle).
- **Catálogo general y filtrado por categorías:** El catálogo se puede filtrar por categoría desde el menú.
- **Vista en detalle de cada producto:** Cada producto tiene su propia página de detalle.
- **Contador de unidades en la vista de detalle:** Hay un contador para agregar unidades (pensado para un futuro carrito).
- **Manejo de rutas dinámicas y página 404:** Si navegas a una ruta inexistente, verás una página 404.
- **Componentes contenedores y de presentación separados:** El código está organizado en componentes que manejan lógica (contenedores) y otros que solo muestran datos (presentación).
- **Consumo de datos desde [Fake Store API](https://fakestoreapi.com/):** Los productos se obtienen de una API pública real.

### 3. Instalación y uso

#### Local
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

#### En GitHub Codespaces
1. Abre la terminal integrada en Codespaces.
2. Ejecuta:
   ```bash
   npm install
   npm run dev -- --host
   ```
3. Abre la URL que termina en `.app.github.dev` que te muestra la terminal.

### 4. Estructura de carpetas
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

### 5. Tecnologías utilizadas
- React
- Vite
- React Router DOM
- JavaScript
- CSS

### 6. API pública utilizada
[Fake Store API](https://fakestoreapi.com/)

### 7. Explicación de los componentes principales
- **App.jsx:** Define las rutas y el menú de navegación.
- **main.jsx:** Punto de entrada de la app, incluye el BrowserRouter.
- **ItemListContainer.jsx:** Contenedor que obtiene productos (todos o por categoría) y maneja el loading.
- **ItemList.jsx:** Presenta el listado de productos usando map y key.
- **Item.jsx:** Muestra la información básica de un producto y el enlace al detalle.
- **ItemDetailContainer.jsx:** Contenedor que obtiene el producto por ID y maneja el loading.
- **ItemDetail.jsx:** Muestra los detalles del producto y el contador.
- **ItemCount.jsx:** Contador simple para seleccionar unidades.

### 8. Autor y referencia
Grebosz

---
Entrega para el curso de React: "NavegaLasRutas+Grebosz" 