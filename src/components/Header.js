import React from 'react'

import logo from '../assets/images/website-icon.png'

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Faye Alano</h1>
        <p>UX Designer & Front-end Developer</p>
    </header>
)

export default Header
