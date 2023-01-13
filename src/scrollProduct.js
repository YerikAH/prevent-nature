export function scrollProduct() {
  document.addEventListener("click", (e) => {
    if (e.target.className.includes("productGet")) {
      scrollClick();
    }
  });
}
function scrollClick() {
  window.scroll({
    top: 1500,
    behavior: "smooth",
  });
}
