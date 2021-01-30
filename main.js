function ticketQuantityChange(ticket, isIncrement){
    const ticketCount=document.getElementById(ticket +'-Count');
    const TicketCount=parseInt(ticketCount.value);
    let ticketNewCount=TicketCount;
    if(isIncrement==true){
         ticketNewCount= TicketCount+1;
    }
    if(isIncrement==false &&  TicketCount>0){
         ticketNewCount= TicketCount-1;     
    }
   ticketCount.value= ticketNewCount;
   let ticketTotal=0;
   if(ticket=='special'){
       ticketTotal=ticketNewCount*150;
   }
   if(ticket=='common'){
       ticketTotal=ticketNewCount*100;
   }

    document.getElementById(ticket + '-totalTicketAmount').innerText=ticketTotal;
    
}
// function calculationTotal (){
// const specialCount=document.getElementById('special-Count').value;
// const specialCount=parseInt(specialCount.value);  

// const commonCount=document.getElementById('common-Count').value;
// const commonCount=parseInt(commonCount.value);
// const Subtotal=specialCount*150+commonCount*100;
// document.getElementById('SubTotal-prize').innerText=Subtotal;
// }


//    function specialQuantityChange(isIncrement){
//     const specialCount=document.getElementById('special-Count');
//     const specialTicketCount=parseInt(specialCount.value);
//     // constcommonNewCount=ticketCount-1;
//     let specialNewCount=specialTicketCount;
//     if(isIncrement==true){
//         specialNewCount=specialTicketCount+1;
//     }
//     if(isIncrement==false && specialTicketCount>0){
//         specialNewCount=specialTicketCount-1;     
//     }
//     specialCount.value= specialNewCount;
//     const specialTotalTAmount=specialNewCount*150;
//     document.getElementById('totalSpecialTicketAmount').innerText=specialTotalTAmount;
// }

//    function ticketQuantityChange(isIncrement){
//        const commonCount=document.getElementById('common-Count');
//        const commonTicketCount=parseInt(commonCount.value);
//     //    constcommonNewCount=ticketCount-1;
//        let commonNewCount=commonTicketCount;
//        if(isIncrement==true){
//              commonNewCount=commonTicketCount+1;
//        }
//        if(isIncrement==false && commonTicketCount>0){
//              commonNewCount=commonTicketCount-1;     
//        }
//        commonCount.value=commonNewCount;
//        const commonTotalAmount=commonNewCount*100;
//        document.getElementById('totalCommonTicketAmount').innerText=commonTotalAmount;
//    }
   



// document.getElementById('increment').addEventListener('click',function(){
//     const count=document.getElementById('ticketQuantity');
//     const ticketCount=parseInt(count.value);
//     constcommonNewCount=ticketCount+1;
//     count.value=ticketNewCount;
//     const TotalTicketAmount=ticketNewCount*100;
//     document.getElementById('totalTicketAmount').innerText=TotalTicketAmount;
// });
// document.getElementById('decrement').addEventListener('click',function(){
//        const count=document.getElementById('ticketQuantity');
//        const ticketCount=parseInt(count.value);
//        if(ticketCount>0){
//        commonNewCount=ticketCount-1;
//        }
       
//        count.value=ticketNewCount;
//        const TotalTicketAmount=ticketNewCount*100;
//        document.getElementById('totalTicketAmount').innerText=TotalTicketAmount;
// });

