//1
function oneHundredToFive(){
    for (let i = 100; i >= 5; i--){
        console.log(i);
    }
    
}

//2
function absoluteValue(num){
    if(Number.isInteger(num)){
            return Math.abs(num);
    }else
        return 'null'

}

//3
function multiplesOfFourOrSeven(){
    for (let i = 0; i<= 100; i++){
        if(i%4 === 0 || i%7 === 0){
            console.log(i);
        }
    }
}

//4
function square(num){
    let sqr = num*num;
    let sqrt = Math.sqrt(num);
    if(Number.isInteger(sqrt)){
        return sqrt;
    }else 
        return sqr;
}






//oneHundredToFive();
//console.log(absoluteValue('r'));
//multiplesOfFourOrSeven();
console.log(square(25))