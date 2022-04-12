describe('searching of a recipe using ingredients', () => {
    it("should generate a list of recipes", () => {
        cy.visit('/')
        cy.get("#ingredient-input").type("Bread")
        cy.get("#ingredient-button").click()
        cy.get('#ingredients-list').should("contain", "Bread")
        cy.get("#recipe-search").click()
        cy.wait(2000)
        cy.get('#recipe-list').children('li').should("have.length", 20)
    })
})