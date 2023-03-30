import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Attached Orange Bee</title>
        <meta property="og:title" content="About - Attached Orange Bee" />
      </Helmet>
      <header data-role="Header" className="about-header">
        <img
          alt="logo"
          src="/playground_assets/hs-logo-1500h.png"
          className="about-image"
        />
        <div className="about-nav">
          <NavigationLinks
            first="About"
            third="Contact"
            second="Works"
            rootClassName="rootClassName12"
          ></NavigationLinks>
          <div className="about-icon-group">
            <svg viewBox="0 0 877.7142857142857 1024" className="about-icon">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
        <div data-role="BurgerMenu" className="about-burger-menu">
          <svg viewBox="0 0 1024 1024" className="about-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="about-mobile-menu">
          <div className="about-nav1">
            <div className="about-container1">
              <img
                alt="image"
                src="/playground_assets/hs-logo-1500h.png"
                className="about-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="about-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="about-icon4">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              first="About"
              third="Contact"
              second="Works"
              rootClassName="rootClassName13"
            ></NavigationLinks>
          </div>
          <div className="about-icon-group1">
            <svg viewBox="0 0 877.7142857142857 1024" className="about-icon6">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="about-hero">
        <img
          alt="image"
          src="/playground_assets/hs-bio1-1200w.png"
          className="about-image2"
        />
        <div className="about-container2">
          <h1 className="Heading1 about-text">Harper Stone</h1>
          <h2 className="about-text01 Heading2">Singer-Songwriter</h2>
          <span className="about-text02">
            <span>
              Harper Stone is a singer-songwriter known for her emotionally
              charged lyrics and soulful voice. Born and raised in a small town
              in the American Midwest, Harper began writing songs at a young age
              as a way to express her feelings and make sense of the world
              around her. With influences ranging from classic rock to
              contemporary pop, Harper developed a unique sound that blends
              elements of folk, blues, and Americana.
            </span>
            <br></br>
            <br></br>
            <span>
              In 2015, Harper released her debut EP, which quickly gained
              critical acclaim for its honest lyrics and heartfelt vocals. Since
              then, she has continued to write and perform, sharing her music
              with audiences across the country. With each new song, Harper aims
              to connect with listeners on a deep level, exploring universal
              themes of love, loss, and the human experience. Her raw, authentic
              style has earned her a dedicated following and cemented her place
              as one of the most promising singer-songwriters of her generation.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <div className="about-banner">
        <h2 className="about-text09 Heading2">Subscribe to My Newsletter</h2>
        <span className="about-text10">
          Sign up for my newsletter and be the first to receive updates, news,
          and special offers!
        </span>
        <div className="about-container3">
          <form
            action="https://formsubmit.co/arisa1104@me.com"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="about-form"
          >
            <input
              type="text"
              name="email"
              required
              placeholder="Email here..."
              className="about-textinput input"
            />
            <button type="submit" className="about-button button">
              Subscribe
            </button>
            <input
              type="hidden"
              name="_next"
              value="thanks.html"
              placeholder="placeholder"
              className="input"
            />
          </form>
        </div>
      </div>
      <footer className="about-footer">
        <span className="about-text11">2023 © Harper Stone</span>
      </footer>
    </div>
  )
}

export default About
