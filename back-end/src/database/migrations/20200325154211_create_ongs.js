
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function ( table ) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();               //"2" -> equivale ao tamanho do texto que vai ser passado, precisa ser um valor fixo
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
