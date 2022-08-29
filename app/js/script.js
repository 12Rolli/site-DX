// <!--  gérer les transitions sur qui sommes-nous sur mobile -->

var acc = document.getElementsByClassName("accordion");
var i;
		
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var panel = this.nextElementSibling;
	if (panel.style.display === "block") {
	panel.style.display = "none";
	} else {
	panel.style.display = "block";
	}
});
}

// gérer les effets de slide sur le header

				window.addEventListener("load", () => {
   				autoSlide();
			})
			function autoSlide() {
			setInterval(() => {
				slide(getItemActiveIndex() + 1);
			}, 4000); // slide speed = 4s
			}
			function slide(toIndex) {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");

   if (toIndex >= itemsArray.length) {
      toIndex = 0;
   }

   const newItemActive = itemsArray[toIndex];

   newItemActive.classList.add("carousel_item__pos_next");
   setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
   }, 20);

   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
   }, {
      once: true
   });
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
}



// gérer les effets de la barre de menu
function changeimg(url) {
    document.getElementById('megamenu__first').style.background = url;
    var image = document.getElementById('megamenu__first');
    image.style.width = '100%';
    image.style.backgroundRepeat = 'no-repeat';
    image.style.backgroundSize = 'cover';
    image.style.backgroundPosition = 'center';
}
function closeimg() {
    document.getElementById('megamenu__first').style.background = 'none';
}

const headernav = document.querySelector('.header__navigation');
const headlist = headernav.querySelector('.header__list');
const returnback = headernav.querySelector('.header__retourarriere');
const menutrigger = document.querySelector('.header__menutrigger');
const headclose = headernav.querySelector('.header__close');

let submenu;
headlist.addEventListener('click', (e) => {
    if (!headernav.classList.contains('active')) {
        return;
    }
    if (e.target.closest('.header__link')) {
        const hasChildren = e.target.closest('.header__items');
        showSubMenu(hasChildren);
    }
});
returnback.addEventListener('click', () => {
    hideSubMenu();
});
menutrigger.addEventListener('click', () => {
    toggleMenu();
});
headclose.addEventListener('click', () => {
    toggleMenu();
});
document.querySelector('.header__overlay').addEventListener('click', () => {
    toggleMenu();
});
function toggleMenu() {
    headernav.classList.toggle('active');
    document.querySelector('.header__overlay').classList.toggle('active');
}
function showSubMenu(hasChildren) {
    submenu = hasChildren.querySelector('.submenu');
    submenu.classList.add('active');
    submenu.style.animation = 'slideleft 0.5s ease forwards';
    const menutitle = hasChildren.querySelector('.link__title').textContent;
    headernav.querySelector('.header__currentmenu').innerHTML = menutitle;
    headernav.querySelector('.header__menuhead').classList.add('active');
}
function hideSubMenu() {
    submenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        submenu.classList.remove('active');
    }, 300);
    headernav.querySelector('.header__currentmenu').innerHTML = '';
    headernav.querySelector('.header__menuhead').classList.remove('active');
}
window.onresize = function () {
    if (this.innerWidth > 1050) {
        if (headernav.classList.contains('active')) {
            toggleMenu();
        }
    }
};


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
        document.getElementById('bar__tw').style.display = 'block';
        document.getElementById('text__on').style.display = 'none';
        document.getElementById('bar__on').style.display = 'none';
        document.getElementById('text__thre').style.display = 'none';
        document.getElementById('bar__thre').style.display = 'none';
    } else {
        document.getElementById('text__tw').style.display = 'block';
        document.getElementById('bar__tw').style.display = 'block';
        document.getElementById('text__on').style.display = 'none';
        document.getElementById('bar__on').style.display = 'none';
        document.getElementById('text__thre').style.display = 'none';
        document.getElementById('bar__thre').style.display = 'none';
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
        document.getElementById('bar__thre').style.display = 'block';
        document.getElementById('text__on').style.display = 'none';
        document.getElementById('bar__on').style.display = 'none';
        document.getElementById('text__tw').style.display = 'none';
        document.getElementById('bar__tw').style.display = 'none';
    } else {
        document.getElementById('text__thre').style.display = 'block';
        document.getElementById('bar__thre').style.display = 'block';
        document.getElementById('text__on').style.display = 'none';
        document.getElementById('bar__on').style.display = 'none';
        document.getElementById('text__tw').style.display = 'none';
        document.getElementById('bar__tw').style.display = 'none';
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
        document.getElementById('bar__thre').style.display = 'none';
        document.getElementById('text__on').style.display = 'block';
        document.getElementById('bar__on').style.display = 'block';
        document.getElementById('text__tw').style.display = 'none';
        document.getElementById('bar__tw').style.display = 'none';
    } else {
        document.getElementById('text__thre').style.display = 'none';
        document.getElementById('bar__thre').style.display = 'none';
        document.getElementById('text__on').style.display = 'block';
        document.getElementById('bar__on').style.display = 'block';
        document.getElementById('text__tw').style.display = 'none';
        document.getElementById('bar__tw').style.display = 'none';
    }
}

// gérer les transitions sur qui sommes-nous sur mobile


// gérer les animations sur réalisation

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}
function plusSlides(n){
    showSlides (slideIndex += n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

