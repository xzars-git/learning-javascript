// console.log("Hello World")

// var nama = prompt("masukan nama anda")
// const x = 1
// let y = 2
// let pacar = null

// if (pacar == null)
//     console.log("Anda jomblo")
// else
//     console.log("Anda berpacaran")

// switch (pacar) {
//     case null:
//         console.log("Anda jomblo di switch")
//         break
//     default:
//         console.log("Anda berpacaran di switch")
//         break
// }

// console.log(`Hello ${nama}`)


// let item = 12
// let item2 = 13
// const totalItem = item + item2

// console.log(`Total Item ${totalItem}`)


// let arrayItem = [1, 2, 3, 4, 5]


// for (let index = 0; index < arrayItem.length; index++) {
//     console.log(arrayItem[index])
// }

// arrayItem.push(6, 7, 8, 9, 10)

// for (let index = 0; index < arrayItem.length; index++) {
//     console.log(`adding array ${arrayItem[index]}`)
    
// }

// let i = 0
// while (i < 10) {
//     i++
//     console.log(`While ${i}`)
// }

// do {
//     i++
//     console.log(`Do While ${i}`)
// } while (i < 20)
    


//BELAJAR ARRAY DI JAVASCRIPT
const array = ['buah', 'buah2', 'buah3']

console.log(array)

if (array.includes('buah')) {
    console.log('buah ada di dalam array')
    console.log(`buah ada di index - ${array.indexOf('buah')}`)
}
let x = array.indexOf('buah2')
console.log(`index value sebelum buah2 - ${array[x - 1]}, dan index value sesudah buah2 - ${array[x + 1]}`)

console.log(`index pertama - ${array.shift()} & index terakhir - ${array.pop()}`) 
//ARRAY SHIFT AND POP gonna be remove the first and last index of array
console.log(array)

let array2 = [...array,...['buah4', 'buah5', 'buah6']]
console.log(array2)

//DYNAMIC ARRAY
let dynamicArray = ['string', 1, true, [1, 2, 3], { nama: 'nama' }, function name(params) {
    console.log(params)
}];

dynamicArray.forEach((item, index) => {
    if (Array.isArray(item)) {
        console.log(`Index ${index}: Array ditemukan, mencetak satu per satu:`);
        item.forEach((subItem, subIndex) => {
            console.log(`  Subindex ${subIndex}: ${subItem}`);
        });
    } else if (typeof item === 'object') {
        console.log(`Index ${index}: Object ditemukan ->`, JSON.stringify(item, null, 2));
    }else if(typeof item === 'function'){
        item('Hello ini ngeprint dari function array')
    }
    else {
        console.log(`Index ${index}:`, item);
    }
});


//BELAJAR DOM DI JAVASCRIPT
document.title = 'Belajar DOM di Javascript'

console.log(document.body)

const h1 = document.createElement('h1')
h1.textContent = "ANJAY INI H1 BRO"


const h2 = document.createElement('h2')
h2.innerText = "ANJAY INI H2 BRO"


document.body.append(h1, h2)

//QUERY SELECTOR
 
const btn1 = document.getElementById('button1')
const btn2 = document.querySelector('.button2')

btn1.addEventListener('click', () => { 
    console.log('Kamu mengeklik button 1')
})

btn2.addEventListener('click', () => { 
    console.log('Kamu mengeklik button 2')
})

btn1.style.background = 'tomato'
btn1.style.padding = '16px'
btn1.style.border = 'none'
btn2.style.background = 'green'
btn2.style.padding = '16px'
btn2.style.border = 'none'

function gantiWarna() {
     let x = document.querySelector('.button3')
    x.style.background = 'blue'
    x.style.padding = '16px'
    x.style.border = 'none'
}


const token = ~~~[Math.random() * 12312833]

function login(username, callback) {
    console.log(`processing....memvalidasi data!`)
    setTimeout(() => {
        callback ({ token, username })
    }, 2000)

}

function getUser(token) {
    if (token) return {apiKey: ~~~[Math.random() * 12312833]}
}

const user = login("Arsenius Purbandono")
console.log(`User Token - ${user.token}`)

const apiKey = getUser(user.token)
console.log(apiKey)