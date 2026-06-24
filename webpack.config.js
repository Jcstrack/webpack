// Importa el módulo "path" de Node.js.
// Sirve para trabajar con rutas de archivos y carpetas.
const path = require("path");

// Importa HtmlWebpackPlugin.
// Este plugin permite generar un archivo HTML final
// e insertar automáticamente el archivo JavaScript creado por Webpack.
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Punto de entrada de la aplicación.
  // Webpack comenzará a leer el proyecto desde este archivo.
  entry: "./src/index.js",

  // Configuración de salida del proyecto.
  output: {
    // Define la carpeta donde se guardará el resultado final.
    // __dirname representa la carpeta actual donde está webpack.config.js.
    // "dist" será la carpeta final de producción.
    path: path.resolve(__dirname, "dist"),

    // Nombre del archivo JavaScript final generado por Webpack.
    filename: "main.js",
  },

  // Configuración para resolver extensiones automáticamente.
  resolve: {
    // Permite importar archivos .js sin escribir la extensión.
    // Ejemplo:
    // import saludar from "./saludar"
    // En vez de:
    // import saludar from "./saludar.js"
    extensions: [".js"],
  },

  // Configuración de loaders.
  // Los loaders le dicen a Webpack cómo procesar ciertos tipos de archivos.
  module: {
    rules: [
      {
        // Busca archivos JavaScript.
        // Esta expresión detecta archivos terminados en .js.
        test: /\.js$/,

        // Evita que Babel procese la carpeta node_modules.
        // Esto mejora el rendimiento porque las dependencias ya vienen preparadas.
        exclude: /node_modules/,

        // Indica que los archivos .js deben pasar por babel-loader.
        // babel-loader conecta Babel con Webpack.
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  // Configuración de plugins.
  // Los plugins agregan funcionalidades extra a Webpack.
  plugins: [
    new HtmlWebpackPlugin({
      // inject: true inserta automáticamente el archivo main.js
      // dentro del HTML final.
      inject: true,

      // Archivo HTML base que Webpack usará como plantilla.
      template: "./public/index.html",

      // Nombre del archivo HTML que se generará en la carpeta dist.
      filename: "index.html",
    }),
  ],
};
