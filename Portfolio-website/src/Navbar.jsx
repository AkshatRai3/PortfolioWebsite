import './index.css'

function Navbar(){

    return(
        <>
            <div id='navbar'>
                <div className='nav-left'>
                    <a href="#"><div class="home text down">HOME</div></a>
                    <a href="#"><div class="about text down">ABOUT</div></a>
                    <a href="#"><div class="works text down">WORKS</div></a>
                </div>
                <div className='nav-centre'>
                    <a href="youtube.com"><div class="rai text">RAI</div></a>
                </div>
				<div className='nav-right'>
                    <a href="#"><div class="contact text down">CONTACT</div></a>
                </div>
                <div class="line-parent">
                    <div class="group-child">
                    </div>
                    <div class="group-item">
                    </div>
                    <div class="group-inner">
                     </div>
                </div>

    		</div>
        </>
    )
}

export default Navbar