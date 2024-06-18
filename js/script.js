
window.onload = function(){
var swiper = new Swiper(".mySwiper", {
  effect: 'creative',
  speed: 3000,
  loop: true,

  autoplay:{
    delay:2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  slidesPerView: 1,
  grabCursor: true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
      shadow: true,
    }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },

  speed:500,
  loop:true,


});

var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },

  slidesPerView:1,

  breakpoints: {
      // when window width is >= 320px
      373: {
        slidesPerView: 1,
      },
      // when window width is >= 320px
      414: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      853: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      960: {
        slidesPerView: 3,
      }

  }
}); 

}

$(function(){

  var el1 = $('.product1').offset().top-230;
  var el2 = $('.product2').offset().top-230;
  var el3 = $('.product3').offset().top-230;

  $('.product1btn').click(function(){
      // 某些瀏覽器只吃其中一種，故html、body建議都要寫
      $('html,body').animate({scrollTop:el1},1000);
      return false;
  });

  $('.product2btn').click(function(){
      $('html,body').animate({scrollTop:el2},1000);
      return false;
  });


  $('.product3btn').click(function(){
      $('html,body').animate({scrollTop:el3},1000);
      return false;
  });

})

  $(function(){

    $('.topbtn').click(function(){
      $('html,body').animate({scrollTop:0},1000);
      return false;
  });

  })

  document.addEventListener("DOMContentLoaded", function() {
    var menuList = document.querySelector(".m_menulist");
    var mainLink = document.querySelector(".m_menulist .main");

    mainLink.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        menuList.classList.toggle("show");
    });

    window.addEventListener("click", function() {
        if (menuList.classList.contains('show')) {
            menuList.classList.remove('show');
        }
    });
});