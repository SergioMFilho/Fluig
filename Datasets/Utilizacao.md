##  Utilizando DataSets
```
var c1 = DatasetFactory.createConstraint("cardDocumentId", documentId, documentId, ConstraintType.MUST);
    var constraints = new Array(c1);
    var returnFields = new Array("workflowProcessPK.processInstanceId")
    var dataset = DatasetFactory.getDataset("workflowProcess", returnFields, constraints, null);
    return dataset.values;
```
Na variável DATASET está o comando completo que será usado 
```
var dataset = DatasetFactory.getDataset(tabela, returnFields(campos retornados), constraints(c1), null(ordenação))
```