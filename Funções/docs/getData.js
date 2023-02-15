function getData(numProcess) {
    const solicitacaoData = getSolicitacoes(numProcess);

    if (isEmpty(solicitacaoData)) {
        FLUIGC.toast({
            title: "Atenção",
            message: `Solicitação ${numProcess} não encontrada.`,
            type: "warning"
        });
        return;
    }

    const data = {
        id: solicitacaoData.id,
        nome_cliente: solicitacaoData.txtNomeCliente,
        cpf_cnpj: solicitacaoData.txtCPF,
        valor: solicitacaoData.txtValorTotal,
        evento: "evento teste",
        nome_gestor: solicitacaoData.txtNome,
        data: new Date().toLocaleDateString("pt-BR"),
        empresa: solicitacaoData.txtNomeCliente,
        cnpj: solicitacaoData.txtCPF,
        telefone: "34324324",
        endereco: "Rua da doidera, 235",
    };

    return data
}