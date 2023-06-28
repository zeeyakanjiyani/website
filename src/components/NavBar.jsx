import "../components/NavBar.css";
// import { Nav } from "react-bootstrap";

function NavBar(){
    return(

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./AboutMe">About Me</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Contact">Contact</a></li>
        </ul>
    )
}

export default NavBar;