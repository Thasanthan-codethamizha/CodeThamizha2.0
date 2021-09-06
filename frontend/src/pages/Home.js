import React from 'react';
import Hoverbutton1 from '../components/elements/hoverbutton1';
import './home.css'
function Home() {
  return (
    <div className='landing'>
      <div className="home">
        <div className="textcontainer">
          <h1>Community with Smartest People <div className="ctn1">Code Thamizha</div> </h1>
          <br/>
          <Hoverbutton1 text="Explore Now" url="#community" color=""/>
        </div>
        <div className="imagecontainer">
          <center>
            <img src="http://192.168.1.12/images/home2.jpg"></img>
          </center>

        </div>
      </div>
      <div id="community" className="community">
      <center>
        <div className="discord">
        <div class="section-header">
          <p>CodeThamizha Software Solutions</p>
          <h1>JOIN OUR DISCORD</h1>
          <p>
                                  We Are Building Up a great community on Discord.Join our Server for more info    
          </p> 
          <a href="https://discord.com/invite/5g4Zd4J">
            <button style={{borderRadius:"10px"}} type="button" class="join-discord">Join</button>
          </a>
            
                                
        </div>
        <div class="discord-panel">
                            <div class="about-img" data-aos="fade-up">
                            <iframe src="https://discord.com/widget?id=755466552291229766&theme=dark" width="300" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

                            </div>
                </div>
        </div>
      </center>
      </div>

    </div>

  );
}

export default Home;
