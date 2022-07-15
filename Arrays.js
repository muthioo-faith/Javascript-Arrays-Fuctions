let Fruitkiosk=[
    {
        name:"lemon",
        quantity:2,
        price: 30.00,

    }
 
]
 function getTotalCost(name,quantity){
    let x=Fruitkiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${x.price*quantity}`);
}
getTotalCost("lemon",2)