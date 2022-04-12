describe('deleting an ingredient from the pantry', () => {
    it("should delete 1 ingredient from the list", () => {
        cy.visit('/')
        cy.get("#ingredient-input").type("Bread")
        cy.get("#ingredient-button").click()
        cy.get('#ingredients-list').should("contain", "Bread")
        cy.get('li').contains("Bread").find('#ingredient-delete').click()
        cy.get('#ingredients-list').should("not.contain", "Bread")
    })
})