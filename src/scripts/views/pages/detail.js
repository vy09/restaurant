import UrlParser from '../../routes/parser';
import RestaurantSource from '../../data/resto-source';
import { createRestaurantDetailTemplate } from '../template/template-creator';
import LikeButtonInitiator from '../../utils/like-initiator';

const Detail = {
  async render() {
    return `
      <h1>Detail Restaurant</h1>
      <div id="card2" class="card2"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#card2');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default Detail;
