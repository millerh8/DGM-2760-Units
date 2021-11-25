let message

const pizza = {
    crust: 'thin',
    topping: 'sausage',
    size: 'small',
    buildPizza: function () {
        message = `Baking a ${pizza.size} pizza with ${pizza.crust} crust, topped with ${pizza.topping}. Enjoy!`
        document.querySelector('#message1').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        let top = 1
        if (pizza.crust === 'thick') flour *= 2
        if (pizza.size === 'large') flour *= 2
        if (pizza.size === 'large') top *= 2
        message = `You will need to purchase ${flour} cup(s) of flour, and ${top} lb(s) of ${pizza.topping}.`
        document.querySelector('#message2').textContent = message
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')

document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')

document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')

document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#build').addEventListener('click', pizza.buildPizza)

document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)