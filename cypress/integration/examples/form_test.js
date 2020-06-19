describe('Test inputs and button', () => {
    it('can visit the site', () =>{
        cy.visit('http://localhost:3000/pizza')
    })

    it('can change text with input', () => {
        cy.get('input[name=name]')
            .type('mark')
            .should('have.value', 'mark')
    })

    it('can select multiple toppings', () => {
        cy.get('input[name=pepperoni]')
            .check()
            .should('have.value', 'on')
        cy.get('input[name=sausage]')
            .check()
            .should('have.value', 'on')
        cy.get('input[name=bacon]')
            .check()
            .should('have.value', 'on')
    })

    it('can submit the form', () => {
        cy.get('button#submitBtn')
            .should('not.be.disabled')
            .click()
    })
})