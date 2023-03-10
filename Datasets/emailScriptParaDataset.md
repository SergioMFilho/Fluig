## Mudança de e-mails para chamadas de Dataset
```
    • Criar dataset no eclipse
    • Retirar hAPI
    • var > const (caso a variável não for reatribuída)
    • Funções que devem ser implementadas no dataset criado (getform, getcardvalue, setcardvalue)
    • Alterar os throws e trocálos por =  
        dataset.addRow([
            "error",
            formatMessage("danger", "Não foi possivel acessar geração de recibo intranet do Sebrae.", error)
        ])

        return dataset;

        Porém, no local de "error", caso o THROW esteja localizado fora de um catch de erro, será colocado "success" no seu lugar
    • chamar dataset no servicetask onde funcionava o script de e-mail