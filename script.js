const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

const count = 10;
const apiKey = 'm84syMwlZ8BT5pJ3wlvh1WAwoWH9tfJIgvy7Ikqy9mY';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
//helper funtion for setting attributs to DOM 
function setAttributes(element, attributes){
    for( const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}



//create elements for links and photos add to DOM
function displayPhotos(){
    //run function for each object in photosArray
    photosArray.forEach((photo) => {
//create <a> to link to unsplash
const item = document.createElement('a');
// item.setAttribute('href', photo.links.html);
// item.setAttribute('target',  '_blank');
setAttributes(item, {
href: photo.links.html,
target: '_blank', 
});
//create <img> for photo
const img = document.createElement('img');
// img.setAttribute('src', photo.urls.regular);
// img.setAttribute('alt', photo.alt_description);
// img.setAttribute('title', photo.alt_description);
setAttributes(img, {
    src: photo.urls.regular,
    alt: photo.alt_description,
    title: photo.alt_description,

});
//put img inside a then put both inside image container element
item.appendChild(img);
imageContainer.appendChild(item);
    });
}

//get photos from unsplash api
async function getPhotos(){
    try{
const response = await fetch(apiUrl);
photosArray = await response.json();
displayPhotos();
    }catch (error){{
//create <a> to link to unsplash
const item = document.createElement('a');
item.setAttribute('href, photo.links.html')
    };
        //catch error here 
    }
}

//check to see if scrolling near bottomm of page load more photos
window.addEventListener('scroll', () => {
if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
    getPhotos();
}
});

//on load
getPhotos();