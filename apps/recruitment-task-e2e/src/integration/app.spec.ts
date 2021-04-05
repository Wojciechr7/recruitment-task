describe('recruitment-task', () => {
  it("should visit login page", () => {
    cy.visit("/login");
  });

  it("should login", () => {
    cy.get('#mat-input-0').type('admin');
    cy.get('#mat-input-1').type('admin');

    cy.get('.mat-button').click();
    cy.url().should('include', '/dashboard');
  });

  it("should move dish to cart", () => {
    cy.get('.remove-dish-button').should('have.length', 0);
    cy.get('.add-icon').first().click();
    cy.get('.remove-dish-button').should('have.length', 1);
    cy.get('.list-item-wrapper').first().should('have.class', 'disabled');
  });

  it("should remove dish from cart", () => {
    cy.get('.remove-dish-button').first().click();
    cy.get('.remove-dish-button').should('have.length', 0);
    cy.get('.list-item-wrapper').first().should('not.have.class', 'disabled');
  });
});
