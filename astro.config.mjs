// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import YAML from 'yaml';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '#repo': fileURLToPath(import.meta.url),
        '#src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      tailwindcss({ optimize: true }),
      {
        name: 'import-yaml-raw',
        enforce: 'pre',
        transform(code, id) {
          if (id.endsWith('.yaml') || id.endsWith('.yml')) {
            const parsed = YAML.parse(code);  
            return {
              code: `export default ${JSON.stringify(parsed)};`,
              map: null,
            };
          }
        },
      },
    ],
  },
});
