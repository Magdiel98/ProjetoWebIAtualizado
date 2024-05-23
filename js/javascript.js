/* 
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                console.log("Usuário está logado:", user);
            }
            else
            {
                console.log("Usuário não está logado");
            }
        });
    })
    .catch((error) => {
        console.error("Erro ao definir persistência de autenticação:", error);
    });


document.addEventListener('DOMContentLoaded', (event) => {
    let botaopessoa = document.getElementById("pessoa");

    if (botaopessoa) {
        botaopessoa.addEventListener('click', visibilidade2);
    }

    // Adicione aqui event listeners adicionais, se necessário
});
*/



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


const firebaseConfig = {
    apiKey: "AIzaSyBtY4MDWZi1jYf5tVgq1bjGiEVcKhYgwMY",
    authDomain: "userlojavirtual.firebaseapp.com",
    projectId: "userlojavirtual",
    storageBucket: "userlojavirtual.appspot.com",
    messagingSenderId: "321445012310",
    appId: "1:321445012310:web:92f97698f0c4dd9138acf7",
    measurementId: "G-4KXBG0D349"
  };

firebase.initializeApp(firebaseConfig);