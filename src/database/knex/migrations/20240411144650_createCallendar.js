
exports.up = (knex) => {
  return knex.schema.createTable("callendar", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
        table.string("today").notNullable();
        table.integer("month").notNullable();
        table.string("year").notNullable();
        table.string("reserva_id").notNullable();


      table.integer("reservation_id").unsigned().index().references("id").inTable("reservation")
  })
};


exports.down = (knex) => {
    return knex.schema.dropTableIfexists("callendar")
};
