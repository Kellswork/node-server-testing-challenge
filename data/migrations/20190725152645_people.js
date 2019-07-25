exports.up = function(knex) {
    return knex.schema.createTable('people', table => {
      table.increments();
      table.varchar('firstname', 128).notNullable();
      table.text('lastname').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('people');
  };
  