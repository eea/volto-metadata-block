describe('Blocks Tests', () => {
  beforeEach(() => {
    cy.autologin();
    cy.createContent({
      contentType: 'Folder',
      contentId: 'cypress',
      contentTitle: 'Cypress',
    });
    cy.createContent({
      contentType: 'Document',
      contentId: 'my-page',
      contentTitle: 'My Page',
      path: 'cypress',
    });
    cy.visit('/cypress/my-page');
    cy.waitForResourceToLoad('@navigation');
    cy.waitForResourceToLoad('@breadcrumbs');
    cy.waitForResourceToLoad('@actions');
    cy.waitForResourceToLoad('@types');
    cy.waitForResourceToLoad('my-page');
    cy.navigate('/cypress/my-page/edit');
    cy.get(`.block.title h1`);
  });

  afterEach(() => {
    cy.autologin();
    cy.removeContent('cypress');
  });

  it('Add Metadata block: Description', () => {
    // without this the clear command below does nothing sometimes
    cy.wait(500);

    // Change page title
    cy.get('[contenteditable=true]').first().clear();

    cy.get('[contenteditable=true]').first().type('My Add-on Page');

    cy.get('.documentFirstHeading').contains('My Add-on Page');

    cy.get('[contenteditable=true]').first().type('{enter}');

    // Add metadata block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.ui.basic.icon.button.metadataSection')
      .contains('Metadata Section')
      .click();
    cy.get('.objectlist-widget button').contains('Add Field').click();
    cy.get('.objectlist-widget .accordion input[type="text"]')
      .click({ force: true })
      .type('Summary')
      .type('{enter}');
    cy.get('.block.metadataSection textarea')
      .click()
      .type('Test metadata: Summary');

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // then the page view should contain our changes
    cy.contains('My Add-on Page');
    cy.get('#page-document p').contains('Test metadata: Summary');
  });
});
