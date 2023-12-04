
import { useState, useEffect } from 'react';
import "./Home.css"
import { bringAllMovies } from '../../services/apiCalls';

export const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        
        if(movies.length === 0){
            bringAllMovies()
                .then(
                    result => {
                        console.log(result)
                        setMovies(result.data.results)
                    }
                )
                .catch(error => console.log(error))
        }
    },[movies])

    return (
        <div className="homeDesign">

            {

                movies.length > 0 

                ? (<div>
                    {
                        movies.map(
                            movie => {
                                return (
                                    <div key={movie.id}>
                                        {movie.name}  
                                    </div>
                                )
                            }
                        )
                    }
                   
                </div>)
                : (<div>Los datos estan viniendo de la API</div>)
            }
        </div>
    )
}
