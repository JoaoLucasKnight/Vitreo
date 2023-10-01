

function gerarCodigo() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+,.<>;:/\|=-"';
    let codigo = '';
    
    // Gere dois caracteres aleatórios
    for (let i = 0; i < 2; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indiceAleatorio);
    }
    
    // Exiba o código gerado na página
    document.getElementById('codigo-gerado').textContent = 'Código Gerado: ' + codigo;
  }