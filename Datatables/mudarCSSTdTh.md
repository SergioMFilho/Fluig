## Estilização de Colunas e Linhas
Para adicionar alguma estilização pelo css só é preciso colocar as tags e adicionar o estilo como qualquer outro elemento do html
```
th {
    background-color: #ec6500bd !important;
    color: white !important;
    border: 1px solid #EC6500 !important;
}
```
```
td {
    background-color: #ec650017 !important;
    border: 1px solid #EC6500 !important;
}
```
Porém, também é possível adicionar um ícone por exemplo nas td's ou nas th's. Possuo uma função de preencher datatable de forma dinâmica que recebe todos os seus parâmetros
```
function preencheDatatable(div, datasetValues, content, header) {
    var table = FLUIGC.datatable(div, {
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
    return table;
}
```
Na chamada da função irei adicionar o meu ícone no content, que é o meu terceiro parâmetro e é onde é carregado o conteúdo que irá ser mostrado no tbody do meu datatable, passo o valor da última coluna vazia para depois preencher com meu icone.
```
 tabela = preencheDatatable(div, dadosPorIndice, ['PRODUTO', 'MOTIVO_DE_PEDIDO', 'DATA_DE_ENTREGA', ''],
            [{ 'title': 'Produto' }, { 'title': 'Motivo de Pedido' }, { 'title': 'Data de entrega' }, { 'title': 'Mais informações' }]);
```
A seguir, a função de preencher o último td com o icone em cada uma das linhas.
```
function adicionarIconeUltimaTd(idDiv, icone) {
    let linhasTabela = $(`#${idDiv} tr`);
    linhasTabela.each(function() {
        let ultimosTd = $(this).find("td:last-child");
        ultimosTd.empty().append(`${icone}`);
    });
}
```
```
adicionarIconeUltimaTd('tabela_tarefa', "<i class='flaticon flaticon-border-dotted icon-xl' aria-hidden='true'></i>");
```