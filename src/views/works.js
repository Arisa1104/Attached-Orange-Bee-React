import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard3 from '../components/feature-card3'
import FeatureCard2 from '../components/feature-card2'
import './works.css'

const Works = (props) => {
  return (
    <div className="works-container">
      <Helmet>
        <title>Works - Attached Orange Bee</title>
        <meta property="og:title" content="Works - Attached Orange Bee" />
      </Helmet>
      <header data-role="Header" className="works-header">
        <img
          alt="logo"
          src="/playground_assets/hs-logo-1500h.png"
          className="works-image"
        />
        <div className="works-nav">
          <NavigationLinks
            first="About"
            third="Contact"
            second="Works"
            rootClassName="rootClassName8"
          ></NavigationLinks>
          <div className="works-icon-group">
            <svg viewBox="0 0 877.7142857142857 1024" className="works-icon">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
        <div data-role="BurgerMenu" className="works-burger-menu">
          <svg viewBox="0 0 1024 1024" className="works-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="works-mobile-menu">
          <div className="works-nav1">
            <div className="works-container1">
              <img
                alt="image"
                src="/playground_assets/hs-logo-1500h.png"
                className="works-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="works-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="works-icon4">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              first="About"
              third="Contact"
              second="Works"
              rootClassName="rootClassName9"
            ></NavigationLinks>
          </div>
          <div className="works-icon-group1">
            <svg viewBox="0 0 877.7142857142857 1024" className="works-icon6">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="works-banner">
        <h2 className="works-text Heading1">Works</h2>
      </div>
      <div className="works-features">
        <h2 className="works-text01 Heading2">
          <span>Discography</span>
          <br></br>
        </h2>
        <div className="works-container2">
          <FeatureCard3
            text="Listen"
            title="Broken Melodies"
            image_src="https://images.unsplash.com/photo-1516822669470-73d1771e95a3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM4fHxicm9rZW58ZW58MHx8fHwxNjc5ODQ1MDM4&amp;ixlib=rb-4.0.3&amp;h=200"
            link_text="https://google.com"
            description="January 2023"
            description1="Emotional songs of heartbreak and loss."
            rootClassName="rootClassName8"
          ></FeatureCard3>
          <FeatureCard3
            title="Midnight Serenade"
            image_src="https://images.unsplash.com/photo-1589763472885-46dd5b282f52?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pZG5pZ2h0fGVufDB8fHx8MTY3OTg0NDk5MQ&amp;ixlib=rb-4.0.3&amp;h=200"
            description="October 2022"
            description1="Romantic ballads for late night listening."
            rootClassName="rootClassName9"
          ></FeatureCard3>
          <FeatureCard3
            title="Dancing in the Dark"
            image_src="https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxkYW5jaW5nfGVufDB8fHx8MTY3OTg0NTA2NA&amp;ixlib=rb-4.0.3&amp;h=200"
            description="February 2022"
            description1="Upbeat tunes for a night of dancing."
            rootClassName="rootClassName10"
          ></FeatureCard3>
          <FeatureCard3
            title="Echoes in the Wind"
            image_src="https://images.unsplash.com/photo-1444962668425-360f59fa2c24?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHdpbmR8ZW58MHx8fHwxNjc5ODQ1MDk0&amp;ixlib=rb-4.0.3&amp;h=200"
            description="August 2021"
            description1="Haunting melodies that linger in the mind."
            rootClassName="rootClassName11"
          ></FeatureCard3>
          <FeatureCard3
            title="Wildfire Heart"
            image_src="https://images.unsplash.com/photo-1518050346340-aa2ec3bb424b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM4fHxoZWFydHxlbnwwfHx8fDE2Nzk4NDUxNjM&amp;ixlib=rb-4.0.3&amp;h=200"
            description="December 2020"
            description1="Passionate songs that ignite the soul."
            rootClassName="rootClassName12"
          ></FeatureCard3>
          <FeatureCard3
            title="Starry Nights"
            image_src="https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ1fHxzdGFycnl8ZW58MHx8fHwxNjc5ODQ1MTk5&amp;ixlib=rb-4.0.3&amp;h=200"
            description="March 2020"
            description1="Dreamy tunes perfect for stargazing."
            rootClassName="rootClassName13"
          ></FeatureCard3>
          <FeatureCard3
            title="Ocean Blue"
            image_src="https://images.unsplash.com/photo-1584794171574-fe3f84b43838?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxvY2VhbnxlbnwwfHx8fDE2Nzk4NDUyNTE&amp;ixlib=rb-4.0.3&amp;h=200"
            description="September 2019"
            description1="Relaxing tracks for a day by the sea."
            rootClassName="rootClassName14"
          ></FeatureCard3>
          <FeatureCard3
            title="Electric Dreams"
            image_src="https://images.unsplash.com/photo-1616243850909-f010afe8de3a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGVsZWN0cmljfGVufDB8fHx8MTY3OTg0NTI5MA&amp;ixlib=rb-4.0.3&amp;h=200"
            description="May 2019"
            description1="A fusion of pop and electronica for a futuristic sound."
            rootClassName="rootClassName15"
          ></FeatureCard3>
        </div>
      </div>
      <div className="works-features1">
        <h2 className="works-text04">
          <span className="Heading2">Songwriting Credits</span>
          <br></br>
        </h2>
        <div className="works-container3">
          <FeatureCard2
            year="2022"
            title="Starry Nights"
            artist="Isla Cruz"
            description="A dreamy tune perfect for stargazing on a summer night."
            rootClassName="rootClassName5"
          ></FeatureCard2>
          <FeatureCard2
            year="2020"
            title="Wildfire Heart"
            artist="Ava James"
            description="An emotional ballad about a love that burns like wildfire."
            rootClassName="rootClassName6"
          ></FeatureCard2>
          <FeatureCard2
            year="2019"
            title="Broken Melodies"
            artist="Harper Stone"
            description="A heart-wrenching song about the pain of a broken heart."
            rootClassName="rootClassName7"
          ></FeatureCard2>
          <FeatureCard2
            year="2018"
            title="Electric Dreams"
            artist="Luna Blake"
            description="A pop-electronic track that transports listeners to a futuristic world."
            rootClassName="rootClassName8"
          ></FeatureCard2>
          <FeatureCard2
            year="2015"
            title="Echoes in the Wind"
            artist="Maya Rivers"
            description="A haunting melody that lingers in the mind long after it ends."
            rootClassName="rootClassName9"
          ></FeatureCard2>
        </div>
      </div>
      <div className="works-banner1">
        <h1 className="works-text07">Subscribe to My Newsletter</h1>
        <span className="works-text08">
          Sign up for my newsletter and be the first to receive updates, news,
          and special offers!
        </span>
        <div className="works-container4">
          <form
            action="https://formsubmit.co/arisa1104@me.com"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="works-form"
          >
            <input
              type="text"
              name="email"
              required
              placeholder="Email here..."
              className="works-textinput input"
            />
            <button type="submit" className="works-button button">
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
      <footer className="works-footer">
        <span className="works-text09">2023 © Harper Stone</span>
      </footer>
    </div>
  )
}

export default Works
