const db = require('../data/dbConfig');
const People = require('./peopleModels');

beforeEach(async () => {
  await db('people').truncate();
});

describe('People', () => {
    
  it('creates a person', async () => {
    const person = await People.insert({ firstname: 'John', lastname: 'Doe' });
    const newUser = await People.findById(1);
    expect(newUser.id).toBe(1);
  });
    
});
