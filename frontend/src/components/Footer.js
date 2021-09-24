import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <div class="footer">
      <div class="heading">
        <h2>CodeThamizha</h2>
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><Link to='/support'>App development</Link></p>
          <p><Link to='/support'>Web development</Link></p>
          <p><Link to='/support'>VideoEditing</Link></p>
          <p><Link to='/support'>Web designing</Link></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="https://www.youtube.com/codethamizha/"
              ><i class="fab fa-youtube"></i> YouTube</a
            >
          </p>
          <p>
            <a href="https://discord.gg/5g4Zd4J"
              ><i class="fab fa-discord"></i> Discord</a
            >
          </p>
          

          <p>
            <a href="https://www.linkedin.com/in/thasanthan-code-thamizha/"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="https://twitter.com/code_thamizha"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com/Thasanthan-codethamizha"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>

          <p>
            <a href="https://www.instagram.com/codethamizhathasatech"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/blogs">Blogs</Link></p>
          <p><Link to="/support">Support</Link></p>
        </div>
        <div class="details">
          
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+94723190180</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">sivakumarthasanthan@gmail.com</a></p>
        </div>
      </div>
      <footer>
        <hr />
        &copy; 2021 CodeThamizha Software Solutions. All rights
      </footer>
      </div>
    )
}

export default Footer
