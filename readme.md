# Mini App para Cortar imagem com HTML5 Canvas e JavaScript

Com o uso do HTML5 Canvas `<canvas>` + JS, nós irem`s criar um pequeno app que irá cortar uma imagem.


## Antes de começar

O assunto não é complexo, mas precisamos ter uma boa base de HTML, CSS e especialmente JavaScript, pois iremos fazer bastante manipulação da DOM, de objetos além de um pouquito de cálculos matemáticos.


## Bora codar

### Ajustes iniciais ( molezinha ) ~ 3 minutos
* [x] Ajustar os arquivos base da aplicação (link na descrição)
* [x] Criar o elemento button#select-image>input#photo-file[type=file] para Selecionar Imagem
* [x] Estilizar botão de upload para esconder o campo de arquivo




















### Select & Preview image ( tranquilidade ) ~ 12 minutos
* [x] Criar o arquivo scripts.js
* [x] Adicionar evento 'click' no elemento #select-image, que irá executar a funcionalidade de clicar no elemento #foto-file
* [x] Ao terminar o evento de carregar a DOM
* [x] Adicionar evento 'change' no elemento #photo-file
* [x] Criar um novo FileReader()
* [x] Usar a funcionalidade .readAsDataURL() para leitura do arquivo
* [x] Ao terminar de ler o arquivo, adicionar ao src do elemento img#photo-preview (criar no html)
















### Selection tool ( começando a brincadeira ) ~ 30 minutos
* [x] criar elemento #selection-tool no html
* [x] estilizar o elemento
* [x] no JS, criar eventos do mouse
    * [x] mouseover, mousedown, mousemove, mouseup
* [x] registrar eventos
* [ ] Adicionar funcionalidade aos eventos
    * [x] mouseover: crosshair no cursor
    * [x] mousedown: 
        * [x] registrar posicionamentos iniciais de X e Y (absolutos e relativos)
        * [x] adicionar flag de inicio de seleção
    * [x] mousemove: 
        * [x] registrar posicionamentos finais de X e Y
        * [x] atualizar estilos visuais da seleção
    * [x] mouseup: 
        * [x] registrar posicionamento final (relativo) do X e Y
        * [x] remover flag de inicio de seleção






















## HTML5 Canvas API

* [ ] Interface para desenhar gráficos via JS e HTML.
* [ ] Animações, gráficos de games, vizualizador de dados, `manipulação de photos` e até processamento de vídeo em tempo real.
* [ ] Possui um foco em gráficos 2D.

*para 3D poderíamos usar o WebGL API, que também usará a tag `<canvas>`*


Para nós, será de exterma importância utilizar o canvas, pois iremos manipular a imagem (crop), e só conseguimos fazer esse corte via canvas.


## Continue a codar

### Utilizar o canvas ao invés da imagem ( não é tão complexo vai ) ~ 10 minutos 

* [x] Criar o elemento canvas
* [x] Criar o contexto do elemento
* [ ] Ao terminar de carregar a imagem
    * [x] ajustar a larguar e altura do canvas
    * [x] limpar o contexto
    * [x] desenhar a imagem no contexto
    * [x] atualizar o preview de imagem, agora, com o conteúdo do canvas ao invés da imagem










### Cortar a imagem ( agora a brincadeira ficou séria ) ~ 25 minutos

* [x] Adicionar element button#crop-image
* [x] Mostrar somente quando finalizar a seleção
* [x] adicionar evento 'click' para quando clicar no botão
* [x] Calcular o corte proporcional ao tamanho da imagem na tela
    * [x] Calcular e armazenar o fator proporcional da imagem
        * [x] fatorWidth: divida a largura da foto pela largura do preview
        * [x] fatorHeight: divida a altura da foto pela altura do preview 
    * [x] multiplicar a largura da seleção pelo fator de largura
    * [x] fazer o mesmo acima para altura
* [x] pegar do contexto do canvas, a região selecionada
    * [x] calcular e guardar a posição X e Y verdadeiras, para utilizar no ctx
        * [x] Para pegar o X: Multiplicar a posição relativa do X pelo fatorWidth
        * [x] Para pegar o Y: Multiplicar a posição relativa do Y pela fatorHeight
* [x] limpar o canvas
* [x] ajustar largura e altura do canvas e da imagem
* [x] adicionar a imagem croppada ao contexto do canvas
* [x] esconder a ferramenta de seleção
* [x] atualizar o preview da imagem.

### Download da imagem ( pegando leve nesse finalzinho ) ~ 8 minutos

* [x] criar elemento button#download
* [x] mostrar elemento após o corte da imagem
* [x] adicionar evento de 'click' ao botão
* [x] criar a funcionalidade de download
    * [x] criar um elemento a
    * [x] adicionar o nome da foto (modificado) à propriedade download
    * [x] adicionar canvas.toDataURL() ao atributo href
    * [x] clicar no elemento

### Found bug

* [x] atualizar o canvas sempre que carregar uma nova imagem 

















