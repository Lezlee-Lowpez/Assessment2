///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price , 0)
// console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    // to get the tax of and item u just multiply it and that gives you the value you need to add to ur total before tax
    let newSum = cartTotal + (cartTotal * tax)
    newSum -= couponValue
    return newSum
}
// console.log(calcFinalPrice(5, 3, .09))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

*/

// an object = dictionary. 
// The properties that my customer object will have include the arguments that we used above for the function created: cartTotal, tax, and coupon
//value. The last property i would add would be an identifier of some sort like customer ID/number or customer name. This object for 
// the restaurant is essentially acting as a database, so having standard information like how much did they spend, how much we had to tax
// them and if they received any discounts, and finally who bought/paid for it would be best for record keeping. 

//cartTotal should be a number because that represents how much a person spent, tax should also be a number(specifically a decimal) that represents its percent counterpart.
// couponValue should also be a number as that is how much of a discount we have to remove from the total. Customer id/name could be
// a number or a string but in this case im going to use a string of the customers name so it doesn't get accidentally mixed up with the numbers in 
//my object.

/*
    Now, create a customer object following your own
    guidelines.
*/

const restaurant = [
    {
        customerName: "Billy Bob",
        cartTotal: 123.50,
        tax: .09,
        couponValue: 3
    },

    {
        customerName: "Jenny Jenkins",
        cartTotal: 50,
        tax: .09,
        couponValue: 1
    },
    
    {
        customerName: "Lesley Lopez",
        cartTotal: 5,
        tax: .09,
        couponValue: 3
    },


]

// console.log(restaurant)

