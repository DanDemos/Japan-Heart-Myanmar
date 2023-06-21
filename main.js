

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-home', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 100000
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })

  var isLoop = true;
  console.log($('.swiper-donor .swiper-slide').length)
  if($('.swiper-donor .swiper-slide').length < 3) {
      isLoop = false;
  }

  const swiper1 = new Swiper(".swiper-donor", {
    loop: isLoop,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next.donor",
      prevEl: ".swiper-button-prev.donor",
    },
    pagination: {
      el: ".swiper-pagination.donor",
      clickable: true,
    },
  });
});
