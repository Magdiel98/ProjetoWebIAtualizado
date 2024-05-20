//Habilita o botão entrar e mostra erros de email
function validacaoEmail()
{
   habilitarDesabilitarBotao();
   emailError();
}

function validacaoPassword()
{
    habilitarDesabilitarBotao();
    passwordError();
}

function verificarEmail()
{
    const email = document.getElementById("email").value;
    if(!email)
    {
        return false;
    }

    return validarEmail(email);
}



let menserro = document.createElement("p"); 
menserro.textContent = 'E-mail obrigatório';
menserro.setAttribute('style', 'color: red');


let menserro2 = document.createElement("p");
menserro2.textContent = 'E-mail inválido';
menserro2.setAttribute('style', 'color: red');

//Mostra os erros na tela 
function emailError()
{
    let email = document.getElementById("email").value;

    let divemail = document.getElementById("divemail");

    if(!email)
    {
        divemail.appendChild(menserro);

        if(divemail.contains(menserro2))
        {
            divemail.removeChild(menserro2);
        }
    }
    else if(divemail.contains(menserro))
    {
        divemail.removeChild(menserro);

        if(validarEmail(email) == false)
        {
            divemail.appendChild(menserro2);
        }
        else if(divemail.contains(menserro2))
        {
            divemail.removeChild(menserro2);
        }
    }
    else
    {
        if(validarEmail(email) == false)
        {
            divemail.appendChild(menserro2);
        } 
        else if(divemail.contains(menserro2))
        {
            divemail.removeChild(menserro2);
        } 

    }

}


let menserro3 = document.createElement("p");
menserro3.textContent = 'Senha obrigatória';
menserro3.setAttribute('style', 'color: red');

function passwordError()
{
    let password = document.getElementById("password").value;

    let divpassword = document.getElementById("divpassword");

    if(!password)
    {
        divpassword.appendChild(menserro3);
    }
    else
    {
        divpassword.removeChild(menserro3);
    }

}



function habilitarDesabilitarBotao()
{
    let email = verificarEmail();

    let password = verificarSenha();
 
    document.getElementById('entrar').disabled = !email || !password;
}


function verificarSenha()
{
    const password = document.getElementById("password").value;
    if(!password)
    {
        return false;
    }

    return true; 
}

//Verifica se o e-mail é válido
function validarEmail(email)
{
    return /\S+@\S+\.\S+/.test(email);
}


//Para fazer login 
function login()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
        window.location.href = "index.html";
        console.log('success', response);
    })
    .catch(error => {
        alert('Erro ao tentar fazer login!');
        console.log('error', error);
    });


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

