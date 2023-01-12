// menu

// POUR le menu

let toggle = document.querySelector('.toggle');
let header = document.querySelector('.header');
let body = document.querySelector('body');
let fermer = document.querySelector('.fermer');
let ouvrir = document.querySelector('.ouvrir');
let headerlist = document.querySelector('.header__list');
let subMenu;
let headercontain = document.querySelector('.header__container');
let returnback = headercontain.querySelector('.header__retourarriere');
//let headermenulink = document.querySelector('.header__megamenulink');
toggle.addEventListener('click', function () {
    body.classList.toggle('unscrollable');
    fermer.classList.toggle('open');
    ouvrir.classList.toggle('open');
    headerlist.classList.toggle('open');
    //body.classList.add('disabledscroll');
});

function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}
window.addEventListener('scroll', scrollHeader);

///////////////////////pour gérer les sous-menus du menu

headerlist.addEventListener('click', (e) => {
    //ici on recupère les li qui ont un submenu
    if (e.target.closest('.header__child')) {
        const hasChildren = e.target.closest('.header__child');
        showSubMenu(hasChildren);
    }
});

//CETTE FONCTION permet de récupérer le titre du li qui a un sous-menu et l'affiche dans la div current menu
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.submenu');
    subMenu.classList.add('actived');
    const menuTitle =
        hasChildren.querySelector('.header__linktitle').textContent;
    headercontain.querySelector('.header__currentmenu').innerHTML = menuTitle;
    headercontain
        .querySelector('.header__currentmenu')
        .classList.add('actived');
    headercontain
        .querySelector('.header__retourarriere')
        .classList.add('actived');
}

returnback.addEventListener('click', () => {
    hideSubMenu();
});
fermer.addEventListener('click', () => {
    hideSubMenu();
});
// headermenulink.addEventListener('click', () => {
//     hideSubMenu();
// });

function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('actived');
    }, 300);
    headercontain.querySelector('.header__currentmenu').innerHTML = '';
    headercontain
        .querySelector('.header__currentmenu')
        .classList.remove('actived');
    headercontain
        .querySelector('.header__retourarriere')
        .classList.remove('actived');
}

// gestion de la section realisation sur mobile
const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function () {
    this.style.display = 'none';
    imageBox.style.display = 'none';
});

zoomBtn.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        imageView.style.display = 'block';
        imageBox.style.display = 'block';
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    });
});

function currentImageDisplay(position) {
    imageBox.style.background = `url(images/Sites/Realisation/img${currentImageIdx}.png) center/cover no-repeat`;
}

nextBtn.addEventListener('click', function () {
    currentImageIdx++;
    if (currentImageIdx === 5) {
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
});

// <!--  gérer les transitions sur qui sommes-nous sur mobile -->

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}

// gérer les effets de slide sur le header

window.addEventListener('load', () => {
    autoSlide();
});
function autoSlide() {
    setInterval(() => {
        slide(getItemActiveIndex() + 1);
    }, 4000); // slide speed = 4s
}
function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll('.carousel_item'));
    const itemActive = document.querySelector('.carousel_item__active');

    if (toIndex >= itemsArray.length) {
        toIndex = 0;
    }

    const newItemActive = itemsArray[toIndex];

    newItemActive.classList.add('carousel_item__pos_next');
    setTimeout(() => {
        newItemActive.classList.add('carousel_item__next');
        itemActive.classList.add('carousel_item__next');
    }, 20);

    newItemActive.addEventListener(
        'transitionend',
        () => {
            itemActive.className = 'carousel_item';
            newItemActive.className = 'carousel_item carousel_item__active';
        },
        {
            once: true,
        }
    );
}

function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll('.carousel_item'));
    const itemActive = document.querySelector('.carousel_item__active');
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
}

// gérer les transitions sur qui sommes-nous

var windowWidth = window.innerWidth;
function changetomission() {
    if (windowWidth <= 950) {
        document.querySelector('.subtitle2').style.backgroundColor = '#2a9bd4';
        document.querySelector('.subtitle2').style.color = '#fff';
        document.querySelector('.subtitle3').style.color = '#2a9bd4';
        document.querySelector('.subtitle1').style.color = '#2a9bd4';
        document.querySelector('.subtitle1').style.backgroundColor =
            'transparent';
        document.querySelector('.subtitle3').style.backgroundColor =
            'transparent';
        document.getElementById('text__tw').style.display = 'block';
        document.getElementById('sar__tw').style.display = 'block';
        document.getElementById('text__on').style.display = 'none';
        document.getElementById('sar__on').style.display = 'none';
        document.getElementById('text__thre').style.display = 'none';
        document.getElementById('sar__thre').style.display = 'none';
    } else {
        document.getElementById('text__tw').style.display = 'block';
        document.getElementById('sar__tw').style.display = 'block';
        document.getElementById('text__on').style.display = 'none';
        document.getElementById('sar__on').style.display = 'none';
        document.getElementById('text__thre').style.display = 'none';
        document.getElementById('sar__thre').style.display = 'none';
    }
}

function changetovision() {
    if (windowWidth <= 950) {
        document.querySelector('.subtitle3').style.backgroundColor = '#2a9bd4';
        document.querySelector('.subtitle3').style.color = '#fff';
        document.querySelector('.subtitle2').style.color = '#2a9bd4';
        document.querySelector('.subtitle1').style.color = '#2a9bd4';
        document.querySelector('.subtitle2').style.backgroundColor =
            'transparent';
        document.querySelector('.subtitle1').style.backgroundColor =
            'transparent';

        document.getElementById('text__thre').style.display = 'block';
        document.getElementById('sar__thre').style.display = 'block';
        document.getElementById('text__on').style.display = 'none';
        document.getElementById('sar__on').style.display = 'none';
        document.getElementById('text__tw').style.display = 'none';
        document.getElementById('sar__tw').style.display = 'none';
    } else {
        document.getElementById('text__thre').style.display = 'block';
        document.getElementById('sar__thre').style.display = 'block';
        document.getElementById('text__on').style.display = 'none';
        document.getElementById('sar__on').style.display = 'none';
        document.getElementById('text__tw').style.display = 'none';
        document.getElementById('sar__tw').style.display = 'none';
    }
}

function changetoapropos() {
    if (windowWidth <= 950) {
        document.querySelector('.subtitle1').style.backgroundColor = '#2a9bd4';
        document.querySelector('.subtitle1').style.color = '#fff';
        document.querySelector('.subtitle2').style.color = '#2a9bd4';
        document.querySelector('.subtitle3').style.color = '#2a9bd4';
        document.querySelector('.subtitle2').style.backgroundColor =
            'transparent';
        document.querySelector('.subtitle3').style.backgroundColor =
            'transparent';
        document.getElementById('text__thre').style.display = 'none';
        document.getElementById('sar__thre').style.display = 'none';
        document.getElementById('text__on').style.display = 'block';
        document.getElementById('sar__on').style.display = 'block';
        document.getElementById('text__tw').style.display = 'none';
        document.getElementById('sar__tw').style.display = 'none';
    } else {
        document.getElementById('text__thre').style.display = 'none';
        document.getElementById('sar__thre').style.display = 'none';
        document.getElementById('text__on').style.display = 'block';
        document.getElementById('sar__on').style.display = 'block';
        document.getElementById('text__tw').style.display = 'none';
        document.getElementById('sar__tw').style.display = 'none';
    }
}

// gérer les animations sur réalisation Mobile

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides((slideIndex = n));
}
function plusSlides(n) {
    showSlides((slideIndex += n));
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('demo');
    var captionText = document.getElementById('caption');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

showSlides(slideIndex);

function submit() {
    const form = document.getElementById('contactForm');

    $.ajax({
        type: 'POST',
        url: 'https://digital-x-sarl.com/api/contact',
        data: $(form).serialize(),
    }).done(function () {
        fbq('track', 'Contact');
        window.location = window.location;
    });
}

/*******************************************************
                    PHOTOGRAPHIE
 ********************************************************/

//////////slider de audiovisuel
