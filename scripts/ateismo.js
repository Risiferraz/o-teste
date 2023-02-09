paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "ateismo"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)