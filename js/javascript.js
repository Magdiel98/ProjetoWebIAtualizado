firebase.auth().onAuthStateChanged(function(user){
    if(user)
    {
        botaopessoa.addEventListener('click', visibilidade2);
    }
    else
    {
        botaopessoa.addEventListener('click', visibilidade);
    }
});

const botaopessoa = document.getElementById("pessoa");
const botaosair = document.getElementById("sair");
let comprasimagem = document.getElementById("comprasimagem");

botaosair.addEventListener("click", logout);

function visibilidade()
{
    let botao = document.getElementById("login");

    let estilo = window.getComputedStyle(botao).display;

    if(estilo === 'none')
    {
        botao.style.display = 'block';
    }
    else
    {
        botao.style.display = 'none';
    }

}


function visibilidade2()
{
    let botaoconta = document.getElementById("conta");
    let botaosair = document.getElementById("sair");

    let estiloconta = window.getComputedStyle(botaoconta).display;

    if(estiloconta === 'none')
    {
        botaoconta.style.display = 'block';
        botaosair.style.display = 'block';
    }
    else
    {
        botaoconta.style.display = 'none';
        botaosair.style.display = 'none'
    }
}



function visibilidadesacola()
{
    let botaosacola = document.getElementById("compras");

    let estilosacola = window.getComputedStyle(botaosacola).display;

    if(estilosacola === 'none')
    {
        botaosacola.style.display = 'block';
        mostrarProdutos();
    }
    else
    {
        botaosacola.style.display = 'none';
        while(comprasimagem.firstChild)
        {
            comprasimagem.removeChild(comprasimagem.firstChild);
        }
    }
}


function logout()
{
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    })
    .catch(() => {
        alert("Erro ao fazer logout");
    }) 
}


function mostrarProdutos()
{
    firebase.firestore()
        .collection('produtos')
        .get()
        .then(res => {
            const produtos = res.docs.map(doc => doc.data());
            console.log(produtos);
            addProdutoAdicionados(produtos); 
        })
}



function addProdutoAdicionados(produtos)
{

    produtos.forEach(produto => {
        const divgrande = document.createElement('div');
        divgrande.classList.add('mb-2', 'p-2', 'd-flex', 'justify-content-between');
        divgrande.classList.add('classeproduto');

        const imagem = document.createElement('img');
        imagem.classList.add('rounded-2');
        imagem.setAttribute('style', 'height: 70px');
        imagem.setAttribute('style','width: 50px');
        imagem.src = produto.imagem; 

        const divcaracteristicas = document.createElement('div');
        divcaracteristicas.classList.add('align-self-center', 'ms-3');

        const divnome = document.createElement('div');
        divnome.setAttribute('style', 'font-size: 12px');
        divnome.textContent = produto.nome; 

        const divcategoria = document.createElement('div');
        divcategoria.setAttribute('style', 'font-size: 10px');
        divcategoria.textContent = produto.categoria; 

        const divvalor1 = document.createElement('div');
        divvalor1.classList.add('align-content-center', 'ms-3');

        const divvalor2 = document.createElement('div');
        divvalor2.setAttribute('style', 'font-size: 10px');
        divvalor2.textContent = produto.preco;

        const divquantidade1 = document.createElement('div');
        divquantidade1.classList.add('align-content-center', 'ms-3');

        const divquantidade2 = document.createElement('div');
        divquantidade2.setAttribute('style', 'font-size: 10px');
        divquantidade2.textContent = produto.quantidade; 

        divcaracteristicas.appendChild(divnome);
        divcaracteristicas.appendChild(divcategoria);

        divvalor1.appendChild(divvalor2);

        divquantidade1.appendChild(divquantidade2);

        divgrande.appendChild(imagem);
        divgrande.appendChild(divcaracteristicas);
        divgrande.appendChild(divvalor1);
        divgrande.appendChild(divquantidade1);

        comprasimagem.appendChild(divgrande);

    });
}
