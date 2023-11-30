
const imageData = [
	{
		id: 1,
		src: "/assets/images/Category/box.png",
		alt:"Bread",
		p: "Food"
	},
	{
		id: 2,
		src: "/assets/images/Category/box (1).png",
		alt:"",
		p: "Pantry & Snacks"
	},
	{
		id: 3,
		src: "/assets/images/Category/box (2).png",
		alt:"",
		p: "Fruits & Veg"
	},
	{
		id: 4,
		src: "/assets/images/Category/box (3).png",
		alt:"",
		p: "Breakfast"
	},
	{
		id: 5,
		src: "/assets/images/Category/box (4).png",
		alt:"",
		p: "Beverages"
	},
	{
		id: 6,
		src: "/assets/images/Category/box (5).png",
		alt:"",
		p: "Ready to Eat"
	},
	{
		id: 7,
		src: "/assets/images/Category/box (6).png",
		alt:"",
		p: "Ice Cream"
	},
	{
		id: 8,
		src: "/assets/images/Category/box (7).png",
		alt:"",
		p: "New Product"
	},
	{
		id: 9,
		src: "/assets/images/Category/box (8).png",
		alt:"Personal Care",
		p: "Personal Care"
	},
	{
		id: 10,
		src: "/assets/images/Category/box (12).png",
		alt:"Health & Medicine",
		p: "Health & Medicine"
	},
	{
		id: 11,
		src:"/assets/images/Category/box (13).png" ,
		alt:"Baby Care",
		p: "Baby Care"
	},
	{
		id: 12,
		src: "/assets/images/Category/box (9).png",
		alt:"Home & Decor",
		p: "Home & Decor"
	},
	{
		id: 13,
	src: "/assets/images/Category/box (10).png",
		alt:"Cell Phones",
		p: "Cell Phones"
	},
	{
		id: 14,
		src: "/assets/images/Category/box (11).png",
		alt:"Household Essentials",
		p: "Household Essentials"
	},
];


const productData = [
	{
		id: 1,
		imageSrc: "/assets/images/Category/Malt.png",
		iconSrc: "/assets/images/icon-svg/love.svg",
		alt:"Malt",
		title:"$17.27",
		p: "Miller High Life Lager Beer, 30 Pack, 12 fl oz Cans, 4.6%...",
			button: "+ add"
	},
	
	{
			id: 2,
		imageSrc: "/assets/images/Category/ginger.png",
		iconSrc: "/assets/images/icon-svg/love.svg",
		alt:"Ginger beer",
		title:"$4.12",
		p: "Q Ginger Beer, 7.5 oz, 4 cans gerjg34 gwf fnwef",
			button: "+ add"
	},
		
	{
		id: 3,
		imageSrc: "/assets/images/Category/Heineken.png",
		iconSrc: "/assets/images/icon-svg/love.svg",
		alt:"Heineken",
		title:"$9.27",
		p: "Heineken Original Lager Beer, 6 Pack, 12 fl oz Bottles",
		button: "+ add"
	
	},
];



function createImages(){
	// get the div id
 const imageContainer = document.getElementById("image-gallery");

for (const Images of imageData) {
	const div = document.createElement("div"); 
	const img = document.createElement("img");
	const p = document.createElement("p");
	
	// set the attributes
  div.id = `Images-${Images.id}`
	img.src = Images.src;
	p.textContent = Images.p;
	

 
	// Append elements to the container
	div.appendChild(img);
	div.appendChild(p).classList.add("fs-5","text-black", "fw-bold", );
	imageContainer.appendChild(div).classList.add("p-2")

}

}
// call the function
	createImages();


//  Function to create carousel and append image elements for Product-buzz section
	function createCarouselItem(prodData) {
				const carouselItem = document.createElement('div');
				carouselItem.classList.add('carousel-item');

				const card = document.createElement('div');
				card.classList.add('card',);

				const cardBody = document.createElement('div');
				cardBody.classList.add('card-body',);

				const prodImage = document.createElement('div');
				prodImage.classList.add( 'position-relative', 'card-text', 'd-flex',);


				 for (const image of productData) {
					// create the dom elements
					const div = document.createElement('div');
					const img = document.createElement('img');
					const icon = document.createElement('img');
					const title = document.createElement("h4");
					const p = document.createElement('p');
					const button = document.createElement('button');
				

					// set the attributes
					div.id = `Image-${image.id}`;
					img.src = image.imageSrc;
					icon.src = image.iconSrc;
					title.textContent = image.title;
					p.textContent = image.p;
					button.textContent = image.button;
					

					// append elements to the container
					div.appendChild(img);
					div.appendChild(icon).classList.add('absolute');
				div.appendChild(title).classList.add('card-title');
					div.appendChild(p).classList.add('p-10');
					div.appendChild(button).classList.add('btn', 'btn-sm', 'rounded-pill', 'fs-4','text-white', 'bg-primary', 'text-center', 'card-footer')
					prodImage.appendChild(div);
				}

				cardBody.appendChild(prodImage);
				card.appendChild(cardBody);
				carouselItem.appendChild(card);

				return carouselItem;
			}

			const carouselInner = document.getElementById('carouselInner');

			// Dynamically create carousel items
			for (let i = 0; i < productData.length; i++) {
				const carouselItem = createCarouselItem([productData[i]]);
				carouselInner.appendChild(carouselItem);

				// Activate the first carousel item
				if (i === 0) {
					carouselItem.classList.add('active');
				}
			}

			// Function to show or hide the modal for home screen based on screen width
  function toggleModal() {
    const modal = document.getElementById('myModal');
    if (window.innerWidth >= 991) {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  }
	

  // Show or hide the modal on page load and on window resize
  window.addEventListener('load', toggleModal);
  window.addEventListener('resize', toggleModal);
// end


// function to toggle and show sidebar main content

	function showContent(contentId) {
  // Hide all content
  const contents = document.getElementsByClassName('content');
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }
	

  // Show the selected content
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
}


function navigate(url, event){
	event.preventDefault();

	// update the url without reloading the page 

	history.pushState(null, null, url);

	// Fetch and update content dynqmically

	fetchContent(url);

}

function fetchContent(url){
	 // Perform an AJAX request or load content based on the URL
      // Update the content of the 'content' div with the fetched data
      // Example:

			const contents = document.getElementsByClassName('content');
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');

		contents.innerHTML = `<h1>Loading ...</h1>`;
		setTimeout(() => {
			contents.innerHTML = `<h1>${getPageTitle(url)}</h1>`
		}, 1000);

}
}

function getPageTitle(url){
	// You can implement logic to get the title based on the URL
      // For simplicity, just returning a hardcoded value here

			if(url === '/about'){
				return 'About Page';

			}else {
				return `${getPageTitle(url)}`
			}
}

 // Handle back/forward button clicks to update content accordingly

 window.onpopstate = function (event) {
	fetchContent(window.Location.pathname);

	// Initial content loading based on the current URL	
 }

 fetchContent(window.Location.pathname);




