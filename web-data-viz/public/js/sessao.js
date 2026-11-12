// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var fotoPerfil = sessionStorage.FOTO_PERFIL;

    var imagem = document.getElementById('foto-perfil');
    var b_usuario = document.getElementById("b_usuario");
    var ipt_nome = document.getElementById("ipt_nome");
    var ipt_email = document.getElementById("ipt_email");

    console.log(sessionStorage.FOTO_PERFIL);
    console.log(sessionStorage.NOME_USUARIO)

    if (fotoPerfil && fotoPerfil != 'null') {
        imagem.src = `/uploads/${fotoPerfil}`;
    } else {
        imagem.src = "../assets/imgs/icone.png";
    }

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        ipt_nome.value = nome;
        ipt_email.value = email;
    } else {
        window.location = "../login.html";
    }

    
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}


function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

