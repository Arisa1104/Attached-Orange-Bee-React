import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card4.css'

const BlogPostCard4 = (props) => {
  return (
    <div className={`blog-post-card4-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card4-image"
      />
      <div className="blog-post-card4-container">
        <span className="blog-post-card4-text">{props.date}</span>
        <span className="blog-post-card4-text1">{props.description}</span>
        <div className="blog-post-card4-separator"></div>
        <span className="blog-post-card4-text2">{props.label}</span>
      </div>
    </div>
  )
}

BlogPostCard4.defaultProps = {
  rootClassName: '',
  label: 'Food & Drink',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
  date: 'JULY 24',
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

BlogPostCard4.propTypes = {
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default BlogPostCard4
