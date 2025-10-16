function calc(){
   
    var idade = parseFloat(document.getElementById("idade"))
    var resposta = document.getElementById("resp")

    if(idade >= 7){
        resposta.textContent = idade + " - " + "MAIOR DE IDADE"
    }else {
        resposta.textContent = idade + " - " + "MENOR DE IDADE"
    }

}