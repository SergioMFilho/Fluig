## Buscar dados Form Interno
Todo formulário interno ( o qual construímos via eclipse) ele sempre irá possuir um dataset que guardar seus registros no fluig.
Dessa forma, é possível pegar seus dados consultando esse dataset do formulário.
```
var datasetFormIterno = DatasetFactory.getDataset('dsformProcessoExtra', null, null, null).values
        let codigos_Descricoes = datasetFormIterno.map(item => item['codigoEDescricao'])
```
No código acima estou buscando meu dataset sem filtros, e logo em seguida inicio um `map` para me retornar os valores da coluna `codigoEDescricao`. Posso preencher esses valores em um select com um `for` por exemplo.
```
  for(let i = 0; i < codigos_Descricoes.length; i++) {
            $("#selecionar_o_movimento").append('<option>' + codigos_Descricoes[i] + '</option>');
        }
```