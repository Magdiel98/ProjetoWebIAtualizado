firebase.auth().onAuthStateChanged(function(user){
    if(user)
    {
        carrinhoProdutos();
    }
    
})

document.addEventListener('DOMContentLoaded', (event) => {

    const finalizarcompra = document.getElementById("finalizarcompra");

    if(finalizarcompra)
    {
        finalizarcompra.addEventListener('click', function(){
            window.location.href="compra.html";
        });
    }




});



let corpo = document.getElementById('corpo');


function carrinhoProdutos()
{
    firebase.firestore()
        .collection('produtos')
        .get()
        .then(res => {
            const produtos = res.docs.map(doc => doc.data());
            console.log(produtos);
            addCarrinhoProdutos(produtos); 
        })
}



function addCarrinhoProdutos(produtos)
{

    produtos.forEach(produto => {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.classList.add('w-50');

        const divmaior = document.createElement('div');
        divmaior.classList.add('d-flex');

        const img = document.createElement('img');
        img.classList.add('rounded-2');
        img.src = produto.imagem;

        img.setAttribute('style', 'height: 110px');
        img.setAttribute('style', 'width: 100px');

        const divpequeno = document.createElement('div'); 
        divpequeno.classList.add('align-self-center', 'ms-3');

        const divnome = document.createElement('div');
        divnome.setAttribute('style', 'font-size: 20px');
        divnome.textContent = produto.nome; 

        const divcategoria = document.createElement('div');
        divcategoria.classList.add('text-secondary');
        divcategoria.textContent = produto.categoria; 

        divpequeno.appendChild(divnome);
        divpequeno.appendChild(divcategoria);

        divmaior.appendChild(img);
        divmaior.appendChild(divpequeno);

        td1.appendChild(divmaior);

        const td2 = document.createElement('td');
        td2.textContent = produto.preco; 


        const td3 = document.createElement('td');

        const divmaior2 = document.createElement('div');

        divmaior.classList.add('quantidade', 'w-75', 'rounded-4', 'd-flex', 'justify-content-center', 'align-content-center');

        const botao1td3 = document.createElement('button');

        botao1td3.type = "button"; 

        const icone1td3 = document.createElement('i');

        icone1td3.classList.add('bi-dash');

        botao1td3.appendChild(icone1td3);

        const spantd3 = document.createElement('span');

        spantd3.classList.add('me-4', 'ms-4');

        spantd3.textContent = produto.quantidade; 

        const botao2td3 = document.createElement('button');

        botao2td3.type = "button"; 

        const icone2td3 = document.createElement('i');

        icone2td3.classList.add('bi-plus');

        botao2td3.appendChild(icone2td3);

        divmaior2.appendChild(botao1td3);

        divmaior2.appendChild(spantd3);

        divmaior2.appendChild(botao2td3);

        td3.appendChild(divmaior2);



        const td4 = document.createElement('td');

        td4.textContent = 'R$ 300,00';

        
        const td5 = document.createElement('td');

        const botao1td5 = document.createElement('button');

        botao1td5.classList.add('btn', 'rounded-5');
        botao1td5.setAttribute('style', 'background-color: #ccc');

        const icone1td5 = document.createElement('i');

        icone1td5.classList.add('bi-x');

        botao1td5.appendChild(icone1td5);

        td5.appendChild(botao1td5);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        corpo.appendChild(tr);

    });
}