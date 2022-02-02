function For10(){
    let N = prompt('Введите число')
    let r = 0
    for(let i = 1; i <= N; i++){
        r += 1/i
        console.log(r)
    }
    
}




function For13(){

    let n = prompt("uss")
    let sum = 0
    let k = 1

    for(let i = 1; i <= n; i++){

        sum += (1+i/10)*k
        console.log((1+i/10)*k)
        k = -k
    }
}



function For38(){

    let n = prompt('uwui')
    let r = 0
    for(let i = 1; i <= n; i++){
        r += i**(n-(i-1))
    }
    console.log(r)
}


function For40(){

    let A = prompt()
    let B = prompt()
    let count = 1
    for(; A < B; A++){

        console.log(A)
        for(let i = 0; i <count; i++){
            console.log(A)
        }

        count++
    }
}