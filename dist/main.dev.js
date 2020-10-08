"use strict";

//Mobile view navigation bar
var menuToggler = document.querySelector(".menu-toggle");
var body = document.querySelector("body");
menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    this.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}