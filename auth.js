function verificaUsuario() {
  const dadosUsuario = localStorage.getItem('dados_usuario');
  if (!dadosUsuario) {
    window.location.href = 'pagina_de_login.html';
  }
}

verificaUsuario();