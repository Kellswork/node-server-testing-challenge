// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/people.db3'
    },
    migrations: {
      directory: './data/migrations'
    }
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/people_test.db3'
    },
    migrations: {
      directory: './data/migrations'
    }
  }
};
