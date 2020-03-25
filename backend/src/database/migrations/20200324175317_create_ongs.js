
exports.up = function (knex) {
    return knex.schema.createTable('ongs', (table) => {
        table.string('id').primary(); // id é string pq é utilizado para login no sistema
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};
