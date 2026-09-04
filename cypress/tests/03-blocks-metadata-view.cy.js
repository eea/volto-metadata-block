import { slateBeforeEach, slateAfterEach } from '../support/e2e';

const setPageTitle = (title) => {
  cy.clearSlateTitle();
  cy.getSlateTitle().type(title);
  cy.get('.documentFirstHeading').contains(title);
};

const addMetadataBlock = () => {
  cy.getSlate().click();
  cy.get('.ui.basic.icon.button.block-add-button').first().click();
  cy.get('.blocks-chooser .title').contains('Common').click();
  cy.get('.content.active.common .button.metadata')
    .contains('Metadata')
    .click({ force: true });
};

describe('Metadata Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('updates rendered metadata value after editing an existing metadata block', () => {
    setPageTitle('Metadata View Update Test');
    addMetadataBlock();

    cy.get('.block.metadata input').click().type('Summary{enter}');
    cy.get('.block.metadata textarea').click().type('First summary value');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/cypress/my-page`);
    cy.get('.block.metadata').contains('First summary value');

    cy.visit('/cypress/my-page/edit');
    cy.get('.block.metadata textarea')
      .click()
      .type('{selectAll}{backspace}')
      .type('Updated summary value');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/cypress/my-page`);

    cy.get('.block.metadata').contains('Updated summary value');
    cy.contains('First summary value').should('not.exist');
  });
});
