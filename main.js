const ciseaux = document.querySelector(".choice__ciseaux");

const pierre = document.querySelector(".choice__pierre");

const papier = document.querySelector(".choice__papier");

const ImagePreview = document.querySelector(".player__pic");

ciseaux.addEventListener("click", function() {
  ImagePreview.setAttribute( "/asset/ciseau.png");
});
