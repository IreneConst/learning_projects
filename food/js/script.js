// require("es6-promise").polyfill();

// import "nodelist-foreach-polyfill";

import tabs from "./modules/tabs";
import calculator from "./modules/calculator";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTime = setTimeout(() => openModal(".modal", modalTime), 300000);

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  calculator();
  forms("form", modalTime);
  modal("[data-modal]", ".modal", modalTime);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    slide: ".offer__slide",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  cards();
  timer(".timer", "2021-12-10");
});
