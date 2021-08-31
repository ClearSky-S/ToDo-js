const images = ["1.jpg","2.png","3.jpg","5.jpg","6.jpg","7.png","8.jpg"];

const chooseImage = images[ Math.floor(Math.random()*images.length)]
const bgImage = document.createElement("img");
const backgroundImageContainer = document.querySelector("#background-image-container");
bgImage.src = `img/${chooseImage}`;
backgroundImageContainer.appendChild(bgImage);
backgroundImageContainer.style.height = window.innerHeight+"!important";