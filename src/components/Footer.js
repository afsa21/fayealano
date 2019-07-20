import React from 'react'
import { Link } from 'gatsby'


const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Projects</h2>
            <ul className="actions">
                <li><Link to="/">All</Link></li>
                <li><Link to="/stylelit">StyleLit</Link></li>
                <li><Link to="/ipmis">IPMIS</Link></li>
                <li><Link to="/loveyourself">LoveYourself</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact Me</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd><a href="tel:+63-917-741-7940">+63 (917) 741 7940</a></dd>
                <dt>Email</dt>
                <dd><a href="mailto:asalano@up.edu.ph">asalano@up.edu.ph</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://github.com/afsa21" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/fayealano/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
            </ul>
        </section>
        <p className="copyright">fayealano &copy; 2019. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
