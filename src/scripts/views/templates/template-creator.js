import CONFIG from '../../globals/config';

const createRestaurantsDetailTemplate = (restaurant) => `
<div class="grid-container-detail">
    <div class="titleDetail" id="titleDetail">
      <h2 class="restaurant__name headline headdetail">${restaurant.name}</h2>
      <span class="section-separator headSeparator"></span>
      <div class="categories">
        <p>Kategori: </p>
        <div id=categori></div>
      </div>
    </div>
    <div class="headline rating">
      <h4>Rating ${restaurant.rating}</h4>
      <div class="stars-outer">
        <div class="stars-inner"></div>
      </div>
    </div>
    
    <div class="itemdetail2">
      <img class="poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    </div>

    <div class="itemdetail3">
      <h3>Ringkasan</h3>
      <p>${restaurant.description}</p><br>
      <h4>Menu</h4>
      <div class="menu">
        <div class="food">
          <h5>Makanan :</h5>
          <div id="food"></div>
        </div>
        <div class="drink">
          <h5>Minuman :</h5>
          <div id="drink"></div>
        </div>
      </div>
      <h4>Alamat</h4>
      <p class="almt">${restaurant.address}, ${restaurant.city}</p>
    </div>
</div>
<div class="section-title">
  <h2>Reviews</h2>
  <span class="section-separator"></span>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <button id="btn" class="tombol"><i class="fa fa-plus fa-lg" aria-hidden="true"></i>
</button>
`;

const createRestaurantsReviewTemplate = (restaurant) => `
    <div class="testi-item">
        <div class="testi-avatar"><img src="user.jpg"></div>
        <div class="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
        <div class="testimonials-text">
            <p>${restaurant.review}</p>
            <div class="testimonials-avatar">
                <h3>${restaurant.name}</h3>
                <h4>${restaurant.date}</h4>
            </div>
        </div>
        <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div> 
`;
const createRestaurantsItemTemplate = (restaurants) => `
 <div class="resto-item">
          <div class="foto-blok">
            <img class="foto" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name || '-'}" />
            <div class="kota">
                <span>${restaurants.city || '-'}</span>
            </div>
            </a>
          </div>
          <div class="deskripsi">
            <p class="rate" tabindex="0"    >
              Rating <span>${restaurants.rating || '-'}</span>
            </p>
            <div id="detailContent" class="restaurant__name"><a class="name" href="#/detail/${restaurants.id}" tabindex="0">${restaurants.name || '-'}</a></div>
            <p class="desc">${restaurants.description || '-'}</p>
          </div>
        </div>
  `;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createRestaurantsDetailTemplate,
  createRestaurantsReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
