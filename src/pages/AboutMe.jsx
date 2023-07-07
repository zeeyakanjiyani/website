import selfImage from "../assets/self-image.jpg";
import {Button, Container, Row, Col } from "react-bootstrap";
function AboutMe(){
    return(
        <div>

            <br></br>
            {/* add a picture of yourself */}
            <img src={selfImage} alt="myself" style={{alignItems:"center", width:"20%"}}></img>
            <br></br>
            <br></br>
            <body style={{color:"white"}}>
                Hello! My name is Zeeya Kanjiyani and I'm a student at the University of Texas at Austin.
                <br></br>
                I am currently in my 3rd year pursuing a B.S. in Chemical Engineering and a minor in Computer Science.
                {/* insert resume button */}
                {/* download button and open in a new tab button */}
            </body>
            <br></br>
            <header style={{color:"white"}}>Academic & Professional</header>
            
        </div>
    );
}
export default AboutMe;