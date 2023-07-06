## Como usar o search do datatable
Obtendo os dados do dataset:
```
var datasetColleague = DatasetFactory.getDataset('colleague', null, null, null).values;
```
Criando a tabela DataTable:
```
var myTable = FLUIGC.datatable('#target', {
    // Configurações da tabela...
});
```
Configurando o conteúdo e cabeçalho da tabela:
```
dataRequest: datasetColleague,
renderContent: ['colleagueName', 'login', 'mail', 'userTenantId'],
header: [
    { 'title': 'colleagueName' },
    { 'title': 'login' },
    { 'title': 'mail' },
    { 'title': 'userTenantId' }
],
```
Configurando a funcionalidade de pesquisa:
```
search: {
    enabled: true,
    onlyEnterkey: true,
    onSearch: function (res) {
        // Lógica de pesquisa...
    }
}
```
Nessa parte, o código está habilitando a funcionalidade de pesquisa na tabela. enabled: true indica que a pesquisa está habilitada, onlyEnterkey: true faz com que a pesquisa seja ativada apenas ao pressionar a tecla Enter, e onSearch é uma função de retorno de chamada que será executada quando a pesquisa for realizada. A função recebe o valor pesquisado como parâmetro res.

Função completa :
```
search: {
			enabled: true,
			onlyEnterkey: false,
			onSearch: function (res) {    // res = valor digitado
				if (!res) {
					console.error('entrei aqui')
					myTable.reload(datasetColleague);
				}
				var dataAll = myTable.getData();     
				console.error('dataAll ', dataAll, ' datasetColleague ', datasetColleague);
				var search = datasetColleague.filter(function (el) {   
					return el.colleagueName.toUpperCase().indexOf(res.toUpperCase()) >= 0
						|| el.login.toUpperCase().indexOf(res.toUpperCase()) >= 0
						|| el.mail.toUpperCase().indexOf(res.toUpperCase()) >= 0
						|| el.userTenantId.toUpperCase().indexOf(res.toUpperCase()) >= 0;
				});
				if (search && search.length) {
					console.error('search ', search);
					myTable.reload(search);
				} else {
					FLUIGC.toast({
						title: 'Pesquisa Datatable: ',
						message: 'Sem resultados para essa pesquisa',
						type: 'success'
					});
				}
			}
		}
```
Primeiro ele verifica se tem algum valor no input, se não, ele retorna todos os dados:
```
if (!res) {
				myTable.reload(datasetColleague);
}
```
A variável search recebe o valor procurado dentro do datatable, ou seja, ele é o `el` encontrado na pesquisa. Primeiro é feito um filtro em todos os `el` do datatable e é verificado se existe em alguma das colunas o valor do `res` e qual a sua posição.
```
var search = datasetColleague.filter(function (el) {   
	return el.colleagueName.toUpperCase().indexOf(res.toUpperCase()) >= 0
		|| el.login.toUpperCase().indexOf(res.toUpperCase()) >= 0
		|| el.mail.toUpperCase().indexOf(res.toUpperCase()) >= 0
		|| el.userTenantId.toUpperCase().indexOf(res.toUpperCase()) >= 0;
});
```
Em seguida, o código irá verificar se a variável search possui algum resultado, caso tenha, a tabela é recarregada com o valor do search.
```
	if (search && search.length) {
		console.error('search ', search);
		myTable.reload(search);
	} else {
		FLUIGC.toast({
			title: 'Pesquisa Datatable: ',
			message: 'Sem resultados para essa pesquisa',
			type: 'success'
			});
	}
```