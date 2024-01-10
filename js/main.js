// for mobile offcanvas menu function
{
  let offcanvasOpener = document.querySelector(".offmenu-open");
  let offcanvasCloser = document.querySelector(".offcanvas-close");
  let offcanvasMenu = document.querySelector(".offcanvas-menu");
  let offcanvasOverlay = document.querySelector(".offcanvas-overlay");
  let offcanvasHider = document.querySelectorAll(".off-close");

  // actions
  offcanvasOpener.addEventListener("click", function () {
    offcanvasOpen();
  });
  offcanvasCloser.addEventListener("click", function () {
    offcanvasClose();
  });
  window.addEventListener("click", function (e) {
    let container = document.querySelector(".offmenu");
    if (!container.contains(e.target) && !offcanvasOpener.contains(e.target)) {
      offcanvasClose();
    }
  });
  offcanvasHider.forEach((elm) => {
    elm.addEventListener("click", function () {
      offcanvasClose();
    });
  });

  // offcanvasMenu Open function
  function offcanvasOpen() {
    offcanvasMenu.classList.add("active");
    offcanvasOverlay.classList.add("active");
    document.querySelector("body").classList.add("offcanvas-opened");
  }
  // offcanvasMenu Close function
  function offcanvasClose() {
    offcanvasMenu.classList.remove("active");
    offcanvasOverlay.classList.remove("active");
    document.querySelector("body").classList.remove("offcanvas-opened");
  }
}


//modal code
{
  //modal-Open-button
  let modalOpenButton = document.querySelectorAll("[toggle-modal]");
  modalOpenButton.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      // variables
      let clickedButton = this;
      let targetModal = document.querySelector(
        clickedButton.getAttribute("toggle-modal")
      );
      //action
      modalOpen(targetModal);
    });
  });
  //modal-close-button
  let modalCloseButton = document.querySelectorAll("[modal-dismiss]");
  modalCloseButton.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      // action
      modalClose();
    });
  });
  // modal-close-when outside click of its content
  let allModal = document.querySelectorAll(".custom-modal:not(.modal-static)"); //except '.modal-static'
  allModal.forEach((modal) => {
    modal.addEventListener("click", function (event) {
      // variables
      let innerContent = this.querySelector(".modal-content");
      const outsideClick =
        typeof event.composedPath === "function" &&
        !event.composedPath().includes(innerContent);
      // action
      if (outsideClick) {
        modalClose();
      }
    });
  });
  // modalOpen function
  function modalOpen(targetModal) {
    targetModal.classList.add("modal-show");
    document.querySelector("body").classList.add("modal-opened");
  }
  // modalClose function
  function modalClose() {
    let allModal = document.querySelectorAll(".custom-modal");
    allModal.forEach((eachModal) => {
      eachModal.classList.remove("modal-show");
      document.querySelector("body").classList.remove("modal-opened");
    });
  }
}