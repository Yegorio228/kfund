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