##  Names e Ids

* Names e Ids dos campos não podem ter mais de 30 caracteres
* Em algumas ocasiões os campos precisam ser mais bem especificados para serem encontrados (ex : ```$("input[type=radio][name:_check_validacao
_documentacao]:checked").val();```
* Em alguns casos o enableFields pode bloquear o campo em um passo específico, será preciso adicionar o ```UNDERLINE(_)```, pois, o seu NAME foi modificado, Como no caso ACIMA.
* Radios precisam ter o mesmo ```Name``` e o ```For = Id```


## widget repositorio

* libs ou scripts que são utilizados com mais frequencia podem ser encontrados no widget repositorio (nomeado de libs no fluig)
* para importar por lá você precisa adicionar a lib em seu local (css salva em wcm/widget/libs/src/main/webapp/resources/css e js em wcm/widget/libs/src/main/webapp/resources/js/libs)
* para importar no html você faz (<script src="/libs/resources/js/libs/imask.js"></script> ou <link rel="stylesheet" href="/libs/resources/css/select2.min.css">)
