# Fundamentos do Node.JS

## O que é Node.JS?

_O Node.JS é um ambiente de software livre de runtime do JavaScript do lado do servidor. É possível executar aplicativos e código JavaScript em muitos locais fora de um navegador, como em um servidor. O Node é rápido, apresentando um alto desempenho e pode processar aplicativos e fluxos de dados intensos em campo real._

## Como o Node.JS funciona?

_O Node.JS se baseia em um loop eventos de thread único. Esse modelo de arquitetura controla operações simultâneas de maneira eficiente. Simultaneidade refere-se à capacidade do loop de eventos de executar funções de retorno de chamada JavaScript após a conclusão de outro trabalho._

Neste modelo de arquitetura: 
- Thread único significa que o JavaScript tem somente uma pilha de chamada e só pode executar uma tarefa por vez.

- O event loop executa o código, coleta e processa eventos e executa as próximas subtarefas na fila de eventos.