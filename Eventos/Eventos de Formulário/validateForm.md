##  ValidateForm
```
Esse evento é executado antes da gravação dos dados do formulário no banco de dados. O evento recebe como parâmetro uma referência ao formulário da definição de formulário. Em caso de erros de validação dos dados do formulário, esse evento retornará uma mensagem de erro para o usuário, através de uma modal do fluig, com a mensagem definida no evento.
```
Padrão do validateForm, geralmente colocado no começo
```
function validateForm(form) {
    var activity = getValue('WKNumState');

    var message = "";
    var hasErros = false;
}
```
* O activity pega qual a TASK
* O MESSAGE vazio será adicionado a mensagem que você quiser enviar ao validar o campo
*  hasErros seta o valor FALSE caso seja validado incorretamente e TRUE caso o campo esteja validado corretamente
```
if (activity == 18) {
        if (form.getValue("conf_parecer") == "") {
            message += getMessage('Selecione uma opção no parecer', 3, form);
            hasErros = true;
        }
}
```
A função getMessage possui determinados parâmetros a serem seguidos : 
* @param_ `texto` — mensagem de erro ao ser apresentada ao usuario
* _@param_ `tipoMensagem` — 1 - Validação de Textos; 2 - Validação de Select; 3 - Validação de negócio
* _@param_ `form` — formulário
