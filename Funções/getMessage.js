function getMessage(texto, tipoMensagem, form) {
  switch (tipoMensagem) {
    case 1:
      return "<li>Campo: <b>" + texto + "</b> não pode estar vazio</li>";
    case 2:
      return (
        "<li>Selecione uma opção em: <b>" +
        texto +
        " </b> na seção " +
        "<b>" +
        section +
        "</b></li>"
      );
    case 3:
      return "<li><b>" + texto + "</b></li>";
  }
}
