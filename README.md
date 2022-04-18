<h1 align="center">
  <br />
  <a href="https://www.linkedin.com/in/matheus-teodoro-7bb92818a/">
  </a>
</h1>
<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#clipboard-Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :page_facing_up: Descrição

Our users, Emerson and Roberta, are maintenance managers at Industria Freios Supremos (auto parts manufacturer), and they have 2 units and 10 assets (machines) in total. They would like to be able to register and view both the units separately, as well as have an overview that condenses the data from the two units.

Atributos de um Asset são:
• image;
• name;
• description;
• model;
• owner;
• status: Running, Alerting, Stopped;
• health: 0% to 100%.

### Important:
• Each asset must have an image, name, description, model, owner, status and health level;
• Each asset is part of a unit;
• Each unit is part of a company;
• Every user is part of a company;


## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias

### App

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Ts Node Dev](https://www.npmjs.com/package/ts-node-dev)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)

### Banco de Dados

- [Mongo DB](https://www.mongodb.com/atlas/database)


## :clipboard: Funcionalidades

  - [x] Listar todos assets por unit geral.
  - [x] Listar todos assets por unit do usuario.


## :closed_book: Instalação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


```bash
# Clone o repositório com um dos links abaixo;
$ git clone git@github.com:douglas-santana/assets-managment.git
$ git clone https://github.com/douglas-santana/assets-managment.git

# Vá para a pasta onde esta o app;
$ cd assets-managment

# Instale as dependências;
$ npm install

# Execute aplicação;
$ npm run dev

# O app vai está rodando na porta 3001
```

---
## Implementações Futuras:
- Testar a aplicação.
- Criar o Front.

---
Feito com ❤️ por Douglas Santana 🚀

