
exports.up = (knex) => {
    return knex.schema.createTable("reservation", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.integer("numb_people").notNullable();
        table.string("color").notNullable();
        table.string('start')
        table.string('end')
        

        table.integer("cadastre_id").unsigned().index().references("id").inTable("cadastre")
    })
  };


exports.down = (knex) => {
    return knex.schema.dropTableIfexists("reservation")
};
