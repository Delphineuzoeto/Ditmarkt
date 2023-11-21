//  <!-- product category carousel section -->

 document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
		perPage    : 4,
		breakpoints: {
			575: {
				perPage: 3,
			},
			767: {
				perPage: 3,
			},
			991: {
				perPage: 3,
			},
		},
  } ).mount();
} );




 document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#gallery-carousel', {
		perPage    : 6,
		breakpoints: {
			575: {
				perPage: 2,
			},
			767: {
				perPage: 3,
			},
			991: {
				perPage: 4,
			},
		},
		//  heightRatio: 0.5,
  } ).mount();
} );

 const currentDate = new Date();

        // Display the current date in the HTML element with id="currentDate"
        document.getElementById('current-date').innerHTML = '1. Free Shipping, Arrives today ' + currentDate.toLocaleDateString();