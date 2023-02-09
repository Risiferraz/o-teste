paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "agnosticismo"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)