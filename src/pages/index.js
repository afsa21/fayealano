import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import gradpic from '../assets/images/gradpic.jpg'
import slogo from '../assets/images/slogo.jpg'
import thesis from '../assets/images/ipmis/thesis.jpg'
import love from '../assets/images/red.jpg'
import resume from '../assets/images/Faye_Alano_Resume.pdf'
import icon from '../assets/images/website-icon.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="fayealano" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>StyleLit</h2>
                  <h3>UX Design</h3>
                </header>
                <p>An e-commerce site with easy shopping and browsing</p>
                <ul className="actions">
                  <li><Link to="/stylelit" className="button">Read More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={slogo} alt="stylelitlogo" /></span>
            </div>
          </section>

          <section id="first" className="main">
          <div className="spotlight">
            <div className="content">
            <header className="major">
              <h2>IPMIS</h2>
            </header>
            <h3>Individual Study</h3>
            <p>Registering research and managing intellectual property assets</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/ipmis" className="button">Read More</Link></li>
              </ul>
            </footer>
            </div>
            <span className="image"><img src={thesis} alt="thesis" /></span>
          </div>
          </section>

          <section id="second" className="main">
          <div className="spotlight">
            <div className="content">
            <header className="major">
              <h2>LoveYourself</h2>
            </header>
            <h3>Website</h3>
            <p>Streamlining processes for HIV testing, counseling, and treatment</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/loveyourself" className="button">Read More</Link></li>
              </ul>
            </footer>
            </div>
            <span className="image"><img src={love} alt="hiv awareness" /></span>
          </div>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>About Me</h2>
                <span className="image"><img src={gradpic} alt="Grad pic" /></span>
              <p className="content">I am an aspiring UX Designer with a <em>computer science background</em> and has undergone course
              works like software engineering, web development and psychology.
              The courses gave me experiences working with clients, working in a team or
              as an individual. This allowed me to empathize with users and helped me to <em>think
              critically and communicate</em> my ideas in the team. Each projects helped me
              in improving my time management and organizational skills. </p>
              <p className="content">I have been the Chairman of my community's
               youth organization since 2016. Leading my members and organizing projects
              are both motivating experiences. It led to the <em>betterment of how I am as a leader,
              my attention to detail and decision-making</em>. I also design tarps and invitation used
              for our projects using Adobe Illustrator.
              </p>
              <p className="content">
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><a href="mailto:asalano@up.edu.ph" className="button special">Send email</a></li>
                <li><a href={resume} className="button">Resume</a></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
