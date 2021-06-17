$(document).ready(function () {
    $(window).scroll(function () {
        var posTop = $(document).scrollTop();
        console.log(posTop);
        const header = document.querySelector('header');
        const scrollBtn = document.getElementById('scroll_top');
        scrollBtn.addEventListener('click', function () {
            console.log('i am clicked');
        });
        if (posTop > 70) {
            console.log(header)
            header.classList.add('fixed_style');
        }
        else {
            console.log('i am normal');
            header.classList.remove('fixed_style');
        }
        if (posTop > 250) {
            scrollBtn.style.visibility = "visible";
        }
        else {
            scrollBtn.style.visibility = "hidden";
        }
    });
});

function openNav() {
    const navMenu = document.querySelector('nav');
    console.log(navMenu);
    navMenu.classList.toggle('open_menu');
}
//hero slider

$('.hero_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.team_slider').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.testimonial_slider').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.pricing_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.blog_slider').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

const playBtn = document.querySelector('.play_btn');
playBtn.addEventListener('click', function () {
    console.log('video');
    const videoModal = document.querySelector('.video_modal');
    videoModal.classList.add('showVideoModal');
});

const closeBtn = document.getElementById('close_modal');
closeBtn.addEventListener('click', function () {
    const videoModal = document.querySelector('.video_modal');
    videoModal.classList.remove('showVideoModal');
});


//accordion

function hide_accordion() {
    let accordionBody = document.querySelectorAll('.accordion_faq_content');
    console.log(accordionBody);
    console.log(accordionBody.length);
    for (var i = 0; i < accordionBody.length; i++) {
        accordionBody[i].style.display = "none";
    }
}

function accordionOpen(curEle) {
    console.log(curEle);
    // const iconPlus = document.querySelector('.accordion_icon');
    hide_accordion();
    curEle.nextElementSibling.style.display = "block";
    console.log('next', curEle.previousSibling);
}
