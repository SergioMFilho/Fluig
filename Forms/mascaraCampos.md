## Máscara de Campos
Alguns campos dos formulários necessitam de formatação específica como por exemplo, cpf, datas, cep ...

O fluig permite habilitar máscaras por campo de forma facilitada, bastando apenas informar o atributo `mask` aos inputs do tipo `text`.
```
<input name="cep" type="text" mask="00000-000">
```
<table>
  <tr>
    <th>Código</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>0</td>
    <td>Somente Números.</td>
  </tr>
   <tr>
    <td>#</td>
    <td>Somente números mais recursivo.</td>
  </tr>
   <tr>
    <td>9</td>
    <td>Somente números mais opcional.</td>
  </tr>
   <tr>
    <td>S</td>
    <td>Somente letras entre A-Z e a-z.</td>
  </tr>
   <tr>
    <td>A</td>
    <td>Números ou letras.</td>
  </tr>
</table>

Exemplos de utilização de máscaras
```           
Data: "00/00/0000"
Horário: "00:00:00"
Data e Hora: "00/00/0000 00:00:00"
CEP: "00000-000"
Telefone: "0000-0000"
Telefone(ddd): "(00) 0000-0000"
Telefone(ddd + 9ºdígitos): "(00) 90000-0000"
Placa de carro: "SSS 0000"
CPF: "000.000.000-00"
CNPJ: "00.000.000/0000-00"
IP: "099.099.099.099"
porcentagem: "#00.000,00%"
Valor: "#00.000.000.000.000,00"
```