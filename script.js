//função que vai receber um valor digitado no html ao clicar no botao
function adicionarFilme() {
 var campoFilmeFavorito = document.getElementById('filme')
    console.log(campoFilmeFavorito)
  var filmeFavorito = campoFilmeFavorito.value
  // variavel recebe o valor digitado e armazena o conteudo
  if (filmeFavorito.endsWith('.jpg')) {
    //validação condicional. Será verificado se o texto inserido possui o final .jpg que indica que o arquivo é uma imagem, assim validando o comando de armazenamento ao adicionar filme
    listarFilmesNaTela (filmeFavorito)
  }else {
    alert("Formato inválido!")
  } 
    campoFilmeFavorito.value =""
}// fim da primeira função, de recebimento do valor digitado e validado condicionalmente ao clicar no botão

//função recebe os valores armazenados na função anterior(img) e as imprime na tela 
function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}