// let arr = [1, 2, 3, 4, 5]

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach(number => {
//     console.log(number)
// });

// arr.forEach(element => {
//     console.log(element)
// });


// let textarea = document.querySelector('.text')


// let btn = document.querySelector('.get_text')
// let wrapper = document.querySelector('.wrapper')
// let count = 1
// btn.addEventListener('click', () => createCard())

// let createCard = () =>{
//     let color = document.querySelector('.color').value
//     let text = document.querySelector('.text').value
//     if(text == "")return
//     let card = document.createElement('li')
//     card.classList.add('card')
//     card.insertAdjacentHTML('beforeend',`
//         <div class="number">${count}</div>
//         <div class="card_text">${text}</div>`)
//     count++
//     document.querySelector('.text').value = ""
//     wrapper.insertAdjacentElement('beforeend', card)
//     card.style.backgroundColor = color
// }



let btn = document.querySelector('.get_text')
let btn2 = document.querySelector('.arr_text')
let wrapper = document.querySelector('.wrapper')
let count = 1
let arr =[]
btn.addEventListener('click', () => createrar())
btn2.addEventListener('click', () => createCard())
wrapper.addEventListener('click', () => wrapadd())

let wrapadd = () =>{
    let wrapper = document.querySelector
}

let createCard = () =>{
    let color = document.querySelector('.color').value
    wrapper.innerHTML = ''
    count = 1
    for(let i = 0; i<arr.length; i++){
    let card = document.createElement('li')
    card.classList.add('card')
    card.insertAdjacentHTML('beforeend',`
    <div class="number">${count}</div>
    <div class="card_text">${arr[i]}</div>
    `)
    count++
    wrapper.insertAdjacentElement('beforeend', card)
    card.style.backgroundColor = color
    
card.setAttribute('draggable', true)
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
    }
    // btn3.addEventListener('click', () => enModal())
}

let createrar = () =>{
    let text = document.querySelector('.text').value
    if(text == '')return
    document.querySelector('.text').value = ''
    arr.push(text)
    console.log(arr)
}

let allWrappers = document.querySelectorAll('.wrapper')

let draggableCard

allWrappers.forEach(wrapper =>{
    wrapper.addEventListener('dragover', dragOver)
})

function dragstart(){
    // console.log('Начали')
    draggableCard = this
}
function dragend(){
    // console.log('Закончили')
    draggableCard = undefined
}
function dragOver(){
    // console.log('Мы в нужном месте')
    this.append(draggableCard)
}
function dragenter(){
    draggableCard = this
}


// let enModal = () => {

//     document.querySelector('.card').remove()
// }
