
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (tbl) =>{
      tbl.increaments('user_id')
      tbl.string('username', 128).notNullable().unique()
      tbl.string('password', 128).notNullable()
      tbl.string('email', 128).notNullable()
      tbl.string('firstname', 128).notNullable()
      tbl.string('lastname', 128).notNullable()
      tbl.string('streetAddress', 128).notNullable()
      tbl.string('city', 128).notNullable()
      tbl.string('state', 128).notNullable()
      tbl.string('zipcode',5).notNullable()
      tbl.string('role').notNullable
    })
    .createTable('items', (tbl) =>{
      tbl.increaments('item_id')
      tbl.string('name',128).notNullable()
      tbl.string('category',128).notNullable()
      tbl.string('price_per_day').notNullable()
      tbl.string('rental_period').notNullable()
      tbl.string('description',300).notNullable()
      // implement user
      tbl.string('user_id')
        .notNullable()
        .reference('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('items')
};
