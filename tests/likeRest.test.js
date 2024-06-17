/* eslint-disable no-undef */
import { spyOn } from 'jest-mock';
import FavoriteRestaurant from '../src/scripts/data/resto-fav';
import * as TestFactories from './helper/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();

    spyOn(FavoriteRestaurant, 'searchRestaurants');
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurant.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    await FavoriteRestaurant.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a Restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
