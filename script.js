
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrollo verso il basso
    navbar.style.top = "-90px"; // Nascondi la navbar
  } else {
    // Scrollo verso l'alto
    navbar.style.top = "0"; // Mostra la navbar
  }

  if (scrollTop <= 0) {
    // Raggiunto l'inizio del documento
    navbar.classList.add("transparent");
    navbar.classList.remove("black");
  } else {
    // Altrimenti, scroll non in cima alla pagina
    navbar.classList.remove("transparent");
    navbar.classList.add("black");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
