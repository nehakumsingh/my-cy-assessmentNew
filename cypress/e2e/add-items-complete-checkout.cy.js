import HomePage from '../page_object/home_page'
import CartPage from '../page_object/cart-page'
import CheckoutPage from '../page_object/checkout-page'

describe('Test Case1: User should be able to complete the checkout process' , () => {
    let data
    let count = 5
    const homePage = new HomePage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    before(function () {
        // runs once before all tests in the block
        cy.fixture('test_data').then(function (testdata) {
          data = testdata
        })
      })
    before(function () {
      cy.login() 
    })

    it('Add Items to the cart and Compelte the checkout', () => {                
        let addedItems = homePage.addMultipleItemsToCart(data, count)  
        cy.get('a.shopping_cart_link')
            .click()
        cartPage.validateItemsCount(addedItems)     
        cy.get('button#checkout')
            .click()
        checkoutPage.addAddress(data)
        cy.get('h2')
            .should('have.text', 'Thank you for your order!')

    })



})