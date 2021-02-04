// CLIENT SECTION CAROUSEL WITH THE CLIENTS COMMENTS
let carousel__figures_group = document.querySelector(
  '.clients__carousel__figures_group',
)
let carousel__all__dots = document.querySelectorAll('.carousel__dot')

function moveCarousel(e) {
  if (e.target === carousel__all__dots[0]) {
    carousel__figures_group.style.left = '0'
  }
  if (e.target === carousel__all__dots[1]) {
    carousel__figures_group.style.left = '-100%'
  }
  if (e.target === carousel__all__dots[2]) {
    carousel__figures_group.style.left = '-200%'
  }

  carousel__all__dots.forEach(function (eachDotAgain) {
    if (eachDotAgain !== e.target) {
      eachDotAgain.classList.remove('carouselActiveDot')
    } else {
      eachDotAgain.classList.add('carouselActiveDot')
    }
  })
}

carousel__all__dots.forEach(function (eachDot) {
  eachDot.addEventListener('click', moveCarousel)
})

// CLIENT SECTION CAROUSEL WITH THE CLIENTS COMMENTS

// CLIENT SECTION WITH RAINY BACKGROUND VIDEO
// START PLAYING SINCE THE CONTENT IS LOADED (AS SOON AS WEB BROWSER GOT THE VIDEO )

let videoClientBackground = document.getElementById('video__client__background')
let videoFooterBackground = document.getElementById('video__footer__background')
let videoHeroBackground = document.getElementById('hero__backgroundVideo')

function playAutomatic() {
  videoClientBackground.play()
  videoFooterBackground.play()
  videoHeroBackground.play()
}

window.addEventListener('DOMLoaded', playAutomatic)

// CLIENT SECTION WITH RAINY BACKGROUND VIDEO
