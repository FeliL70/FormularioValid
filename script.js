const contraseña = document.getElementById('Password');
const errorRequisitos = document.getElementById('errorRequisitos');
const caracteresEspeciales = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', ',', '.', '?', '/', '`', '~'];
let confirmacion = document.getElementById('ConfirmPassword');
const errorConfirmacion = document.getElementById('errorConfirmacion');
const nombre = document.getElementById('Username');

function contieneLetraEspecial(cadena) {
    return caracteresEspeciales.some(caracter => cadena.includes(caracter));
}
function NombreBien() 
{
    const largo = document.getElementById('largo');
    const longitud = nombre.value.length >= 3;

    if (longitud) {
        largo.textContent = '✔ Mas de 3 caracteres';
        largo.style.color = 'green';
    } else {
        largo.textContent = '✖ Mas de 3 caracteres';
        largo.style.color = 'red';
    }
    if (!(longitud)) {
        errorRequisitos.style.display = 'block';
    } else {
        errorRequisitos.style.display = 'none';
    }
}
function ContraseñaBien() {
    const largo = document.getElementById('largo');
    const mayus = document.getElementById('mayus');
    const especial = document.getElementById('especial');

    const longitud = contraseña.value.length >= 8;
    const mayuscula = contraseña.value !== contraseña.value.toLowerCase();
    const contieneEspecial = contieneLetraEspecial(contraseña.value);

    if (longitud) {
        largo.textContent = '✔ Mas de 8 caracteres';
        largo.style.color = 'green';
    } else {
        largo.textContent = '✖ Mas de 8 caracteres';
        largo.style.color = 'red';
    }

    if (mayuscula) {
        mayus.textContent = '✔ Minimo 1 letra mayuscula';
        mayus.style.color = 'green';
    } else {
        mayus.textContent = '✖ Minimo 1 letra mayuscula';
        mayus.style.color = 'red';
    }

    if (contieneEspecial) {
        especial.textContent = '✔ Minimo 1 caracter especial';
        especial.style.color = 'green';
    } else {
        especial.textContent = '✖ Minimo 1 caracter especial';
        especial.style.color = 'red';
    }

    if (!(longitud && mayuscula && contieneEspecial)) {
        errorRequisitos.style.display = 'block';
    } else {
        errorRequisitos.style.display = 'none';
    }
}



function validarFormulario() {
    

    const longitud = contraseña.value.length >= 8;
    const mayuscula = contraseña.value !== contraseña.value.toLowerCase();
    const contieneEspecial = contieneLetraEspecial(contraseña.value);

    if (!(longitud && mayuscula && contieneEspecial)) {
        errorRequisitos.style.display = 'block';
        return false;
    }
    if (contraseña.value !== confirmacion.value) {
        errorConfirmacion.style.display = 'block';
        return false;
    }
   

    return true;
}

