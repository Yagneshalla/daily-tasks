// localStorage: Setting and Getting Data
localStorage.setItem('Name', 'yagnesh')
var Name = localStorage.getItem('Name')
console.log(Name)

// sessionStorage: Setting and Getting Data
sessionStorage.setItem('Age', 22)
var age = sessionStorage.getItem('Age')
console.log(age)

// Removing Items from Storage
localStorage.removeItem('Name')
sessionStorage.removeItem('Age')
console.log(localStorage.getItem('Name'))
console.log(sessionStorage.getItem('Age'))

// JSON Storage
var obj = {
    name: 'yagnesh',
    age: 22,
    email: 'yagneshalla@gmail.com'
}
localStorage.setItem('object', JSON.stringify(obj))
console.log(localStorage.getItem('object'))
sessionStorage.setItem('object', JSON.stringify(obj))
console.log(sessionStorage.getItem('object'))

// Clearing Storage
localStorage.clear()
sessionStorage.clear()
console.log(localStorage)
console.log(sessionStorage)