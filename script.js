// navbar open and close
let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('.nav-close').onclick = () => {
    navbar.classList.remove('active');
}


// form open and close

let registerBtn = document.querySelector('.register-btn');
let loginBtn = document.querySelector('.login-btn');

registerBtn.onclick = () => {

    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.form1').classList.remove('active')
    document.querySelector('.form2').classList.add('active')
}

loginBtn.onclick = () => {

    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.form1').classList.add('active')
    document.querySelector('.form2').classList.remove('active')
}



document.querySelector('#account-btn').onclick = () => {
    document.querySelector('.form').classList.add('active');
}

document.querySelector('.form-close').onclick = () => {
    document.querySelector('.form').classList.remove('active');
}

// home slider
var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    loop: true,
    grabCursor: true,
});

// courses slider
var swiper = new Swiper(".courses-slider", {

    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        456: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },

    },
});

// teachers slider
var swiper = new Swiper(".teacher-swiper", {

    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        456: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },

    },
});

// teachers section

var swiper = new Swiper(".teachers-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        456: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },

    },

});

// reviews section

var swiper = new Swiper(".reviews-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        456: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },

    },

});


// faq section

let accordion = document.querySelectorAll('.faq .accordion-container .accordion')

accordion.forEach(acco => {

    acco.onclick = () => {


        accordion.forEach(dion => {
            dion.classList.remove('active');
        });

        acco.classList.toggle('active');

    }

});


// logo slider

var swiper = new Swiper(".logo-swiper", {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        456: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },

    },
});





// courses2 section load more js
let courseBox = document.querySelectorAll('.courses2 .box-container .hide');
let courseBtn = document.querySelector('.courses2 .loadMore');


courseBtn.onclick = () => {
    courseBox.forEach(element => {
        element.style.display = 'block';
    });

    courseBtn.style.display = 'none';
}

