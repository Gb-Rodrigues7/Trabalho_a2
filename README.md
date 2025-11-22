🏋️‍♀️ Academia API - Sistema de Gestão Fitness
API RESTful completa desenvolvida em Node.js com Express e MongoDB (Mongoose) para gerenciar todas as entidades de uma academia, como alunos, planos, treinos e equipamentos. O projeto foca em seguir as melhores práticas, utilizando arquitetura modular (MVC/Camadas) e validação de dados com Yup.

🚀 Tecnologias Utilizadas
Backend: Node.js, Express
Banco de Dados: MongoDB (via Mongoose)
Variáveis de Ambiente: dotenv
Validação de Schema: yup
Monitoramento/Desenvolvimento: nodemon, morgan
Testes de API: Postman
📁 Estrutura do Projeto
A aplicação segue uma estrutura modular, separando as responsabilidades em diferentes pastas:

/projeto-academia-api ├── src │ ├── config # Conexão com o Banco de Dados │ ├── models # Definição dos Schemas Mongoose (Entidades) │ ├── validations # Schemas de validação de dados de entrada (Yup) │ ├── controllers # Lógica de negócio (CRUDs) │ ├── routes # Definição dos Endpoints da API │ └── app.js # Inicialização do Express ├── docs # Diagrama do Banco de Dados ├── .env.example # Modelo de variáveis de ambiente └── postman_collection.json # Coleção completa do Postman

🗺️ Modelagem do Banco de Dados O projeto utiliza um total de 10 entidades com diversos relacionamentos, permitindo a gestão completa da academia.

O diagrama da modelagem (feito pela Pessoa 1) pode ser visualizado no arquivo: docs/diagrama-banco.png

Exemplo de Relacionamento (Referência):

Treino referencia Aluno e Professor.

Pagamento referencia Aluno e Plano.

📌 Endpoints da API (CRUD Completo) O projeto implementa o conjunto completo de operações CRUD (Create, Read, Update, Delete) para cada uma das 10 entidades.

A base de todos os endpoints é http://localhost:3000/api.

Segue a planilha com todos os Endpoints da API:

https://docs.google.com/spreadsheets/d/1q13WJPe2huhTSyAH14-nUBbR-xoTj7bGjTlo2elx3fc/edit?gid=1308707787#gid=1308707787

📝 Documentação Postman A coleção completa do Postman, com todas as rotas e exemplos de body para teste, está disponível para importação:

Arquivo: postman_collection.json

Como Testar: Importe o arquivo postman_collection.json no Postman.

Defina a variável de ambiente baseUrl (ou use a já definida http://localhost:3000).

Execute os endpoints na ordem de dependência (ex: crie um Plano antes de criar um Aluno).

👥 Contribuições Individuais O projeto foi dividido para garantir responsabilidades claras entre os membros da equipe. Dividimos as responsabilidades principais e o foco técnico de cada um, está demonstrado na tabela abaixo:

https://docs.google.com/spreadsheets/d/1YRMKREjHyEsl-f0fEq8P_M21Iba18Z3FudeMdH_YSFo/edit?usp=sharing


Participantes:

🎓 Gabriel Vinícius - 24114290032
◻️ Github: https://github.com/Gb-Rodrigues7

📌 Descrição do que fez:

✔️ Parte técnica

Criar estrutura inicial do projeto

Configurar Express, Mongoose, CORS

Configurar arquivo database.js

Criar todas as models (os 10 schemas do Mongoose)

Criar o arquivo .env.example

Montar a pasta routes/ vazia

Criar o arquivo app.js

Criar o servidor inicial (server.js ou via app.js)

✔️ Modelagem

Criar o diagrama do banco com:

10 entidades

relacionamentos (pelo menos 5 com referência)

Exportar PNG e salvar em /docs

✔️ GitHub – Issues

Criar issues:

“Modelagem do Banco”

“Configuração Inicial do Projeto”

“Configuração MongoDB Atlas”

“Criar Models”

Criar o template de issues

🎓 Matheus Araujo - 24214290024
◻️ Github: https://github.com/Matheus-de-araujo2308

📌 Descrição do que fez:

✔️ CRUDs (4 entidades)

Criar controllers + rotas + validações para:

Avaliações Físicas

Turmas

Agendamentos

Equipamentos

✔️ Postman (documentação completa)

Criar collection com todas as rotas

Organizar em pastas por recurso

Criar overviews explicativos

Criar exemplos de body válidos

Exportar como postman_collection.json

✔️ README.md completo

Nome do projeto

Descrição

Tecnologias usadas

Diagrama

Lista de endpoints

Exemplos de requisição

Passo a passo para rodar o projeto

Contribuições individuais de cada membro

✔️ GitHub – Issues

Criar issues:

“CRUD Avaliações”

“CRUD Turmas”

“CRUD Agendamentos”

“CRUD Equipamentos”

“Documentação Postman”

“README do Projeto”


🎓 Matheus Estevam - 24214290048
◻️ Github: https://github.com/Estevam404

📌 Descrição do que fez:

✔️ CRUDs (6 entidades)

Criar controllers + rotas + validações (Yup) para:

Alunos

Professores

Planos

Pagamentos

Treinos

Exercícios

Cada CRUD deve conter:

POST (create)

GET all

GET by ID

PUT (update)

DELETE

Validação com Yup

Validação de ObjectId

Status codes corretos

✔️ GitHub – Issues

Criar issues independentes:

“CRUD Alunos”

“CRUD Professores”

“CRUD Planos”

“CRUD Pagamentos”

“CRUD Treinos”

“CRUD Exercícios”