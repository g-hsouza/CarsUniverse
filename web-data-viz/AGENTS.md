# AGENTS.md

## Visão geral

Essa aplicação é um sistema sobre o universo do filme Carros. É composta por um site informativo onde conta um pouco da história e detalhes sobre a trilogia. Também terá uma funcionalidade de cadastro e login de usuários, onde aqueles que estiverem logados, realizarão quizzes sobre o universo do filme, e consequentemente uma dashboard para acompanhamento dos resultados. Essa API é responsável por realizar cadastros de usuários no site, enviando os dados para o banco de dados configurado nela. Também, é responsável por capturar os dados no banco para inserir na dashboard.

## Tecnologias

As tecnologias utilizadas no projeto são: HTML, CSS, JavaScript e NodeJS.

## Comandos

Instalar dependências: npm i
Iniciar a aplicação: npm start
Parar a aplicação: CTRL + C


## Arquitetura

Front-end: pasta public, subpastas js e cadastro. Todas em HTML, CSS e JavaScript

Back-end: pasta src, subpastas routes (define as rotas), controllers (define as regras de negócio), models (realiza consultas no banco de dados) e database (conexão, configuração e estrutura do banco de dados). Back-end feito em Node.js
Banco de dados: responsável por armazenar as informações necessárias para o funcionamento do sistema, como dados dos usuários e resultados dos quizzes.

Organização dos arquivos: os arquivos devem ser mantidos nas pastas correspondentes às suas responsabilidades, respeitando a estrutura existente no projeto. Novas páginas, estilos, scripts e funcionalidades da API devem ser adicionados aos diretórios apropriados.

Fluxo de requisição: o frontend envia requisições à API quando precisa realizar operações como cadastro, login ou consulta de resultados. O backend processa as requisições, acessa o banco de dados quando necessário e retorna uma resposta ao frontend.

A implementação de novas funcionalidades deve seguir a arquitetura e os padrões já estabelecidos no projeto, evitando duplicação de código e alterações estruturais desnecessárias.

## Padrões de desenvolvimento

Nome de arquivos: nomes simples, de preferência em uma palavra só.
Nome para funções: nome simples e explicíto sobre a função, dando preferência para modelos camelCase.
Nome para variáveis: nomes simples, dando preferência para modelos camelCase.
Padrão de commits: tipo(escopo): descrição
    - feat: nova funcionalidade;
    - fix: correção de erro;
    - docs: documentação;
    - style: estilização;
    - perf: melhoria de performance;
    - refactor: refatoração;
    - test: testes;
    - chore: manutenção.

    exemplo: feat(login): adiciona página de login

## Cuidados e restrições

Nunca alterar a estrutura e arquitertura do projeto, e da API.
Não realizar commits sem minha interação e libereação.
Não subir nos commits as seguintes pastas e arquivos: node_modules, .env, .env.dev e package-lock.json.

## Regra geral: 

Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto.
Após toda alteração, me informe detalhadamente o que foi feito.

