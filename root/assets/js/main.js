const btnPost = document.querySelector(".btt_post")
const Post = document.querySelector(".postagens")
const Argo = document.querySelector(".argu")
const remover = document.querySelector('.recomendacoes');

function navegar(pagina){
  // Defina a URL da página para a qual você deseja navegar
  const novaPaginaURL = `/${pagina}`;

  // Use window.location.href para redirecionar para a nova página
  window.location.href = novaPaginaURL;
}

function perfil(id){
  let texto = id;
  let id_url = encodeURIComponent(texto);
  
  console.log(id_url);
    window.location.href = `/perfil?id=${id_url}`;   
}

function deletarPost(id_post){
  console.log(id_post)
  window.location.href = `/deletepost?id=${id_post}`;
}

function novoPost(){
   btnPost.classList.add("desativado");
   Post.classList.remove("desativado");
};

function postar() {
  btnPost.classList.remove("desativado");
  Post.classList.add("desativado");
};

function argumento(){
  Post.classList.remove("desativado");
};

function argumentar(){
  Post.classList.add("desativado");
};

function addFav(id){
  console.log('Entrou na função addFav com id:', id);

  fetch('/favoritar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do servidor:', data);
    // Faça algo com a resposta, se necessário
  })
  .catch(error => {
    console.error('Erro ao fazer a solicitação POST:', error);
  });
}

// function remover(){
//   remover.classList.add('desativado');
// }








/* Exemplo
const btnCarrinho = document.querySelector(".cabecalho__carrinho")
const btnExit = document.querySelector(".menulateral__button")
const menu = document.querySelector(".menulateral--desativado")


btnExit.addEventListener("click", () =>{
    menu.classList.replace('menulateral', 'menulateral--desativado')
})

btnCarrinho.addEventListener("click", ()=> {
    menu.classList.replace('menulateral--desativado' ,'menulateral')
})
*/ 






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