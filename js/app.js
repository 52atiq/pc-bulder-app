// document.getElementById('sixteenGB').addEventListener('click', function(){
 
//     updatePrice('memory-cost',300);
// });

function onClick(clickId, updateId, price){
    document.getElementById(clickId).addEventListener('click', function(){
        updatePrice(updateId,price);
        document.getElementById(clickId).style.backgroundColor = 'cornflowerblue'
    });
   
}

onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 100);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 200);
onClick('ssd3', 'storage-cost', 300);
onClick('free-delivery','delivery-cost', 0);
onClick('paid-delivery','delivery-cost', 50);


function updatePrice(itemId, price){

        const itemCost = document.getElementById(itemId);
        itemCost.innerText =price;
    
        const bestPrice = document.getElementById('best-price').innerText;
        const memoryPrice = document.getElementById('memory-cost').innerText;
        const storagePrice = document.getElementById('storage-cost').innerText;
        const deliveryPrice = document.getElementById('delivery-cost').innerText;
    
        const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
        const total = document.getElementById('total-price');
        total.innerText = totalPrice;
  
}

//apply promo code
const fakeCode = 'phero';
document.getElementById('apply-btn').addEventListener('click', function(){
    const promoCode = document.getElementById('promo-input').value;
   if(promoCode === fakeCode) {
     const total = document.getElementById('total-price');
     let totalPrice =parseFloat(total.innerText);
     const discount = (totalPrice*20)/100;
     
     totalPrice = totalPrice - discount ;
     total.innerText =totalPrice
   } 
   else{

   }
})

