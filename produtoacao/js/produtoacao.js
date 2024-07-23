
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

    let atualizar = document.getElementById('atualizarproduto');


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
                preco:"R$ 300",
                parcela:"R$ 10x 30",
                link: "../paginasprodutos/produtoroupas.html",
                imagem: "../img/roupas/roupas1.jpg"
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
                preco:"R$ 200",
                parcela:"R$ 10x 20",
                link: "../paginasprodutos/produtojeans.html",
                imagem: "../img/jeans/jeans1.jpg"
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
                preco:"R$ 100",
                parcela:" R$ 10x 10",
                link: "../paginasprodutos/produtopraia.html",
                imagem: "../img/praia/praia1.jpg"
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
                preco:"R$ 190",
                parcela:"R$ 10x 19",
                link: "../paginasprodutos/produtofitness.html",
                imagem: "../img/fitness/fitness1.jpg"
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
                preco:"R$ 200",
                parcela:"R$ 10x 20",
                link: "../paginasprodutos/produtoacessorios.html",
                imagem: "../img/acessorios/acessorio1.jpg"
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



    remover.addEventListener('click', function(){

        if(categoriaescolhida == 'Roupas')
        {
            
            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/roupas.json', {
            })
            .then(response => {
                return response.json();
            })
            .then(produtos => {
                const chaves = Object.keys(produtos);
                const ultimachave = chaves[chaves.length - 1];
                fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/roupas/${ultimachave}.json`, {
                    method: "DELETE"
                });
            })
            .catch(error => {
                console.error('Houve um problema ao apagar produto', error);
            });

        }
        else if(categoriaescolhida == 'Jeans')
        {
            const roupasList = []; 
            
            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/jeans.json', {
            })
            .then(response => {
                return response.json();
            })
            .then(produtos => {
                const chaves = Object.keys(produtos);
                const ultimachave = chaves[chaves.length - 1];
                fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/jeans/${ultimachave}.json`, {
                    method: "DELETE"
                });
            })
            .catch(error => {
                console.error('Houve um problema ao apagar produto', error);
            });

        }
        else if(categoriaescolhida == 'Moda Praia')
        {
            const roupasList = []; 
            
            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/praia.json', {
            })
            .then(response => {
                return response.json();
            })
            .then(produtos => {
                const chaves = Object.keys(produtos);
                const ultimachave = chaves[chaves.length - 1];
                fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/praia/${ultimachave}.json`, {
                    method: "DELETE"
                });
            })
            .catch(error => {
                console.error('Houve um problema ao apagar produto', error);
            });

        }
        else if(categoriaescolhida == 'Fitness')
        {
            const roupasList = []; 
            
            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/fitness.json', {
            })
            .then(response => {
                return response.json();
            })
            .then(produtos => {
                const chaves = Object.keys(produtos);
                const ultimachave = chaves[chaves.length - 1];
                fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/fitness/${ultimachave}.json`, {
                    method: "DELETE"
                });
            })
            .catch(error => {
                console.error('Houve um problema ao apagar produto', error);
            });

        }
        else
        {
            const roupasList = []; 
            
            fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/acessorios.json', {
            })
            .then(response => {
                return response.json();
            })
            .then(produtos => {
                const chaves = Object.keys(produtos);
                const ultimachave = chaves[chaves.length - 1];
                fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/acessorios/${ultimachave}.json`, {
                    method: "DELETE"
                });
            })
            .catch(error => {
                console.error('Houve um problema ao apagar produto', error);
            });
        }

        

    });


    atualizar.addEventListener('click', function(){

        var precopagina = parseFloat(document.getElementById("preco").value);
        var parcelapagina = (precopagina/10).toFixed(2); 

        if(categoriaescolhida == 'Roupas')
            {
                fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/roupas.json')
                .then(response => response.json())
                .then(produtos => {
                    for (let key in produtos){
                        fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/roupas/${key}.json`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({preco: `R$ ${precopagina}`, parcela: `R$ 10x ${parcelapagina}`})
                        })
                    }
                })
                .catch(error => console.error("Erro ao atualizar o produto:", erro));
            }
            else if(categoriaescolhida == 'Jeans')
            {
                fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/jeans.json')
                .then(response => response.json())
                .then(produtos => {
                    for (let key in produtos){
                        fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/jeans/${key}.json`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({preco: `R$ ${precopagina}`, parcela: `R$ 10x ${parcelapagina}`})
                        })
                    }
                })
                .catch(error => console.error("Erro ao atualizar o produto:", erro));
            }
            else if(categoriaescolhida == 'Moda Praia')
            {
                fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/praia.json')
                .then(response => response.json())
                .then(produtos => {
                    for (let key in produtos){
                        fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/praia/${key}.json`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({preco: `R$ ${precopagina}`, parcela: `R$ 10x ${parcelapagina}`})
                        })
                    }
                })
                .catch(error => console.error("Erro ao atualizar o produto:", erro));
            }
            else if(categoriaescolhida == 'Fitness')
            {
                fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/fitness.json')
                .then(response => response.json())
                .then(produtos => {
                    for (let key in produtos){
                        fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/fitness/${key}.json`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({preco: `R$ ${precopagina}`, parcela: `R$ 10x ${parcelapagina}`})
                        })
                    }
                })
                .catch(error => console.error("Erro ao atualizar o produto:", erro));
    
            }
            else
            {
                fetch('https://produto-d1bb1-default-rtdb.firebaseio.com/acessorios.json')
                .then(response => response.json())
                .then(produtos => {
                    for (let key in produtos){
                        fetch(`https://produto-d1bb1-default-rtdb.firebaseio.com/acessorios/${key}.json`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({preco: `R$ ${precopagina}`, parcela: `R$ 10x ${parcelapagina}`})
                        })
                    }
                })
                .catch(error => console.error("Erro ao atualizar o produto:", erro));

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

