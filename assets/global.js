function toggleSideBar() {
  const toggleOpenButton = document.getElementById("hamBurgurMenu");
  toggleOpenButton.addEventListener("click", () => {
    alert("hellow");
  });
}
toggleSideBar();

function stickyHeader() {
  const headerBar = document.getElementById("topHeader");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      headerBar.classList.add("sticky-header");
    } else {
      headerBar.classList.remove("sticky-header");
    }
    lastScrollY = window.scrollY;
  });
}
stickyHeader();
