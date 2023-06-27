## Como passar dados do form externo para o interno ?
Existem algumas funções que irão nos ajudar nesse processo. A primeira delas é o getForm. Que irá retornar todos os campos.
```
function getForm(name, checkbox = false) {
    if (checkbox) {
        const value = $('input[name=' + name + ']:checked').val();
        if (value) {
            return value;
        } else {
            return "";
        }
    }
    let value = $('input[name="' + name + '"]').val();
    if (!value) {
        value = $('select[name="' + name + '"]').val();
    }
    if (!value) {
        value = $('textarea[name="' + name + '"]').val();
    }
    if (!value) {
        value = "";
    }
    return value;
}
```
Aqui está um exemplo de sua utilização :
```
  formData: [
            { name: "nome_representante", value: getForm("nome_representante") }
  ]
```
Em seguida, temos a função de receber os anexos, getAnexo: 
```
function getAnexo(nomeAnexo) {
    const value = getForm(nomeAnexo);
    if (!value || value.length == 0) {
        return;
    }
    return {
        id: 1,
        fullPath: "BPM",
        droppedZipZone: false,
        name: getForm(nomeAnexo),
        newAttach: true,
        description: value,
        documentId: 0,
        attachments: [{
            attach: false,
            principal: true,
            fileName: value
        }],
        hasOwnSubMenu: true,
        enablePublish: false,
        enableEdit: false,
        enableEditContent: false,
        enableDownload: false,
        iconClass: "fluigicon-file-upload",
        iconUrl: false,
        colleagueId: "acessoPublico"
    }
}
```