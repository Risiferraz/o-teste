paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "panteismo"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)