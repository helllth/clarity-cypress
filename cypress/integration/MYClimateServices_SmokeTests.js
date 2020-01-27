import { Children } from 'react';

// import Cypress from 'cypress';
// import cy from 'cypress';
let cyEnv = Cypress.env();
Cypress.config('baseUrl', cyEnv.baseUrl);

describe('myclimateservices smoke tests', function() {
	beforeEach(() => {
		cy.visit('https://myclimateservice.eu');
		cy.get('.agree-button').click();
	});
	it('ensure funding footer', function() {
		cy.get('.chars-to-200 > :nth-child(2)').contains('This project has received funding');
		cy.get('.chars-to-200 > :nth-child(2)').contains('Horizon 2020');
		cy.get('.chars-to-200 > :nth-child(2)').contains('research and innovation programme');
		cy.get('.chars-to-200 > :nth-child(2)').contains('under grant agreement No 730355');
	});
	it('ensure partner logos in footer', function() {
		cy.get('#block-partnerslogos > .field');
		cy.get('#block-partnerslogos > .field').children().should('have.length', 17);
		cy
			.get('.field > :nth-child(1) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Acciona');
		cy
			.get('.field > :nth-child(2) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Aemet');
		cy
			.get('.field > :nth-child(3) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'ait');
		cy
			.get('.field > :nth-child(4) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'ATOS');
		cy
			.get('.field > :nth-child(5) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Cedex');
		cy
			.get('.field > :nth-child(6) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Cismet');
		cy
			.get('.field > :nth-child(7) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Eureka');
		cy
			.get('.field > :nth-child(8) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Lansstyrelsen');
		cy
			.get('.field > :nth-child(9) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Linz');
		cy
			.get('.field > :nth-child(10) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'SMHI');
		cy
			.get('.field > :nth-child(11) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Plinivs');
		cy
			.get('.field > :nth-child(12) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Smartcities');
		cy
			.get('.field > :nth-child(13) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'WSP');
		cy
			.get('.field > :nth-child(14) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Stockholm');
		cy
			.get('.field > :nth-child(15) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Napoli');
		cy
			.get('.field > :nth-child(16) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'Meteogrid');
		cy
			.get('.field > :nth-child(17) > a > .img-responsive')
			.should('have.attr', 'src')
			.and('include', 'zamg');
	});
});
