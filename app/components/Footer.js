// components/Footer.js
const Footer = () => (
    <footer className="footer">
      <div className="newsletter-signup">
        <h3>Sign up for the Spotlight Newsletter</h3>
        <form>
          <input type="email" placeholder="Your email address" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <nav className="footer-links">
        <div>
          <h4>News</h4>
          <ul>
            <li><a href="#">Politics</a></li>
            <li><a href="#">Technology</a></li>
            {/* More links */}
          </ul>
        </div>
        <div>
          <h4>Opinion</h4>
          <ul>
            <li><a href="#">Editorials</a></li>
            <li><a href="#">Columns</a></li>
            {/* More links */}
          </ul>
        </div>
      </nav>
    </footer>
  );
  
  export default Footer;
  