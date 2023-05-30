$(".swiper-button-stop").css('display', 'block');
let swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(".swiper-playBtn .swiper-button-stop").click(function(){
  swiper.autoplay.stop();
  $(this).hide();
  $(".swiper-btn .swiper-button-play").show();
  return false;
});
$(".swiper-playBtn .swiper-button-play").click(function(){
  swiper.autoplay.start();
  $(this).hide();
  $(".swiper-btn .swiper-button-stop").show();
  return false;
});
AOS.init({
  easing: 'ease-in-out-sine'
});
