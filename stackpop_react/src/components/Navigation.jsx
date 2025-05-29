import {Link} from 'react-router-dom'
import { GiFishing } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";


function Navigation(){
    return (
        <nav className="app-nav">
            <Link to="/">
            <button>Home<BsFillHouseFill /></button></Link>&nbsp;
            
            <Link to="/catch-fish">
            <button>Log <GiFishing/> </button></Link>
            
        </nav>
    )
}

export default Navigation;

