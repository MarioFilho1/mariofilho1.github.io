# HTML

É uma liguagem de marcação que tem as seguintes responsabilidades

- Conteúdo (texto, imagem, vídeo);
- Semântico (utilizar as `tags` de forma correta)
- Estrutura

* `h1` - heading 1 - 6
  Usamos ele quando queremos definir títulos

- `a` - Link (a - anchor)  
  Usamos para definir a navagação do usuário. Se tem um texto que você quer que o usuário clique e vá para outro lugar, você pode usar essa tag junto com o atributo `href`. Exemplo de um site que o úsuario é direcionado para o site da collabcode.training:

```
<a href="http://collabcode.training"></a>
```

- `nav` - Elemento usado para envolve uma seção de links que se vincula a outras páginas.

- `head` - Essa tag é destinada para colocar as configurações da página. São os chamados metadados que são os dados sobre os dados.
- `title` - Usada para colocar o título na aba da página
- `body` - Destinada para envolver o conteúdo do documento ou página
- `header` - Usada para colocar o cabeçalho da página
- `form` - Tem por padrão o display block.
- `input type = image` - O input image por ser um botão, ao ser clicado tenta enviar o conteúdo dele. No exemplo por estar envolvido pelo `form`, ele enviará o conteúdo do formulário. Para impedir esse evento padrão de recarregamento da página ao enviar o conteúdo de um formulário utilizamos o atributo `event.preventDefault` na função. Note que utilizamos `event` como parâmetro como mostrado na função abaixo:

```
html -
<form>
<input class="icon-search" type="image" src="img/search.svg" />
</form>

js -
$iconSearch.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active");
});
```

O `preventDefalt` remove o comportamento padrão do browser que ao se clicar em um botão do formulário, ele tenta enviar para algum lugar e quando não tem um lugar definido ele dá um refresh na página.

- `meta + charset` - Essa tag junto com o atributo são responsáveis por definir o padrão ASCII de caracteres que será utilizada pela nossa página, no caso a latina. Com isso o navegador poderá reconhecer os acentos e caracteres especiais padrão da lingua.
  Exemplo:

```
<meta charset="utf-8">
```

- `Doctype` - Usada para definir a versão do html mais atual

```
<!DOCTYPE html>
```

# CSS

É uma liguagem de estilo, tem as seguintes responsabilidades:

- Visual e Animação;

* `Float` - Usado para posicionar elementos na tela. Possui dois valores left e right. No exemplo abaixo queremos manter o posicionamento do elemento do `h1` a esqueda e posicionar o elemendo `a` para a direita, deixando os dois alinhados

```
header{
   background-color:#e24647;
}
h1 {
    background-color: red;
    float: left
}
a {
  color: inherit;
  text-decoration: none;
  background-color: yellow;
}

```

Obs.

- O float cria um novo contexto -
- Nunca esconde um conteúdo do elemento -
- Ao aplicar o float em um elemento filho, caso o seu tamanho (width e height) não sejam especificados, será definido pelo tamanho do conteúdo do elemento. No exemplo acima se colocarmos o float no h1 o tamanho do elemento será dimensionado para o tamanho do `nav` pois como o `h1` está em um novo contexto, ele toma como base o `nav`. O elemento pai cresce de acordo com o tamanho do/dos elementos filho que estão dentro dele, caso aplique o float nos dois elementos filho, como não foi definido seu tamanho e devido aos elementos filho estarem em um novo contexto o elemento pai não aparecerá, pois não tem ninguém para tomar como base.

```
overflor: hidden
```

Essa propriedade também pode ser utilizada prara resolver esse problema da visualizaçao do elemento pai que foi perdida devido os elementos filhos estarem em outro contexto e o pai estar sem seu tamanho definido. O atributo tem a função de principal de não deixar vazar para fora do elemento o conteúdo dele.

_ex. Texto contido no elemento tem um tamanho que o supera._
Nesse caso o texto sera suprimido ficando no tamanho do elemento.

obs. _É comportamento padrão do brosewr exibir texto que vaza o tamanho de uma caixa(elemento)_

No exemplo principal como não tem uma altura e largura definida no elemento pai. Ao inserir a propriedade no pai, ela fará o recalculo do contexto. Ele levará em consideração o contexto dos elementos filhos fazendo com que o elemento pai mostre o contexto dos elementos filhos.

- `Inheret` - Ao utilizar essa propriedade o elemento filho herda as caracteristicas do elemento pai.
  Exemplo

```
header{
   background-color:#e24647;
   color: white
}
h1 {
    background-color: red;
    float: left
}
a {
  color: inherit;
}

```

No exemplo acima o seletor `h1` por ser filho da do `header` herda naturalmente as cor da fonte, já para a tag `a` browser por padrão define que a cor não é herdada por essa tag, sendo necessário a inserção da cor no próprio seletor `a` ou utilizando a propriedade `inherit`.

Forma reduzida de colocar o padding

```
_ top | left-right | bottom _

padding: 55px 60px 95px;
```

- Padding - Utilizado quando queremos um respiro interno, espaçamento do elemento e a estremidade.

```
Ex. Temos um quadrado e queremos que o conteúdo desse elemento se afaste das extremidades
```

- Margin - Utilizado quando queremos um respiro externo, espaçamento entre as extremidades de dois elementos.

```
Ex. Temos dois quadrados e queremos que eles se afastem um do outro.
```

- `Clear` - A propriedade limpa o contexto do elemento afetado pelo uso do float. Exemplo. Ao aplicarmos um float no _elem1_, como há uma mudança no contexto caso tenhamos um _elem2_ que esteja abaixo, ele poderá subir e ficar ao seu lado. Usando o clear no _elem2_, ele retornará para posição de origem. Teremos que seta o clear no _elem2_ com o valor referente a posição do _elem1_. Ex. Se o _elem2_ que subiu, está a direita do elemento _elem1_, teremos que seta-lo com o `clear:left;`. Assim dizemos ao _elem2_ que caso tenha algum elemento flutuando ao seu lado, fique abaixo dele. Os valores do clear podem ser left, right e both.

- `Display` - Algumas tags tem o comportamentos que diferem umas das outras e o browser é quem define o padrão delas. Ex. A tag `a` tem o comportamento inline, isso quer dizer que elas serão exibidas no seu navegador uma ao lado da outra. A tag `a` por ter o esse comportamento, não podem ter o seu widht e heigth especificados. Caso tenhamos a nessecidade de especificar o tamanho e comprimento teremos que mudar o comportamento da tag com o valor na propriedade display para `block ou inline-block`. Se quizermos setar o comprimento e largura dos elementos envoltos nas tags `a`, mas que permaneçam umas ao lado das outras, teremos que usar o valor `inline-block`, caso precisemos que elas fiquem uma abaixo das outras podemos utilizar o valor `block`.
  O que define o tamanho do elemento `inline` e `inline-block` caso não tenha sido definido, é o tamanho do seu conteúdo. Esses dois valores tem o comportamento de palavra.

* `line-heigth` -

* `Position: absolute;`

Caracteristicas:

- Cria um novo contexto
- O que define o sua largura e altura, é o conteúdo
- O elemento pode ser movido pelos valores `top, bottom, left, rignt`.

Ao utilizar a medida `%` no posicionamento do elemento note que o que vai ser o que vai ser tomado como base para o posicionamento será a extremidade do elemento e não o seu centro, com isso se quisermos alinhar o centro do elemento teremos que utilizar a propriedade `transform: translate` com o eixo X(horizontal) e Y(vertical).
Ex.

```
transfom: translateX(-50%) translateY(-50%);
```

Se o valor do eixo `X` for negativo o elemento se deslocará para esquerda e positivo para direita, já no eixo `y` o valor sendo negativo, o deslocamento será para cima e positivo para baixo.

- `Peseudo-Classe` - Quando a acão determinada pelo usuário passa a existir a classe é ativada pelo browser e passa a produzir os efeitos que foram descritos nela e quando cessa a ação a classe desaparece deixando de produzir os efeitos.

Abaixo algumas pseudo-classes:

- `:hover` - É considerada uma pseudo-classe, pois quando o mouse é colocado em cima do elemento que contém o hover o browser ativa a classe e quando o cursor é retirado do elemento a classe é desativada.

- `:active` - É ativada quando o elemento é clicado.
- `:focus` - É ativada quando o elemento é selecionado através do tab.
  Ex.

```
.button-store:hover,
.button-store:focus {
  background-color: #fff;
  color: #e24647;
}

.button-store:active {
  transform: scale(0.98);
}
```

- `transition` - Atributo que faz uma transição(mudança), ela fica observando se o elemento tem alguma mudança em alguma propriedade, caso tenha, ela faz a transição(animação) de um ponto para outro. Utilizado com a propriedade `hover` quando o mouse for colocado em cima do elemento haverá a transição.Ex. pode acontecer a mudança da tonalidade de uma cor para outra.

Ex. `transition: all 200ms linear;` - Vai analisar qualquer propriedade que tenha alguma alteração e irá aplicar um tempo de 200ms na transição.

Ex. `transition: backgroud-color 1s linear, color 2s linear` - Nesse caso a propriedade que sofrerá alteração será a cor de fundo e a cor do texto. O tempo de transição de uma cor para a outra será de 1 e 2 segundos para o fundo e a cor respectivamente. Lembrando que você pode ir até o console e manipular a curva de bazier.

`transition`

- `Margin: auto`

  Essa propriedade facilita na centralização de elementos no eixo x(horizontal). Para utilizarmos o elemento precisa ter duas caracteristicas:

  - Ser uma elemento com propriedade `block`
  - Ter uma largura definida

# JavaScript

- Responsável pela parte do comportamento e interação do usuário.

### Alguns Comandos:

`window` : refere-se a da janela do browser. Todo recurso do browser esta nesse comando

`.(ponto)`: Significa que queremos utilizar algum recurso. ex: pegar alguma coisa em algum lugar da janela.

`document`: Quando queremos buscar algo no html

`queryselector`: seleciona o seletor no html

Quando utilizamos uma variavel que guarda uma referência ou qualquer informação do html, usamos o `$` antes da variavel. Isso dá uma maior legibilidade ao código.

`addEventListener`: Adiciona um ouvinte de um evento.
ex. `addEventListener("click")` adiciona o `click`
como evento

#

# UX

- Affordance - Diz-se que um elemento tem um bom affordance quando ele for fácil de usar e intuitivo.

# GIT

```
COMANDOS:
`rm -r nome do arquivo` - Deleta a pasta de forma recursiva.

cp -r lojafone mariofilho1.github.oi/. - copia todos os arquivos e pastas
que estão na pasta lojafone para pasta mariofilho1. o (.)ponto diz que vai copiar para a pasta raiz.
```

Como fazer o Deploy:

1-Cria-se um novo repositório no github

2-Depois abre-se o terminal e clona o repositório criado.  
`git clone git@github.com:MarioFilho1/mariofilho1.github.io.git`

3-Entra na pasta clonada:  
`cd username.github.oi`

4-Cria um arquivo index:  
`echo "hello world" > index.html` (Pega o texto e coloca dentro do arquivo index.html)

5- add, commit and push your changes:

`git add --all` - Adciona todos os arquivos  
`git commit -m "titulo"` - commit inicial  
`git push -u origin master` - envia o arquivo para o github, a primeira vez utiliza o - u origin master - (pega do origem e joga no master).
