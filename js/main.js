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



// collapse x
{
  let closeSiblings = true;
  let collapse_x_toggler_s = document.querySelectorAll('.collapse-x__toggler');
  let collapse_x_collapsible_s = document.querySelectorAll('.collapse-x__collapsible');

  collapse_x_collapsible_s.forEach((item) => {
    item.style.transition = '0.3s';
    item.style.overflow = 'hidden';
    if (!item.classList.contains('active')){
      item.style.height = '0px';
    } else {
      item.style.height = item.querySelector('.collapse-x__collapsible__inner').offsetHeight + 'px'
    }
  });

  collapse_x_toggler_s.forEach((collapse_x_toggler) => {
    collapse_x_toggler.addEventListener('click', function(event){
      event.preventDefault();
      let toggler = event.target;
      let item = getClosest(toggler,'.collapse-x');
      let sibling_toggler = item.parentElement.querySelectorAll(".collapse-x .collapse-x__toggler");
      // clear all active collapse item
      if (closeSiblings) {
        sibling_toggler.forEach((item) => {
          if(item != toggler) {
            collapse_x_close(item);
          }
        });
      }

      if (!toggler.classList.contains('active')) {
        collapse_x_open(toggler);
      } else {
        collapse_x_close(toggler);
      }
    });
  });


  function collapse_x_open(x_toggler) {
    let item = getClosest(x_toggler,'.collapse-x');
    let item__collapsible = item.querySelector('.collapse-x__collapsible');
    let item__collapsible__inner  = item__collapsible.querySelector('.collapse-x__collapsible__inner')

    //add classes
    x_toggler.classList.add('active');
    item.classList.add('active');
    item__collapsible.classList.add('active');

    // modify-height
    item__collapsible.style.height = item__collapsible__inner.offsetHeight + 'px';
  }

  function collapse_x_close(x_toggler) {
    let item = getClosest(x_toggler,'.collapse-x');
    let item__collapsible = item.querySelector('.collapse-x__collapsible');
    let item__collapsible__inner  = item__collapsible.querySelector('.collapse-x__collapsible__inner')

    //add classes
    x_toggler.classList.remove('active');
    item.classList.remove('active');
    item__collapsible.classList.remove('active');

    // modify-height
    item__collapsible.style.height = '0px';
  }

  function getClosest( elem, selector ) {
    while (elem !== document.body) {
        elem = elem.parentElement;
        if (elem.matches(selector)) return elem;
    }
  }
}




// $('.parent-collapse .collapsible-content').css({
//   'transition': '.3s',
//   'overflow': 'hidden'
// });
// $('.parent-collapse:not(.showed) .collapsible-content').css('height','0px');
// $('.parent-collapse .toggler').click(function(){
//   var thisis = $(this);
//   var factHeight = thisis.parents('.parent-collapse').find('.collapsible-content-inner').outerHeight();

//   if (thisis.parents('.parent-collapse').hasClass('showed')) {
//     thisis.parents('.parent-collapse').find('.collapsible-content').css('height','0px');
//     thisis.parents('.parent-collapse').removeClass('showed');
//   } else {
//     thisis.parents('.parent-collapse').find('.collapsible-content').css('height',factHeight + 'px');
//     thisis.parents('.parent-collapse').addClass('showed');
//   }

//   thisis.parents('.parent-collapse').siblings('.parent-collapse').find('.collapsible-content').css('height','0px');
//   thisis.parents('.parent-collapse').siblings('.parent-collapse').removeClass('showed');
// });