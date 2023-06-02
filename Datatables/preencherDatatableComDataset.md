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
O segundo parâmetro é o dataset.values, ele retorna um array de objetos :
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
Porém, caso você precise preencher o datatable mais de uma vez é interessante que o valor do retorno seja inserido em um `textarea`. Para que então não seja preciso `consultar` o dataset a todo momento.Aqui está o meu textarea : 
```
<textarea name="retornoDataset" id="retornoDataset"></textarea>
```
Contudo ao colocarmos o valor no nosso textarea e tentarmos preencher o nosso datatable utilizando o valor do textarea `$("#retornoDataset").val()` no content ele retorna `undefined` em todos os espaços. Ao procurarmos o valor que está no console ele retorna o seguinte `'[object Object]'`(este é o retorno do dataset.values). 

Primeiramente devemos transformar o valor do textarea em string pelo `JSON.stringify`
```
'[{"HISTORICO":"Participar da reunião da Rede UGE, no SEBRAE/NA, em Brasília/DF, nos dias 09 e 10/03/2023. ","FUNCOUTER":"FUNCIONARIO","EMAIL_SOLICITANTE":"exemplo@rn.sebrae.com.br","CODTMV":"1.1.31","CADASTRANTE":"LUANA BETICIA FREIRE DE OLIVEIRA","CPFOUCNPJ":"111.196.111-11","PASSAGEIRO":"ALINNE PRISCILLA DANTAS SILVA","EMAIL_AUTORIZANTE":"exemplo@rn.sebrae.com.br","EMAIL_CADASTRANTE":"exemplo@rn.sebrae.com.br","AUTORIZANTE":"JOSE RONIL RODRIGUES FONSECA","CODCOLIGADA":"21","SOLICITANTE":"ALINNE PRISCILLA DANTAS SILVA","DATA_AUTORIZACAO":"2023-03-06T00:00:00","NUMEROMOV":"040018","IDMOV":"972959","EMAIL_PASSAGEIRO":"exemplo@rn.sebrae.com.br"}]'
```
E por último transformar a string em objeto com o `JSON.parse`. Dessa forma o datatable conseguirá renderizar todos os dados no parâmetro `content`.