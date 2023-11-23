
import "./CustomInput.css"

export const CustomInput = ({type, name, placeholder, design, functionChange, functionCheck}) => {

    return (
        <input 
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            //Peticion de disparo de la funcion aqui en el hijo
            onChange={(e)=>functionChange(e)}
            //Peticion de disparo para la funcion que comprobará si tenemos errores...al hacer click fuera
            onBlur={(e)=>functionCheck(e)}
        />

    )
}