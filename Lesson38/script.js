
// let button = document.querySelector('.button')

// button.addEventListener('click', () => add())

// let add = () => {
//     let input = document.querySelector('.input').value
//     let div = document.querySelector('.div')
//     div.insertAdjacentHTML('afterbegin', input*2)
//     console.log(input*2)

// }


// let button = document.querySelector('.button')

// button.addEventListener('click', () => add())

// let add = () => {
//     let input = document.querySelector('.input').value
//     let input1 = document.querySelector('.input1').value
//     let div = document.querySelector('.div')
//     let r =""
//     if(input<input1){
//         for(; input <= input1; input++){
//         r += input + " "
//         console.log(r)
//     }
//     div.insertAdjacentHTML('beforeend', r )
//     }else{
//         for(; input1 <= input; input1++){
//             r += input1 + " "
//             console.log(r)
            
//         }
//         div.insertAdjacentHTML('beforeend', r )
//     }
    
    
//     // console.log(input*2)

// }

let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('.button')

btn.addEventListener('click', () => create())

let create = () =>{
    let size = document.querySelector('.input_text').value
    if(size<50 || size>500)return

    let block = document.createElement('div')
    block.classList.add('.block')
    block.style.width = size + "px"
    block.style.height = size + "px"

    wrapper.insertAdjacentElement('beforebegin', block)
}
let btnDown = document.querySelector('.down')
let btnRight = document.querySelector('.right')

btn.addEventListener('click', () => create())
btnDown.addEventListener('click', () => down())
btnRight.addEventListener('click', () => right())
let size
let r = 0, t = 0;

let create = () =>{
    size = document.querySelector('.input_text').value
    if(size<50 || size>500)return

    let block = document.createElement('div')
    block.classList.add('block')
    block.style.width = size + 'px'
    block.style.height = size + 'px'

    wrapper.insertAdjacentElement('afterbegin', block)
}
let down = () => {
    let block = document.querySelector('.block');
    if((+size + t)+10 > 500) return
    t += 10;
    block.style.marginTop = t + 'px';
}
let right = () => {
    let block = document.querySelector('.block');
    if((+size + r)+10 > 500) return
    r += 10;
    block.style.marginLeft = r + 'px';

}