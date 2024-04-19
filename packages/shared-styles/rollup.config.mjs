import { defineConfig } from 'rollup';
import {glob} from 'glob';
import postcss from 'rollup-plugin-postcss';
import modules from 'postcss-modules';

export default defineConfig({
  input: glob.sync('src/*.scss', { absolute: false }), // Find all SCSS files
  output: {
    dir: 'dist', // Output directory
    format: 'esm', // Output format (consider 'iife' for legacy browsers)
    chunkFileNames: '[name].css', // Output filename pattern (uses original file name)
  },
  plugins: [
    postcss({
      plugins: [modules()],
    }),
  ],
});
