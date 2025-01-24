// console.log("hello")

// function outer(){
//     let count = 0
//     let name = "Ankit"
//     function inner(){
//         console.log(name);
//     }
//     inner()
// }
// outer()()
// const inner = outer()

// inner()

// function outer(){
//     let count = 0
//     return function inner(){
//         count++
//         console.log(count)
//     }

// }

// const inner1 = outer()
// const inner2 = outer()
// inner1()
// inner1()
// inner2()
// inner1()
// inner1()


//  closures property 

for(let i = 0; i<3; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
   

}
//  the output will be three times "3"

// protoype, debouncing , mutation obeserver polifill 