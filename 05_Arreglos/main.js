// arreglos

let animales = ["salchicha", "cocodrilo", "pajarito", "hipo", "caballo"];

let nombres = ["Quentin" , "Roberto" , "Azamath", "Parangaricutirimicuaro" , "Luis XD"];

console.log(animales[1] , nombres[4]);

animales[5] = "gato";
// animales[9] = "lagartija";

console.log(animales);

// .push() que sirve para agregar un elemento a la ultima posicion de mi arreglo

animales.push("salamandra");
animales.push("dragon");

// .pop() remueve el ultimo elemento de mi arreglo

animales.pop()

// .splice() remueve uma posicion especifica del arreglo

animales.splice(4,2)

// objetos

let persona = {
    nombre: "Luis" ,
    edad: 20 ,
    direccion: {
        calle: "Cipres", 
        numeroExt: "280",
        colonia: "Atlampa"
    } ,
    telefono: "55 1234 5678",
    frameworks: {
        js: ["React" , "Angular" , "Vue"],
        css: "Bootstrap"
    }

}

console.log(persona.direccion.colonia);

console.log(persona.frameworks.js[2])



