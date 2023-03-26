import React from 'react'

import PropTypes from 'prop-types'

import SmallButton from './small-button'
import './feature-card2.css'

const FeatureCard2 = (props) => {
  return (
    <div className={`feature-card2-feature-card ${props.rootClassName} `}>
      <div className="feature-card2-container">
        <div className="feature-card2-container1">
          <svg viewBox="0 0 1024 1024" className="feature-card2-icon">
            <path
              d="M512 128h256v170h-170v428q0 70-51 120t-121 50-120-50-50-120 50-121 120-51q42 0 86 24v-450z"
              className=""
            ></path>
          </svg>
          <div className="feature-card2-container2">
            <div className="feature-card2-container3">
              <h3 className="feature-card2-text Heading3">{props.title}</h3>
              <span className="feature-card2-text1">{props.artist}</span>
              <span className="feature-card2-text2">{props.year}</span>
            </div>
            <span className="feature-card2-text3">{props.description}</span>
          </div>
        </div>
        <SmallButton
          rootClassName="small-button-root-class-name1"
          className=""
        ></SmallButton>
      </div>
    </div>
  )
}

FeatureCard2.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  title: 'Lorem ipsum',
  artist: 'Name',
  rootClassName: '',
  year: '2020',
}

FeatureCard2.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  rootClassName: PropTypes.string,
  year: PropTypes.string,
}

export default FeatureCard2
