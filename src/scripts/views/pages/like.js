/* eslint-disable no-new */
import FavoriteRestaurant from '../../data/resto-fav';
import FavoriteRestaurantView from './fav-like-rest/fav-rest-view';
import FavoriteRestaurantShowPresenter from './fav-like-rest/fav-rest-show';
import FavoriteRestaurantSearchPresenter from './fav-like-rest/fav-rest-search';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurant });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurant });
  },
};

export default Like;
