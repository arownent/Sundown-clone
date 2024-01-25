let projectSec = document.querySelector(".projectsection");
let changemedia = document.querySelector(".changingmedia");

projectSec.addEventListener("mouseenter", function () {
    changemedia.style.display = "block";
});

projectSec.addEventListener("mouseleave", function () {
    changemedia.style.display = "none";
    changemedia.innerHTML = "";
});

let projects = document.querySelectorAll(".projects");

projects.forEach(function (med) {
    med.addEventListener("mouseenter", function () {
        let type = med.getAttribute("data-media").endsWith(".mp4") ? "video" : "image";
        let media = med.getAttribute("data-media");

        if (type === "image") {
            changemedia.style.backgroundImage = `url(${media})`;
            changemedia.innerHTML = "";
        } else if (type === "video") {
            changemedia.style.backgroundImage = "";
            let video = document.createElement("video");
            video.src = media;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.style.width = "266.5%";
            changemedia.innerHTML = "";
            changemedia.appendChild(video);
        }
    });
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 60,
    freeMode: true,
    breakpoints:{
        0:{
            slidesPerView: 2,
        },
        600:{
            slidesPerView: 3,
        },
    },
  });


  let loaderanimation = document.querySelector(".loader");
  setTimeout(function() {
    loaderanimation.style.top = "-100%";
  },4500);



//   let swipebutton = document.querySelector(".arrowbutton");
//   let swipeshow = document.querySelector(".swiper");

//   swipeshow.addEventListener("mouseenter", function(){
//     swipebutton.style.opacity = "1";
//   });
//   swipeshow.addEventListener("mouseleave", function(){
//     swipebutton.style.opacity = "0";
//   });

//   swipeshow.addEventListener("mousemove", function(e){
//     console.log(e.clientX, e.clientY);
//     swipebutton.style.top = e.clientY + "px";
//     swipebutton.style.left = e.clientX + "px";
//   });


let menu = document.querySelector("nav h3");
let full = document.querySelector(".full");
let navimg = document.querySelector("nav img");
let flag = 0;
menu.addEventListener("click", function () {
    if (flag == 0) {
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    } else {
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
});