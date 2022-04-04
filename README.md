# vite-jsconfig-paths

[![npm](https://img.shields.io/npm/v/vite-jsconfig-paths.svg)](https://www.npmjs.com/package/vite-jsconfig-paths)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Give [`vite`] the ability to resolve imports using "jsconfig.json" path mapping.

Based on: [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)

[`vite`]: https://github.com/vitejs/vite

## Usage

1. Install as dev dependency

2. Inject `vite-jsconfig-paths` using the `vite.config.js` module

   ```js
   import { defineConfig } from 'vite'
   import jsconfigPaths from 'vite-jsconfig-paths'

   export default defineConfig({
     plugins: [jsconfigPaths()],
   })
   ```

**Note:** You need to restart Vite when you update your `paths` mappings.

### Options

- `root: string`  
  The directory to crawl for `jsconfig.json` files.  
  Defaults to `viteConfig.root`

- `projects: string[]`  
  An array of `jsconfig.json` paths (relative to `viteConfig.root`)
  and/or directories that contain a `jsconfig.json` file.  
  This overrides the `root` option.

- `extensions: string[]`  
  File extensions to search for.  
  Defaults to `.js | .jsx | .ts | .tsx | .mjs`

&nbsp;

### baseUrl

If the `baseUrl` is defined, it gets prepended to all bare imports, and its resolution will take precedence over node_modules. This is also how TypeScript does it.

Say the `baseUrl` is `../root` and you import `react`. This plugin will use `../root/react` if it exists. If not found, then `react` is resolved normally. The `baseUrl` is relative to the project root (where `jsconfig.json` lives).

&nbsp;

### include/exclude

The `include` and `exclude` compiler options are respected.

Internally, [globrex](https://github.com/terkelg/globrex) is used for glob matching.

&nbsp;

### Troubleshooting

The `DEBUG` environment variable can be used to figure out why this plugin isn't working as you may have expected.

```sh
DEBUG=vite-jsconfig-paths yarn vite
```

&nbsp;
