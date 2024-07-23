

function validacaoEmail()
{
    //habilitarDesabilitarBotao();
    emailError();
}

function validacaoPassword()
{
    //habilitarDesabilitarBotao();
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


/*
function habilitarDesabilitarBotao()
{
    let email = verificarEmail();
    let password = verificarSenha();

    document.getElementById('cadastrar').disabled = !email || !password;  
}
*/

function validarEmail(email)
{
    return /\S+@\S+\.\S+/.test(email);
}


const firebaseConfig = {
    apiKey: "AIzaSyCLaBmEhATx_qOv7Pr3qZuZ1J-66QaC1oM",
    authDomain: "produto-d1bb1.firebaseapp.com",
    databaseURL: "https://produto-d1bb1-default-rtdb.firebaseio.com",
    projectId: "produto-d1bb1",
    storageBucket: "produto-d1bb1.appspot.com",
    messagingSenderId: "533020633092",
    appId: "1:533020633092:web:b499bb37ba0352d113ed51"
  };

firebase.initializeApp(firebaseConfig);


function atualizarConta()
{
    const password = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    var select = document.getElementById("sexo");
    const sexo = select.options[select.selectedIndex].text;
    const nascimento = document.getElementById("nascimento").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const celular = document.getElementById("celular").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const referencia = document.getElementById("referencia").value;
    const bairro = document.getElementById("bairro").value;
    const estado = document.getElementById("estado").value;
    const foto = document.getElementById("foto").src;

    let dados = {};


    if(password)
    {
        atualizarSenha(password);
    }

    if(nome) dados.nomec = nome;
    if(sobrenome) dados.sobrenomec = sobrenome;
    if(sexo) dados.sexoc = sexo;
    if(nascimento) dados.nascimentoc = nascimento;
    if(cpf) dados.cpfc = cpf;
    if(telefone) dados.telefonec = telefone;
    if(celular) dados.celularc = celular;
    if(rua) dados.ruac = rua; 
    if(numero) dados.numeroc = numero; 
    if(complemento) dados.complementoc = complemento; 
    if(referencia) dados.referenciac = referencia; 
    if(bairro) dados.bairroc = bairro;
    if(estado) dados.estadoc = estado;
    if(foto) dados.fotoc = foto; 


    firebase.auth().onAuthStateChanged((user) => {
        if(user)
        {
            fetch(`https://usuario-a8e40-default-rtdb.firebaseio.com/usuario/${user.uid}.json`, {
                method:'PATCH', 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(dados)
            })
            .then(() => {
                fetch(`https://usuario-a8e40-default-rtdb.firebaseio.com/usuario/${user.uid}.json`)
                .then(() => {
                    window.location.href = "../conta/conta.html";
                })
                .catch(error => {
                    alert("Não retornou resposta!" + error);
                })
            })
            .then(() => {
                console.log("Tudo ok!");
            })    
            .catch(error => {
                console.error("Deu errado!");
            })
        }else{
            console.log('Nenhum usuário autenticado');
        }
    });


    

    function atualizarEmail(novoEmail)
    {
        const user = firebase.auth().currentUser;

        if(user)
        {
            user.updateEmail(novoEmail)
            .then(() => {
                console.log("E-mail atualizado com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao atualizar o e-mail: ", error);
            });
        }
        else{
            console.log("Nenhum usuário autenticado!");
        }
    }

    function atualizarSenha(novaSenha)
    {
        const user = firebase.auth().currentUser;

        if(user)
            {
                user.updatePassword(novaSenha)
                .then(() => {
                    console.log("Senha atualizada com sucesso!");
                })
                .catch(error => {
                    console.error("Erro ao atualizar a senha: ", error);
                });
            }
            else{
                console.log("Nenhum usuário autenticado!");
            }
    }


}





