// if(condicion a){
//     accion a
// }else{
//     accion b
// }

//operadores aritmeticos
{/*   < > % === * && ||  */}

// let num = 20

// if( num === "20"){
//     console.log("Es igual")
// }else{
//     console.log("No es lo mismo")
// }

// let nombre = "Ricardo"

// if(nombre == "ricardo"){
//     console.log("Son iguales")
// }else{
//     console.log("No es lo mismo")
// }
// let usuario = 60

// if(usuario <= 11 || usuario <= 16){
//     console.log("Eres un ninio")
// }else if( usuario >= 17 && usuario <=50){
//     console.log("Eres un Jovenazo")
// }else if(){
//     console.log("No eres humano")
// }else{

// }


// let password = "perritoSalchicha123"

// if(usuario === password){
//     console.log("Bienvenido")
// }else{
//     alert("Fuera de Aqui!!!!!!!!!!!!")
// }
let usuario = prompt("Ingresa la contraseña");
let edad = Number(usuario)

if(edad <= 15){
    console.log("No puedes conducir");
}else if( edad === 16 || edad === 17){
    console.log("Puedes sacar tu permiso para condicir");
}else if( edad >=18 && edad <= 80 ){
    console.log("Puedes conducir");
}else{
    console.log("No lo haga compa");
}

//Juego de piedra, papel o tijera, preguntando a los 2 jugadores que van a elegir (Piedra, Papel o Tijera)