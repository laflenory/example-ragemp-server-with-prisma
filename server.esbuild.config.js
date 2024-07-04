const { build } = require('esbuild');
const { copy } = require('esbuild-plugin-copy');

(async () => {
  await build({
    entryPoints: ['./src/server/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node10.4',
    minify: true,
    outfile: './__build__/packages/pearl-project/index.js',
    plugins: [
      copy({
        resolveFrom: 'cwd',
        assets: {
          from: ['./src/server/prisma/**'],
          to: ['./__build__/prisma'],
        },
      }),
      copy({
        resolveFrom: 'cwd',
        assets: {
          from: ['./src/server/.env'],
          to: ['./__build__'],
        },
      }),
      copy({
        resolveFrom: 'cwd',
        assets: {
          from: ['./src/server/node_modules/.prisma/client/**'],
          to: ['./__build__/node_modules/.prisma/client'],
        },
      }),
    ],
  });
})();
