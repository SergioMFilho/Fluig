## O que acontece 'em baixo dos panos'
Ao realizar uma consulta nos datasets utilizando as constraints como por exemplo esse código :
```
var c1 = DatasetFactory.createConstraint("colleagueName", "a", "d", ConstraintType.SHOULD);
usuarios_fluig = DatasetFactory.getDataset("colleague", null, [c1])
```
Na variável C1 criamos uma constraint colleagueName com intervalo entre os valores A e D. O fluig internamente irá executar uma consulta semelhante a isso :
```
SELECT * FROM tabela_usuario WHERE nome>='a' and nome<='d'
```

