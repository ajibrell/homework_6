


// Change product details after a choice is selected
//Source:https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript?rq=1
function updateGlaze() {
    var glazing = document.querySelector(".glazing");
    if (glazing != undefined) {
        var glazeText = glazing.options[glazing.selectedIndex].text;
      document.getElementById("glazingType").innerHTML = "<b>Glaze:</b>" + ' ' + glazeText;
    } }
   

function updateQuantity() {
    var quantity = document.querySelector(".quantity");
    if (quantity != undefined) {
        var priceText = quantity.options[quantity.selectedIndex].text;
        document.getElementById("bunQuantity").innerHTML = "<b>Quantity:</b>" + ' ' + priceText;
     
    }
}


/*Attempt at updating the shopping cart*/

function addToCart() {
    document.getElementsByClassName("add-to-cart");
    alert('One item has been added to your cart!');
}
var count = 0;
var updatedTotal;
cart = document.getElementsByClassName("cart-items");
function updateCart() {
    
    cartTotal = parseInt(cart.innerHTML);
    if(cart.clicked==true){
        updatedTotal = cartTotal + 1;
        cart = updatedTotal;
        return cart;
    }
    

}



