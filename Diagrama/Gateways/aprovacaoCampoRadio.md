Em muitos casos iremos utilizar o valor do gateway para declarar o fluxo dos nosssos processos, porém, existem casos em que 
é preciso setar o valor do campo radio pelo javascript, como no exemplo a seguir.
```
 $("#primeiraaprovacao_sim").prop("checked", true)
```
Em alguns processos que voltam para as mesmas atividades é interessante por exemplo que o checked não esteja mais marcado ao voltar para a mesma atividade.