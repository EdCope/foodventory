describe('Homepage', () => {
  it('has a title', () => {
    cy.visit('/')
    cy.contains('Pantrypal')
  })
})
