##  Utilizando DataSets

#### Para utilizar datasets precisamos entender alguns conceitos básicos antes. O consumo de datasets no fluig exige o uso de 3 parametros que são:
#### • **Nome do dataset:** Geralmente você vai chamar pelo nome que é encontrado na aba datasets no painel de controle do Fluig (lembrando que esse valor é uma string, então sempre chamar o nome do dataset entre aspas).

#### • **returnFields:** Esse parâmetro se refere aos valores que você deseja que retorne do dataset, nesse campo chamamos uma string com o nome da coluna que desejamos obter.

#### • **constraints:** Esse campo serve para filtrar o dataset, para criar uma constraint usamos a função DatasetFactory.createConstraint("colunaDoDataset", inicioDoFiltro, fimDoFiltro, ConstraintType.MUST), ConstraintType pode ter três valores possíveis .MUST (indica que todos os registros do Dataset devem satisfazer a esta condição), .SHOULD (indica que os registros do Dataset podem ou não atender à condição. Esse tipo é mais comum quando se necessita que um mesmo campo tenha valores A ou B) ou .MUST_NOT (indica que nenhum dos registros pode satisfazer a condição).
#### Normalmente criamos as constraints como c1, c2, c3... e juntamos todas em uma variável constraints usando new Array(c1, c2, c3...);

#### • **sortingFields:** Esse parâmetro serve para ordenar os valores filtrados e essa ordenação é feita de forma ascendente, caso atribua o valor null no canto desse parâmetro na função em que ele deve ser chamado, o dataset não realizara a ordenação. Costumamos usar como null pois a ordenação afeta no desempenho do processo, mas quando for necessário a ordenação, vale a pena usar esse parâmetro.

#### • **return:** ao final criamos a variável dataset, que será onde os valores que queremos serão armazenados, para isso usamos a função DatasetFactory.getDataset("NomeDoDataset", returnFields, constraints, sortingFields).

```
var c1 = DatasetFactory.createConstraint("cardDocumentId", documentId, documentId, ConstraintType.MUST);
    var constraints = new Array(c1);
    var returnFields = new Array("workflowProcessPK.processInstanceId")
    var sortingFields = new Array("cardDocumentId");
    var dataset = DatasetFactory.getDataset("workflowProcess", returnFields, constraints, null);
    return dataset.values;
```
Na variável DATASET está o comando completo que será usado 
```
var dataset = DatasetFactory.getDataset(tabela, returnFields(campos retornados), constraints(c1), null(ordenação))
```