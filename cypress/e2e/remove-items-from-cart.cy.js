import HomePage from '../page_object/home_page'
import CartPage from '../page_object/cart-page'

describe('Test Case2: User should be able to remove items from the cart' , () => {
    let data
    let count = 5
    const homePage = new HomePage()
    const cartPage = new CartPage()

    before(function () {
        // runs once before all tests in the block
        cy.fixture('test_data').then(function (testdata) {
          data = testdata
        })
      })
    before(function () {
      cy.login()
    })

    it('Add Items to the cart and Remove the items', () => {                
        let addedItems = homePage.addMultipleItemsToCart(data, count)  
        cy.get('a.shopping_cart_link')
            .click()
        cartPage.validateItemsCount(addedItems)
        cartPage.removeItem() 
        cartPage.validateItemsCount(addedItems-1)
    })
               

})