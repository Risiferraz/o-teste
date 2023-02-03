let paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "gnosticismo"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)