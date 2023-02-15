function viewTemplateContrato() {
    const template = getTemplateContratoAtual();
    const documentId = template.id;
    if (!documentId) {
        FLUIGC.toast({
            title: '',
            message: "Nenhum arquivo encontrado.",
            type: 'warning'
        });
        return
    }
    const baseUrl = WCMAPI.getServerURL()
    window.open(`${baseUrl}/portal/p/sebrae/ecmnavigation?app_ecm_navigation_doc=${documentId}`);
}