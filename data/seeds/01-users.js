exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { name: 'Anne' },
        { name: 'Fiona' },
        { name: 'Shannon' },
        { name: 'Reid' },
      ]);
    });
};