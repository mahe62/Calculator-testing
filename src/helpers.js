const incrementQty = qty => parseInt(qty) + 1;
const decrementQty = qty => parseInt(qty) - 1;
const total = (price, qty) => qty*price;
const kode = (price, qty, dis) => qty*price - dis/100*(price*qty);

module.exports = { 
    incrementQty, 
    decrementQty,
    total,
    kode
};
