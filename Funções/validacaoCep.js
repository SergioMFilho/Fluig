async function is_cep(cep) {
  //arruma formatação cep para consulta
  cep = cep.split("-").join(""); //verifica validade do cep digitado

  if (cep.length !== 8) {
    return false;
  } //realiza consulta do cep

  let url = `https://viacep.com.br/ws/${cep}/json/`; // puxa os dados da api

  let response = await fetch(url); // transforma os dados em json

  let data = await response.json();

  if (data.erro) {
    return false;
  } else {
    return true;
  }
}

// Validação de campos vazios:
function isEmpty(item) {
  return item == "" || item == undefined || item == null;
}
