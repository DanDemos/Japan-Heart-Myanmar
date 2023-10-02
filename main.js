$('.rounded-circle')

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
  // console.log($('.swiper-donor .swiper-slide').length)
  if ($('.swiper-donor .swiper-slide').length < 3) {
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

  // Swiper for social detail
  var socialPreview=3

  if(window.innerWidth > 992){
    socialPreview=3
    console.log('socialPreview',socialPreview)
  }
  else if(window.innerWidth > 769){
    socialPreview=2
    console.log('socialPreview',socialPreview)
  }
  else{
    socialPreview=1
    console.log('socialPreview',socialPreview)
  }

  if ($('.swiper-social .swiper-slide').length < 3) {
    isLoop = false;
  }

  const swiper_social = new Swiper(".swiper-social", {
    loop: isLoop,
    slidesPerView: socialPreview,
    slidesPerGroup: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next.social",
      prevEl: ".swiper-button-prev.social",
    },
    pagination: {
      el: ".swiper-pagination.social",
      clickable: true,
    },
  });

  const homeSliderTexts = document.querySelectorAll(".home.swiper-slide .row .col-8.d-flex.flex-column.justify-content-center p")
  homeSliderTexts.forEach(homeSliderText => {
    if (homeSliderText.innerHTML) {
      homeSliderText.innerHTML = homeSliderText.innerHTML.replace(/\s+/g, ' ');
      if (homeSliderText.innerHTML.length > 350) {
        homeSliderText.innerHTML = (homeSliderText.innerHTML.slice(0, 350 - 1) || '') + '&hellip;';
      }
      else {
        homeSliderText.innerHTML = homeSliderText.innerHTML
      }
    }
  })

  const supporterTexts = document.querySelectorAll(".donor.swiper-slide .row.p-3 .col-10.ps-2.pe-0 p")
  supporterTexts.forEach(supporterText => {
    if (supporterText.innerHTML) {
      supporterText.innerHTML = supporterText.innerHTML.replace(/\s+/g, ' ');
      if (supporterText.innerHTML.length > 115) {
        supporterText.innerHTML = (supporterText.innerHTML.slice(0, 115 - 1) || '') + '&hellip;';
      }
      else {
        supporterText.innerHTML = supporterText.innerHTML
      }
    }

  })
  const donationDescriptions = document.querySelectorAll(".donation-description.pb-3")
  donationDescriptions.forEach(donationDescription => {
    const wordcount = Number(donationDescription.getAttribute("word"));
    console.log(wordcount || 250)
    if (donationDescription.innerHTML) {
      donationDescription.innerHTML = donationDescription.innerHTML.replace(/\s+/g, ' ');
      if (donationDescription.innerHTML.length > (wordcount || 250)) {
        donationDescription.innerHTML = (donationDescription.innerHTML.slice(0, (wordcount || 250) - 1) || '') + '&hellip;';
      }
      else {
        donationDescription.innerHTML = donationDescription.innerHTML
      }
    }

  })

});



//drop down
// const optionMenu = document.querySelector(".select-menu")
// const selectBtn = optionMenu.querySelector(".select-btn")
// const options = optionMenu.querySelectorAll(".option")
// const sBtn_text = optionMenu.querySelector(".sBtn-text");
// selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
// options.forEach(option => {
//   option.addEventListener("click", () => {
//     let selectedOption = option.querySelector(".option-text").innerText;
//     sBtn_text.innerText = selectedOption;
//     optionMenu.classList.remove("active");
//   });
// });

//payment method
