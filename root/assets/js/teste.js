/*    --- LOGIN ---   */

document.querySelector('#login').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);
    
  
    if (response.ok) {
      // Redirecionar para a página principal após o login bem-sucedido
      window.location.href = 'homePage.html';
    } else {
      // Exibir mensagem de erro ao usuário
      alert('Credenciais inválidas. Tente novamente.');
    }
  });