<h1 align="center">
  📤 File Upload NestJS
</h1>

<p align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/languages/count/goncadanilo/file-upload-nestjs.svg">
  
  <a href="https://github.com/goncadanilo/file-upload-nestjs/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/goncadanilo/file-upload-nestjs.svg">
  </a>

  <a href="https://github.com/goncadanilo/file-upload-nestjs/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/goncadanilo/file-upload-nestjs.svg">
  </a>
  
  <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-brightgreen">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

  <a href="https://github.com/goncadanilo/">
    <img alt="Author" src="https://img.shields.io/badge/author-Danilo%20Gon%C3%A7alves-blue">
  </a>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="Auth NestJS" src=".github/file-upload-nestjs.png" width="80%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NestJS](https://nestjs.com/): framework utilizado para criação da aplicação.
- [Postgres](https://www.postgresql.org/): banco SQL utilizado para armazenar os dados.
- [Docker](https://www.docker.com/) e [Docker-compose](https://docs.docker.com/compose/install/): utilizado para criar e rodar o container do banco de dados.
- [Jest](https://jestjs.io/): utilizado para escrever os testes da aplicação.

## 💻 Projeto

Esse projeto é um sistema de upload de arquivos desenvolvido para fins de estudo utilizando o framework [NestJS](https://nestjs.com/). A aplicação consiste na criação de posts contendo descrição, hashtags e a imagem para fazer o upload. Também é possível visualizar todos os posts simulando um feed de alguma rede social.

## ⚡ Como rodar

### Requisitos

- [Node.js](https://nodejs.org/en/).
- [NestJS CLI](https://docs.nestjs.com/first-steps).
- [Yarn](https://yarnpkg.com/) ou se preferir, pode usar o npm _(já vem com o node)_.
- [Docker](https://www.docker.com/) e [Docker-compose](https://docs.docker.com/compose/install/) _(opcional)_.

### Subir o banco

- crie uma cópia do `.env.example` como `.env` e defina suas variáveis do banco.
- suba o banco de dados com docker: `docker-compose up -d`.

_(se você não estiver usando o docker, é necessário criar o banco manualmente)_.

- rode as migrations: `yarn typeorm migration:run`.

### Rodar a aplicação

- para rodar a aplicação: `yarn start`.
- para rodar a aplicação em modo watch: `yarn start:dev`.
- a aplicação estará disponível no endereço: `http://localhost:3000`.

### Rodar os testes

- para rodar os testes unitários: `yarn test`.
- para ver a cobertura dos testes unitários: `yarn test:cov`.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by [Danilo Gonçalves](https://github.com/goncadanilo). Me adicione no [LinkedIn](https://www.linkedin.com/in/goncadanilo/) :wave:
