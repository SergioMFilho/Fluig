// const files = dropArea.getFiles();
// const numProcess = $("#num_solicitacao_recibo_tab2").val(); //25350
// const data = getData(numProcess)
// generate(files, data, "recibosPersonalizadosCriados", "Recibo")
function generate(files, data, PastaId, typeDoc) {
    var reader = new FileReader();
    if (files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(files.item(0));

    reader.onerror = function (evt) {
        console.log("error reading file", evt);
        alert("error reading file" + evt);
    };

    reader.onload = function (evt) {
        const content = evt.target.result;
        var zip = new PizZip(content);
        var doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        doc.render(data);

        var blob = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            compression: "DEFLATE",
        });

        const fileName = `${typeDoc}_${data.evento}_${data.cpf_cnpj.replaceAll(".", "".replaceAll("/", "").replaceAll("-", ""))}_${data.data.replaceAll("/", "-")}.docx`;
            blob.name = fileName;
            var file = new File([blob], fileName, {
                type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            });

        upload(file, PastaId)
        saveAs(blob, fileName);
    };
}