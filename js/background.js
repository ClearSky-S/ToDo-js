// works todo: artist name

const images = ["1.jpg","2.png","3.jpg","5.jpg","6.jpg","7.png","8.jpg"];
let index = Math.floor(Math.random()*images.length);
// index = 6; //temp 
console.log("background index: "+index);
const chooseImage = images[index];
const bgImage = document.createElement("img");
const backgroundImageContainer = document.querySelector("#background-image-container");
bgImage.src = `img/${chooseImage}`;
backgroundImageContainer.appendChild(bgImage);
backgroundImageContainer.style.height = window.innerHeight+"!important";