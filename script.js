function getValue(elementId){
    return parseFloat(document.getElementById(elementId).value);
}
function getValueText(elementId){
    return parseFloat(document.getElementById(elementId).innerText);
}
function setValue(elementId, val){
    document.getElementById(elementId).innerText = val;
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    const getIncome = getValue('income');
    const getFood = getValue('food');
    const getRent = getValue('rent');
    const getClothes = getValue('clothes');

    const totalExpence = getFood + getRent + getClothes;
    const balance = getIncome - totalExpence;

    setValue('total-expense', totalExpence);
    setValue('balance', balance);
});

document.getElementById('btn-save').addEventListener('click', function(){
    const getIncome = getValue('income');
    const getPreviousBalance = getValueText('balance');
    console.log(getPreviousBalance, 'p');
    
    const getSave = getValue('save');
    const saveParcent = getIncome * getSave / 100;

    if(isNaN(getPreviousBalance) || isNaN(getSave)){
        alert(`Error: Invalid Input.\nUps ! Balance: ${getPreviousBalance}. Can't Save: ${saveParcent}`);
        return;
    }   
    if(saveParcent > getPreviousBalance){
        alert(`You try to save: $${saveParcent} but your current balance is: $${getPreviousBalance}`);
        return;
    }

    setValue('saving-amount', saveParcent);

    const remainBalance = getPreviousBalance - saveParcent;
    setValue('remaining-balance', remainBalance);
});