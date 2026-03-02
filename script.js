const linguagens = document.querySelectorAll(".divLinguagem");
const infos = document.querySelectorAll(".divInfo");
const btnsFechar = document.querySelectorAll(".divBtnFechar");

linguagens.forEach((linguagem, i) => {
    linguagem.addEventListener("click", () => {
        infos[i].style.left = "50%";
        infos[i].style.opacity = "1";
    });

    btnsFechar[i].addEventListener("click", () => {
        infos[i].style.left = "-50%";
        infos[i].style.opacity = "0";
    });
});
 