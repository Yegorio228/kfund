// let arr = ['Привет','как дела','что-то',10]
// console.log(arr[10])

// if(arr[6]){
//     console.log('Yes')
// }else{
//     console.log('No')
// }

// arr.push("six")

// console.log(err)

// arr.pop()

// console.log(err)

// arr.unshift()

// console.log(err)

// arr.

// console.log(err)






// console.log(err[arr.length-1])

// let arr =[]

// ley arr = new Array(4)

// console.log(err)

// arr [0] = 10

// arr.push(2)

// console.log(err)

// let arr = []

// for(let i = 0; i < 10; i+=){
//     arr[i] = i**i
// }

// console.log(err)


// let arr = ['Привет','как дела','что-то',10]

// for(let i = 0; i < arr.lenght; i+=){
//     console.log(err[1])
// }

// let arr = ['Привет','как дела','что-то',10]
// let arr2 = arr

// console.log(arr2)

// arr.push('gerger')

// console.log(arr2)


// let styles = ['Джас','Блюз']

// console.log(styles)

// styles.push('Рок-н-ролл')

// console.log(styles)

// styles.splice(1,1, 'Класика')

// console.log(styles)

// styles.shift(1)

// console.log(styles)

// styles.unshift('Рэп','Регги')

// console.log(styles)



// let N = prompt()





function sumInput() {
    let numbers =[]
    while (true) {
        let value = prompt("Введите число", 0)
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }
    console.log(numbers)
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}

alert( sumInput() );













