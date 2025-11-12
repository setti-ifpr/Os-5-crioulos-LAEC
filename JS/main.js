function toggleDarkMode(){
        document.body.classList.toggle('dark-mode');
    }

let slideIndex = 0;
showSlide(1);
function showSlide(n) {
  const slides = document.getElementsByClassName("carousel-slide");
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  for (let slide of slides) slide.style.display = "none";
  slides[slideIndex].style.display = "block";
}

setInterval(() => showSlide(1), 5000);