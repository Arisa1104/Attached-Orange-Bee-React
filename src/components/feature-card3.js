import React from 'react'

import PropTypes from 'prop-types'

import SmallButton from './small-button'
import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div className={`feature-card3-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card3-image"
      />
      <h3 className="feature-card3-text Heading3">{props.title}</h3>
      <span className="feature-card3-text1">{props.description}</span>
      <span className="feature-card3-text2">{props.description1}</span>
      <SmallButton
        rootClassName="small-button-root-class-name"
        className=""
      ></SmallButton>
    </div>
  )
}

FeatureCard3.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  title: 'Title Goes Here',
  rootClassName: '',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  description: '2020',
  image_alt: 'image',
}

FeatureCard3.propTypes = {
  image_src: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description1: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard3
