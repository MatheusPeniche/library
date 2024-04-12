
exports.up = function(knex) {
    return knex.schema.createTable("admin", (table) => {
        table.increments('id').primary();
        table.string("name").notNullable();
        table.string("fone").notNullable();
        table.string("email").notNullable();
        table.string("passwordAdmin").notNullable();
        table.string("password").notNullable();
        table.string("cpf").notNullable();
        table.boolean("isAdmin").defaultTo("false");
        
        

        table.integer("reservation_id").unsigned().index().references("id").inTable("reservation")
        table.integer("cadastre_id").unsigned().index().references("id").inTable("cadastre")
        
        
      })
};


exports.down = (knex) => {
    return knex.schema.dropTableIfexists("admin")
  
};
