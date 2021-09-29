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

//oneHundredToFive()
console.log(absoluteValue('r'));