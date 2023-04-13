# Introdução
Os eventos de um processo são um conjunto de scripts carregados pela API de workflow. Tais scripts são desenvolvidos com o uso da linguagem JavaScript e chamados ao longo da execução do processo em momentos predeterminados, como por exemplo a criação da solicitação do processo ou a entrada em uma nova atividade.

# Como criar um evento de processo?
Para criar um evento BeforeTaskSave ( o qual é executado sempre no início) ou AfterProcess (executado no final)

É preciso seguir os passos:
* Botão direito no Package Explorer do eclipse > New > Fluig Script > Script Evento Workflow > Nome do evento(Before ou After)
* E por último relacionar o processo o qual você quer utilizar o evento

Na utilização desses dois tipos de script é comum setar o número do processo no AfterProcessCreate

# Referencias
[Link Eventos de Processo - TDN](https://tdn.totvs.com/display/public/fluig/Eventos+de+Processos)