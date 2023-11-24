
import { useState, useEffect } from 'react'
import { ButtonNav } from "../ButtonNav/ButtonNav"
import { useLocation } from 'react-router-dom'
import "./Header.css"
import { bringMovies } from '../../services/apiCalls'

export const Header = () => {

    //Instanciamos location que proviene de react-router-dom
    const location = useLocation()

    
    const [token, setToken] = useState("")

    const [peliculas, setPeliculas] = useState("")

    const [criteria, setCriteria] = useState("")

    useEffect(()=>{

        bringMovies(criteria)
            .then(
                resultado => {
                    console.log(resultado)
                    setPeliculas(resultado.data.results)
                }
            )
            .catch(error => console.log(error))

    },[criteria])

    return (
        <div className="headerDesign">

            {
                location.pathname === "/films" &&

                <input 
                    className='inputDesign'
                    type="text"
                    name="criteria"
                    placeholder="busca una pelicula"
                    onChange={(e)=>setCriteria(e.target.value)}
                />
            }

            <ButtonNav 
                destination={"/"}
                name={"Home"}
            />

            <ButtonNav 
                destination={"/films"}
                name={"Films"}
            />
            {

                token !== ""

                ? (<div className='headerNavDesign'>
                    <ButtonNav 
                        destination={"/profile"}
                        name={"Profile"}
                    />
                    <ButtonNav 
                        destination={"/profile"}
                        name={"Log out"}
                    />
                </div>)

                : (<div className='headerNavDesign'>

                    <ButtonNav 
                        destination={"/register"}
                    name={"Register"}
                    />
                    <ButtonNav 
                        destination={"/login"}
                        name={"Login"}
                    />
                </div>)
            }
        </div>
    )
}