
import { ButtonNav } from "../ButtonNav/ButtonNav"
import "./Header.css"

export const Header = () => {

    return (
        <div className="headerDesign">
            <ButtonNav 
                destination={"/"}
                name={"Home"}
            />
            <ButtonNav 
                destination={"/register"}
                name={"Register"}
            />
            <ButtonNav 
                destination={"/login"}
                name={"Login"}
            />
            <ButtonNav 
                destination={"/profile"}
                name={"Profile"}
            />
        </div>
    )
}