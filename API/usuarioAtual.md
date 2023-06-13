## Utilização da API do FLuig para receber o usuário atual

```
  $("#botao").on('click', () => {
    getLoggedUser()
  })
  function getLoggedUser() {
    let loggedUser = "";
    $.ajax({
        url: parent.WCMAPI.getServerURL() + '/api/public/2.0/users/getCurrent',
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (data) {
            loggedUser = data.content.fullName;
        },
        error: function (msg) {
            log.info("****Não funcionou********");
        }
    })

    return loggedUser;
}
```
No código acima utilizamos um `end point` da API antiga do fluig `/2.0/users/getCurrent`. Utilizamos uma variável para armazenar o valor do retorno, o método `GET`, o tipo do dado é um `json` e o `async` tem o valor de false.

Com esse `endpoint` também é possível conseguir outros dados como por exemplo: e-mail, id, password ...

A seguir segue o código que retorna o nome do usuário, e-mail e o seu id.

```
  $("#botao").on('click', () => {
    getLoggedUser()
  })
  function getLoggedUser() {
    let dadosUsuario = "";
    $.ajax({
        url: parent.WCMAPI.getServerURL() + '/api/public/2.0/users/getCurrent',
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (data) {
            dadosUsuario = data.content.fullName + '\n';
            dadosUsuario += data.content.email + '\n';
            dadosUsuario += data.content.id + '\n';
        },
        error: function (msg) {
            log.info("****Não funcionou********");
        }
    })
    console.error(dadosUsuario)
    return dadosUsuario;
}
```