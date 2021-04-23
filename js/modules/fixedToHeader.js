export default function initFixedToHeader() {

  window.onscroll = function () { fixedToHeader() };

  const header = document.querySelector(".navegation");
  const distanceTopHeader = header.offsetTop;

  function fixedToHeader() {
    if (window.pageYOffset > distanceTopHeader) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

}