// let x = 10

// if(x == 10){
//     console.log('первый')
// }


// let x = prompt('введите ')

// if(x > 0){
//     console.log(2 * Math.sin(x))
// }else{
//     console.log(6-x)
// }

// let y = prompt('введите ')

// if(x < -2 || x > 2){
//     console.log(2*x)
// }else{
//     console.log(-3 *x)
// }

// let q = prompt('введите ')

// if(x <= 0){
//     console.log(-x)
// }else if(0 < x < 2){
//     console.log(x ** 2)
// }else if(x >= 2){
//     console.log(4)
// }

// let w = prompt('введите')

// if(!isNaN(w)){
//     console.log(w)
// }else{
//     console.log('NaN')
// }


// if(x == Number(w))

// if(w*1 == w*1){
    
// }

let h1 = document.querySelector(".h12")
console.log(h1)

function changeColor(){
    let size = prompt("Введите розмер")
    if(!isNaN(size)){
        console.log(size)
        h1.style.fontSize = size + `px`
    }else{
    console.log('NaN')
} 
}