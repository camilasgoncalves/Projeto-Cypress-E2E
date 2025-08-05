describe('Fluxo de login - Credenciais Inválidas', () => {
  it('deve logar com sucesso com credenciais inválidas', () => {
    cy.visit('https://www.saucedemo.com/');
    
    cy.get('[data-test="username"]').should('be.visible').type('c33ifjls');
    cy.get('#password').should('be.visible').type('dddddddd!');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.url().should('include', '/login');
    cy.contains('Your username is invalid!').should('be.visible');

  });
});

describe('Fluxo de login', () => {
  it('deve logar com sucesso com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/');
    
    cy.get('[data-test="username"]').should('be.visible').type('standard_user');
    cy.get('#password').should('be.visible').type('secret_sauce');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });
});

describe('Logout', () => {
  it('deve logar e deslogar com sucesso', () =>{
    cy.visit('https://www.saucedemo.com/');
    
    cy.get('[data-test="username"]').should('be.visible').type('standard_user');
    cy.get('#password').should('be.visible').type('secret_sauce');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');

    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').should('be.visible').click();

    cy.contains('Accepted usernames are').should('be.visible');

  });
});
