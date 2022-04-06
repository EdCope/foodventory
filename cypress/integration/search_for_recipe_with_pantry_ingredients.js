describe('searching of a recipe using ingredients', () => {
    it("should generate a list of recipes", () => {
        cy.visit('/')
        cy.get("#ingredient-input").type("Bread")
        cy.get("#ingredient-button").click()
        cy.get('#ingredients-list').should("contain", "Bread")
        cy.get("#recipe-search").click()
        cy.get('#recipe-list').should("have.length", 5)
    })
})