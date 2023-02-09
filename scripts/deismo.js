paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "deismo"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)