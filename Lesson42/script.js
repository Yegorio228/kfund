document.querySelector('.btn').addEventListener('click', () => addNewUser())
document.querySelector('.view_btn').addEventListener('click', () => showUser())

let personArr =[]
let id = 0

let addNewUser = () =>{

    let name = document.querySelector('.user_name').value
    let age = document.querySelector('.user_age').value
    let date = new Date()
    let currentDate = date.getFullYear() + '.' +
    (date.getMonth()+1) + '.' + date.getDate()

    const person ={
        'name': name,
        'age': age,
        'createData': currentDate,
        'id': id
    }

    id++
    console.log(person)
    personArr.push(person)
}

let showUser = () => {
    let wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = ""
    personArr.forEach(person =>{
        let card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', person.id)
        card.insertAdjacentHTML('beforeend',`
            <div class="card_user_name">${person.name}</div>
            <div class="card_user_age">${person.age}</div>
            <div class="date">${person.createData}</div>
            <div class ="exit">x</dix>`)
        // console.log(card.childNodes[7])
        // console.log(card,querySelector('.exit'))
        card.querySelector('.exit').addEventListener('click', removeCard)
         wrapper.insertAdjacentElement('beforeend', card)
         card.closest
    })
}

function removeCard(){
    // console.log(this.closest('.card'))
    let card = this.closest('.card')
    console.log(card)
    let id = card.getAttribute('id')
    for(let i = 0; i<personArr.length; i++){
        if(personArr[i].id == id){ 
            personArr.splice(i,1)
            break
        }
    }
    card.remove()
    // this.closest('.card').remove()
    // console.log(card.getAttribute('.id'))
}