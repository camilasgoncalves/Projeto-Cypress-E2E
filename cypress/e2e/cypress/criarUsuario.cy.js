import { CriarUsuario } from "../../cypress/pages/criarUsuarioPage";

describe('Criação de Usuário', () => {

const criarUsuario = new CriarUsuario();

  it('deve criar um novo usuário', () => {
    cy.visit('https://automationexercise.com/login');
    criarUsuario.signUp();

  });
});