##  displayFields
Por padrão tem esse começo
```
function displayFields(form, customHTML) {
    var activity = getValue('WKNumState');
}
```
Parte Inicial do processo sempre vai ser 0 ou 4
```
 if (activity == 0 || activity == 4) {
    }
```
Em seguida você pode esconder ou deixar os campos visíveis
```
 if (activity == 0 || activity == 4) {
form.setVisibleById('txtReqJustificativa', true);   Visível
form.setVisibleById('txtReqContrato', false);   Não Visível
}
```
Também é possível colocar algumas ações, como por exemplo começar a página com o collapse aberto
```
    if (activity == 18) {
        customHTML.append("<script>");
        customHTML.append("$('#collapse_habilitar_dados').addClass('in');");
        customHTML.append("</script>");
    }
```