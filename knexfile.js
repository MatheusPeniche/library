// path é caminho
const  path = require("path")

module.exports = {
  development: {
    client: `mysql2`,
    connection:  {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'pi_auditorio'
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        'src',
        'database',
        'knex',
        'migrations'
      )
    }, 
    useNullAsDefault: true,
  },
}