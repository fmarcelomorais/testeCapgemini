/* Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve /* conter nenhum espaço. */



function escada(){
    const $valor = document.getElementById('valor').value

    let x = ""    
    document.getElementById('resposta').innerHTML = ""
    for(let i = 0; i < $valor; i++){
        x += "*"        
        document.getElementById('resposta').innerHTML += `${x}</br>`
    } 
 
}



