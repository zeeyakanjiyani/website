import treePic from "../assets/treePic.jpg";
function Home(){
    return(
        <div>
            <img src = {treePic} alt = "green pine trees by Andrew Coelho on Unsplash" 
                style={{ width: "100%", height: "70vh", objectFit: "cover", objectPosition: "center top" }}></img>
            Hello Zeeya
        </div>
            // <img alt = "green pine trees by Andrew Coelho on Unsplash" 
            //     style={{ width: "100%", height: "70vh", objectFit: "cover", objectPosition: "center top" }} 
            //     src={treePic}> 
            // </img>

    );
}
export default Home;