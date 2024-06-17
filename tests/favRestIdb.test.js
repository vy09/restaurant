/* eslint-disable no-undef */
import { itActsAsFavRestModel } from './contracts/favRestContract';
import FavoriteRestaurant from '../src/scripts/data/resto-fav';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurant.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavRestModel(FavoriteRestaurant);
});
