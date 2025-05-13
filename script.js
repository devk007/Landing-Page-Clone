const video = document.getElementById("myVideo");
const playBtnContainer = document.getElementById("playButtonContainer");

function toggleVideo() {
    if (video.paused) {
        video.play();
        playBtnContainer.classList.add("hidden");
    } else {
        video.pause();
        playBtnContainer.classList.remove("hidden");
    }
}

video.addEventListener("click", toggleVideo);
playBtnContainer.addEventListener("click", toggleVideo);


video.addEventListener("pause", () => {
    playBtnContainer.classList.remove("hidden");
});

video.addEventListener("play", () => {
    playBtnContainer.classList.add("hidden");
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    modal.style.display = "block";
    document.body.classList.add('no-scroll'); // 
    form.reset();
  });

  closeModal.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll'); 
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove('no-scroll'); 
    }
  };

