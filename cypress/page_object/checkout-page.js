
// This is page class for Checkout page

class CheckoutPage {

    addAddress(data) {
        cy.get('#first-name').type(data.first_name)
        cy.get('#last-name').type(data.last_name)
        cy.get('#postal-code').type(data.zip_code)
        cy.get('#continue').click()
        cy.get('#finish').click()       
    }

  
 
 } 
 export default CheckoutPage