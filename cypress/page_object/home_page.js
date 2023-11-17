
// This is page class for Products/Home page

class HomePage {

    getTotalItemsCount() {        
        return cy.get('div.inventory_item_label').then(($el) => {
            return $el.length
          })
    }

   // function to generate random number between 1 and the given num value
    generateRadomNumToAddTocart(num) {
        return Math.floor(Math.random() * num) + 1
    }

    // function to add one/multiple item based on radomly generated number
    addMultipleItemsToCart(data, count) {        
        let randNum = this.generateRadomNumToAddTocart(count-1)
        for(let i=0; i<randNum; i++) {
            this.addItemtoTheCart(data.item_name[i.toString()], i)
        } 
        return randNum  
    }

    // function to add one item to the cart
    addItemtoTheCart(item_name, n) {
        cy.get(`#item_${n}_title_link`)
        .should('have.text', item_name)
        .parent()
        .next('div.pricebar')
        .find('button[id*=add-to-cart]')
        .click()
    }


} 
export default HomePage