describe('Scenarios where authentication is a pre-requirement', () => {
  beforeEach(() => {
    
    cy.login()
  })

  it('CRUDs a note', () => {
    const faker = require('faker')
    const noteDescription = faker.lorem.words(4)
    cy.createNote(noteDescription)
    const updatedNoteDescription = faker.lorem.words(4)
    const attachFile = true
    cy.editNote(noteDescription, updatedNoteDescription, attachFile)
    cy.deleteNote(updatedNoteDescription)
    
  })

  it('successfully submits the form', () => {
    cy.fillSettingsFormAndSubmit()

  })
    it.only('deslogar', () => {
      cy.visit('/')
      if (Cypress.config('viewportWidth') < Cypress.env('viewportWidthBreakpoint')) {
        cy.get('.navbar-toggle.collapsed')
          .should('be.visible')
          .click()
      }
      cy.get('.nav > :nth-child(2) > a').click()
      cy.get('#email').should('be.visible')
    })

  })
