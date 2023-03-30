import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/about" className="navigation-links-navlink Menu">
        {props.first}
      </Link>
      <Link to="/works" className="navigation-links-navlink1 Menu">
        {props.second}
      </Link>
      <Link to="/contact" className="navigation-links-navlink2 Menu">
        {props.third}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  third: 'Pricing',
  rootClassName: '',
  first: 'About',
  second: 'Features',
}

NavigationLinks.propTypes = {
  third: PropTypes.string,
  rootClassName: PropTypes.string,
  first: PropTypes.string,
  second: PropTypes.string,
}

export default NavigationLinks
