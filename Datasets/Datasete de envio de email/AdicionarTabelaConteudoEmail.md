Em alguns envios de e-mail é interessante organizar os dados em `tabelas`. Segue o exemplo de uma tabela no conteúdo do e-mail.
```
emailVars["content"] += "<table style='border-collapse: collapse; width: 100%;'>";
emailVars["content"] += "<thead>";
emailVars["content"] += "<tr>";
emailVars["content"] += "<th colspan='6'>TRECHOS</th>";
emailVars["content"] += "</tr>";
emailVars["content"] += "<tr>";
emailVars["content"] += "<th>Origem</th>";
emailVars["content"] += "<th>Destino</th>";
emailVars["content"] += "<th>Data da Viagem</th>";
emailVars["content"] += "</tr>";
emailVars["content"] += "</thead>";
emailVars["content"] += "<tbody>";
emailVars["content"] += "<tr>";
emailVars["content"] += "<td>" + valorOrigem + "</td>";
emailVars["content"] += "<td>" + valorDestino + "</td>";
emailVars["content"] += "<td>" + valorDataViagem + "</td>";
emailVars["content"] += "</tr>";
emailVars["content"] += "</tbody>";
emailVars["content"] += "</table>";
```
A estilização vai variar de processo para processo. 
Neste caso, estamos preenchendo a tabela com dados `estáticos`, porém, em alguns casos como o exemplo de um resultado de dataset o qual recebe diversos dados, pode ser necessário realizar um `for` para preencher a sua tabela. No caso a seguir os títulos das colunas ficaram fixos e mudaremos somente o conteúdo da tabela.
```
var dadosViagem = JSON.parse(getCardValue(data, 'dadosViagem'))

emailVars["content"] += "<tbody>";
for (var i = 0; i < dadosViagem.length; i++) {
        var viagem = dadosViagem[i];
emailVars["content"] += "<tr>";
emailVars["content"] += "<td>" + viagem["ORIGEM"] + "</td>";
emailVars["content"] += "<td>" + viagem["DESTINO"] + "</td>";
emailVars["content"] += "<td>" + viagem["DATA_VIAGEM"] + "</td>";
emailVars["content"] += "<td>" + viagem["HORARIO"] + "</td>";
emailVars["content"] += "<td>" + viagem["MEIOTRANSPORTE"] + "</td>";
emailVars["content"] += "</tr>";
}
emailVars["content"] += "</tbody>";
```
Neste caso passamos o `JSON.parse` para o retorno da variável que está em string.
A seguir irei dar um exemplo desta tabela com toda a `estilização` do css :
```
emailVars["content"] += "<table style='border-collapse: collapse; width: 100%;'>";
emailVars["content"] += "<thead>";
emailVars["content"] += "<tr>";
emailVars["content"] += "<th colspan='6' style='background-color: #f2f2f2; padding: 8px; text-align: center; border: 1px solid black; padding: 8px;'>TRECHOS</th>";
emailVars["content"] += "</tr>";
emailVars["content"] += "<tr>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Origem</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Destino</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Data da Viagem</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Horário</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Meio Transporte</th>";
emailVars["content"] += "</tr>";
emailVars["content"] += "</thead>";
emailVars["content"] += "<tbody>";
    for (var i = 0; i < dadosViagem.length; i++) {
        var viagem = dadosViagem[i];
emailVars["content"] += "<tr>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + viagem["ORIGEM"] + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + viagem["DESTINO"] + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + viagem["DATA_VIAGEM"] + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + viagem["HORARIO"] + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + viagem["MEIOTRANSPORTE"] + "</td>";
emailVars["content"] += "</tr>";
    }
emailVars["content"] += "</tbody>";
emailVars["content"] += "</table>";
emailVars["content"] += "<br>";
    // Tabela Rateio
emailVars["content"] += "<table style='border-collapse: collapse;'>";
emailVars["content"] += "<thead>";
emailVars["content"] += "<tr>";
emailVars["content"] += "<th colspan='6' style='background-color: #f2f2f2; padding: 8px; text-align: center; border: 1px solid black; padding: 8px;'>RATEIO</th>";
emailVars["content"] += "</tr>";
emailVars["content"] += "<tr>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Nº Requisição RM</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Centro de Custo</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Valor</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Projeto</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Ação</th>";
emailVars["content"] += "<th style='text-align: center; border: 1px solid black; padding: 8px;'>Unidade</th>";
emailVars["content"] += "</tr>";
emailVars["content"] += "</thead>";
emailVars["content"] += "<tbody>";
emailVars["content"] += "<tr>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + idmov + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + ccusto + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + valor + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + projeto + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + acao + "</td>";
emailVars["content"] += "<td style='text-align: center; border: 1px solid black; padding: 8px; font-size: 13px !important;'>" + unidade + "</td>";
emailVars["content"] += "</tr>";
emailVars["content"] += "</tbody>";
emailVars["content"] += "</table>";
```