import treePic from './assets/treePic.jpg';
function Home(){
    return(
        <div>
            <img style={{ width: "100%", objectFit: "fit" }} src={treePic} alt = "green pine trees by Andrew Coelho on Unsplash"/>
        </div>
    )
}
export default Home;