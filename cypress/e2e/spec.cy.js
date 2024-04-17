describe('Priscilla Password Reset Test', () => {
    beforeEach(() => {
        cy.visit('https://priscilla.fitped.eu/');
        cy.get('span').contains('Forgotten password...').click();
    });

    it('Should show error with empty email address', () => {
        cy.get('span').contains('Send email').click();
        cy.get('p').contains('Invalid email address.').should('exist');
    });

    it('Should show error with wrong email address format', () => {
        cy.get('#input-18').type('wrong');
        cy.get('span').contains('Send email').click();
        cy.get('p').contains('Invalid email address.').should('exist');
    });

    it('Should show error with fake email address', () => {
        cy.get('#input-18').type('mail@none.xyz');
        cy.get('span').contains('Send email').click();
        cy.get('p').contains('Address does not exists.').should('exist');
    });

    it('Should show successfull password reset', () => {
        cy.get('#input-18').type('jakub.elis@student.ukf.sk');
        cy.get('span').contains('Send email').click();
        cy.get('p')
            .contains(
                'Please check your mailbox and confirm password change (check the spam folder too).'
            )
            .should('exist');
        cy.get('#input-22').should('exist');
        cy.get('#input-25').should('exist');
        cy.get('#input-28').should('exist');
    });
});
