const btnPost = document.querySelector(".btt_post")
const Post = document.querySelector(".postagens")
const Argo = document.querySelector(".argu")


function navegar(pagina){
  // Defina a URL da página para a qual você deseja navegar
  const novaPaginaURL = `/${pagina}`;

  // Use window.location.href para redirecionar para a nova página
  window.location.href = novaPaginaURL;
}

function perfil(id){
  window.location.href = `/perfil?id=${id}`
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