import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div class="footer">
      <div class="heading">
        <h2>CodeThamizha<sup>soft</sup></h2>
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">App development</a></p>
          <p><a href="#">Web development</a></p>
          <p><a href="#">DevOps</a></p>
          <p><a href="#">Web designing</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="https://www.linkedin.com/in/sanket-bodke-995b5b205/"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="https://twitter.com/Sanket46171296"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com/sanketbodke"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://codepen.io/sanketbodke"
              ><i class="fab fa-codepen"></i> Codepen</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/imsanketbodke/?hl=en"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Blogs</a></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+9112233445</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">abcdef@gmail.com</a></p>
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
