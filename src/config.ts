
export default {
    port: process.env.PORT || 3010,
    database: {
      type: 'pg',
      connection: {
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT || 5432,
        database: process.env.DATABASE_NAME || 'players',
        user: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_PASSWORD || '1234',
      },
      migrations: {
        directory: __dirname + '/migrations',
      },
      seeds: {
        directory: __dirname + '/seeds',
      },
    },
    defaultQuery: `
    `,
  };