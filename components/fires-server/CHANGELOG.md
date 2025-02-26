# @fedimod/fires-server

## 0.1.0

### Minor Changes

- [#36](https://github.com/FediMod/fires/pull/36) [`791d620`](https://github.com/FediMod/fires/commit/791d6206fb6a8bfa1e79c02952a3e5b71d36c636) Thanks [@ThisIsMissEm](https://github.com/ThisIsMissEm)! - Bootstrap fires-server component

  - Sets up an adonis.js application with postgresql, lucid, vite, edge.js, and pico.css
  - Adds database configuration for using SSL CA Certificates (needed for people to deploy with providers like DigitalOcean's Managed Databases)
  - Disables multipart/form-data requests, as the FIRES server doesn't need to handle these, but there's no way to disable them in Adonis.js yet. See: https://github.com/adonisjs/bodyparser/pull/66

### Patch Changes

- [#46](https://github.com/FediMod/fires/pull/46) [`02f2b07`](https://github.com/FediMod/fires/commit/02f2b07da20a218ee4bf3dd396547b21135617ea) Thanks [@ThisIsMissEm](https://github.com/ThisIsMissEm)! - Migrate from npm to pnpm for better builds
