import CONFIG from '../../dataGlobal/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="card-item2">
  <img class="card-item-pic" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
  <h1>${restaurant.restaurant.name}</h1>
  <p>Rating : <b>${restaurant.restaurant.rating}⭐️</b></p>
  <h3>Alamat</h3>
  <p>${restaurant.restaurant.address}</p>
  <h3>Kota</h3>
  <p>${restaurant.restaurant.city}</p>
  <h3>Deskripsi</h3>
  <p>${restaurant.restaurant.description}</p>
  <h3>Menu Makanan</h3>
  <p>${restaurant.restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
  <h3>Menu Minuman</h3>
  <p>${restaurant.restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
  <h3>Customer Review</h3>
  ${restaurant.restaurant.customerReviews.map(
    (review) => `
    <p>${review.name}</p>
    <p>${review.review}</p>
    <p>${review.date}</p>
    
    
  `,
  )}
  </div>
  
  `;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card-item">
      <img class="card-item-pic" alt="${restaurant.name}"
      src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">     
      <div class="item_rating">
        <p>rating:<span class="restaurant-item__header__rating__score">${restaurant.rating}</span>⭐️</p>
      </div>
      <h2 class="restaurant__title"><a class="a2" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like1">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like2">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
