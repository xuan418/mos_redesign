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