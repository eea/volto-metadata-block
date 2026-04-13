import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Metadata Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Metadata Block: Add and save', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Metadata View Test');
    cy.get('.documentFirstHeading').contains('Metadata View Test');

    cy.getSlate().click();

    // Add Metadata block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.metadata')
      .contains('Metadata')
      .click({ force: true });

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Metadata View Test');
  });
});