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
    }
    else
    {
        botaosacola.style.display = 'none'; 
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


