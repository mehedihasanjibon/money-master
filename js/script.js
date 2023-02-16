
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
   console.log(expendSum);

});