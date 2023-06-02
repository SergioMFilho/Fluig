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
Neste caso, estamos preenchendo a tabela com dados `estáticos`, porém, em alguns casos como o exemplo de um resultado de dataset o qual recebe diversos dados, pode ser necessário realizar um `for` para preencher a sua tabela.
