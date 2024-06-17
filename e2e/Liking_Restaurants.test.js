Feature('Liking Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked Restaurant', ({ I }) => {
  I.seeElement('#query');


  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  // pause();

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click('.restaurant__title a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});


Scenario('searching restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  
    I.amOnPage('/');
  
    I.seeElement('.restaurant__title a');
  
    const name = [];
  
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 3; i++) {
      I.click(locate('.restaurant__title a').at(i));
  
      I.seeElement('#likeButton');
      I.click('#likeButton');
  
      // eslint-disable-next-line no-await-in-loop
      name.push(await I.grabTextFrom('.restaurant__title'));
  
      I.amOnPage('/');
    }
  
    I.amOnPage('/#/like');
    I.seeElement('#query');
  
    const visibleLikedRestaurant = await I.grabNumberOfVisibleElements('.card-item');
    assert.strictEqual(name.length, visibleLikedRestaurant);
  
    const searchQuery = name[1].substring(1, 3);
  
    I.fillField('#query', searchQuery);
    I.pressKey('Enter');
  
    // mendapatkan daftar restaurant yang sesuai dengan searchQuery
    const matchingRestaurant = name.filter((title) => title.indexOf(searchQuery) !== -1);
    const visibleSearchedLikedRestaurant = await I.grabNumberOfVisibleElements('.card-item');
  
    assert.strictEqual(matchingRestaurant.length, visibleSearchedLikedRestaurant);
  
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < matchingRestaurant.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const visibleTitle = await I.grabTextFrom(locate('.restaurant__title').at(i + 1));
  
      assert.strictEqual(matchingRestaurant[i], visibleTitle);
    }
  });
