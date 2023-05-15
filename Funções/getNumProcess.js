function getNumProcess(documentId) {
    var c1 = DatasetFactory.createConstraint("cardDocumentId", documentId, documentId, ConstraintType.MUST);
    var constraints = new Array(c1);
    var returnFields = new Array("workflowProcessPK.processInstanceId")
    var dataset = DatasetFactory.getDataset("workflowProcess", returnFields, constraints, null);
    var numProces = dataset.getValue(0, "workflowProcessPK.processInstanceId");
    return numProces;
}