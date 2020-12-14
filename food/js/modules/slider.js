function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field,
}) {
  //slider

  // const slides = document.querySelectorAll(".offer__slide"),
  //   sliderPrev = document.querySelector(".offer__slider-prev"),
  //   sliderNext = document.querySelector(".offer__slider-next"),
  //   currentImgNum = document.querySelector("#current"),
  //   totalImgNum = document.querySelector("#total");
  // let slideIndex = 1;

  // slides.length < 10
  //   ? (totalImgNum.textContent = `0${slides.length}`)
  //   : slides.length;

  // slideChange(slideIndex);

  // function slideChange(n) {
  //   if (n > slides.length) slideIndex = 1;
  //   if (n < 1) slideIndex = slides.length;

  // slideIndex < 10
  //   ? (currentImgNum.textContent = `0${slideIndex}`)
  //   : slideIndex;

  //   slides.forEach((item) => item.classList.add("hide"));

  //   slides[slideIndex - 1].classList.add("show");
  //   slides[slideIndex - 1].classList.remove("hide");
  // }

  // function plusSlides(n) {
  //   slideChange((slideIndex += n));
  // }

  // sliderPrev.addEventListener("click", () => {
  //   plusSlides(-1);
  // });

  // sliderNext.addEventListener("click", () => {
  //   plusSlides(1);
  // });

  //carousel

  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    sliderPrev = document.querySelector(prevArrow),
    sliderNext = document.querySelector(nextArrow),
    currentImgNum = document.querySelector(currentCounter),
    totalImgNum = document.querySelector(totalCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1,
    offset = 0;

  slides.length < 10
    ? (totalImgNum.textContent = `0${slides.length}`)
    : slides.length;

  slideIndex < 10 ? (currentImgNum.textContent = `0${slideIndex}`) : slideIndex;

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => (slide.style.width = width));

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
    dots = [];

  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: 0.5;
      transition: opacity 0.6s ease;
    `;

    if (i == 0) dot.style.opacity = 1;
    indicators.append(dot);
    dots.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  sliderNext.addEventListener("click", () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    slideIndex == slides.length ? (slideIndex = 1) : slideIndex++;

    slideIndex < 10
      ? (currentImgNum.textContent = `0${slideIndex}`)
      : slideIndex;

    dots.forEach((dot) => (dot.style.opacity = 0.5));
    dots[slideIndex - 1].style.opacity = 1;
  });

  sliderPrev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    slideIndex == 1 ? (slideIndex = slides.length) : slideIndex--;

    slideIndex < 10
      ? (currentImgNum.textContent = `0${slideIndex}`)
      : slideIndex;

    dots.forEach((dot) => (dot.style.opacity = 0.5));
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      slideIndex < 10
        ? (currentImgNum.textContent = `0${slideIndex}`)
        : slideIndex;

      dots.forEach((dot) => (dot.style.opacity = 0.5));
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
}

export default slider;
