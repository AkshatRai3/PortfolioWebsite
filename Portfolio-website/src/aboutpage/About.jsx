import '../aboutpage/about.css'
import Carousel from "./Carousel";

function About(){
    return(
        <>
        <div className="About">
            <h1 className='Art page heading'>Artist By Passion</h1>
            <div className="Cards">
                <Carousel/>
            </div>

        </div>
            
        </>
    )
}

export default About;