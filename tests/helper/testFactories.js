import LikeButtonIniator from '../../src/scripts/utils/like-initiator';

const createLikeButtonWithRestaurant = async (restaurant) => {
  await LikeButtonIniator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonWithRestaurant };
