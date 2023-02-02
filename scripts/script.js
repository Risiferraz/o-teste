// alert ("OK! TÁ ACESSANDO O SCRIPT")
desativarOpcaoJaSelecionada()
function desativarOpcaoJaSelecionada() {
  let paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
  if (paginasJaVisitadas == null) {
    paginasJaVisitadas = ""
  }  else {
    const lista = paginasJaVisitadas.split(",")
    if (!!lista && lista.length > 0) {
      lista
        .forEach(pagina => {
          document.getElementById(pagina).style.display = "none"
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

// paginasJaVisitadas += "teismo,"
// paginasJaVisitadas += "ateismo"
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)
// ao clicar no link (em sua imagem) muda da classe "opcao"para a classe "opcaonula"
// e sai da lista

// const opcaoEscolhida = document.getElementsByClassName('opcao')
// opcaoEscolhida.addEventListener("click", function(e) {
// opcaoEscolhida.classList.replace("opcao", "opcaonula")
// });



// const listaDeOpcoes = [
//   opcao1, opcao2, opcao3, opcao4, opcao5, opcao6
// ]
// const selecionarOpcao =
// document.addEventListener("click", event => {
//   removeEventListener
// })
