const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");

const outputBtn = document.querySelector("#output-box");


function calculateProfitAndLoss(initial , quantity , current)
{
    if(initial>0 && quantity>0 && current>0){
    if(initial > current){
        //loss
       var loss=(initial-current)*quantity;
       var lossPercentage = (loss/initial)*100
       showOutput("Hey, the loss 😢 is : " + loss + " and the loss percentage is : " + lossPercentage.toFixed(2) +"%");
    }
    else if( current > initial){
        //gain
       var gain=(current-initial)*quantity;
       var gainPercentage = (gain/initial)*100
       showOutput("Hey, the gain 🥳 is : " + gain + " and the gain percentage is : " + gainPercentage.toFixed(2) +"%");
    }
    else {
        showOutput("No pain No gain ! and No gain No Pain !");
    }
}else{
    showOutput("Input Fields Can not be Empty and should be greater than 0.")
} 
}


function submitHandler(){
   var ip = initialPrice.value;
   var qty = stocksQuantity.value;
   var curr = currentPrice.value;

    calculateProfitAndLoss(ip , qty , curr);
    
}

submitBtn.addEventListener("click", submitHandler)

function showOutput(message){
outputBtn.innerHTML= message;
}