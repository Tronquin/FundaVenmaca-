/* code part for when you have to show a occulted menu (footer and navigation bar) */
var rotate = true;

//when click a specific button the occulted footer is going to appear
$(document).ready(function() {
  $(".menu-item-contact").on("click", function() {
    if (rotate === true) {
      $("#contacto").css("top", "0");
      $("#contacto").css("background-color", "#F6F6F6");
      $(".contact").css("opacity", "1");
      $("footer .contact .contact_description figure img").css("opacity", "1");
      $(".menu .menu-item").css("color", "#00B9E3");
      $(".donate").css("color", "#00B9E3");
      $(".menu .menu-item-contact").css("color", "#0077A7");
      $(".menu .menu-item-contact").css("font-weight", "bold");
      $(".footer .copyright").css("opacity", "0");
      $(".footer .social_media").css("opacity", "0");
      $(".logo-circle").css("fill", "#00B9E3");
      $(".logo-body").css("fill", "#00B9E3");
      $(".logo-head").css("fill", "#00B9E3");
      $(".logo-text").css("fill", "#9B9B9B");
      toggle(".menu-item", "active-footer-normal", ".active-footer-normal");
      toggle(".menu-item-contact", "active-footer", ".active-footer");
      rotate = false;
    } else {
      $("#contacto").css("top", "95%");
      $("#contacto").css("background-color", "#00B9E3");
      $(".contact").css("opacity", "0");
      $("footer .contact .contact_description figure img").css("opacity", "0");
      $(".menu .menu-item").css("color", "white");
      $(".donate").css("color", "white");
      $(".menu .menu-item-contact").css("color", "white");
      $(".footer .copyright").css("opacity", "1");
      $(".footer .social_media").css("opacity", "1");
      $(".logo-circle").css("fill", "white");
      $(".logo-body").css("fill", "white");
      $(".logo-head").css("fill", "white");
      $(".logo-text").css("fill", "white");
      toggle(".menu-item", "active-footer-normal", ".active-footer-normal");
      toggle(".menu-item-contact", "active-footer", ".active-footer");
      rotate = true;
    }
  });
});

// Menu Button Effect
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    mobileMenu.classList.add("appear");

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    mobileMenu.classList.remove("appear");
    // Set Menu State
    showMenu = false;
  }
}

$(".nav-option-mobile").click(function() {
  $(".nav-option-mobile").removeClass("active");
  $(this).toggleClass("active");
});

var mySwiperMain = new Swiper(".main_slider", {
  direction: "horizontal",
  mousewheelControl: true,
  loop: true,
  slidesPerView: 1,
  loopedSlides: 3,
  keyboardControl: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true
  }
});

/* buttons for the main slider */
$(".menu-item").click(function(e) {
  e.preventDefault();
  var requested = e.target.id;
  var goingTo = "";
  if (rotate === false) {
    $("#contacto").css("top", "95%");
    $("#contacto").css("background-color", "#00B9E3");
    $(".menu-item").css("color", "white");
    $(".donate").css("color", "white");
    $(".menu-item-contact").css("color", "white");
    $(".copyright").css("opacity", "1");
    $(".social_media").css("opacity", "1");
    $(".logo-circle").css("fill", "white");
    $(".logo-body").css("fill", "white");
    $(".logo-head").css("fill", "white");
    $(".logo-text").css("fill", "white");
    toggle(".menu-item", "active-footer-normal", ".active-footer-normal");
    toggle(".menu-item-contact", "active-footer", ".active-footer");
    rotate = true;
  }
  switch (requested) {
    case "inicio":
      goingTo = ".s1";
      break;
    case "nosotros":
      goingTo = ".s2";
      break;
    case "unete":
      goingTo = ".s3";
      break;
    default:
  }

  mySwiperMain.slideTo($(goingTo).index(), 1000, false);
});

function toggle(e, e2, e3) {
  if ($(e).hasClass(e2)) {
    $(e).removeClass(e2);
  } else {
    $(e3).removeClass(e2);
    $(e).addClass(e2);
  }
}

// /*when you click a button it's going to redirect you to the requested slide*/
// $(".btn-slide").click(function(e){
//     e.preventDefault();

//     /*if you're in the contact section and you click an slider button the contact section is going to desapear*/
//     if(rotate === false){
//         $("#contacto").css("top", "95%");
//         $(".copyright").css("opacity", "1");
//         $(".social_media").css("opacity", "1");
//         rotate = true;
//     }
//     slideIndex = $(this).index();
//     slider.slick('slickGoTo', slideIndex);
// });

// /* putting some arrows to the page */
// $(".btn-left").click(function(){
//     slider.slick("slickPrev");
// });

// $(".btn-right").click(function(){
//     slider.slick("slickNext");
// });

/*adapting the screen for phones keyboards*/
$(document).ready(function() {
  setTimeout(function() {
    let viewheight = $(window).height();
    let viewwidth = $(window).width();
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute(
      "content",
      "height=" +
        viewheight +
        "px, width=" +
        viewwidth +
        "px, initial-scale=1.0"
    );
  }, 300);
});

/*refresh the page again once you change the screen orientation for the responsive part work properly*/
$(window).bind("orientationchange", function(event) {
  location.reload(true);
});

/* Start fancybox */
$("[data-fancybox]").fancybox({
  animationEffect: "fade",
  animationDuration: 1000
});

$(".know-us").click(function() {
  mySwiperMain.slideNext();
});
