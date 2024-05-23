fetch('https://roupas-4271b-default-rtdb.firebaseio.com/roupa.json')    
.then(res => res.json())
.then(dados =>{
    console.log(dados)
})




document.addEventListener('DOMContentLoaded', (event) =>{
    let clicar = document.getElementById("clicar");
    
    if(clicar){
        clicar.addEventListener('click', enviar)
    }
});



function enviar()
{
    let dados = {
        nome:"Saia",
        preco:"200",
        parcela:"10x 20"
    }

    fetch('https://roupas-4271b-default-rtdb.firebaseio.com/roupa.json', {
        method: "POST",
        body: JSON.stringify(dados)
    })
}
