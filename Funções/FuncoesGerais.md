<h1 align="center">Funções</h1>
<p align="center"><i>Repositório para versionamento e documentação do projeto utilizado durante a série de artigos no GitHub.</i></p>

##  isEmpty()

```
function isEmpty(valor) {

  return valor == null || valor == "" || typeof valor === undefined;

}
```
##  Todos os inputs()
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
##  isEmpty()
```
function isEmpty(valor) {

  return valor == null || valor == "" || typeof valor === undefined;

}
```
##  getMessage():
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
                                                                                                  