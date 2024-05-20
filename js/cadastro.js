
/*firebase.auth().onAuthStateChanged(user => {
    if(user)
    {
        window.location.href = "home.html";
    }
})
*/


function validacaoEmail()
{
    habilitarDesabilitarBotao();
    emailError();
}

function validacaoPassword()
{
    habilitarDesabilitarBotao();
}

function impressaoPassword()
{
    passwordError();
}


function verificarEmail()
{
    let email = document.getElementById("email").value;
    let confirmemail = document.getElementById("confirmaremail").value;

    if(!email || !confirmemail)
    {
        return false; 
    }

    if(email != confirmemail)
    {
        return false; 
    }

    return validarEmail(email);
}

function verificarSenha()
{
    let senha = document.getElementById("senha").value;
    let confirmsenha = document.getElementById("confirmarsenha").value;

    if(!senha || !confirmsenha)
    {
        return false; 
    }

    if(senha != confirmsenha)
    {
        return false; 
    }


    return true; 
}


let menserro = document.createElement("p");
menserro.textContent = 'E-mail inválido';
menserro.setAttribute('style', 'color: red');

let menserro2 = document.createElement("p");
menserro2.textContent = 'E-mail inválido';
menserro2.setAttribute('style', 'color: red');

let menserro3 = document.createElement("p");
menserro3.textContent = 'E-mail precisa ser igual';
menserro3.setAttribute('style', 'color: red');


//Imprimir na tela o erro no Email 
function emailError()
{
    let email = document.getElementById("email").value;
    let confirmemail = document.getElementById("confirmaremail").value;

    let divemail = document.getElementById("divemail");
    let diveemailconfirm = document.getElementById("divemailconfirm");


    //Colocar Mensagem Abaixo do Email 
    if(validarEmail(email) == false)
    {
        divemail.appendChild(menserro);
    }
    else if(divemail.contains(menserro))
    {
        divemail.removeChild(menserro);
    }

    if(!email && divemail.contains(menserro))
    {
        divemail.removeChild(menserro);
    }


    //Colocar Mensagem Abaixo do Confirmar Email 
    if(validarEmail(confirmemail) == false)
    {
        diveemailconfirm.appendChild(menserro2);
        if(diveemailconfirm.contains(menserro3))
        {
            diveemailconfirm.removeChild(menserro3);
        }
    }
    else if(diveemailconfirm.contains(menserro2))
    {
        diveemailconfirm.removeChild(menserro2);

    }
    else
    {
        if(email != confirmemail)
        {
            diveemailconfirm.appendChild(menserro3);
        }
        else if(diveemailconfirm.contains(menserro3))
        {
            diveemailconfirm.removeChild(menserro3);
        }
    }

    if(!confirmemail && diveemailconfirm.contains(menserro2))
    {
        diveemailconfirm.removeChild(menserro2);
    }
}



let menserro4 = document.createElement("p");
menserro4.textContent = 'Senha precisa ser igual'; 
menserro4.setAttribute('style', 'color: red');



//Enviar dados para o firebase 
function passwordError()
{
    let senha = document.getElementById("senha").value;
    let confirmsenha = document.getElementById("confirmarsenha").value;

    let divpassword = document.getElementById("divsenhaconfirm");


    if((senha && confirmsenha) && senha != confirmsenha)
    {
        divpassword.appendChild(menserro4);
    }
    else if(divpassword.contains(menserro4))
    {
        divpassword.removeChild(menserro4);
    }

}



function habilitarDesabilitarBotao()
{
    let email = verificarEmail();
    let password = verificarSenha();

    document.getElementById('cadastrar').disabled = !email || !password;  
}


function validarEmail(email)
{
    return /\S+@\S+\.\S+/.test(email);
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


function cadastro()
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        window.location.href = "login.html";
    }).catch(error => {
        alert("Erro ao tentar fazer cadastro!");
    })

}


