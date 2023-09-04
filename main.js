

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



//drop down
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});