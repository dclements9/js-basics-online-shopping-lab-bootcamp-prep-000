var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100) + 1}
    cart.push(itemObject)

 return `${itemObject.itemName} has been added to your cart.`
}

                  // Right Here
function viewCart() {
  var cartSentenceArray = []

  if (getCart().length === 0){
      return "Your shopping cart is empty."
    }else if (getCart().length === 1) {
        cartSentenceArray.push(`${getCart()[0].itemName} at $${getCart()[0].itemPrice}`)
      }else if (getCart().length === 2){
          cartSentenceArray.push(`${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}`)
  }else{
      for (let i = 0, l = cart.length - 1; i < l; i++){
        cartSentenceArray.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    }
    cartSentenceArray.push(`and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}`)
  }
  return `In your cart, you have ${cartSentenceArray.join(', ')}.`
}

function total() {
var total = 0

for (let i = 0, l = cart.length; i < l; i++){
  var price = getCart()[i].itemPrice
  total = total+price
}
  return total
}

function removeFromCart(item) {
  var removalResponse
  var indexTest

  for (let i = 0; i<getCart().length; i++){
    if (getCart()[i].itemName === item){
      var cartItemIndex = getCart()[i]
      indexTest = i
      console.log(indexTest)
      getCart().splice(indexTest,1)

  }else{
      //removalResponse = "That item is not in your cart."
      return "That item is not in your cart."

      }
  }
//return removalResponse
}





function placeOrder(cardNumber) {
  // write your code here
}
