import React, { useState, useEffect } from 'react'
import Apppromo from '../components/elements/Apppromo';

import Eventsection from '../components/elements/Eventsection';
import Hoverbutton1 from '../components/elements/hoverbutton1';
import Portfolio from '../components/Portfolio';
import './home.css'
import Loadingscreen from './Loadingscreen';


function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  
  return (
    <div className='landing'>
      {loading ===false ? (
        <>
      <div className="home">
        <div className="textcontainer">
          <h1>Community with Smartest People <div className="ctn1">Code Thamizha</div> </h1>
          <br/>
          <div className="homecard-btn">
          <a class="news-app-promo-subsection--link news-app-promo-subsection--playstore" href="#" target="_parent" >
                <img class="news-app-promo__play-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg" width="161" height="auto" border="0" style={{backgroundColor:"#256ce1",borderRadius:'1rem'}}/>
            </a>
          <Hoverbutton1 className="explorenow-btn" text="Explore Now" url="/blogs" color=""/>
          </div>
        </div>
        <div className="imagecontainer">
          <center>
            <img src="https://codethamizha.com/images/home2.jpg"></img>
          </center>

        </div>
      </div>
        <br/>
      <Apppromo/>

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
                <img className="discordlogo" src="https://codethamizha.com/images/discord.png"></img>
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
                  <img className="youtubelogo" src="https://codethamizha.com/images/youtubelogo.png"></img>
                </div></a>
              </div>
        </center>
      </div>
      <Portfolio />
      </>
      ):(<Loadingscreen/>)
      }
    </div>

  );
}

export default Home;
