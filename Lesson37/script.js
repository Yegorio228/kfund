// let arr = []

// function Arr(){
    
//     let user = prompt('')
//     arr.push(user)
// }


// function view(){
//     let wrapper = document.querySelector('.wrapper')
//     wrapper.innerHTML = ''
//     let R = ''
//     for(let i = 0; i < arr.length; i++){
//         R += arr[i] + " "
//     }
//     console.log(R)

//     wrapper.insertAdjacentHTML('afterbegin',R)
// }



// let input_Btn = document.querySelector('.input_Btn')
// let inputtext = document.querySelector('.input_text')
// let arr = []

//  input_Btn.addEventListener('click', () => add())

// inputtext.addEventListener('cherge', () => add())

// let add = () =>{
    
//     let text = inputtext.value
// if(text == '') return
//     arr.push(text)
//     console.log(arr)
//  //input_text.value = ''
// } 
// let input_Btn = document.querySelector('.input_Btn')
// let inputtext = document.querySelector('.input_text')
//  let arr = []
// input_Btn.addEventListener('click', () => addModal())

// let addModal = () => {
//     let body = document.querySelector('.body')
//     body.insertAdjacentElement('afterbegin', `
//     <div class="modal">
//         <input type="text">
//         <div class="input_ok">Добавить</div>
//     </div>
//     `)
// }


let inputBtn = document.querySelector('.input_Btn')

inputBtn.addEventListener('click', () => addModal())

let addModal = () => {
    let body = document.querySelector('body')
    body.insertAdjacentHTML('afterbegin', `
    <div class="ex">
        <div class="input_button">Закрыть</div>
    </div>
    `)
    let inputBtn1 = document.querySelector('.input_button')
    inputBtn1.addEventListener('click',() => enModal())
}

let enModal = () => {

    document.querySelector('.ex').remove()
}



