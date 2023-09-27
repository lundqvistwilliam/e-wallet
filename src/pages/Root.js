import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Root = () =>{
    return(
        <>
        <div className="navbar">
            <h1>Ankademin E-wallet</h1>
            <ul>
            {/* <li key="navItem1">
                <Link to="/">Home</Link>
            </li> */}
            <li key="navItem2">
                <Link to="/cards">Cards</Link>
            </li>
            <li key="navItem3">
                <Link to="/addcards">Add Cards</Link>
            </li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}