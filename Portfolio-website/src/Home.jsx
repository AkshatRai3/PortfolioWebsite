import './index.css'
import image from '../src/assets/WhatsApp Image 2025-05-25 at 15.57.17 1.png'

function Home(){
    return (
        <>
        <div class="macbook-air-1">
            <div class="macbook-air-1-child">
				<a href="youtube.com"><div class="rai">RAI</div></a>
				<a href="#"><div class="home">HOME</div></a>
				<a href="#"><div class="about">ABOUT</div></a>
				<a href="#"><div class="works">WORKS</div></a>
				<a href="#"><div class="contact">CONTACT</div></a>
    		</div>
            <div className='main-text'>

                <div class="namaste">NAMASTE</div>
                <div class="welcome-to-the-container">
                    <p class="welcome-to-the-world-of text">
                            <span>
                                <span>Welcome to the world of</span>
                                <span class="span"> </span>
                            </span>
                    </p>
                    <p class="akshat-rai text">
                            <span class="akshat-rai1">AKSHAT RAI</span>
                            <span>
                                <span>,</span>
                            </span>
                    </p>
                    <p class="welcome-to-the-world-of text">
                            <span>
                                <span>&nbsp;</span>
                            </span>
                    </p>
                    <p class="welcome-to-the-world-of text">
                            <span>
                                <span>Where logic dances with creativity.</span>
                            </span>
                    </p>
                </div>

            </div>
    		<img class="whatsapp-image-2025-05-25-at-1" alt="" src= {image} />
    		
    		
			<div class="i-build-websites">I build websites</div>
    		
  	</div>
        
        </>
    )
}

export default Home;