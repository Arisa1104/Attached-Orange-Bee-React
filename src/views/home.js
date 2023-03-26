import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard3 from '../components/feature-card3'
import FeatureCard2 from '../components/feature-card2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Attached Orange Bee</title>
        <meta property="og:title" content="Attached Orange Bee" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <img
          alt="logo"
          src="/playground_assets/hs-logo-1500h.png"
          className="home-image"
        />
        <div className="home-nav">
          <NavigationLinks
            first="About"
            third="Contact"
            second="Works"
            rootClassName="rootClassName15"
          ></NavigationLinks>
          <div className="home-icon-group">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container1">
              <img
                alt="image"
                src="/playground_assets/hs-logo-1500h.png"
                className="home-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              first="About"
              third="Contact"
              second="Works"
              rootClassName="rootClassName16"
            ></NavigationLinks>
          </div>
          <div className="home-icon-group1">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon6">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container2">
          <h1 className="home-text">Harper Stone</h1>
          <span className="home-text01">Official Website</span>
          <div className="home-container3">
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              Listen
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/harper-1500h.png"
          className="home-image2"
        />
      </div>
      <div className="home-banner">
        <h2 className="home-text02 Heading2">Learn to keep it simple</h2>
        <span className="home-text03">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor.
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
        </span>
        <div className="home-btn-group">
          <button className="home-button button">Get Started</button>
          <button className="home-button1 button">Learn More</button>
        </div>
      </div>
      <div className="home-features">
        <h2 className="home-text07 Heading2">
          <span>Discography</span>
          <br></br>
        </h2>
        <div className="home-container4">
          <FeatureCard3
            text="Listen"
            title="Broken Melodies"
            image_src="https://images.unsplash.com/photo-1516822669470-73d1771e95a3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM4fHxicm9rZW58ZW58MHx8fHwxNjc5ODQ1MDM4&amp;ixlib=rb-4.0.3&amp;h=200"
            link_text="https://google.com"
            description="January 2023"
            description1="Emotional songs of heartbreak and loss."
            rootClassName="rootClassName"
          ></FeatureCard3>
          <FeatureCard3
            title="Midnight Serenade"
            image_src="https://images.unsplash.com/photo-1589763472885-46dd5b282f52?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pZG5pZ2h0fGVufDB8fHx8MTY3OTg0NDk5MQ&amp;ixlib=rb-4.0.3&amp;h=200"
            description="October 2022"
            description1="Romantic ballads for late night listening."
            rootClassName="rootClassName3"
          ></FeatureCard3>
          <FeatureCard3
            title="Dancing in the Dark"
            image_src="https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxkYW5jaW5nfGVufDB8fHx8MTY3OTg0NTA2NA&amp;ixlib=rb-4.0.3&amp;h=200"
            description="February 2022"
            description1="Upbeat tunes for a night of dancing."
            rootClassName="rootClassName5"
          ></FeatureCard3>
          <FeatureCard3
            title="Echoes in the Wind"
            image_src="https://images.unsplash.com/photo-1444962668425-360f59fa2c24?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHdpbmR8ZW58MHx8fHwxNjc5ODQ1MDk0&amp;ixlib=rb-4.0.3&amp;h=200"
            description="August 2021"
            description1="Haunting melodies that linger in the mind."
            rootClassName="rootClassName1"
          ></FeatureCard3>
          <FeatureCard3
            title="Wildfire Heart"
            image_src="https://images.unsplash.com/photo-1518050346340-aa2ec3bb424b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM4fHxoZWFydHxlbnwwfHx8fDE2Nzk4NDUxNjM&amp;ixlib=rb-4.0.3&amp;h=200"
            description="December 2020"
            description1="Passionate songs that ignite the soul."
            rootClassName="rootClassName7"
          ></FeatureCard3>
          <FeatureCard3
            title="Starry Nights"
            image_src="https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ1fHxzdGFycnl8ZW58MHx8fHwxNjc5ODQ1MTk5&amp;ixlib=rb-4.0.3&amp;h=200"
            description="March 2020"
            description1="Dreamy tunes perfect for stargazing."
            rootClassName="rootClassName6"
          ></FeatureCard3>
          <FeatureCard3
            title="Ocean Blue"
            image_src="https://images.unsplash.com/photo-1584794171574-fe3f84b43838?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxvY2VhbnxlbnwwfHx8fDE2Nzk4NDUyNTE&amp;ixlib=rb-4.0.3&amp;h=200"
            description="September 2019"
            description1="Relaxing tracks for a day by the sea."
            rootClassName="rootClassName4"
          ></FeatureCard3>
          <FeatureCard3
            title="Electric Dreams"
            image_src="https://images.unsplash.com/photo-1616243850909-f010afe8de3a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGVsZWN0cmljfGVufDB8fHx8MTY3OTg0NTI5MA&amp;ixlib=rb-4.0.3&amp;h=200"
            description="May 2019"
            description1="A fusion of pop and electronica for a futuristic sound."
            rootClassName="rootClassName2"
          ></FeatureCard3>
        </div>
      </div>
      <div className="home-features1">
        <h2 className="home-text10">
          <span className="Heading2">Songwriting Credits</span>
          <br></br>
        </h2>
        <div className="home-container5">
          <FeatureCard2
            year="2022"
            title="Starry Nights"
            artist="Isla Cruz"
            description="A dreamy tune perfect for stargazing on a summer night."
            rootClassName="rootClassName1"
          ></FeatureCard2>
          <FeatureCard2
            year="2020"
            title="Wildfire Heart"
            artist="Ava James"
            description="An emotional ballad about a love that burns like wildfire."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            year="2019"
            title="Broken Melodies"
            artist="Harper Stone"
            description="A heart-wrenching song about the pain of a broken heart."
            rootClassName="rootClassName4"
          ></FeatureCard2>
          <FeatureCard2
            year="2018"
            title="Electric Dreams"
            artist="Luna Blake"
            description="A pop-electronic track that transports listeners to a futuristic world."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            year="2015"
            title="Echoes in the Wind"
            artist="Maya Rivers"
            description="A haunting melody that lingers in the mind long after it ends."
            rootClassName="rootClassName2"
          ></FeatureCard2>
        </div>
      </div>
      <div className="home-banner1">
        <h1 className="home-text13">Subscribe to My Newsletter</h1>
        <span className="home-text14">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis.
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
          <span>
            Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
        <div className="home-container6">
          <form
            enctype="application/x-www-form-urlencoded"
            method="POST"
            action="https://formsubmit.co/arisa1104@me.com"
            className="home-form"
          >
            <input
              type="text"
              placeholder="Email here..."
              name="email"
              required
              className="home-textinput input"
            />
            <button type="submit" className="home-button2 button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <footer className="home-footer">
        <span className="home-text19">2023 © Harper Stone</span>
      </footer>
    </div>
  )
}

export default Home
