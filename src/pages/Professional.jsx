import selfImage from "../assets/self-image.jpg";
import {Button, Container, Row, Col, Image} from "react-bootstrap";
import "../components/custom.css"

function Professional(){
    return(
        <div>

            <br></br>
            <Container>
                <header style={{color:"white", fontSize:"20px"}}>Academic & Professional</header>
                <Row className="row-cols-2">
                    <Col>
                        <Container style={{marginTop:"40px", marginBottom:"20px"}}>
                            <Image src={selfImage} alt="myself" rounded style={{width:"45%"}}></Image>
                        </Container>
                    </Col>
                    <Col>
                        <Container style={{marginTop:"90px", marginLeft:"-90px"}}>
                            <body style={{color:"white", backgroundColor:"#121212"}}>
                                Hello! My name is Zeeya Kanjiyani and I'm a student at the University of Texas at Austin.
                                <br></br>
                                I am currently in my 3rd year pursuing a B.S. in Chemical Engineering and a minor in Computer Science.
                                <br></br>
                                <br></br>
                                <Button>Resume</Button>
                            </body>
                        </Container>
                        
                    </Col>
                </Row>
            </Container>
            <Container style={{borderBlock: "solid grey", paddingBottom:"10px"}}>
                <header style={{color:"white",fontSize: "18px", marginBottom:"-40px", borderBottom:"solid grey"}}>Degree-Specific Courses</header>
                <Row className="row-cols-2" style={{marginTop:"50px"}}>
                    <div className="col dottedBorder">
                        <header style={{color:"white", textDecoration:"grey underline dotted", marginBottom:"10px"}}>Chemical Engineering</header>
                        <Container style={{color:"white"}}>
                            
                                Transport Phenomena
                                <br></br>
                                Biochemical Engineering
                                <br></br>
                                Introduction to Computing - Excel Solver, Linearization, & Mass Balances
                                <br></br>
                                {/* Organic Chemistry 1 & 2
                                <br></br>
                                Physics 1 & 2
                                <br></br>
                                Linear Algebra
                                <br></br> */}

                        </Container>
                    </div>
                    <div className= "col">
                        <header style={{color:"white", textDecoration:"grey underline dotted", marginBottom:"10px"}}>Computer Science</header>
                        <Container style={{color:"white"}}>
                            Introduction to Python
                            <br></br>
                            Software Design - OOP, Algorithms, Data Structures, & Dynamic Programming
                            <br></br>
                        </Container>
                    </div>

                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            
        </div>
    );
}
export default Professional;