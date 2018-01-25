/* global cy, it, describe */

describe('TodoList App', () => {
  it('should load with the right title', () => {
    cy.visit('http://localhost:3000/');
    cy.title().should('contain', 'Todo List');
  });

  it('should allow me to create a todo', () => {
    const todoText = 'Get better at testing';
    cy.visit('http://localhost:3000/');
    cy.get('.todo-input').type(todoText);
    cy.get('.todo-submit').click();
    cy.get('.todo-text').should('contain', todoText);
  });
});
