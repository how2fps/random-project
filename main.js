//Mobile view navigation bar
let menuToggler = document.querySelector(".menu-toggle");
let body = document.querySelector("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    let content = this.nextElementSibling;
    this.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
