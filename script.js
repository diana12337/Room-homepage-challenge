function slide(){
  var up =  document.getElementById("up");
  up.classList.toggle("up-div");
  up.classList.toggle("hamburger-background");
  var center =  document.getElementById("center");
  center.classList.toggle("center-div");
 center.classList.toggle("hamburger-background");
  var bottom =  document.getElementById("bottom");
  bottom.classList.toggle("bottom-div");
bottom.classList.toggle("hamburger-background");
  var hide = document.getElementById("main-navigation");
 hide.classList.toggle("hide");
  hide.classList.toggle("background");
   var logo = document.getElementById("main-logo");
 logo.classList.toggle("hide-logo");
}



let textHeader = [
  "Discover innovative ways to decorate",
   "We are available all across the globe",
   "Manufactured with the best materials"
  
]



let text = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office"
  
]



let images = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg"
  
];

let imageTag = document.querySelector(".image-tag");
let headerTag = document.querySelector(".change-header");
let textTag = document.querySelector(".change-card");

let i = 0;



function next(){
  if(i >= 2){
    return false;
  }
  i++;
  imageTag.setAttribute('src', images[i]);
  headerTag.innerHTML = textHeader[i];
  textTag.innerHTML =  text[i];
}

function previous(){
  if(i <= 0){
    return false;
  }
i--;
  imageTag.setAttribute('src', images[i]);
  headerTag.innerHTML = textHeader[i];
  textTag.innerHTML =  text[i];
}
