
import "./CustomInput.css"

export const CustomInput = ({type, name, placeholder, design, functionChange}) => {

    return (
        <input 
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e)=>functionChange(e)}
        />

    )
}