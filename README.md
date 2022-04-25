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

API Rest respeitando os princípios SOLID.
-
Os usuários dessa aplicação, poderão registrar e visualizar unidades e máquinas separadamente, bem como ter uma visão geral que condensa os dados das duas unidades.

Atributos de um Asset são:
- image;
- name;
- description;
- model;
- owner;
- status: Running, Alerting, Stopped;
- health: 0% a 100%.

### Important:
- Cada ativo deve ter uma imagem, nome, descrição, modelo, proprietário, status e nível de integridade;
- Cada ativo faz parte de uma unidade;
- Cada unidade faz parte de uma empresa;
- Cada usuário faz parte de uma empresa;


## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias

### App

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Ts Node Dev](https://www.npmjs.com/package/ts-node-dev)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)

### Banco de Dados

- [Mongo DB Atlas](https://www.mongodb.com/atlas/database)


## :clipboard: Funcionalidades

  - [x] Criar usuários.
  - [x] Criar unidades.
  - [x] Criar companias.
  - [x] Criar Assets.
  - [x] Atualizar um asset.
  - [x] Deletar um asset.
  - [x] Listar todos assets por unit geral.
  - [x] Listar todos assets por unit do usuario.

## :closed_book: Instalação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/),
e um testador de API's web como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download).


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
## :clipboard: Como utilizar via Heroku (núvem):
- Para consumir a API no navegador mesmo digite o endereço abaixo:
  - https://assets-managment.herokuapp.com para a página inicial da API.
  - https://assets-managment.herokuapp.com/getAllAssetsByUnit para mostrar todas as unidades com seus respectivos usuários e máquinas.
  - https://assets-managment.herokuapp.com/getAssetByUserId/'id_do_usuario' para mostrar apenas as máquinas criadas pelo usuário que cadastrou.
- Para inserir, atualizar ou deletar utilize o postman ou insomnia e digite o endereço abaixo:
  - https://assets-managment.herokuapp.com/users para criar usuário é preciso digitar no body da requisição: name, email e password.
  - https://assets-managment.herokuapp.com/company para criar uma company é preciso digitar: name, userName, userId, unitId.
  - https://assets-managment.herokuapp.com/units para criar uma unit digite: userName, userId.
  - https://assets-managment.herokuapp.com/assets para criar uma asset: image, name, description, model, owner:'id_do_usuario', status, health.

---
## Implementações Futuras:
  - Terminar os testes unitários e criar os testes de integração.
  - Criar o Front.

---
Feito com ❤️ por Douglas Santana 🚀
- [Linkedin](https://www.linkedin.com/in/douglasdns/)
- [YouTube](https://youtu.be/8dmJ-X7inAM)

