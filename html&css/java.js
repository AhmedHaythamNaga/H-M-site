$(document).ready(function() {
    var carousel = $(".carousel");
    var slides = carousel.find("img");
    var totalSlides = slides.length;
    var currentIndex = 0;

    $(".next-btn").click(function() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });

    $(".prev-btn").click(function() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });

    function updateCarousel() {
      var offset = -currentIndex * 100 + "%";
      carousel.css("transform", "translateX(" + offset + ")");
    }
  });