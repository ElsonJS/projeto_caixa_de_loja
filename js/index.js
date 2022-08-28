/*função com condição que faz a autenticação do usuario
 para logar no sistema*/ 
 
function entrar(){

    let login = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(login == "loja@idloja.com" && password == "134679"){
        location.href = "diretorio.html";
    }else{
        alert("E-mail ou Senha errada!!")
    }
}
