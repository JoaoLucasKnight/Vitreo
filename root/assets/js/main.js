

function navegar(pagina){
  // Defina a URL da página para a qual você deseja navegar
  console.log(pagina)
  const novaPaginaURL = `${pagina}.html`;

  // Use window.location.href para redirecionar para a nova página
  window.location.href = novaPaginaURL;
}








// gerador de codigo 
/*function gerarCodigo() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+,.<>;:/\|=-"';
    let codigo = '';
    
    // Gere dois caracteres aleatórios
    for (let i = 0; i < 2; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indiceAleatorio);
    }
    
    // Exiba o código gerado na página
    document.getElementById('codigo-gerado').textContent = 'Código Gerado: ' + codigo;
  }*/