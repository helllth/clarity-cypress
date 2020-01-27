// import Cypress from 'cypress';
// import cy from 'cypress';
let cyEnv = Cypress.env();
Cypress.config('baseUrl', cyEnv.baseUrl);

describe('Login Test', function() {
	beforeEach(() => {
		console.log('Cypress.env(baseUrl)', Cypress.env('baseUrl'));

		cy.visit('/user/login'); //https://csis.myclimateservice.eu/user/login')
		cy.get('#edit-name').type(Cypress.env('user'));
		cy.get('#edit-pass').type(Cypress.env('pass'));
		cy.get('#edit-submit').click();
	});
	it('test the Screenshot-Button interactively', function() {
		cy.get('#block-clarity-main-menu > .menu > :nth-child(2) > a').click({ force: true });
		cy.wait(1000);
		cy.get(':nth-child(5) > .views-field-label > a').click({ force: true });
		cy.get('div > .nav > :nth-child(1) > .nav-link').click({ force: true });
		cy.get('.field-content > .nav > :nth-child(4) > .nav-link').click({ force: true });
		cy.wait(3000);
		cy.get('p > .btn').click({ force: true });
		cy.wait(2000);
		cy.get('.image-style-max-650x650').should('exist');
		//cy.get('.cke_wysiwyg_frame').type("testing with cypress test").should('have.value', 'testing with cypress test')

		cy.get('.ui-dialog-buttonset > :nth-child(2)').click({ force: true });
		cy.get('.field--name-field-image > img').should('exist');
	});
	it.only('test the Screenshot-Button via Route', function() {
		cy.visit('/study/1/step/2/view/maps');
		cy.wait(3000);
		cy.get('p > .btn').click({ force: true });
		cy.wait(2000);
		cy.get('.image-style-max-650x650').should('exist');
		//cy.get('.cke_wysiwyg_frame').type("testing with cypress test").should('have.value', 'testing with cypress test')
		cy.get('.ui-dialog-buttonset > :nth-child(2)').click({ force: true });
		cy.get('.field--name-field-image > img').should('exist');
	});
});
