/* 
Objetivo 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do trailer

Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
Passo 2 - dar um jeito de identificar quando o usuario clicar no botão
Passo 3 - dar um jeito de pegar o elemento modal no js
Passo 4 - Abrir a modal na tela

Objetivo 2 - quando o usuario clicar no X, devemos fechar a modal.

Passo 1  - dar um jeito de pegar o elemento de fechar modal usando o js
Passo 2 - dar um jeito de identificar quando o usuario clicar no X
PAsso 3 - fechar o modal

Document é a representação do HTML
estamos acessando um objeto - usaremos o queryselector
Variaveis - var, let, const, entre outros

*/


const botaoTrailer = document.querySelector (".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


botaoTrailer.addEventListener ("click", () => {
   
    modal.classList.add('aberto');
    video.setAttribute("src", linkDoVideo);
})


const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {

modal.classList.remove ("aberto");

video.setAttribute("src", "");

});






