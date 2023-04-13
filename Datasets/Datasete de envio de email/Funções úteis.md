## Funções Úteis

### • Acessar filhos de um formulário pai x filho
```
function getFormChildren(datasetId, documentId, tablename) {
    const c1 = DatasetFactory.createConstraint("documentid", documentId, documentId, ConstraintType.MUST);
    const c2 = DatasetFactory.createConstraint("tablename", tablename, tablename, ConstraintType.MUST);
    const c3 = DatasetFactory.createConstraint("metadata#active", "true", "true", ConstraintType.MUST);
    const constraints = new Array(c1, c2, c3);
    const result = DatasetFactory.getDataset(datasetId, null, constraints, null);

    return result;
}
```

