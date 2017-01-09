'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/trackify_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
