/// <reference types="cypress" />

describe('TypeSelection Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render TypeSelection component', () => {
    cy.get('.heading').should('contain', 'New Post');
    cy.get('.radio-button').should('exist');
  });

  it('should select "Question" radio button', () => {
    cy.get('#Question').check();
    cy.get('#Article').should('not.be.checked');
  });

  it('should select "Article" radio button', () => {
    cy.get('#Article').check();
    cy.get('#Question').should('not.be.checked');
  });
});
