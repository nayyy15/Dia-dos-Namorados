document.getElementById("pokebola").addEventListener("click", function () {
  this.style.transform = "translateY(-200px)";
  document.getElementById("banner").style.opacity = "1";

  setTimeout(() => {
    document.getElementById("carta").style.opacity = "1";
  }, 2000);
});
