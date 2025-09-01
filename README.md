# 🛒 Automação E2E de Site de Compras

![Cypress](https://img.shields.io/badge/Cypress-8BA8FF?logo=cypress&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![Workflow](https://img.shields.io/badge/CI/CD-AUTO-green)

Este projeto realiza **testes ponta a ponta (E2E)** de um site de compras utilizando o **framework Cypress**. A automação cobre **todo o fluxo do usuário**, desde a navegação até a **finalização da compra**, garantindo que o site funcione corretamente em todos os cenários.



## ⚡ Funcionalidades

- Automação completa do fluxo de compra  
- Testes em interface gráfica (UI) e execução headless  
- Integração contínua: testes executados automaticamente em pushes para `main`
- Validação de funcionalidades críticas do site  


## 🚀 Como executar os testes

1. Instale as dependências:

npm install

2. Execute os testes com interface:

npx cypress open

3. Execute os testes em modo headless (opcional):

npx cypress run


## 🔧 Workflow de CI/CD

O workflow automatizado realiza:

Build do projeto

Execução automática dos testes Cypress

Garantindo que todas as alterações no código sejam validadas antes do deploy.

[![Cypress Tests](https://github.com/camilasgoncalves/Projeto-Cypress-E2E/actions/workflows/testes.yml/badge.svg)](https://github.com/camilasgoncalves/Projeto-Cypress-E2E/actions/workflows/testes.yml)

## 🧪 Tecnologias utilizadas

Cypress

Node.js

GitHub Actions (CI/CD)

## 👩‍💻 Sobre o projeto

Projeto criado e mantido por Camila 🧪



