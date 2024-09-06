const { build } = require('esbuild');

build({
  entryPoints: ['src/index.ts'], // Asegúrate de que este sea tu punto de entrada principal
  bundle: true,
  outdir: 'dist',
  format: 'esm',  // Utiliza el formato de módulo ES
  sourcemap: true,
  minify: true,  // Minificar el código de salida para producción
  target: ['es6'], // Define el target de JavaScript moderno
  treeShaking: true, // Habilita tree shaking explícitamente
  external: ['react', 'react-dom'], // Excluye dependencias externas
}).catch(() => process.exit(1));