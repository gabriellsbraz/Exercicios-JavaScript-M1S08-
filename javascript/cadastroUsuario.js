function cadastrarUsuario(event){
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let listaUsuarios = JSON.parse(usuarios);

  let [usuarioEncontrado] = listaUsuarios.filter(usuario => usuario.email === email);

  if (usuarioEncontrado) {
    alert("Email já cadastrado!");
    return;
  }

  listaUsuarios.push({nome, email, senha});

  listaUsuarios = JSON.stringify(listaUsuarios);

  usuarios = listaUsuarios;

  return alert(`Usuário(a) ${nome} cadastrado(a) com sucesso!`)
}