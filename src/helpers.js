const incrementQty = qty => parseInt(qty) + 1;
const decrementQty = qty => parseInt(qty) - 1;
const total = (price, qty) => qty*price;
const kode = (price, qty) => qty*price - 50/100*(price*qty);

module.exports = { 
    incrementQty, 
    decrementQty,
    total,
    kode
};
