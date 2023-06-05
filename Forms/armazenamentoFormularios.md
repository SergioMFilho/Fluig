Quando em armazenado em tabelas de banco dados, cada campo do formulário vira uma coluna com o mesmo nome.

Isso gera duas limitações quanto ao nome dos campos:
<ul>
<li>
O tamanho do nome, que é limitado à 30 caracteres;
</li>
<li>
Os bancos de dados possuem palavras reservadas, que não podem ser usadas como nome das colunas. Abaixo é apresentada uma lista de termos reservados (além de alguns campos que são usados internamente para o vínculo ao registro do formulário):


```
"ABSOLUTE", "ACCESS", "ACCESSIBLE", "ACCOUNT", "ACTION", "ACTIVATE", "ADD",
"ADMIN", "ADVISE", "AFTER", "AGGREGATE", "ALIAS", "ALL", "ALLOCATE", "ALL_ROWS", "ALTER", "ANALYZE", "AND",
"ANY", "ARCHIVE", "ARCHIVELOG", "ARE", "ARRAY", "AS", "ASC", "ASENSITIVE", "ASSERTION", "AT", "AUDIT",
...
```
</li>
</ul>

Informações Importantes
```
Independente da quantidade de versões de um formulário, sempre é utilizada a mesma tabela. Assim, em um formulário com 50 versões, terão registros de formulários, possivelmente, das 50 versões do formulário.
```
```
Todos os campos do formulário fluig possuem um limite de 4000 caracteres.
```
Quantidade de campos por formulário
```
1000 campos por linha
```
`Pode acontecer que em alguma versão os campos estejam ocupando espaço na tabela e impedindo a criação de novos campos.`