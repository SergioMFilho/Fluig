##  Names e Ids

* Names e Ids dos campos não podem ter mais de 30 caracteres
* Em algumas ocasiões os campos precisam ser mais bem especificados para serem encontrados (ex : ```$("input[type=radio][name:_check_validacao
_documentacao]:checked").val();```
* Em alguns casos o enableFields pode bloqueou o campo em um passo específico, será preciso adicionar o ```UNDERLINE(_)```, pois, o seu NAME foi modificado, Como no caso ACIMA.
* Radios precisam ter o mesmo ```Name``` e o ```For = Id```
