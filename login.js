function validarLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const dadosUsuarios = JSON.parse(usuarios);

  const usuarioEncontrado = dadosUsuarios.find(usuario => usuario.email === email);

  if (usuarioEncontrado) {
    if (usuarioEncontrado.senha === senha) {
      const dadosUsuarios = {
        email: usuarioEncontrado.email,
        senha: usuarioEncontrado.senha
      };
      localStorage.setItem("dados_usuario", JSON.stringify(dadosUsuarios));
      window.location.href = "login.html";  
    } else{
      alert("Senha incorreta!");
    }
  } else {
    alert("Usuário não encontrado!");
  }
}




// Crie uma arquivo Javascript chamado de login.js e adicione uma função chamada de validarLogin. Nessa função você deve acessar os valores dos campos email e senha criados no formulário do exercício 1 para pegar seus respectivos valores.

// Essa função deve ser executada após o evento de submit do formulário.

// Para validar o login do usuário você precisará buscar no arquivo JSON se existe algum usuário com o login fornecido e se a senha está realmente igual a do arquivo JSON.

// Se o login e senha estiverem corretos você deve armazenar em localStorage dentro de uma propriedade chamada de dados_usuario o seu nome e email.

// localStorage.setItem(// nome da propriedade)

// Em seguida você deve redirecionar para a página inicial da aplicação.