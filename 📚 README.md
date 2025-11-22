# 🏋️‍♀️ Academia API - Sistema de Gestão Fitness

API RESTful completa desenvolvida em Node.js com Express e MongoDB (Mongoose) para gerenciar todas as entidades de uma academia, como alunos, planos, treinos e equipamentos. O projeto foca em seguir as melhores práticas, utilizando arquitetura modular (MVC/Camadas) e validação de dados com Yup.


## 🚀 Tecnologias Utilizadas

* **Backend:** Node.js, Express
* **Banco de Dados:** MongoDB (via Mongoose)
* **Variáveis de Ambiente:** `dotenv`
* **Validação de Schema:** `yup`
* **Monitoramento/Desenvolvimento:** `nodemon`, `morgan`
* **Testes de API:** Postman


## 📁 Estrutura do Projeto

A aplicação segue uma estrutura modular, separando as responsabilidades em diferentes pastas:

/projeto-academia-api 
  ├── src 
  │ ├── config # Conexão com o Banco de Dados 
  │ ├── models # Definição dos Schemas Mongoose (Entidades) 
  │ ├── validations # Schemas de validação de dados de entrada (Yup) 
  │ ├── controllers # Lógica de negócio (CRUDs) 
  │ ├── routes # Definição dos Endpoints da API 
  │ └── app.js # Inicialização do Express 
  ├── docs # Diagrama do Banco de Dados 
  ├── .env.example # Modelo de variáveis de ambiente 
  └── postman_collection.json # Coleção completa do Postman


🗺️ Modelagem do Banco de Dados
O projeto utiliza um total de 10 entidades com diversos relacionamentos, permitindo a gestão completa da academia.

O diagrama da modelagem (feito pela Pessoa 1) pode ser visualizado no arquivo: docs/diagrama-banco.png

Exemplo de Relacionamento (Referência):

Treino referencia Aluno e Professor.

Pagamento referencia Aluno e Plano.


📌 Endpoints da API (CRUD Completo)
O projeto implementa o conjunto completo de operações CRUD (Create, Read, Update, Delete) para cada uma das 10 entidades.

A base de todos os endpoints é http://localhost:3000/api.

Segue a planilha com todos os Endpoints da API:

https://docs.google.com/spreadsheets/d/1q13WJPe2huhTSyAH14-nUBbR-xoTj7bGjTlo2elx3fc/edit?gid=1308707787#gid=1308707787


📝 Documentação Postman
A coleção completa do Postman, com todas as rotas e exemplos de body para teste, está disponível para importação:

Arquivo: postman_collection.json

Como Testar:
Importe o arquivo postman_collection.json no Postman.

Defina a variável de ambiente baseUrl (ou use a já definida http://localhost:3000).

Execute os endpoints na ordem de dependência (ex: crie um Plano antes de criar um Aluno).


👥 Contribuições Individuais
O projeto foi dividido para garantir responsabilidades claras entre os membros da equipe. Dividimos as responsabilidades principais e o foco técnico de cada um, está demonstrado na tabela abaixo:

https://docs.google.com/spreadsheets/d/1YRMKREjHyEsl-f0fEq8P_M21Iba18Z3FudeMdH_YSFo/edit?usp=sharing
