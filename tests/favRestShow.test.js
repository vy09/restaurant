/* eslint-disable no-new */
/* eslint-disable no-undef */
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/fav-like-rest/fav-rest-show';
import FavoriteRestaurantView from '../src/scripts/views/pages/fav-like-rest/fav-rest-view';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should render the information that no Restaurants have been liked', () => {
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('card').addEventListener('card:updated', () => {
        expect(document.querySelectorAll('.card-item').length).toEqual(2);

        done();
      });

      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => [
          {
            id: 11,
            title: 'A',
            vote_average: 3,
            overview: 'Sebuah film A',
          },
          {
            id: 22,
            title: 'B',
            vote_average: 4,
            overview: 'Sebuah film B',
          },
        ]),
      };

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
