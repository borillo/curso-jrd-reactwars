export default {
  'As an starwarsaholic i want check the course teachers in the about section': (client) => {
    client = client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 2000)
      .assert.title('React App')
      .click('a[href="/about"]')
      .waitForElementVisible('.jumbotron', 10000)
      .assert.containsText('.teachers', 'Reyes Grangel')
      .assert.containsText('.teachers', 'Oscar Belmonte')
      .assert.containsText('.teachers', 'Ricardo Borillo');
  }
};
