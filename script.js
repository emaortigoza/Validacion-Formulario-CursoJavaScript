const submitFunction = (event) => {
    if(!validarFormulario()){
        event.preventDefault();// que se prevenga la acctualizacion de la web
       
    }else{
        event.preventDefault();// que se prevenga la acctualizacion de la web

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'documento: ' + document.getElementById('documento').value + '\n'+
            'email: ' + document.getElementById('email').value + '\n'+
            'edad: ' + document.getElementById('edad').value + '\n'+
            'actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
    
}


document.getElementById('formulario').addEventListener('submit', submitFunction) // escucha el envio del formulario

function validarFormulario(){
    //valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]')
    let validacionCorrecta = true

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase()+campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(errorCampo, '¡Este campo es requerido!')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!')
        }else{
            ocultarError(errorCampo)
        }
    })
    // valida el campo email
    const email = document.getElementById('email')
    let errorEmail = document.getElementById('errorEmail')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ // este regex valida que el formato del email sea valido
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, '¡Ingrese un correo electrónico válido!')
    }

    //validacion de edad

    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad')
    if(edad.value < 18){
        mostrarError(errorEdad, '¡Debes ser mayor de 18 años para registrarte!')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }


    //validacion de la actividad
    const actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad')

    if(actividad.value == ''){
        mostrarError(errorActividad, '¡Debes seleccionar una actividad!')
        validacionCorrecta = false
    }else{
        ocultarError(errorActividad)
    }

    //validacion de nivel de estudio

    const nivelEstudio = document.getElementById('nivelEstudio')
    let errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, '¡Debes seleccionar un nivel de estudio!')
        validacionCorrecta = false
    }else{
        ocultarError(errorNivelEstudio)
    }

    //validar los terminos y condiciones

    const aceptoTerminos = document.getElementById('aceptoTerminos')
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, '¡Debes aceptar los términos y condiciones!')
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta  // Esto dira si el formulario completo es valido
}


const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block"
}
const ocultarError = (elemento, mensaje) => {
    elemento.textContent = '';
    elemento.style.display = "none"
}