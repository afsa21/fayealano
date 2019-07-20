import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderIpmis from '../components/HeaderIpmis'
import thesis from '../assets/images/ipmis/thesis.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="IPMIS" />
        <HeaderIpmis />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={thesis} alt="thesis" /></span>
            <h2>Abstract</h2>
            <p>The UP Manila - Technology Transfer and Business Development Office is the office which manages the intellectual property and handles all technology transfer activities of the univerity. Currently, they have to rely on manual forms available only in the office and different applications for management. This study proposed a management information system which serves as the main tool for the whole IP management processes including the registration of researches with potential IP. The system provides tracking and monitoring of the projects and generation of reports needed by the principals for decision-making.
            </p>

            <h2>Process</h2>
            <p>My final requirement as a computer science major was to conduct an individual study or
              a special problem. Creating solutions to a problem or an issue is the very goal of UX design.
              Even though I had no idea about UX design being a formal discipline, there are UX processes
              and ideas which overlap with that of the study and software development.
              </p>

              <ul className="statistics">
                <li className="style1">
                  <span className="icon fa-lightbulb-o"></span>
                  <strong>Strategy</strong>
                  User needs <br></br>
                  Site objectives
                </li>
                <li className="style2">
                  <span className="icon fa-list-ul"></span>
                  <strong>Scope</strong>
                  Functional specifications <br></br>
                  Content requirements
                </li>
                <li className="style3">
                  <span className="icon fa-file-text-o"></span>
                  <strong>Structure</strong>
                  Interaction design <br></br>
                  Information architecture
                </li>
                <li className="style4">
                  <span className="icon fa-columns"></span>
                  <strong>Skeleton</strong>
                  Information design<br></br>
                  Interface design<br></br>
                  Navigation design
                </li>
                <li className="style5">
                  <span className="icon fa-eye"></span>
                  <strong>Surface</strong>
                  Visual design<br></br>

                </li>


              </ul>

            <p>  I am going to try to discuss and relate my study to the
              general UX process above by Jesse James Garett's <i>The Elements of User Experience</i>.
            </p>

            <h4>1. Strategy Phase</h4>
            <p>At the beginning, I did a user research by having interviews with the stakeholder
              and studying their existing workflow and business requirements. I also did a
              competitor analysis by visiting other existing websites that offer the same services.
              These were my basis for stating the problem.</p>
            <h4>2. Scope Phase</h4>
            <p>Defining the project's general objectives and specific or the specification,
              scope and limitations and assumptions were based on my research analysis.
              </p>
            <h4>3. Structure Phase</h4>
            <p>This was the first step in designing and implementing the project.
              The requirements for the project were use cases, context diagram, database design,
              system and technical architectures.
              </p>
            <h4>4. Skeleton Phase</h4>
            <p>Before the actual coding happened, I had adopted the wireframes or the mockups of my client.</p>

            <h2>Implementation</h2>
            <p>For the implementation, I used python as the programming language and Django as my framework.
              I chose it because it has a very good documentation and plenty of tutorials which are useful due to time constraints.
              It was also doing the security needed since it contains important, sometimes confidential, documents.
              As a first-timer, I learnt Django while developing the website.
              The implementation lasted under 5 months while the whole study lasted for a year.</p>


          </section>

        </div>
      </Layout>
    )
  }
}

export default Generic
