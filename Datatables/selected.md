## Mudar o css da linha selecionada

```
...
header: [
			{ 'title': 'colleagueName','size': 'col-md-3'},
			{ 'title': 'login','size': 'col-md-3'},
			{ 'title': 'mail','size': 'col-md-3' },
			{ 'title': 'userTenantId','size': 'col-md-3'}
		],
		multiSelect: true,
    	classSelected: 'danger',
		search: {
...
```
Essa parte do código usa o multiSelect para mudar o css e colocar a classe 'danger' na tr que foi selecionada deixando-a vermelha:
```
multiSelect: true,
classSelected: 'danger',
```