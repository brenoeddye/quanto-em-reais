import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import Unimport from 'unimport/unplugin';
import Components from 'unplugin-vue-components/vite';

/**
 * Current working directory, always relative to where the script is run.
 */
const WORKING_DIR = process.cwd();

const SASS_PATH = resolve(WORKING_DIR, 'src', 'assets', 'scss').replace(
  /\\/g,
  '/'
);

const SASS_AUTO_IMPORT = `@use "sass:color";
@use "sass:math";
@import "${SASS_PATH}/variables";
@import "${SASS_PATH}/functions";
@import "${SASS_PATH}/mixins";`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unimport.vite({
      presets: ['vue', 'pinia'],
      dirs: [
        './src/composables/*',
        './src/components/*',
        './src/store/*',
        './src/utils/*',
      ],
      addons: {
        vueTemplate: true,
      },
      dts: resolve(WORKING_DIR, 'src', 'imports.d.ts'),
    }),
    Components({
      dts: resolve(WORKING_DIR, 'src', 'components.d.ts'),
      dirs: ['./src/components'],
      deep: true,
      directoryAsNamespace: true,
    }),
    vue(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: SASS_AUTO_IMPORT,
        sassOptions: {
          precision: 8,
          outputStyle: 'compressed',
          sourceComments: false,
          includePaths: [SASS_PATH],
          quietDeps: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(WORKING_DIR, 'src'),
    },
  },
})