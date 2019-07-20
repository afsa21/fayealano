import React from 'react'
import Helmet from 'react-helmet'
import Iframe from 'react-iframe'
import Layout from '../components/layout'
import HeaderStylelit from '../components/HeaderStylelit'
import stylelitbg from '../assets/images/stylelit/beach.jpg'
import webcompareanalysis from '../assets/images/stylelit/comparison.jpg'
import persona from '../assets/images/stylelit/persona.jpg'
import sketches from '../assets/images/stylelit/sketches.jpg'
import wireframes from '../assets/images/stylelit/wireframes.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="StyleLit" />
        <HeaderStylelit />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={stylelitbg} alt="" /></span>
            <h2>Description</h2>
            <p>StyleLit is an online reseller of swimsuits, beach bags and sandals on instagram.
            A personal project which aims to design and later on develop a website for better management by the
            client and better shopping experience of users. This project is also a way to learn about UX Design.</p>

            <h2>Process</h2>
            <h4><strong>Research</strong></h4>
            <p>First off, I looked into other e-commerce sites for comparison and inspiration
            even though I am already familiar with this kind of sites
            because I do my research first as my process.</p>
            <span className="image main"><img src={webcompareanalysis} alt="" /></span>
            <p>Since they have particular products which are beach essentials, I figured
            that the target audience would be females who are beach enthusiasts, travel vloggers
            or travellers.
            I interviewed my sisters who are parts of that audience.
            This would help me empathize more with the users and know more about the needs and issues.</p>

            <h4>Persona</h4>
            <p>Based on the findings, I represented what the average user might look like
            into a user persona.</p>
            <span className="image main"><img src={persona} alt="" /></span>
            <blockquote> "Simple and clear navigation" </blockquote>
            <blockquote> "People are lazy to scroll down" </blockquote>
            <blockquote> "I go for bestseller items first" </blockquote>

            <h4><strong>Design</strong></h4>
            <p>I have been to a lot of e-commerce sites but it was my first time designing one.
            Designing the home page is the most challenging and pressuring one since it has to
            give the right impression to the users. I focused on what I've found from my research
            and at the same time, I got ideas from my experience.</p>

            <h4>Sketches</h4>
            <span className="image main"><img src={sketches} alt="" /></span>
            <p>Since StyleLit is still establishing its name in the industry, I thought
            it would be best to show the users what they can expect from it right at the
            beginning. In my early design, the home page contained a gallery
            of its main products -- swimwear, sandals, and beach bags. StyleLit is
            an instagram based seller, so, I adapted some of its useful features while
            browsing like the switching between grid or list layout, double clicking
            to add it to the user's favorites. </p>

            <h4>Wireframes</h4>
            <p>I revised the home page and made the top-level navigation be the 3 main categories the store sells - swimsuits,
            beach bags, and sandals. The purpose of the site is to get the users to
            buy its products, that's one. The revisions make the site more direct
            and serve its purpose.</p>

            <span className="image main"><img src={wireframes} alt="" /></span>
            <p>The tab-like style in content display would result to a minimal scrolling,
            of course except in the catalog. With that in mind, I focused on
            how the users will browse and search for items with ease, so I added
            quick searches and the custom search on each categories and breadcrumbs.
            The quick searches includes bestseller items and sale items for they are the
            most searched ones based from the interview.</p>

            <h4>Prototype</h4>
            <span className="image main">
            <Iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUmcIvrHQ1EoefuaLMskhSs6K%2FStylelit%3Fnode-id%3D0%253A1"
                      width="100%"
                      height="450px"
                      display="initial"
                      position="relative"
                      allowfullscreen/>
            </span>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Generic
