const billInput = document.getElementById("billAmount");
const tipButtons = document.querySelectorAll(`.tip-btn`);
const tipAmount = document.getElementById("tipAmount");
const totalbill = document.getElementById("totalBill");
let selectedTip = 0;
tipButtons.forEach(function(button) {
    button.addEventListener('click' , function(){
        tipButtons.forEach(function(btn){
            btn.classList.remove('active')
        });
        button.classList.add('active');
        selectedTip = button.dataset.tip;
        calculateTip();
    })
})
function calculateTip(){
    const bill = parseFloat(billInput.value);
    if(isNaN(bill)  || bill < o) return;
    const tip = (bill * selectedTip) / 100;
    const total = bill + tip;
    tipAmount.textContent = '$' + tip.toFixed(2);
    totalbill.textContent = '$' + total.toFixed(2);
}
billInput.addEventListener('input' , calculateTip);
 