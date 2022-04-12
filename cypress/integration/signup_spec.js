describe('Homepage', () => {
  it('has a sign-up form', () => {
    cy.visit('/')
    cy.contains('Pantrypal')
  })
})