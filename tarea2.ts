6
class ErrorValidacion extends Error {

    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorValidacion";
    }
}




function login(usuario: string, contrasenia: string) { 
    if(usuario !== 'axel' && contrasenia !=='oreo'){
        throw new ErrorValidacion('Usuario y/o contraseña incorrectos');
    }
    if(usuario !== 'axel'){
        throw new ErrorValidacion('Usuario incorrecto');
    }
    if(contrasenia !== 'oreo'){
        throw new ErrorValidacion('Constraseña incorrecto');
    }
    
    return `Tu usuario es ${usuario} y tu contraseña es ${contrasenia}`;
    }


try {
    let user = login('axel','oreo');
    console.log(user);
}
catch(err){
   
    console.log("Dato Invalido: " + err.message);

}