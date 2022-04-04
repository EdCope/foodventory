describe('Homepage', () => {
  it('has hello world', () => {
    cy.visit('/')
    cy.contains('Hello world!')
  })
})
