let allCards = document.querySelectorAll('.card')
let allWrappers = document.querySelectorAll('.wrapper')

let draggableCard

allCards.forEach(card =>{
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
    card.addEventListener('dragenter', dragenter)
} )

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

card.setAttribute('draggable', true)