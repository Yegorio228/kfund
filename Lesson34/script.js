// let p = 10
// let r = 0
// for (let i = 1; i < 11; i++) {
//     r =i*p
//     console.log(r)
// }


// let price = 10
// let r = 0
// for(let i = 1.2; i <= 2.0; i+=0.2){
//     r = i*price
//     console.log(r)
// }


// let N = 5
// let result = 0

// for(let i = 0; i <= N; i++){
//     result += (N+i)**2
//     console.log(result)
// }


let arr = prompt('Введите значение')
let sumInput = []

while (!isNaN(arr) && arr != "" && arr != null) {
    
    sumInput.push(+arr)
    arr = prompt('Введите значение')
    
}

console.log(sumInput)
let r = 0

for(let i = 0; i < sumInput.length; i++){
    r += sumInput[i]
}

console.log(r)


//let x = prompt('Введите число') 
//let y=3*x**x-6*x**2-7
//console.log(y) 



//let x=prompt('введите количество кг (1)')
//let y=prompt('введите количество кг (2)')   
//let a=prompt('Введите стоимость')
//let n=a/x
//let l=a/y
//console.log(n)
//console.log(l)  



// let N = prompt('Введите значение')
// let s = 60
// console.log(N/s)



// let N = [
//     'воскресенье',
//     'понедельник',
//     'вторник',
//     'среда',
//     'четверг',
//     'пятница',
//     'суббота'
// ]
// let r = 0
// for(let K = 1; K <= 365; K++){
//     r = K[N]
// }
// console.log(r)

//let F
//let A = prompt("Введите число А")       
//let B = prompt("Введите число B")
//let C = prompt("Введите число C") 
//if (A > 0 && B > 0 && C > 0 ){
//  F=true;
//}else{
//    F=false
//}
//console.log(F)