/* Débora se inscreveu em uma rede social para se manter em contato com seus amigos. A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os seguintes critérios:
Possui no mínimo 6 caracteres.
Contém no mínimo 1 digito.
Contém no mínimo 1 letra em minúsculo.
Contém no mínimo 1 letra em maiúsculo.
Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

Exemplo:
Entrada:
Ya3


Saída:
3


Explicação:
Ela pode tornar a senha segura adicionando 3 caracteres, por exemplo, &ab, transformando a senha em Ya3&ab. 2 caracteres não são suficientes visto que a senha precisa ter um tamanho mínimo de 6 caracteres.
 */

const senhaForte = () =>{ 
   const $senha = document.getElementById('senha').value
   const pass = String($senha).split('')

   if(caracteresMinimo(pass) 
      && verificaCaracteres(pass) 
         && verificaDigitos(pass) 
            && verificaMaiuscula(pass) 
               && verificaMinuscula(pass)){
      const password = pass.map(c => c.replace(c, '*'))
      document.getElementById('resposta2').innerHTML = `
      <span>Senha Forte</span>
      <br><span class="ok">Senha: ${pass.join('')}</span> `
      console.log('Senha: ' + pass.join(''))
      console.log('Senha: ' + password.join(''))
   }else{
      console.log('Senha não atende ao criterio.')
      document.getElementById('resposta2').innerHTML += `<br> <span class="erro">Senha não atende aos criterios</span>`
   }

}

const caracteresMinimo = (pass) =>{
   const tamanho = pass.length - 6
   if(pass.length < 6){
      document.getElementById('resposta2').innerHTML = `<span class="erro"> Senha precisa ter no minimo 6 caracteres.\nInclua mais <strong>${Math.abs(tamanho)}</strong> caracteres para atender a quantidade minima.</span>`
      return false
   }else{
      return true
   }
}
   
const verificaCaracteres = (pass) => {
   const regex = /\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\+/g      ///\W|_/g
   const verificacao = pass.filter(p => p.match(regex))
   if(verificacao.length == 0){
      document.getElementById('resposta2').innerHTML = '<span class="erro"> Obrigatório ao menos 1 caractere Especial.</span>'
      return false
   }else{
     return true
   }  
   
}

const verificaDigitos = (pass) =>{
   const regexNumber = /[0-9]/
   const verificacao = pass.filter(p => p.match(regexNumber))
   if(verificacao.length == 0){
      document.getElementById('resposta2').innerHTML = '<span class="erro"> Obrigatório no minimo 1 digito.</span>'
     return false
   }else{
      return true
   }

}

const verificaMaiuscula = (pass) =>{
   const regexMai = /[A-Z]/
   const verificacao = pass.filter(p => p.match(regexMai))
   if(verificacao.length == 0){
      document.getElementById('resposta2').innerHTML = '<span class="erro"> Obrigatório no minimo 1 Letra Maiuscula.</span>'    
      return false
   }else{
      return true
   }

}

const verificaMinuscula = (pass) =>{
   const regexMin = /[a-z]/
   const verificacao = pass.filter(p => p.match(regexMin))
   if(verificacao.length == 0){
      document.getElementById('resposta2').innerHTML ='<span class="erro"> Obrigatório no minimo 1 Letra Minuscula.</span>'
      return false
   }else{
      return true
   }

}

//senhaForte('dinha1409+')