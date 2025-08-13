// cypress/e2e/kanban.cy.js

describe('Testes E2E - Kanban Board', () => {

  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app');
  });

  it('Deve alterar o modo da luz', () => {
    cy.get('.react-switch-handle').should('be.visible').click();
  });

  it('Deve adicionar um novo quadro', () => {
    cy.get('.sc-jqUVSM').should('be.visible').click();
    cy.get('.sc-gsnTZi').type('Quadro Teste');
    cy.get('.sc-gsnTZi').should('have.value', 'Quadro Teste');
    cy.get('.btn').should('be.visible').click();
  });

  it('Deve adicionar uma tarefa a um quadro', () => {
    cy.get('[id="💻  In ProgressCreateTask"]').should('be.visible').click();
    cy.get('.sc-gsnTZi').type('Nova Tarefa');
    cy.get('.sc-gsnTZi').should('have.value', 'Nova Tarefa');
    cy.get('.btn').should('be.visible').click();
  });

  it('Deve editar uma tarefa', () => {
    cy.get('.sc-gKXOVf:contains("Ajustes fluxo de compra")').click();
    cy.get('[id="Ajustes fluxo de compraModalTitle"]').click(); 
    cy.get('.sc-gsnTZi').type("Novo nome da tarefa");
    cy.get('.sc-gsnTZi').should('have.value', 'Novo nome da tarefa');
    cy.get('.btn').should('be.visible').click();
  });

  it('Deve adicionar uma tag', () => {
    cy.get('.sc-gKXOVf:contains("Banners da home")').click();
    cy.get('[id="0Color"]').click();
    cy.get('p').contains('Adicionar nova Tag').click(); 
    cy.get('.sc-gsnTZi').type("Kukac");
    cy.get('.sc-gsnTZi').should('have.value', 'Kukac');
    cy.get('.btn').should('be.visible').click();
  });

  it('Deve mover uma tarefa de uma lista para outra', () => {
    //cy.get('.sc-gKXOVf').eq(0).drag(cy.get('.sc-gKXOVf').eq(2));
    cy.get('.sc-gKXOVf:contains("Documentar padrões mobile")').drag('.sc-gKXOVf:contains("Banners da home")');
    
    cy.get('.sc-gKXOVf:contains("Documentar padrões mobile")')
    .trigger('mousedown', { which: 1, pageX: 100, pageY: 100 })
    .trigger('mousemove', { which: 1, pageX: 300, pageY: 300 })
    .trigger('mouseup', { force: true });

    //cy.get('.sc-gKXOVf:contains("Documentar padrões mobile")').dragAndDrop('.sc-gKXOVf:contains("Banners da home")');
    //cy.get('.sc-gKXOVf').eq(0).dragAndDrop(cy.get('.sc-gKXOVf').eq(2));
    //cy.get('.sc-gKXOVf').eq(0).dragAndDrop('.sc-gKXOVf').eq(2);

    //cy.get('.draggable').dragAndDrop('.droppable');
    //cy.contains('.sc-gKXOVf').parent().should('contain', 'Tarefa Cypress');
  });

  it('Deve excluir uma tarefa', () => {
    cy.get('.sc-gKXOVf:contains("Ajustes fluxo de compra")').trigger('mouseover');
    cy.get('[xmlns="http://www.w3.org/2000/svg"]').eq(2).click({force: true}); 
  });

  it('Deve excluir um quadro', () => {
    cy.get('[xmlns="http://www.w3.org/2000/svg"]').eq(0).click(); 
  });

});
