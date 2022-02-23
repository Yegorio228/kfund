let btn = document.querySelector('.btn')
let wrapper = document.querySelector('.wrapper')
let countblock = 0
count = 1
let allWrappers = document.querySelectorAll('.wrapper')
btn.addEventListener('click', () => createCard())

let createCard = () =>{
    if(countblock>= 6)return
    let color = document.querySelector('.color').value
    let card = document.createElement('div')
    card.addEventListener('click', rem)
    card.classList.add('card')
    card.insertAdjacentHTML('beforeend',`
    <div class="number">${count}</div>
    `)
    count++
    countblock++
    wrapper.insertAdjacentElement('beforeend', card)
    card.style.backgroundColor = color

    card.setAttribute('draggable', true)
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
}

allWrappers.forEach(wrapper =>{
    wrapper.addEventListener('dragover', dragOver)
})
function dragstart(){
    draggableCard = this
}
function dragend(){
    draggableCard = undefined
    countblock--
}
function dragOver(){
    this.append(draggableCard)
}
function rem(){
    this.remove()
}