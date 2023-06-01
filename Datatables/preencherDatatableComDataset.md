O datatable segundo o `styleGuide`, ajuda na criação de tabelas com recursos de paginação e pesquisa. De acordo com a sua configuração é possível criar as tabelas definindo uma matriz de objetos ou um serviço REST de URL.
```
Esta é uma função genérica de preenchimento de um datatable com o retorno de um dataset:

function preencheDatatable(div, datasetValues, content, header) {
    FLUIGC.datatable(div, {
        dataRequest: datasetValues,
        renderContent: content,
        header: header,
        search: {
            enabled: false
        },
        navButtons: {
            enabled: false
        }
    }, function (err, data) {
    });
}
```
Vamos explicar em partes, o primeira parâmetro é a div. Por exemplo `#dadosRM`, no exemplo estou utilizando uma div vazia que está no html do meu formulário.
```
<div id="dadosRM"></div>
```
O segundo parâmetro é o datasetValues, ele retorna um array de objetos :
```
(14) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: 
ACAO: "Atendimento ao Público-Alvo: Professores"
AUTORIZANTE : "TATHIANA AMORIM GARCIA UDRE VARELA"
CADASTRANTE : "SANDRO MORAIS DE AZEVEDO"
CODCCUSTO : "00110.000007.966"
CODCOLIGADA : "21"
...
```
O terceiro parâmetro é o `content` que é um `array com as chaves do objeto` do tipo `string`. Ele é obrigatório na estrutura do datatable.
```
 ['ACAO', 'AUTORIZANTE', 'CADASTRANTE']
```
O quarto parâmetro do `header` que é um `array de objetos com cabeçalho attrs` o cabeçalho tem o atributo de título. Ele é opcional na estrutura primária do datatable.
```
[{ 'title': 'ACAO' }, { 'title': 'AUTORIZANTE' }, { 'title': 'CADASTRANTE' }]
```

