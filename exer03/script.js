function Calc() {
    var notas = parseFloat(document.getElementById("notas").value)
    var resposta = document.getElementById("resp")
    console.log(notas)
    if (notas >= 7) {
        resposta.textContent = notas + " - " + "passou de ano"
    } else {
        resposta.textContent = notas + " - " + "reprovou de ano "
    }
}