import RestaurantSource from '../../data/resto-source';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading"></h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
