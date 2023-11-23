
export const validate = (type, value) => {

    switch(type){

        case 'email':
        case 'e-mail':
        case 'correo':
        case 'correo electronico':
        case 'mail':
        case 'imail':
        case 'imeil':
        case 'email2':
            
            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
                return "Invalid e-mail format";
            } else {
                return "";
            }
        
        case 'password':
        case 'password2':
        case 'contraseña':
        case 'secreto':
        case 'contrasenya':
        case 'secret':

            if(value.length < 8) {
                return "Mínimo 8 caracteres"
            } else {


                return ""
            }

        default: 
            return ""

        

    }

}