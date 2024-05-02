function obtenerInformacionUsuario(token) {
    const url = '/usuario';
    const parametros = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    return fetch(url, parametros)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener la información del usuario');
            }
            return response.json();
        })
        .then(data => {
            return data; // Devuelve la información del usuario
        })
        .catch(error => {
            throw error; // Reenvía el error para manejarlo fuera de la función
        });
}

/* Ejemplo de uso
const token = 'tu_token_de_sesion'; // Reemplaza 'tu_token_de_sesion' con el token real de sesión
 
obtenerInformacionUsuario(token)
  .then(usuario => {
    console.log('Información del usuario:');
    console.log('Correo:', usuario.correo);
    console.log('Nombre de usuario:', usuario.nombreUsuario);
    console.log('URL de la foto de perfil:', usuario.urlImagen);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
*/

function crearNuevoUsuario(correo, nombreUsuario, contrasena, urlImagen) {
    const url = 'http://34.31.243.232:9000/usuario';
    const datosUsuario = {
        correo: correo,
        nombreUsuario: nombreUsuario,
        contrasena: contrasena,
        urlImagen: urlImagen
    };
    const parametros = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario)
    };

    return fetch(url, parametros)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al crear el usuario');
            }
            return response.json();
        })
        .then(data => {
            return data.exito; // Devuelve true si el registro fue exitoso, false de lo contrario
        })
        .catch(error => {
            throw error; // Reenvía el error para manejarlo fuera de la función
        });
}

/* Ejemplo de uso
const nuevoUsuario = {
  correo: 'nuevo_usuario@example.com',
  nombreUsuario: 'nuevo_usuario',
  contrasena: 'contraseña_segura',
  urlImagen: 'https://example.com/imagen_usuario.jpg'
};
 
crearNuevoUsuario(nuevoUsuario.correo, nuevoUsuario.nombreUsuario, nuevoUsuario.contrasena, nuevoUsuario.urlImagen)
  .then(exito => {
    if (exito) {
      console.log('Usuario creado exitosamente');
    } else {
      console.log('El usuario ya existe');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
*/

function editarUsuario(token, correo, nombreUsuario, contrasena, urlImagen) {
    const url = '/usuario';
    const datosUsuario = {
        token: token,
        correo: correo,
        nombreUsuario: nombreUsuario,
        contrasena: contrasena,
        urlImagen: urlImagen
    };
    const parametros = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario)
    };

    return fetch(url, parametros)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al editar el usuario');
            }
            return response.json();
        })
        .then(data => {
            return data.exito; // Devuelve true si la edición fue exitosa, false de lo contrario
        })
        .catch(error => {
            throw error; // Reenvía el error para manejarlo fuera de la función
        });
}

/* Ejemplo de uso
const token = 'tu_token_de_sesion'; // Reemplaza 'tu_token_de_sesion' con el token real de sesión
const usuarioEditado = {
  correo: 'nuevo_correo@example.com',
  nombreUsuario: 'nuevo_nombre_usuario',
  contrasena: 'nueva_contraseña_segura',
  urlImagen: 'https://example.com/nueva_imagen_usuario.jpg'
};
 
editarUsuario(token, usuarioEditado.correo, usuarioEditado.nombreUsuario, usuarioEditado.contrasena, usuarioEditado.urlImagen)
  .then(exito => {
    if (exito) {
      console.log('Usuario editado exitosamente');
    } else {
      console.log('Error al editar el usuario');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
*/

function eliminarUsuario(token) {
    const url = '/usuario';
    const datosUsuario = {
        token: token
    };
    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario)
    };

    return fetch(url, parametros)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar el usuario');
            }
            return response.json();
        })
        .then(data => {
            return data.exito; // Devuelve true si la eliminación fue exitosa, false de lo contrario
        })
        .catch(error => {
            throw error; // Reenvía el error para manejarlo fuera de la función
        });
}

/* Ejemplo de uso
const token = 'tu_token_de_sesion'; // Reemplaza 'tu_token_de_sesion' con el token real de sesión

eliminarUsuario(token)
    .then(exito => {
        if (exito) {
            console.log('Usuario eliminado exitosamente');
        } else {
            console.log('Error al eliminar el usuario');
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
*/

function iniciarSesion(correo, contrasena) {
    const url = '/tokenUsuario';
    const datosInicioSesion = {
        correo: correo,
        contrasena: contrasena
    };
    const parametros = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosInicioSesion)
    };

    return fetch(url, parametros)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }
            return response.json();
        })
        .then(data => {
            return data.token; // Devuelve el token de sesión actual
        })
        .catch(error => {
            throw error; // Reenvía el error para manejarlo fuera de la función
        });
}

/* Ejemplo de uso
const correoUsuario = 'correo@example.com';
const contrasenaUsuario = 'contraseña_segura';
 
iniciarSesion(correoUsuario, contrasenaUsuario)
  .then(token => {
    if (token) {
      console.log('Inicio de sesión exitoso. Token:', token);
    } else {
      console.log('Inicio de sesión fallido');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
*/

function cerrarSesion(token) {
    const url = '/tokenUsuario';
    const datosCerrarSesion = {
        token: token
    };
    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosCerrarSesion)
    };

    return fetch(url, parametros)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cerrar sesión');
            }
            return response.json();
        })
        .then(data => {
            return data.exito; // Devuelve true si el cierre de sesión fue exitoso, false de lo contrario
        })
        .catch(error => {
            throw error; // Reenvía el error para manejarlo fuera de la función
        });
}

/* Ejemplo de uso
const tokenUsuario = 'tu_token_de_sesion'; // Reemplaza 'tu_token_de_sesion' con el token real de sesión

cerrarSesion(tokenUsuario)
    .then(exito => {
        if (exito) {
            console.log('Cierre de sesión exitoso');
        } else {
            console.log('Error al cerrar sesión');
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
*/