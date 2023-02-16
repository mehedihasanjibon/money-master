
document.getElementById("btn-calculate").addEventListener("click", function(){
   const income = document.getElementById("income-field").value;
   const incomeParse = parseFloat(income);
   if(incomeParse <=0 || isNaN(incomeParse)){
      alert("Inter your salary digit!");
   }

   const food = document.getElementById("food").value;
   const foodValue = parseFloat(food);
   if(foodValue <= 0 || isNaN(foodValue)){
      alert("Please enter a valid number!");
   }

   const rent = document.getElementById("rent").value;
   const rentValue = parseFloat(rent);
   if(rentValue <= 0 || isNaN(rentValue)){
      alert("Please enter a valid number");
   }

   const clothes = document.getElementById("clothes").value;
   const clothesValue = parseFloat(clothes);
   if(clothesValue <= 0 || isNaN(clothesValue)){
      alert("Please enter a valid number");
   }
   const expendSum = foodValue + rentValue + clothesValue;
   
   const totalExpense = document.getElementById("total-expenses").innerText = expendSum;
   const incomeField = document.getElementById("income-field").value;
   const incomeFieldValue = parseFloat(incomeField);

   const incomeFieldValueExpense = incomeFieldValue - totalExpense;
   document.getElementById("balance").innerText = incomeFieldValueExpense;
});

document.getElementById("btn-save").addEventListener("click", function(){

   const saveInputField = document.getElementById("save-field").value;
   const saveInputFieldValue = parseFloat(saveInputField);

   const balance = document.getElementById("balance").innerText;
   const balanceNumber = parseFloat(balance);

   const calculateSaving = (balanceNumber * saveInputFieldValue / 100);

   document.getElementById("saving-amount").innerText = calculateSaving;
   
   if(saveInputFieldValue < 0 || isNaN(saveInputFieldValue)){
      alert("enter a valid number!");
   }

   const finalTotal = balanceNumber  - calculateSaving;
   document.getElementById("remaining-total").innerText = finalTotal;
});