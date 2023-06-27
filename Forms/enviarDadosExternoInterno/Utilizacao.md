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
E temos a função enviar, vamos seguir passo a passo para explicá-la. Primeiramente ele irá pegar os inputs do tipo `file` e pegar o seu valor, se existirem anexos ele irá adicionar no array `attachmentsData`.
```
function enviar() {
    ...
  var inputs_anexos = $("input[type=file]").toArray()
    const attachmentsData = [];

    $.each(inputs_anexos, (i, item) => {
        let id_input_anexo = $(item).parent().find("input.form-control").prop("id");
        let anexo = getAnexo(id_input_anexo);
        if (anexo) attachmentsData.push(anexo);
    })
    ...
}
```
Adiante, se tem a variável data :
* `processId` = nome do formulário
* `currentState` = atividade inicial
* `selectedState` = próxima atividade (depos da inicial)
* `comments` = comentários relacionados ao processo
* `formData` = dados dos campos existentes no form
            { name: "txt_evento", value: getForm("txt_evento") },
* `attachments` = attachmentsData ( array com os anexos)
```
function enviar() {
    ...
  const data = {
        processInstanceId: 0,
        processId: "edital_terroir",
        completeTask: true,
        currentMovto: 0,
        managerMode: false,
        selectedDestinyAfterAutomatic: -1,
        conditionAfterAutomatic: -1,
        digitalSignature: false,
        isDigitalSigned: false,
        currentState: 4,
        selectedState: 16,
        processId: "edital_terroir",
        comments: "Inscrição no Edital Terroir - " + getForm("razao_social"),
        formData: [
            { name: "nome_representante", value: getForm("nome_representante") },
            { name: "cpf_representante", value: getForm("cpf_representante") },
            { name: "nascimento_representante", value: getForm("nascimento_representante") },
            { name: "escolaridade_representante", value: getForm("escolaridade_representante") },
            { name: "sexo_representante", value: getForm("sexo_representante") },
            { name: "funcao_representante", value: getForm("funcao_representante") },
            { name: "cep_representante", value: getForm("cep_representante") },
            { name: "uf_representante", value: getForm("uf_representante") },
            { name: "cidade_representante", value: getForm("cidade_representante") },
            { name: "bairro_representante", value: getForm("bairro_representante") },
            { name: "logradouro_representante", value: getForm("logradouro_representante") },
            { name: "email_representante", value: getForm("email_representante") },
            { name: "celular_representante", value: getForm("celular_representante") },
            { name: "razao_social_empresa", value: getForm("razao_social_empresa") },
            { name: "nome_fantasia_empresa", value: getForm("nome_fantasia_empresa") },
            { name: "cnpj_empresa", value: getForm("cnpj_empresa") },
            { name: "data_de_abertura_empresa", value: getForm("data_de_abertura_empresa") },
            { name: "numero_funcionarios", value: getForm("numero_funcionarios") },
            { name: "cep_empresa", value: getForm("cep_empresa") },
            { name: "uf_empresa", value: getForm("uf_empresa") },
            { name: "cidade_empresa", value: getForm("cidade_empresa") },
            { name: "bairro_empresa", value: getForm("bairro_empresa") },
            { name: "logradouro_empresa", value: getForm("logradouro_empresa") },
            { name: "celular_empresa", value: getForm("celular_empresa") },
            { name: "email_empresa", value: getForm("email_empresa") },
            { name: "site_empresa", value: getForm("site_empresa") },
            { name: "instagram_empresa", value: getForm("instagram_empresa") },
            { name: "porte_empresa", value: getForm("porte_empresa", true) },
            { name: "descricao_empresa", value: getForm("descricao_empresa") },
            { name: "jsonPaiFilho", value: getForm("jsonPaiFilho") },
            { name: "grupo_exposicao", value: getForm("grupo_exposicao", true) },
            { name: "forma_pagamento", value: getForm("forma_pagamento", true) },
            { name: "refrigeracao", value: getForm("refrigeracao", true) },
            { name: "intesse_lista_espera", value: getForm("intesse_lista_espera", true) },
            { name: "txt_data_abertura", value: getForm("txt_data_abertura") },
            { name: "txt_nome_gestor", value: getForm("txt_nome_gestor") },
            { name: "txt_email_do_gestor", value: getForm("txt_email_do_gestor") },
            { name: "txt_projeto", value: getForm("txt_projeto") },
            { name: "txt_acao", value: getForm("txt_acao") },
            { name: "txt_unidade", value: getForm("txt_unidade") },
            { name: "txt_produto", value: getForm("txt_produto") },
            { name: "txt_valor", value: getForm("txt_valor") },
            { name: "txt_cielo", value: getForm("txt_cielo") },
            { name: "txt_nome_solicitante", value: getForm("txt_nome_solicitante") },
            { name: "txt_login_gestor", value: getForm("txt_login_gestor") },
            { name: "txt_email_solicitante", value: getForm("txt_email_solicitante") },
            { name: "txt_pagamento_realizado", value: getForm("txt_pagamento_realizado") },
            { name: "txt_expirado", value: getForm("txt_expirado") },
            { name: "txt_email_negado", value: getForm("txt_email_negado") },
            { name: "txt_verificacao_pagamento", value: getForm("txt_verificacao_pagamento") },
            { name: "txt_enviar_link_gestor", value: getForm("txt_enviar_link_gestor") },
            { name: "txt_enviar_link_solicitante", value: getForm("txt_enviar_link_solicitante") },
            { name: "txt_enviar_link_cliente", value: getForm("txt_enviar_link_cliente") },
            { name: "txt_gerar_recibo", value: getForm("txt_gerar_recibo") },
            { name: "txt_link_pag", value: getForm("txt_link_pag") },
            { name: "txt_id_pag", value: getForm("txt_id_pag") },
            { name: "txt_dias_expiracao", value: getForm("txt_dias_expiracao") },
            { name: "txt_data_expiracao", value: getForm("txt_data_expiracao") },
            { name: "txt_evento", value: getForm("txt_evento") },
            { name: "sem_value", valu: getForm("sem_value") },
        ],
        attachments: attachmentsData,
    };
    ...
}
```
Por último temos a chamada da `API`.
```
   const token = getCredentials();
    const request_data = {
        url: WCMAPI.getServerURL() + "/ecm/api/rest/ecm/workflowView/send",
        method: "POST"
    }
    const oauth = getAuthorization();
    const auth = oauth.authorize(request_data, token);
    const headers = oauth.toHeader(auth);
    $.ajax({
        async: true,
        type: "POST",
        contentType: "application/json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader("Authorization", headers.Authorization);
        },
        url: "/ecm/api/rest/ecm/workflowView/send",
        data: JSON.stringify(data),
        error: function () {
            FLUIGC.toast({
                title: "",
                message: "Falha ao cadastrar solicitação.",
                type: "danger"
            });
            // myLoading.hide();
            $("#inscricao").prop("disabled", false)
        },
        success: function (data) {
            const instanceId = data.content.processInstanceId;
            const divConf = document.getElementById("pnlConfirmacao");
            const elementH3 = document.createElement("h3");
            elementH3.innerHTML = `Numero da solicitação: ${instanceId}`;
            divConf.appendChild(elementH3);
            $("#pnlCadastro").hide();
            $("#pnlConfirmacao").fadeIn("slow")
            $("#pnlConfirmacao").css("display", "flex");
            // myLoading.hide();
            $("#inscricao").prop("disabled", false)
        },
    }).done(() => {
        document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    });
```
