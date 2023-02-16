/* // function getData(elementId){
//    const incomeField = document.getElementById(elementId);
//    const incomeFieldString = incomeField.value;
//    const income = parseInt(incomeFieldString)
// }

document.getElementById('calculate-btn').addEventListener('click',function(){
    
    //    const incomeData = getData('income-field');
    //    const foodData = getData('food-field');
    //    console.log(foodData)
    //    const rentData = getData('rent-field');
    //    const clothData = getData('cloth-field');
    //    const totalExpense = foodData + rentData + clothData;
    //    console.log(totalExpense)
    const incomeField = document.getElementById('income-field');
    const FoodField = document.getElementById('food-field');
    const rentField = document.getElementById('rent-field');
    const clothField = document.getElementById('cloth-field');
    const totalExpenseField = document.getElementById('expense-field');
    const balanceField = document.getElementById('balance-field');
       const incomeFieldString = incomeField.value;
       const foodFieldString = FoodField.value;
       const rentFieldString = rentField.value;
       const clothFieldString = clothField.value;
       const totalExpenseString = totalExpenseField.innerText;
       const balanceFieldString = balanceField.innerText;
       const income = parseInt(incomeFieldString)
       const food = parseInt(foodFieldString);
       const rent = parseInt(rentFieldString);
       const cloth = parseInt(clothFieldString)
       const totalExpense = parseInt(totalExpenseString);
       const balance = parseInt(balanceFieldString);
       const expense = food + rent + cloth;
       totalExpenseField.innerText = expense;
       balanceField.innerText = income - expense;
    //    const percentage = (per / income * 100)
       console.log(expense);
    })
    
    document.getElementById('percentage-btn').addEventListener('click',function(){
    
        const savingsField = document.getElementById('savings');
        const savingsAmountField = document.getElementById('saving-balance-field');
        const balanceField = document.getElementById('balance-field');
        const balanceFieldString = balanceField.innerText;
        const balance = parseInt(balanceFieldString); 
    
        const savingsAmountString = savingsAmountField.innerText;
        const savingAmount = parseInt(savingsAmountString)
        const savingsFieldString = savingsField.value;
        const savings = parseInt(savingsFieldString);
    
        const incomeField = document.getElementById('income-field');
        const incomeFieldString = incomeField.value;
        const income = parseInt(incomeFieldString)
    
        
        const percentage = ((savings*income) / 100);
        
        savingsAmountField.innerText = percentage;
    
    
    
        const remainingBalanceField = document.getElementById('remaining-balance-field');
        const remainingBalanceString = remainingBalanceField.innerHTML;
        console.log(remainingBalanceString)
        const remainingBalance = balance - percentage; 
        remainingBalanceField.innerHTML = remainingBalance;
    }) */