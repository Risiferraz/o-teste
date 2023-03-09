// alert ("OK! TÁ ACESSANDO O SCRIPT")
let paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
desativarOpcaoJaSelecionada()
function desativarOpcaoJaSelecionada() {
  if (paginasJaVisitadas == null) {
    paginasJaVisitadas = ""
  } else {
    const lista = paginasJaVisitadas.split(",")
    if (!!lista && lista.length > 0) {
      lista
        .filter(pagina => pagina != "null")
        .filter(pagina => pagina != "")
        .forEach(pagina => {
          // document.getElementById(pagina).style.display = "none"
          document.getElementById(pagina).style.opacity = "0.1"
          console.log("pagina", pagina)
        });
    }
  }

}
function passarAdiante() {
  setTimeout(() => vaiParaProximoQuadro(), 2000);
}
function vaiParaProximoQuadro() {
  document.getElementById("quadro-inicial").style.display = "none";
  document.getElementById("escola").style.display = "flex";
}
function darOPlay() {
  var video = document.getElementById("video-promocional");
  document.getElementById("clique-play").style.display = "none";
  document.getElementById("video-promocional").style.display = "block";
  video.play();
}
function vaiParaProximaPagina() {
  window.location.href = 'pagina2.html';
}
document.addEventListener("DOMContentLoaded", function () {
  const html = document.querySelector('html');
  html.scrollTop = '0px';
});
document.getElementById("link").addEventListener("click", () => {
  window.location.assign('https://www.google.com');
})
const listaDeOpcoes = document.getElementsByClassName("opcao-link")
for (const opcao of listaDeOpcoes) {
  opcao.addEventListener("click", event => {
    const lista = paginasJaVisitadas.split(",")
    if (!!lista && lista.includes(opcao.id)) {
      event.preventDefault()
    }
  })
}
const lista = paginasJaVisitadas.split(",")
if (lista.includes("teismo")
&& lista.includes("ateismo")
&& lista.includes("agnosticismo")
&& lista.includes("gnosticismo")
&& lista.includes("panteismo")
&& lista.includes("deismo")){
  document.getElementById("opcoes").style.display = "none";
  document.getElementById("tela-final").style.display = "block";
}