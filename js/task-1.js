function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    const yourOrder = `Your ordered ${quantity} droids worth ${totalPrice} credits!`;
    return yourOrder;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));


