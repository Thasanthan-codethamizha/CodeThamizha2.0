import React from 'react';
import Eventcard from '../components/elements/Eventcard';
import Eventsection from '../components/elements/Eventsection';
import Hoverbutton1 from '../components/elements/hoverbutton1';
import Portfolio from '../components/Portfolio';
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

      <div id="events" class="events">
        <br/>
        <br/>
        <center>
          <h1>Events</h1>
        <div className="event-row">
        <Eventsection 
      />
     
       </div> 
       </center>
       <br/>
      </div>
      <div id="community" className="community">
            <center>
              <div className="discord">
              <div class="section-header">
                <p>CodeThamizha Software Solutions</p>
                <br/>
                <img className="discordlogo" src="http://192.168.1.12/images/discord.png"></img>
                <h1>JOIN OUR DISCORD</h1>
                <p>
                                        We Are Building Up a great community on Discord.Join our Server for more info    
                </p> 
                <br/>
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
            
              <div className="youtube">
                <a href="https://www.youtube.com/codethamizha" target="_blank">
                <h1>2000+ Subscribers</h1>
                <br/>
                <h2>on</h2>
                <div class="logo">
                  <img className="youtubelogo" src="http://192.168.1.12/images/youtubelogo.png"></img>
                </div></a>
              </div>
        </center>
      </div>
      <Portfolio />

    </div>

  );
}

export default Home;
