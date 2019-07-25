const db = require('../data/dbConfig');

module.exports = {
  insert(person) {
    return db('people')
      .insert(person)
      .then(ids => this.findById(ids[0]));
  },

  getPeople() {
    return db('people');
  },

  findById(id) {
    return db('people')
      .where({ id })
      .first();
  },

  remove(id) {
    return db('people')
      .where('id', id)
      .del();
  }
};
