document.getElementsByClassName("green")[0].innerHTML = "uraaa ddd";

var footerEls = document.querySelectorAll(".footer .grey ");

footerEls[footerEls.length - 1].remove();
var newEl =document.createElement("div");
newEl.classList.add("green");
newEl.innerHTML = "Our dynamically created document";
document.getElementsByClassName("footer")[0].appendChild;