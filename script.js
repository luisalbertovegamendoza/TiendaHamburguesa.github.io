var swiper =new Swiper(".mySwiper-1" , {

    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination:{
        el: ".swiper-pagination",  
        clickable:true,
    },

    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",


    },


});

var swiper2 =new Swiper(".mySwiper-2" , {

    slidesPerView:3,
    spaceBetween:20,
    loop:true,

    navigation:{
        nextEl:".swiper2-next",
        prevEl:".swiper2-prev",


    },

    breakpoints:{
        0:{
                slidesPerView:1,
        },

        520:{
                slidesPerView:2,
        },

        950:{
                slidesPerView:3,
        },
    },


});


var swiper3 =new Swiper(".mySwiper-3" , {

    slidesPerView:3,
    spaceBetween:20,
    loop:true,

    navigation:{
        nextEl:".swiper3-next",
        prevEl:".swiper3-prev",


    },

    breakpoints:{
        0:{
                slidesPerView:1,
        },

        520:{
                slidesPerView:2,
        },

        950:{
                slidesPerView:3,
        },
    },


});









let tabInputs=document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id=input.value;
        let thisSwiper=document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});

