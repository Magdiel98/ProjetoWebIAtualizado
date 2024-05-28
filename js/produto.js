document.addEventListener('DOMContentLoaded', (event) =>{
    

    //Modificar a quantidade de peças  
    let numero = document.getElementById("valor");

    let valor = parseInt(numero.innerHTML, 10);

    let mais = document.getElementById("mais");
    let menos = document.getElementById("menos");

    if(mais)
    {
        mais.addEventListener('click', somar);
    }

    if(menos)
    {
        menos.addEventListener('click', diminuir);
    }

    function somar()
    {
        if(valor < 100){
            valor += 1; 
            numero.textContent = valor; 
        }
    }

    function diminuir()
    {
        if(valor > 1){
            valor -= 1; 
            numero.textContent = valor; 
        }
    }


    let imagem = document.getElementsByTagName('img');

    let imagemprincipal = document.getElementById('imgp');

    for(let i = 0; i < imagem.length; i++)
    {
        imagem[i].addEventListener('click', function(){
            modificarImagem(imagem[i]);
        });
    }

    function modificarImagem(imagem)
    {
        imagemprincipal.src = imagem.src; 
    }
    
    

    //Botão Compra 
    const modal = document.getElementById('modal');
    const comprar = document.getElementById('botaocompra');
    const fecharModal = document.getElementById('fecharModal');
    const continuar = document.getElementById('continuar');
    const finalizar = document.getElementById('finalizar');

    comprar.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    fecharModal.addEventListener('click', ()=>{
        modal.style.display = 'none';
    });

    continuar.addEventListener('click', ()=>{
        modal.style.display = 'none';
    });

    finalizar.addEventListener('click', ()=>{
        window.location.href = "carrinho.html"; 
    });

    window.addEventListener('click', (event) => {
        if(event.target === modal)
        {
            modal.style.display = 'none';
        }
    }); 





});





