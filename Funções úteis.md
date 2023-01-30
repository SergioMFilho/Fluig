##  Validação de CPF:
```
function is_cpf(cpf) {

  cpf = cpf.split('.').join('');
  cpf = cpf.split('/').join('');
  cpf = cpf.split('-').join('');

  if (cpf.length != 11) {
    return false;
  }

  if (cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999") {
    return false;
  }

  var soma = 0;
  for (i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  var resto = (soma * 10) % 11;
  
  if ((resto == 10) || (resto == 11)) {
    resto = 0;
  }

  if (resto != parseInt(cpf.substring(9, 10))) {
    return false;
  }

  soma = 0;

  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11)) {
    resto = 0;
  }

  if (resto != parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
```
##  Validação de CNPJ:
```
function is_cnpj(cnpj) {

  cnpj = cnpj.split('.').join('');
  cnpj = cnpj.split('/').join('');
  cnpj = cnpj.split('-').join('');

  if (cnpj.length != 14) {
    return false;
  }
  
  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999") {
    return false;
  }

  // Valida DVs
  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho) + "";
  digitos = cnpj.substring(tamanho) + "";

  soma = 0;
  pos = tamanho - 7;
  
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

  if (resultado != digitos.charAt(0)) {
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho) + "";
  soma = 0;
  pos = tamanho - 7;

  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

  if (resultado != digitos.charAt(1)) {
    return false;
  }
  return true;
}
```
##  Validação de CEP:
```
async function is_cep(cep) {
  //arruma formatação cep para consulta
  cep = cep.split('-').join('');

  //verifica validade do cep digitado
  if (cep.length !== 8) {
    return false
  }

  //realiza consulta do cep
  let url = `https://viacep.com.br/ws/${cep}/json/`

  // puxa os dados da api
  let response = await fetch(url);

  // transforma os dados em json
  let data = await response.json();

  if (data.erro) {
    return false
  } else {
    return true
  }
}

Validação de campos vazios:
function isEmpty(item) {
  return item == "" || item == undefined || item == null
}
```
##  Mostrar todos os Campos Ocultos:
```
$("[style*='display: none']").show()
```