const incrementQty = qty => parseInt(qty) + 1;
const decrementQty = qty => parseInt(qty) - 1;
const total = (price, qtyInput) => qtyInput*price;

module.exports = { 
    incrementQty, 
    decrementQty,
    total
};
