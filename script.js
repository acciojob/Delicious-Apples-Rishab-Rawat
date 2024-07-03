//your code here
describe('Apple Varieties Page', () => {
    it('should display "ADD TO CART" button', () => {
        cy.visit('path/to/your/page');
        cy.contains('button', 'ADD TO CART').should('be.visible');
    });

    it('should display "BENEFITS" section', () => {
        cy.visit('path/to/your/page');
        cy.contains('h2', 'BENEFITS').should('be.visible');
    });
});