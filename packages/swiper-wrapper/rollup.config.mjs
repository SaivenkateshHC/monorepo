import { defineConfig } from 'rollup';
// import { Swiper } from 'swiper/react';

export default defineConfig({
  external: ['swiper'],
  output: {
    globals: {
      swiper: 'Swiper',
    },
    exports: 'named',
    format: 'esm',
    dir: 'dist',
  },
  input: 'src/index.js',
});
