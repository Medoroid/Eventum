$('.landing-slider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    margin:10,
    autoHeight:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.TestemonailSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:["<img src='../img/client-arrow-next.png'  class='img-fluid'>" , "<img src='../img/client-arrow-prev.png'  class='img-fluid'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.team-work').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<i class='fas fa-angle-left'>","<i  class='fas fa-angle-righ'>"  ],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
})
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let span = document.querySelector(".up");

window.onscroll = function() {
    console.log(this.scrollY);
    if (this.scrollY >= 300) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};

span.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// ============================================================================================
// ============================================================================================



// let nums = document.querySelectorAll(".nums .num");
// let section = document.querySelector(".CustomeresCounter");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };
// function startCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//       el.textContent++;
//       if (el.textContent == goal) {
//         clearInterval(count);
//       }
//     }, 10 / goal);
//   };