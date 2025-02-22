const mynums=[1,2,3,4]
// const mytotal=mynums.reduce(function(acc,currval) {
//     console.log(`acc:${acc} and currvval:${currval}`);
    
//     return acc + currval//=>10
// },0)
// const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)
// console.log(mytotal);

const shoppingcart=[
    {
        item:"namkeen",
        price: 120
    },
    {
        item:"colddrik",
        price: 80
    },
    {
        item:"momos",
        price: 200
    },
    {
        item:"biryani",
        price: 120
    }
    
]
console.log(shoppingcart);

const total=shoppingcart.reduce((acc,curr)=>acc+curr.price,0);
console.log(total);
