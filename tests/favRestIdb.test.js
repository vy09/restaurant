/* eslint-disable no-undef */
import { itActsAsFavRestModel } from './contracts/favRestContract';
import FavoriteRestaurantIdb from '../src/scripts/data/resto-fav';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavRestModel(FavoriteRestaurantIdb);
});
