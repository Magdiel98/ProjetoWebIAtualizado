
document.addEventListener('DOMContentLoaded', (event) =>{

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
    
    let adicionar = document.getElementById('adicionarproduto');
    
    let remover = document.getElementById('removerproduto');

    let categoria = document.getElementById('categoriaproduto');

    let categoriaescolhida; 


    //Categoria escolhida 
    categoria.addEventListener('change', function(){
        categoriaescolhida = categoria.options[categoria.selectedIndex].text;
    });

    /*
        Informações padrões: 
        O link da página do produto 
        O preço 
        Parcela do preço 
        Nome do produto 
     */


    //Divs para colocar os produtos 
   
        
    

    adicionar.addEventListener('click', function(){

        if(categoriaescolhida == 'Roupas')
        {
            let dados = {
                nome:"Vestido",
                preco:"300",
                parcela:"10x 30",
                link: "produtoroupas.html",
                imagem: "img/roupas/roupas1.jpg"
            }

            const roupasList = []; 
            

            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/roupas.json', {
                method: "POST",
                body: JSON.stringify(dados)
            })
            .then(() => fetchCategoria('https://produto-d1bb1-default-rtdb.firebaseio.com/roupas.json'))
            .then(categoria => {
                roupasList.push(categoria); 
                //renderizarCategoria(roupasList, categoriaescolhida); 
            })
            .catch(error => {
                console.error('Houve um problema ao buscar os contatos:', error);
            });

        }
        else if(categoriaescolhida == 'Jeans')
        {
            let dados = {
                nome:"Calça Jeans",
                preco:"200",
                parcela:"10x 20",
                link: "produtojeans.html",
                imagem: "img/roupas/jeans1.jpg"
            }
            
           
            const jeansList = []; 

            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/jeans.json', {
                method: "POST",
                body: JSON.stringify(dados)
            })
            .then(() => fetchCategoria('https://produto-d1bb1-default-rtdb.firebaseio.com/jeans.json'))
            .then(categoria => {
                jeansList.push(categoria);
                //renderizarCategoria(jeansList, categoriaescolhida); 
            })
            .catch(error => {
                console.error('Houve um problema ao buscar os contatos:', error);
            });


        }
        else if(categoriaescolhida == 'Moda Praia')
        {
            let dados = {
                nome:"Saída de Praia",
                preco:"100",
                parcela:"10x 10",
                link: "produtopraia.html",
                imagem: "img/roupas/praia1.jpg"
            }

           
            const praiaList = []; 

            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/praia.json', {
                method: "POST",
                body: JSON.stringify(dados)
            })
            .then(() => fetchCategoria('https://produto-d1bb1-default-rtdb.firebaseio.com/praia.json'))
            .then(categoria => {
                praiaList.push(categoria);
                //renderizarCategoria(praiaList, categoriaescolhida); 
            })
            .catch(error => {
                console.error('Houve um problema ao buscar os contatos:', error);
            });
            
    
        }
        else if(categoriaescolhida == 'Fitness')
        {
            let dados = {
                nome:"Conjunto Fitness",
                preco:"190",
                parcela:"10x 19",
                link: "produtofitness.html",
                imagem: "img/roupas/fitness1.jpg"
            }


            const fitnessList = []; 

            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/fitness.json', {
                method: "POST",
                body: JSON.stringify(dados)
            })
            .then(() => fetchCategoria('https://produto-d1bb1-default-rtdb.firebaseio.com/fitness.json'))
            .then(categoria => {
                fitnessList.push(categoria); 
                //renderizarCategoria(fitnessList, categoriaescolhida);
            })
            .catch(error => {
                console.error('Houve um problema ao buscar os contatos:', error);
            });
        
        }
        else
        {
            let dados = {
                nome:"Acessórios",
                preco:"200",
                parcela:"10x 20",
                link: "produtoacessorios.html",
                imagem: "img/roupas/acessorio1.jpg"
            }

            const acessoriosList = []; 

            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/acessorios.json', {
                method: "POST",
                body: JSON.stringify(dados)
            })
            .then(() => fetchCategoria('https://produto-d1bb1-default-rtdb.firebaseio.com/acessorios.json'))
            .then(categoria => {
                acessoriosList.push(categoria); 
                //renderizarCategoria(acessoriosList, categoriaescolhida);
            })
            .catch(error => {
                console.error('Houve um problema ao buscar os contatos:', error);
            });

        }

    });

   
    function fetchCategoria(link)
    {
        return fetch(link)
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


    /*function renderizarCategoria(categoriaList, categoria)
    {
        switch(categoria)
        {
            case 'Roupas':
                roupa.innerHTML = '';
                console.log('Roupa');
                break; 
            case 'Jeans':
                jeans.innerHTML = '';
                console.log('Jeans');
                break;
            case 'Moda Praia':
                praia.innerHTML = ''; 
                console.log('Moda Praia');
                break; 
            case 'Fitness':
                fitness.innerHTML = '';
                console.log('Fitness');
                break; 
            default:
                acessorios.innerHTML = '';
                console.log('Acessórios');
                break;
        }
    }
     */               
                   
          

    

    

});

