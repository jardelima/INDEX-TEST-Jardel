export default function initMenuMobile() {

  const openMenu = document.querySelector("[data-target='openMenu']");
  const closeMenu = document.querySelector("[data-target='closeMenu']");
  const linksMenu = document.querySelectorAll("[data-target='link']");

  openMenu.addEventListener("click", () => {
    document.getElementById("menuMobile").style.width = "100%";
  })

  closeMenu.addEventListener("click", () => {
    document.getElementById("menuMobile").style.width = "0";
  })

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("menuMobile").style.width = "0";
    });
  })

}