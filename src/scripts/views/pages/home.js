import RestaurantSource from '../../data/resto-source';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
      <div id="content" class="content">
        <h2 class="content__heading"></h2>
        <h1>Recomendation Restaurant</h1>
        <div id="card" class="card">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestaurants();
    const restaurantsContainer = document.querySelector('#card');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
