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






