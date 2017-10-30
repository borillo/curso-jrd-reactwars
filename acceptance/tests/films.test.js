export default {
  'Como starwarsadicto quiero listar todas las películas de la saga': (client) => {
    client = client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 2000)
      .assert.title('React App')
      .waitForElementVisible('.App', 2000)
      .assert.containsText('.App', 'The Force Awakens')      
      .assert.containsText('.film:nth-child(1) .episode', '1')
      .assert.containsText('.film:nth-child(1) .title', 'The Phantom Menace')
      .assert.containsText('.film:nth-child(7) .episode', '7')
      .assert.containsText('.film:nth-child(7) .title', 'The Force Awakens');
  }
};
