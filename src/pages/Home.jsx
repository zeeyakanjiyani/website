import treePic from "../assets/treePic.jpg";
import { Container } from 'react-bootstrap';
function Home(){
    return(
        <Container style = {{position: "relative", backgroundImage: `url(${treePic})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%", height:"90vh"}}>
            <div style = {{position:"absolute", color:"white", fontSize: "7vh", top:"45%", width: "100%"}}>Zeeya Kanjiyani</div>
        </Container>
    );
}
export default Home;