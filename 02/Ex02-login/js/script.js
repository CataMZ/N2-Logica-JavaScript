var mensagem = document.querySelector('.login__subtitle');


var botao = document.querySelector('.button');
botao.addEventListener('click', function(evento){
    evento.preventDefault();
    var senha = document.querySelector('#loginInputPassword')
    console.log(senha.value)
    if ( senha.value.length < 6){
        mensagem.textContent = 'Digite uma senha válida'
        return
    }
    else if {
        mensagem.textContent = 'Foi'
    }
    
    var email = document.querySelector('#loginInputEmail')
    console.log(email.value)
    if ( email.value.indexOf('@')<=0){
        mensagem.textContent = 'Digite um e-mail válido'
        return
    }
    else {
        mensagem.textContent = 'Foi'
    }
})


