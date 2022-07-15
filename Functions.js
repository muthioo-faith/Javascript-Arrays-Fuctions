class kioskFruit{
constructor(fruit,quantity){
    this.quantity=quantity
    this.fruit=fruit
    this.fruitpriceList={"Mango":50,"Mellon":70,"Avocado":30};
    this.getTotalPrice=function(){
        return `${quantity} ${fruit} for KES ${quantity*this.price}`
    }
}
}
kioskFruit.prototype.price=90;
 var kiosk=new kioskFruit("Mellon",2);
 console.log(kiosk.getTotalPrice());
 





