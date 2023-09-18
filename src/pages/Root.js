import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Root = () =>{
    return(
        <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/cards">Cards</Link>
        </li>
        <li>
            <Link to="/addcards">Add Cards</Link>
        </li>
        <h1>Ankademin E-wallet</h1>
        <Outlet />
        </>
    )
}