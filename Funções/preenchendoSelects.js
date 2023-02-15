// getTemplatesRecibo("#select_recibo_tab1", "templateDeReciboAtual");
function getTemplatesRecibo(id, PastaId) {
    const folderId = getFolderId(PastaId);
    const templates = getDocument(folderId)
    $(id).find('option').remove().end();
    $(id).append($("<option>", {
        text: "",
        value: ""
    }))
    $.each(templates, (i, item) => {
        $(id).append($("<option>", {
            text: item.description,
            value: item.url
        }))
    })
}