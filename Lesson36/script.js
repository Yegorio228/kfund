// function viewStr(str){

//     if(isNaN(str)){
//         return 'ne chislo'
//     }
//     console.log(str)
// }

// let i = 2

// viewStr(i)

// arr = ['1']
// console.log()



let userArr = []

let addUser = () =>{
    let user = prompt('set user')

    if (user === null){ 
        console.log('error')
        return
    }

    userArr.push(user)
}




let viewUser = () =>{
    let wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = ''
    let li = ''
    for(let i = 0; i < userArr.length; i++){
         li += `<li>${userArr[i]}</li>`

    }
    console.log(li)

    wrapper.insertAdjacentHTML('afterbegin',li)
}



let numberArr = []

let addNumder = () =>{
    let number = prompt('Number')

    // if(isNaN(numberArr) && numberArr != "" && numberArr != null) {
        
    //     return
    // }
    numberArr.push(number)
}

let viewNumder = () =>{
    let str =""
    let r = 0
    for(let l = 0; l < numberArr.length; l++){
    r += +numberArr[l]
    str += numberArr[l]
    str += '+'
    
    }
    
    console.log(str+r)
}




function Begin10(){
    let N = prompt("")
    let A = prompt("")
    if(A != 0 && N != 0){
        console.log(A+N)
        console.log(A-N)
        console.log(A*N)
        console.log(A/N)
    }
    
}


function Begin15(){
    let S = prompt("Площадь")
    let n = 3.14
    D += (4*S)/3.14
}


//Begin
let l = prompt('Введите число:') 
let P = 3.14
let R = l/(2*P)
console.log(R)
let S = P * (R**2)
console.log(S)

//Integer
let a = prompt('Введите число:') 

let one = Math.floor (a/10)
let two = a % 10
console.log(one)
console.log(two)



//Boolean
let a = prompt('Введите число:') 
let b = prompt('Введите число:') 
let c = prompt('Введите число:') 

if(a==b){
    console.log('True')
}
else if(b==c){
    console.log('True')
}
else if(c==a){
    console.log('True')
}
else{
    console.log('False')
}


//If
let a = prompt('Введите число:') 

if(a >= 0){
    a++
    console.log(a)
}
else{
    console.log(a)
}


