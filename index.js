
const WEIGHT = document.querySelector('.WEIGHT');
const HEIGHT = document.querySelector('.HEIGHT');
const bmiResult = document.querySelector('.result');

function calcuLate(){
    
    const WEIGHT2 = WEIGHT.value / HEIGHT.value;
    const Result = WEIGHT2 / HEIGHT.value;

    bmiResult.value = Result.toFixed(3);
    
    if(Result < 18.5){
        document.querySelector('.h2-result').innerHTML = 'UNDERWEIGHT';
    }else if(Result >= 18.5 && Result <= 24.9){
        document.querySelector('.h2-result').innerHTML = 'NORMAL WEIGHT';
    }else if(Result >= 25 && Result <= 29.9){
        document.querySelector('.h2-result').innerHTML = 'OVERWEIGHT';
    }else if(Result > 30){
        document.querySelector('.h2-result').innerHTML = 'OBESE';
    }
}