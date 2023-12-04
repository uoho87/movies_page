
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Films } from '../Films/Films'

export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"}/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/films" element={<Films />}/>
            </Routes>
        </>
    )
}