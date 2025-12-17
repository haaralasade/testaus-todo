describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    // taskin lisääminen
    cy.get('#topic').type('Test Task');
    cy.get('#priority').select('High');
    cy.get('#status').select('To do');
    cy.get('#description').type('This is a test task');
    cy.get('#save-btn').click();
    cy.get('#task-list').contains('Test Task').should('exist');
    cy.get('#task-list li')
      .contains('Test Task')
      .closest('li')
      .within(() => {
        cy.get('.controls button[data-action="delete"]').click();
      });
  });
});