---
"@fedimod/fires-server": minor
---

Bootstrap fires-server component

- Sets up an adonis.js application with postgresql, lucid, vite, edge.js, and pico.css
- Adds database configuration for using SSL CA Certificates (needed for people to deploy with providers like DigitalOcean's Managed Databases)
- Disables multipart/form-data requests, as the FIRES server doesn't need to handle these, but there's no way to disable them in Adonis.js yet. See: https://github.com/adonisjs/bodyparser/pull/66
