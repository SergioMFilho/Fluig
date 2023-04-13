<h1 align="center">Funções</h1>
<p align="center"><i>Repositório para versionamento e documentação do projeto utilizado durante a série de artigos no GitHub.</i></p>

## isEmpty()

```
function isEmpty(valor) {

  return valor == null || valor == "" || typeof valor === undefined;

}
```

## Todos os inputs()

```
let inputs = $("input select").toArray();
    let enableFields = "";
    $.each(teste, (i, item) => {
        if (!$(item).hasClass("hide")) {
            enableFields += `form.setEnabled("${item.name}", false) \n`
        }
    })

    console.error(enableFields)
```

## getMessage():

```
function getMessage(texto, tipoMensagem, form) {
    switch (tipoMensagem) {
        case 1:
            return "<li>Campo: <b>" + texto + "</b> não pode estar vazio</li>";
        case 2:
            return "<li>Selecione uma opção em: <b>" + texto + " </b> na seção " + "<b>" + section + "</b></li>";
        case 3:
            return "<li><b>" + texto + "</b></li>";
    }
}

```

## openModal():

```
function handleOpenModal(id_button, id_modal) {
  $(`#${id_button}`).on("click", (e) => {
    $(`#${id_modal}`).show(500);
    $("#formulario").addClass("modal_parent");
    e.stopPropagation();
  });

  $(`#${id_modal}`).on("click", (e) => {
    e.stopPropagation();
  });
}
```

## OnChange():

```
function handleOnChange(name, obs_id) {
    const obs = $(`#${obs_id}`);
    $(`#${obs_id}`).on("change blur keyup", () => {
      if (!isEmpty(obs.val())) {
        obs.css("border", "solid 1px rgb(204,204,204)");
      } else {
        obs.css("border", "solid 1px #CC3D3D");
      }
    });
  }`
```

## transformInputsEmSpans():

```
function transformInputsEmSpans(div) {
    let inputs = $(`#${div} input`).toArray();
    $.each(inputs, (i, item) => {
      item.value = "TESTESTESTESTE"; //retirar isso
      $(item).replaceWith($("<br><span>" + item.value + "</span>"));
    });
  }
```

## verificarInputsMais30Char():

```
let teste = $("input").toArray();
$.each(teste, (i, item) => {
  if (item.name.length > 30) {
    console.error("AQ  " + item.name);
  }
});
```

## pegar filhos de um PaiXFilho

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
