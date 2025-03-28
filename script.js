const contraseña = document.getElementById('Password');
const confirmacion = document.getElementById('ConfirmPassword');
const nombre = document.getElementById('Username');
const emailCorrecto = document.getElementById('Email');
const errorRequisitos = document.getElementById('errorRequisitos');
const errorConfirmacion = document.getElementById('errorConfirmacion');
const mensajeNombre = document.getElementById('mensajeNombre');
const mensajeEmail = document.getElementById('mensajeEmail');
const mensajeLargoContra = document.getElementById('mensajeLargoContra');
const mensajeMayus = document.getElementById('mensajeMayus');
const mensajeEspecial = document.getElementById('mensajeEspecial');

const caracteresEspeciales = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', ',', '.', '?', '/', '~'];

function contieneLetraEspecial(cadena) {
    return caracteresEspeciales.some(caracter => cadena.includes(caracter));
}

function NombreBien() {
    const longitud = nombre.value.length >= 3;
    if (longitud) {
        mensajeNombre.innerHTML = '✔ Más de 3 caracteres';
        mensajeNombre.style.color = 'green';
    } else {
        mensajeNombre.innerHTML = '✖ El nombre debe tener al menos 3 caracteres';
        mensajeNombre.style.color = 'red';
    }
}

function emailBien() {
    const email = emailCorrecto.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (regex.test(email)) {
        mensajeEmail.innerHTML = '✔ Email valido';
        mensajeEmail.style.color = 'green';
    } else {
        mensajeEmail.innerHTML = '✖ El email es invalido';
        mensajeEmail.style.color = 'red';
    }
}

function ContraseñaBien() {
    const longitud = contraseña.value.length >= 8;
    const mayuscula = contraseña.value !== contraseña.value.toLowerCase();
    const contieneEspecial = contieneLetraEspecial(contraseña.value);

    if (longitud) {
        mensajeLargoContra.innerHTML = '✔ Más de 8 caracteres';
        mensajeLargoContra.style.color = 'green';
    } else {
        mensajeLargoContra.innerHTML = '✖ La contraseña debe tener al menos 8 caracteres';
        mensajeLargoContra.style.color = 'red';
    }

    if (mayuscula) {
        mensajeMayus.innerHTML = '✔ Mínimo 1 letra mayúscula';
        mensajeMayus.style.color = 'green';
    } else {
        mensajeMayus.innerHTML = '✖ Mínimo 1 letra mayúscula';
        mensajeMayus.style.color = 'red';
    }

    if (contieneEspecial) {
        mensajeEspecial.innerHTML = '✔ Mínimo 1 carácter especial';
        mensajeEspecial.style.color = 'green';
    } else {
        mensajeEspecial.innerHTML = '✖ Mínimo 1 carácter especial';
        mensajeEspecial.style.color = 'red';
    }

    if (!(longitud && mayuscula && contieneEspecial)) {
        errorRequisitos.style.display = 'block';
        errorRequisitos.innerHTML = 'La contraseña no cumple con los requisitos';
    } else {
        errorRequisitos.style.display = 'none';
    }
}

function validarConfirmacionContraseña() {
    if (contraseña.value !== confirmacion.value) {
        errorConfirmacion.style.display = 'block';
        errorConfirmacion.innerHTML = '✖ Las contraseñas no son iguales';
    } else {
        errorConfirmacion.style.display = 'none';
    }
}

function validarFormulario() {
    if (nombre.value.length < 3) {
        mensajeNombre.innerHTML = '✖ El nombre debe tener al menos 3 caracteres';
        mensajeNombre.style.color = 'red';
        return false;
    }

    if (!emailCorrecto.value.includes('@')) {
        mensajeEmail.innerHTML = '✖ El email debe contener un "@"';
        mensajeEmail.style.color = 'red';
        return false;
    }

    const longitud = contraseña.value.length >= 8;
    const mayuscula = contraseña.value !== contraseña.value.toLowerCase();
    const contieneEspecial = contieneLetraEspecial(contraseña.value);
    
    if (!(longitud && mayuscula && contieneEspecial)) {
        errorRequisitos.style.display = 'block';
        errorRequisitos.innerHTML = 'La contraseña debe tener al menos 8 caracteres, 1 mayúscula, y 1 carácter especial';
        return false;
    }

    if (contraseña.value !== confirmacion.value) {
        errorConfirmacion.style.display = 'block';
        errorConfirmacion.innerHTML = '✖ Las contraseñas no coinciden';
        return false;
    }

    alert('¡Te registraste correctamente!');
    
    document.getElementById('formulario').reset();

    return true;
}
