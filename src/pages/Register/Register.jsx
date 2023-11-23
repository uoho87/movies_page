
import { useEffect, useState } from 'react'
import { CustomInput } from "../../common/CustomInput/CustomInput";
import "./Register.css";
import { validate } from '../../services/useful';

export const Register = () => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    age: '',
    phone: ''
  })

  const [credentialsError, setCredentialsError] = useState({
    usernameError: '',
    passwordError: '',
    password2Error: '',
    emailError: '',
    ageError: '',
    phoneError: ''
  })

  const InputHandler = (e) => {
      //Este sistema lo vamos a utilizar cuando queramos bindear a un objeto con varias propiedades
      setCredentials((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
      }));
  }

//   useEffect(()=>{
//     console.log(credentials)
//   }, [credentials])

  const checkError = (e) => {

    let error = ""

    error = validate(e.target.name, e.target.value)

    setCredentialsError((prevState) => ({
        ...prevState,
        [e.target.name + 'Error']: error
    }));
  }

  return (
    <div className='registerDesign'>
      <CustomInput
        type={"text"}
        name={"username"}
        placeholder={"nombre"}
        design={`inputDesign ${credentialsError.usernameError !== "" ? "inputError" : ""}`}
        //Pasamos la función al hijo desde aqui (el padre)
        functionChange={InputHandler}
        functionCheck={checkError}
      />
      <div>{credentialsError.usernameError}</div>
      <CustomInput
        type={"password"}
        name={"password"}
        placeholder={"password"}
        design={`inputDesign ${credentialsError.passwordError !== "" ? "inputError" : ""}`}
        functionChange={InputHandler}
        functionCheck={checkError}
      />
      <div className='msgError'>{credentialsError.passwordError}</div>
      <CustomInput
        type={"password"}
        name={"password2"}
        placeholder={"password otra vez"}
        design={`inputDesign ${credentialsError.password2Error !== "" ? "inputError" : ""}`}
        functionChange={InputHandler}
        functionCheck={checkError}
      />
      <div>{credentialsError.password2Error}</div>
      <CustomInput
        type={"email"}
        name={"email"}
        placeholder={"correo"}
        design={`inputDesign ${credentialsError.emailError !== "" ? "inputError" : ""}`}
        functionChange={InputHandler}
        functionCheck={checkError}
      />
      <div>{credentialsError.emailError}</div>
      <CustomInput
        type={"text"}
        name={"age"}
        placeholder={"edad"}
        design={`inputDesign ${credentialsError.ageError !== "" ? "inputError" : ""}`}
        //Pasamos la función al hijo desde aqui (el padre)
        functionChange={InputHandler}
        functionCheck={checkError}
      />
      <div>{credentialsError.ageError}</div>
      <CustomInput
        type={"text"}
        name={"phone"}
        placeholder={"telefono"}
        design={`inputDesign ${credentialsError.phoneError !== "" ? "inputError" : ""}`}
        functionChange={InputHandler}
        functionCheck={checkError}
      />
      <div>{credentialsError.phoneError}</div>
    </div>
  );
};
