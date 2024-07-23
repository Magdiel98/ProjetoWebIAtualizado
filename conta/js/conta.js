document.addEventListener('DOMContentLoaded', (event) =>{
    const nome = document.getElementById('nomeconta');

    const sobrenome = document.getElementById('sobrenomeconta');

    const sexo = document.getElementById('sexoconta');

    const nascimento = document.getElementById('dataconta');
            
    const email = document.getElementById('emailconta');
            
    const cpf = document.getElementById('cpfconta');

    const telefone = document.getElementById('telefoneconta');
        
    const celular = document.getElementById('celularconta');
        
    const rua = document.getElementById('ruaconta');
    
    const numero = document.getElementById('numeroconta');
        
    const complemento = document.getElementById('complementoconta');
    
    const referencia = document.getElementById('referenciaconta');
        
    const bairro = document.getElementById('bairroconta');
    
    const estado = document.getElementById('estadoconta');

    const nomelado = document.getElementById('nomelado');

    const emaillado = document.getElementById('emaillado');

    const celularlado = document.getElementById("celularlado");

    //const fotolado = document.getElementById("fotolado");

    const atualizarConta = document.getElementById("atualizarConta");

    atualizarConta.addEventListener('click', function(){
        window.location.href = "atualizarconta.html"
    });

    const descadastrar = document.getElementById("descadastrar");

    

    addDadosUsuario(); 

    descadastrar.addEventListener("click", function(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                fetch(`https://usuario-a8e40-default-rtdb.firebaseio.com/usuario/${firebase.auth().currentUser.uid}.json`, {
                    method: "DELETE"
                });
            }
        })
    })


    function addDadosUsuario()
    {
        console.log("Certo!");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {    
                fetch(`https://usuario-a8e40-default-rtdb.firebaseio.com/usuario/${firebase.auth().currentUser.uid}.json`)
                .then(response => {
                    return response.json();
                })   
                .then(dados => {
                    nome.textContent = " " + dados.nomec;
                    email.textContent = " " + dados.emailc; 
                    sobrenome.textContent = " " + dados.sobrenomec;
                    sexo.textContent = " " + dados.sexoc;
                    nascimento.textContent = " " + dados.nascimentoc;
                    cpf.textContent = " " + dados.cpfc; 
                    telefone.textContent = " " + dados.telefonec;
                    celular.textContent = " " + dados.celularc; 
                    rua.textContent = " " + dados.ruac; 
                    numero.textContent = " " + dados.numeroc;
                    complemento.textContent = " " + dados.complementoc; 
                    referencia.textContent = " " + dados.referenciac; 
                    bairro.textContent = " " + dados.bairroc; 
                    estado.textContent = " " + dados.estadoc;

                    nomelado.textContent = " " + dados.nomec; 
                    celularlado.textContent = " " + dados.celularc; 
                    emaillado.textContent = " " + dados.emailc; 
                    //fotolado.src = " " + dados.fotoc;  

                })
                .catch(error => {
                    console.error("Deu errado!"+error);
                })
            }else{
                console.log('Nenhum usuário autenticado');
            }
        });
    }




});