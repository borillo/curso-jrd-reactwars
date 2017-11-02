export default {
  'As an starwarsaholic i want to list all the movies': (client) => {
    client = client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 2000)
      .assert.title('React App')
      .waitForElementVisible('.list-group', 10000)
      .assert.containsText('.list-group-item:nth-child(1) .title', 'The Phantom Menace')
      .assert.containsText('.list-group-item:nth-child(1) .episode', 'Episode 1')
      .assert.containsText('.list-group-item:nth-child(7) .title', 'The Force Awakens')
      .assert.containsText('.list-group-item:nth-child(7) .episode', 'Episode 7');
  }
};
