function addTwoNumbers(num,num2){
    if(Number.isInteger(num) && Number.isInteger(num2)){
        return num + num2
    }
    else{
        return NaN
    }
}




console.log(addTwoNumbers(4 , 3))
console.log(addTwoNumbers(4 , 0))
console.log(!!addTwoNumbers(4 , 'fadisofhaoishfa'))