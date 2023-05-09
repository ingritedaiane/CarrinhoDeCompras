var valorTotal = [0,0];
//const product0 = 29.99;
//const product1 = 39.95;
const valorProducts = [29.99,39.95];
var qtd = [0,0];

function adicionar(item){
    quantidade = document.getElementById('quantidade' + item);
    total = document.getElementById('total' + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProducts[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorFinal()
}

function retirar(item){
    if(qtd[item] > 0) {
    qtd[item] -= 1;
    quantidade = document.getElementById('quantidade' + item);
    total = document.getElementById('total' + item);
    valorTotal[item] = Number.parseFloat(valorProducts[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorFinal()
    }
}

function valorFinal(){
    totalCompra = document.getElementById('subtotal');
    valor = 0;

    for (i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }

    totalCompra.innerHTML = valor.toFixed(2);
}

function finalizar(){
    alert('Prontinho, pedido finalizado com sucesso!! <3')
}

function voltar(){
    alert('Deseja sair do carrinho?')
}