// Coletar o elemento botao
let botao = document.querySelector('.transacao__button')
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    // Inputs (elementos no DOM)
    let inputTransacao = document.getElementById('transacaoInputName');
    let inputValor = document.querySelector('#transacaoInputMoney');
    let inputData = document.querySelector('#transacaoInputDate');
    
    // Valores dos inputs
    let valorTransacao = inputTransacao.value;
    let valorValor = inputValor.value;
    let valorData = inputData.value;

    let linha = document.createElement('tr');

    let colunaTransacao = document.createElement('td')
    colunaTransacao.textContent = valorTransacao
    linha.appendChild(colunaTransacao)

    let colunaValor = document.createElement('td')
    colunaValor.textContent = valorValor
    linha.appendChild(colunaValor)

    let colunaData = document.createElement('td')
    colunaData.textContent = valorData
    linha.appendChild(colunaData)

    let tabela = document.querySelector('.extrato__body')
    tabela.appendChild(linha)

    // inputTransacao.value = ""
    // inputValor.value = ""
    // inputData.value = ""

    document.querySelector('.transacao__form').reset();
    
    let corpo = document.querySelector('body')
    if (valorValor<=10){
        corpo.style.backgroundColor = 'green';
    }
    else if (valorValor>10 && valorValor<=50){
        corpo.style.backgroundColor = 'orange';
    }
    else if (valorValor>50){
        corpo.style.backgroundColor = 'red';
    }
})



