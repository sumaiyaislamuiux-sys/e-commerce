$(".sliders").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-angles-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-angles-right next"></i>',
});
document.addEventListener("DOMContentLoaded", () => {
  const dateTimeElement = document.getElementById("footer-date-time");
  function updateClock() {
    dateTimeElement.textContent = new Date().toLocaleString();
  }
  updateClock();
  setInterval(updateClock, 1000);
});
