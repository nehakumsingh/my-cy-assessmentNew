
// This is page class for Checkout page

class CartPage {

    removeItem() {
       cy.get('button[id*=remove]')
        .eq(0)
        .click()
    }

    validateItemsCount(addItemsCount) {
        cy.get('div.inventory_item_name')
        .should('have.length', addItemsCount) 
    }
      
 
 }
 export default CartPage