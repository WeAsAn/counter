// const array = [1,2,3,4,5]
// Array.prototype.mult = function (n) {
//     return this.map(function (i) {
//        return i * n;
//         })
// }

// console.log(array.mult(4));

// const User = {
//     name: 'Vasya',
//     age: '25',
//     info (job, phone) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.groupEnd;
//     }
// }

// const Lena = {
//     name: 'Elena',
//     age: '21'
// }

// User.info.apply(Lena, ['FrontEnd', '8-999-777-66-55']);

let count = 0;
const value = document.querySelector(".counter");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList;
        if (style.contains("decrease")) {
            count--;
        }
        if (style.contains("in")){
            count++;
        }
        if (style.contains("reset")){
            count = 0;
        }
        value.textContent = count;
        console.log(count);
    })
})