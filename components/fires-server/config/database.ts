import { defineConfig } from '@adonisjs/lucid'
import app from '@adonisjs/core/services/app'

import * as path from 'node:path'
import { readFileSync } from 'node:fs'
import { ConnectionOptions } from 'node:tls'

import env from '#start/env'

// Type compatible with the `ssl` option from Adonis:
let sslOptions: boolean | ConnectionOptions | undefined = false

const DATABASE_SSL_CA_CERT = env.get('DATABASE_SSL_CA_CERT')
if (typeof DATABASE_SSL_CA_CERT === 'string') {
  sslOptions = {
    ca: readFileSync(
      path.relative(process.cwd(), path.join(import.meta.dirname, DATABASE_SSL_CA_CERT)),
      'ascii'
    ),
  }
}

const dbConfig = defineConfig({
  connection: 'postgres',
  prettyPrintDebugQueries: !app.inProduction,

  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: env.get('DATABASE_HOST'),
        port: env.get('DATABASE_PORT'),
        user: env.get('DATABASE_USER'),
        password: env.get('DATABASE_PASSWORD', ''),
        database: env.get('DATABASE_NAME', `fires_${env.get('NODE_ENV')}`),
        ssl: sslOptions,
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      debug: !app.inProduction,
    },
  },
})

export default dbConfig
