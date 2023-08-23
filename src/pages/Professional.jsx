import selfImage from "../assets/self-image.jpg";
import {Button, Container, Row, Col, Image, Card} from "react-bootstrap";
import treePic from "../assets/treePic.jpg";
import MWETlogo from "../assets/MWET_Logo.jpg";
import floodfill from "../assets/floodfill.gif";
import resume from "../assets/resume.pdf";
import "../components/custom.css";

function Professional(){
    return(
        <div>

            <br></br>
            <Container>
                <header style={{color:"white", fontSize:"20px", borderBlock:"solid #001E1A"}}>Academic & Professional</header>
                <Row className="row-cols-2">
                    <Col>
                        <Container style={{marginTop:"40px", marginBottom:"20px"}}>
                            <Image src={selfImage} alt="myself" rounded style={{width:"45%"}}></Image>
                        </Container>
                    </Col>
                    <Col>
                        <Container style={{marginTop:"90px", marginLeft:"-140px"}}>
                            <body style={{color:"white", backgroundColor:"#121212"}}>
                                Hello! My name is Zeeya Kanjiyani and I'm a student at the University of Texas at Austin.
                                <br></br>
                                I am currently in my 3rd year pursuing a B.S. in Chemical Engineering and a minor in Computer Science.
                                <br></br>
                                <br></br>
                                <a href={resume} target="_blank">
                                    <Button>Resume</Button>
                                </a>
                            </body>
                        </Container>
                        
                    </Col>
                </Row>
            </Container>
            <Container style={{borderBlock: "solid #001E1A", paddingBottom:"10px"}}>
                <header style={{color:"white",fontSize: "18px", marginBottom:"-40px", borderBottom:"solid #001E1A"}}>Degree-Specific Courses</header>
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
            <Container style={{marginTop:"30px"}}>
                <header style={{color:"white", fontFamily:"Garamond, Times New Roman, serif", fontStyle:"italic", fontSize:"30px", textAlign:"left"}}>Beyond the Degree...</header>
                <p style={{color:"white", textAlign:"left", textIndent:"50px"}}>
                    I aim to get experience beyond what is provided to me in the courses I take. I have done ChemE research and CS personal projects to achieve this so far. 
                </p>
                <p style={{color:"white", textAlign:"left", textIndent:"50px"}}>In the future, I plan to do more impressive personal projects, contribute to open-source projects, and 
                get involved in on-campus organizations. This semester, I will be joining an on-campus organization called ECLAIR in which I will work on a collaborative CS
                 project of my choice for the whole academic year. Additionally, because I would like to participate in a competitive fast-paced event, I will be doing a hackathon.</p>
                <Row className="row-cols-3">
                    <Col>
                        <Card style={{width:"18rem", backgroundColor:"#001E1A"}}>
                            <Card.Img variant="top" src={treePic}></Card.Img>
                            <Card.Body style={{color:"lightgrey"}}>
                                <Card.Title>Personal Website</Card.Title>
                                <Card.Text>
                                    This website was my Summer 2023 project. I used React.js for development and AWS for cloud hosting. Below, you will find the GitHub link for its repository.
                                </Card.Text>
                                <Button href='https://github.com/zeeyakanjiyani/website' target='_blank' rel="noreferrer">GitHub repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width:"18rem", backgroundColor:"#001E1A"}}>
                            <a href="https://mwet.utexas.edu/" target='_blank' rel="noreferrer">
                                <Card.Img variant="top" src={MWETlogo}></Card.Img>
                            </a>
                            <Card.Body style={{color:"lightgrey"}}>
                                <Card.Title>MWET Polymer Research</Card.Title>
                                <Card.Text>
                                    The goal of this research was to increase the charge content of double-network hydrogels for ion filtration. I learned how to 
                                    synthesize polymers and perform various testing methods.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width:"18rem", backgroundColor:"#001E1A"}}>
                            <a href="https://vidhu-verma.medium.com/everything-about-flood-fill-algorithm-graphs-28c133e516cf" target='_blank' rel="noreferrer">
                                <Card.Img variant="top" src={floodfill}></Card.Img>
                            </a>
                            <Card.Body style={{color:"lightgrey"}}>
                                <Card.Text style={{fontSize:"10px"}}>*This GIF was found on Medium. Click the GIF to access the article by Vidhu Verma.</Card.Text>
                                <Card.Title>Flood Fill</Card.Title>
                                <Card.Text>
                                    Flood fill is an algorithm that visits all nodes in the array that are connected to the start node by a path of the 
                                    target color and changes them to the replacement color. This GitHub repo contains the implementation for my flood fill algorithm.
                                </Card.Text>
                                <Button href='https://github.com/zeeyakanjiyani/FloodFill' target='_blank' rel="noreferrer">GitHub repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            
        </div>
    );
}
export default Professional;