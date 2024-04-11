
exports.up = (knex) => {
  return knex.schema.createTable("cadastre", (table) => {
    table.increments('id').primary();
    table.string("name").notNullable();
    table.string("Institution name"). notNullable();
    table.string("fone").notNullable();
    table.string("email").notNullable();
    table.string("CNPJ or CPF").notNullable();
    table.boolean("isAdmin").defaultTo("false")
    
    
    
  })
};
 

exports.down = (knex) => {
    return knex.schema.dropTableIfexists("cadastre")
  
};
