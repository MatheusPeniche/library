
exports.up = (knex) => {
  return knex.schema.createTable("cadastre", (table) => {
    table.increments('id').primary();
    table.string("name").notNullable();
    table.string("fone"). notNullable();
    table.string("password").notNullable();
    table.string("email").notNullable();
    table.string("company"). notNullable();
    
   
    
  })
};
 

exports.down = (knex) => {
    return knex.schema.dropTableIfexists("cadastre")
  
};
