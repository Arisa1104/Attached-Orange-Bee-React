import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="Menu navigation-links-text">{props.first}</span>
      <span className="navigation-links-text1 Menu">{props.second}</span>
      <span className="navigation-links-text2 Menu">{props.third}</span>
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
