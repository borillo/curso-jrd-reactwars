# Creación de aplicaciones React "The Agile Way"

## Inicialización del proyecto con `create-react-pp`

Soportado:

- React, JSX, ES6, and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- A dev server that lints for common errors.
- Import CSS and image files directly from JavaScript.
- Autoprefixed CSS, so you don’t need -webkit or other prefixes.
- A build script to bundle JS, CSS, and images for production, with sourcemaps.
- An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.

Eject como opción de pasar a un modo personalizado.

No soportado:

- Server rendering.
- Some experimental syntax extensions (e.g. decorators).
- CSS Modules.
- Importing LESS or Sass directly (but you still can use them).
- Hot reloading of components.

Algunos componentes incluidos:

- webpack with webpack-dev-server, html-webpack-plugin and style-loader
- Babel with ES6 and extensions used by Facebook (JSX, object spread, class properties)
- Autoprefixer
- ESLint
- Jest

# Historia de usuario -> definition of done -> test de aceptacion

Describirmos el proceso de crear una historia de usuario a partir de una épica, detallar su definición de hecho y preparar el primer test de aceptación.

Instalamos enzyme y react-test-renderer.

