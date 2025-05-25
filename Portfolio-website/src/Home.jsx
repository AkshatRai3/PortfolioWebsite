import './index.css'
import image from '../src/assets/WhatsApp Image 2025-05-25 at 15.57.17 1.png'
import Navbar from '/src/Navbar.jsx';

function Home(){
    return (
        <>
        <div id="homepage">
            <Navbar/>
            <div className='main-text'>
                <div class="namaste">NAMASTE</div>
                <div class="welcome-to-the-container">
                    <p class="welcome-to-the-world-of  main1 text">
                                <span>Welcome to the world of</span>
                    </p>
                    <p class="akshat-rai text">
                            <span class="akshat-rai1">AKSHAT RAI</span>
                            <span>
                                <span>,</span>
                            </span>
                    </p>
                   <br /> 
                    <p class="welcome-to-the-world-of main1 text">
                            <span>
                                <span>Where logic dances with creativity.</span>
                            </span>
                    </p>
                </div>

            </div>
    		<img class="whatsapp-image-2025-05-25-at-1" alt="" src= {image} />
    		
    		
			<div class="i-build-websites">I build dreams</div>
    		
  	</div>
        
        </>
    )
}

export default Home;