class Categoria{
    constructor({id, nome, preco, parcela, link, imagem}){
        this.id = id; 
        this.nome = nome; 
        this.preco = preco; 
        this.parcela = parcela; 
        this.link = link; 
        this.imagem = imagem;   
    }
}



document.addEventListener('DOMContentLoaded', listaCategoria)


const acessorios = document.getElementById('acessorios');

function listaCategoria()
{
    fetchCategoria()
        .then(categoria => {
            renderizarCategorias(categoria);
        })
        .catch(error => {
            console.error('Houve um problema ao buscar a categoria:', error);
        });

}

function fetchCategoria()
{
return fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/acessorios.json')
    .then(response => {
        if(!response.ok)
        {
            throw new Error('Error na resposta de rede');
        }
        return response.json();
    })
    .then(categorias => {
        const categoriasList = [];
        for(let key in categorias)
        {
            const category = new Categoria({
                id: key,
                nome: categorias[key].nome,
                preco: categorias[key].preco,
                parcela: categorias[key].parcela,
                link: categorias[key].link,
                imagem: categorias[key].imagem
            });

            categoriasList.push(category);
        }

        return categoriasList;
    });
}

function renderizarCategorias(categoria)
{
    acessorios.innerHTML = '';

    categoria.forEach(category => {
        const categoriaCard = createCategoriaCard(category);
        acessorios.appendChild(categoriaCard);
    })
}

function createCategoriaCard(categoria)
{
    const divMaior = document.createElement('div');
    divMaior.classList.add('col');

    const link = document.createElement('a');
    link.classList.add('text-decoration-none');
    link.href = categoria.link;

    const divMenor = document.createElement('div');
    divMenor.classList.add('card', 'text-bg-secondary');

    const imagem = document.createElement('img');
    imagem.classList.add('estruturaimagem');
    imagem.src = categoria.imagem; 

    const titulo = document.createElement('h6');
    titulo.classList.add('card-title');

    const spantitulo = document.createElement('span');
    spantitulo.classList.add('letra');
    spantitulo.textContent = categoria.nome; 


    const spanpreco = document.createElement('span');
    spanpreco.setAttribute('style', 'font-weight: bold');
    spanpreco.textContent = categoria.preco;

    const spanparcelado = document.createElement('span');
    spanparcelado.textContent = categoria.parcela; 

    titulo.appendChild(spantitulo);


    divMenor.appendChild(imagem);
    divMenor.appendChild(titulo);
    divMenor.appendChild(spanpreco);
    divMenor.appendChild(spanparcelado);


    link.appendChild(divMenor);

    divMaior.appendChild(link);

    return divMaior;

}


