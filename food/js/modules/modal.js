function openModal(modalSelector, modalTime) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

  console.log(modalTime);
  if (modalTime) {
    clearInterval(modalTime);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTime) {
  const modalOpen = document.querySelectorAll(triggerSelector),
    //modalClose = document.querySelector("[data-close]"),
    modal = document.querySelector(modalSelector);

  modalOpen.forEach((btn) =>
    btn.addEventListener("click", () => openModal(modalSelector, modalTime))
  );

  //modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show"))
      closeModal(modalSelector);
  });

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTime);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}
export default modal;
export { closeModal };
export { openModal };
