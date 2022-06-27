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

const total = cart.reduce((a, c) => a + c.price, 0)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

console.log(total)

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

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let newCartTotal = cartTotal + (cartTotal * tax)
    return newCartTotal - couponValue
}

console.log(calcFinalPrice(total, 5, 0.06))

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

    Customer object is a burrito. Information the restaurant would need to know is type of meat, type of beans, type of tortilla and quantity.
    Properties are chicken because its the best, pinto beans because the other kinds are gross, a flour tortilla because corn tortillas are nasty and quantity is 1 because burritos are not that good.
    The meat, beans and tortilla properties need to be string datatypes and the quantity needs to be a number.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const custObj = {
    name: 'burrito',
    meat: 'chicken',
    beans: 'pinto',
    tortilla: 'flour',
    quantity: 1
}
