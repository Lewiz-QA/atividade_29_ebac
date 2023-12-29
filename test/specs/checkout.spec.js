const checkoutViewScreen = require("../screens/checkoutView.screen");

describe('Deve realizar Checkout corretamente', () => {

    it('Deve alertar ao tentar realizar Checkout sem itens no Carrinho', async () => {
        await checkoutViewScreen.accessDrawer()
        await checkoutViewScreen.accessCart()
        await checkoutViewScreen.accessCheckout()

        expect (await checkoutViewScreen.checkValidationCheckoutEmptyCart()).toExist()
    });
})