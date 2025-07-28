API-CEP

API simples para consulta de endereços através do CEP, utilizando Node.js e Express.

 Tecnologias Utilizadas

- Node.js  
- Express  
- Axios (para chamadas HTTP externas)  
- Middleware personalizado para autenticação e validação  
- Estrutura modularizada com controllers, middlewares, rotas, etc.

Estrutura do Projeto
API-CEP/
│
├── config/
├── controllers/
├── middlewares/
├── routes/
├── utils/
├── app.js
├── server.js
├── package.json
└── .gitignore

🧪 Testes com Postman
Você pode importar as seguintes rotas no Postman para facilitar os testes:
Login: POST http://localhost:3000/login

Buscar CEP: POST http://localhost:3000/cep

Listar Endereços: GET http://localhost:3000/enderecos

▶️ Como Rodar o Projeto

1. Clone o repositório: 
git clone https://github.com/matheuskruger/API-CEP.git

2.Instale as dependências:
npm install

3.Inicie o servidor:
node server.js

🚀 Rotas Principais
1. Login
Endpoint:
POST /login

Body (JSON):

{
  "login": "admin",
  "senha": "1234"
}
Resposta:
{
  "token": "SEU_TOKEN_AQUI"
}
Use esse token para autenticar as rotas protegidas (passando no header Authorization).

2. Buscar CEP
Endpoint:
POST /cep

Headers:
Authorization: Bearer SEU_TOKEN_AQUI

Body (JSON):
{
  "cep": "01001000"
}
Resposta Exemplo:
{
  "mensagem": "CEP vindo da API",
  "dados": {
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP"
  }
}


