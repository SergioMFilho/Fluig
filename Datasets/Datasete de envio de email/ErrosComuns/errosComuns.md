## Erros comuns em datasets de e-mail
A função de enviar e-mail no momento pede um array com os endereços de e-mail. Portanto, em alguns casos é preciso realizar alguns ajustes, como por exemplo, o envio de e-mail para um grupo.
```
function getGroupEmails() {
    var grupo = getCardValue(form, "grupo_proc");
    var gprCode = DatasetFactory.createConstraint("colleagueGroupPK.groupId", grupo, grupo, ConstraintType.MUST);
    var c1 = new Array(gprCode);
    var nomes = DatasetFactory.getDataset("colleagueGroup", null, c1, null);
    var nome;
    var gprEmails;
    var emails;
    var emailTo = new java.util.ArrayList();

    for (var j = 0; j < nomes.rowsCount; j++) {
        nome = nomes.getValue(j, "colleagueGroupPK.colleagueId");
        gprEmails = DatasetFactory.createConstraint("colleaguePK.colleagueId", nome, nome, ConstraintType.MUST);
        var c2 = new Array(gprEmails);
        emails = DatasetFactory.getDataset("colleague", null, c2, null);
        emailTo.add(emails.getValue(0, "mail"));
    }
    return emailTo;
}
```
O código acima faz 2 buscas, a primeira no dataset `colleagueGroup` buscando com a constraint do grupo escolhido e após isso ele vai verificar quantas pessoas existem nesse grupo usando um  `for`. Em seguida, irá criar uma constraint que irá procurar na coluna `colleaguePK.colleagueId` o nome de cada um dos integrantes do grupo no dataset `colleague`. Após isso será pego o valor do e-mail com o `getValue`.

Um erro que poderia acabar ocorrendo é que a função de envio de e-mail pede um array e geralmente colocamos o envio de e-mail desta forma `[exemplo@outlook.com]`, porém, a função de envio de e-mail acima já envia um array como retorno. Desta forma, a lógica seria colocar a função sem o array `getGroupEmails()` , contudo o array da variável `emailTo` está sendo declarada na sintaxe do `Java`, que pode ocasionar um array vazio ao chamar a função ocasionado por um erro na iteração. Por isso o recomendado é colocá-lo em javascript (`new Array( )`)