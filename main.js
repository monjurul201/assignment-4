const bookingProcess = document.getElementById('booking-Process');
bookingProcess.addEventListener('click', function () {
    const main = document.getElementById('main-content');
    main.style.display = "none";
    const confirm=document.getElementById('confirmation');
    confirm.style.display="block"
});
const ConfirmProcess=document.getElementById('click-Confirm');
    ConfirmProcess.addEventListener('click',function(){
    confirmProcess=document.getElementById('password');
    confirmProcess.style.display="none"
    const congratulation=document.getElementById('congratulation');
    congratulation.style.display="block"
});


function ticketQuantityChange(ticket, isIncrement) {
    const ticketCount = document.getElementById(ticket + '-Count');
    const TicketCount = parseInt(ticketCount.value);
    let ticketNewCount = TicketCount;
    if (isIncrement == true) {
        ticketNewCount = TicketCount + 1;
    }
    if (isIncrement == false && TicketCount > 0) {
        ticketNewCount = TicketCount - 1;
    }
    ticketCount.value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'special') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'common') {
        ticketTotal = ticketNewCount * 100;
    }

    document.getElementById(ticket + '-totalTicketAmount').innerText = ticketTotal;
    calculationTotal();
}
function calculationTotal() {
    const specialCount = getInputValue('special');
    const commonCount = getInputValue('common');

    const Subtotal = specialCount * 150 + commonCount * 100;
    document.getElementById('SubTotal-prize').innerText = Subtotal;
    const tax = Math.round(Subtotal * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = Subtotal + tax;
    document.getElementById('grand-total').innerText = grandTotal;

}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-Count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount
}


