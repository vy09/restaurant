/* eslint-disable no-new */
import FavoriteRestaurantView from './fav-like-rest/fav-rest-view';
import FavoriteRestaurantShowPresenter from './fav-like-rest/fav-rest-show';
import FavoriteRestaurantSearchPresenter from './fav-like-rest/fav-rest-search';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantView });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantView });
  },
};

export default Like;
