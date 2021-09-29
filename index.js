//1
function oneHundredToFive(){
    for (let i = 100; i >= 5; i--){
        console.log(i)
    }
    
}

//2
function absoluteValue(num){
    if(Number.isInteger(num)){
            return Math.abs(num);
    }else
        return 'null'

}
function multiplesOfFourOrSeven(){
    for (let i = 0; i<= 100; i++){
        if(i%4 === 0 || i%7 === 0){
            console.log(i)
        }
    }
}








//oneHundredToFive()
//console.log(absoluteValue('r'));
multiplesOfFourOrSeven();
