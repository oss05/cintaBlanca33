//Llamando elementos del HMTL
let email = document.getElementById('email')
let password = document.getElementById('password')
let imgUser = document.getElementById('imgUser')
let message = document.getElementById('message')
let boton = document.getElementById('boton')
//Crando usuario y contrasenia
let user = 'wichodestruyemac@gmail.com'
let userPassword = 'rm-rf'

//Creamos una funcion que valide el usuario y la contrasenia
//En nuestra condicional *Si el usuario es correcto, aparecera un mensaje de bienvenida y una imagen*
//En el caso que no sea ni el usuario o la contrasenia saldra un Alert que no es correcto
const logIn = () =>{

    if(email.value === user && password.value === userPassword ){

        message.innerHTML = "Bienvenido Luis"
        imgUser.classList.remove("noVisible")

    }else{
        alert('Usuario o Contraseña incorrecto')
    }

}

//Llamanos nuesto boton donde le pararemos un evento y llamanos nuestra funcion para ejecutarla cuando a nuestro boron le den 'click'
boton.addEventListener('click', logIn)