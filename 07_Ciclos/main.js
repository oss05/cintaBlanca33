// for(el inicio; el final; y la secuencia){

// }
//i = i+ 1 ---> i++ 

// let i = 1

// for(i ; i<=10;  i+= 2){
//     console.log(i)
// }

// 3 cilcos
// 0-100 de 5 en 5
// 100- -500 de 3 en 3
// del 1000 - 0 de 10 en 10

// for(let i = 1 ; i<=100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i + " FizzBuzz");
//     }else if(i % 5 === 0){
//         console.log(i + " Buzz" );
//     }else if(i % 3 === 0){
//         console.log(i + " Fizz");
//     }else{
//         console.log(i)
//     }
// }

//Las tablas de multiplicar del 1-10
// 1 x 1 = 1
// 10 x 10 = 100

// for(let i = 1 ; i <=10; i++){
//     for(let e = 1; e <= 10; e++){
//         console.log(i + " x " + e + " = "+ i*e)
//     }
// }

let array = [1,2,3,4,5,6,7,8,9,10]
// console.log( array)

// for(let i = 0; i <= array.length; i++){
//     console.log(i)
// }

// let letras = ["a","b","c","d","e","f","g","h","i","j","k","l"]

// for(let x = 0; x < letras.length; x++){
//     console.log(letras[x])
// }

for( let i = 1; i <= 100; i++){
    if( i % 2 === 0){
        console.log(i+" es par")
    }else{
        console.log(i + " es impar");
    }
}