var sorteados = ["1234","1243","1324","1342","1432","1423","2134","2143","2314","2341","2431","2413","3124","3142","3214","3241","3421","3412","4132","4123","4213","4231","4321","4312"]
var numero = Math.floor(Math.random() * sorteados.length)
console.log(sorteados[numero])
var num2 = sorteados[numero]

function enviar(){
    var num = document.querySelector("#texto").value
    /*if(num==num2){
        alert("Acertou!!!")
    }else{
        alert("Errou!!!")
    }*/
    var acertos = 0
    for(let i=0;i<num.length;i++){
        if(num[i] == num2[i]){
            ++acertos
        }
    }
    res.innerText = "Voce acertou "+acertos+" numero(s)"
}



function resetar(){
    texto.value = ""
}