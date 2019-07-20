import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderLove from '../components/HeaderLove'
import love from '../assets/images/loveyourself/hiv.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="LoveYourself" />
        <HeaderLove />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={love} alt="hivawareness" /></span>
            <h2>Description</h2>
            <p>The project with an aim to create a way for patients to register and also for the clinic's overall
              management. Love yourself is a clinic which does HIV testing, counseling, treatment,
              and life-coaching. This was a CS 128.1 (Software Engineering) requirement led by a team of graduate and undergraduate students.  My role in this project is mainly on the front-end
              so I did a lot of JavaScript, CSS, HTML forms, and the homepage design.
              </p>

            <h2>Methodology</h2>
            <p>Scrum methodology was used in the development of this project.
              At the beginning of each sprints, new set of features were being discussed and planned.
              Because of class schedule conflicts and other subjects' requirements,
              daily scrum meetings were impossible.
              Instead, we would meet every other day to discuss our progress, impediments,
              and what we'll do until the next meeting.
              At the end, these features were presented and tested during
              sprint reviews.</p>
            <p>Aside from the physical meetings, Slack was used for the overall management and
              collaboration in the developers and the client. This served as a "board" where
              anyone can look at and keep everyone on the same page.
              </p>

            <h2>Implementation</h2>
            <p>The project was written in HTML, CSS, and JavaScript for the front-end.
              Mainly using the bootstrap library version 3. For the back-end, PHP was used.
              The group decided to use CodeIgniter as web framework since everyone on the
              team was familiar to it.
              </p>

          </section>

        </div>
      </Layout>
    )
  }
}

export default Generic
