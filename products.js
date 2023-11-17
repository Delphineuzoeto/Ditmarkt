//  <!-- product category carousel section -->

 document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
		perPage    : 4,
		breakpoints: {
			640: {
				perPage: 2,
			},
		},
  } ).mount();
} );


 document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#gallery-carousel', {
		perPage    : 6,
		breakpoints: {
			966: {
				perPage: 4,
			},
			640: {
				perPage: 2,
			},
		},
  } ).mount();
} );
