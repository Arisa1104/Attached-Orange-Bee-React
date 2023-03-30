import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Attached Orange Bee</title>
        <meta property="og:title" content="Contact - Attached Orange Bee" />
      </Helmet>
      <header data-role="Header" className="contact-header">
        <img
          alt="logo"
          src="/playground_assets/hs-logo-1500h.png"
          className="contact-image"
        />
        <div className="contact-nav">
          <NavigationLinks
            first="About"
            third="Contact"
            second="Works"
            rootClassName="rootClassName10"
          ></NavigationLinks>
          <div className="contact-icon-group">
            <svg viewBox="0 0 877.7142857142857 1024" className="contact-icon">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
        <div data-role="BurgerMenu" className="contact-burger-menu">
          <svg viewBox="0 0 1024 1024" className="contact-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="contact-mobile-menu">
          <div className="contact-nav1">
            <div className="contact-container1">
              <img
                alt="image"
                src="/playground_assets/hs-logo-1500h.png"
                className="contact-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="contact-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="contact-icon4">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              first="About"
              third="Contact"
              second="Works"
              rootClassName="rootClassName11"
            ></NavigationLinks>
          </div>
          <div className="contact-icon-group1">
            <svg viewBox="0 0 877.7142857142857 1024" className="contact-icon6">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="contact-banner">
        <h2 className="contact-text Heading1">Contact</h2>
      </div>
      <div className="contact-features">
        <span className="contact-text1">
          <span>
            Please use this contact form for inquiries regarding
            singing/songwriting requests, and other inquiries. Thank you.
          </span>
          <br></br>
        </span>
        <form
          action="https://formsubmit.co/arisa1104@me.com"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="contact-textinput input"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="contact-textinput1 input"
          />
          <textarea
            name="message"
            rows="5"
            type="message"
            placeholder="Message"
            className="contact-textarea textarea"
          ></textarea>
          <button type="submit" className="contact-button button">
            Send
          </button>
        </form>
      </div>
      <div className="contact-banner1">
        <h1 className="contact-text4">Subscribe to My Newsletter</h1>
        <span className="contact-text5">
          Sign up for my newsletter and be the first to receive updates, news,
          and special offers!
        </span>
        <div className="contact-container2">
          <form
            action="https://formsubmit.co/arisa1104@me.com"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="contact-form1"
          >
            <input
              type="text"
              name="email"
              required
              placeholder="Email here..."
              className="contact-textinput2 input"
            />
            <button type="submit" className="contact-button1 button">
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
      <footer className="contact-footer">
        <span className="contact-text6">2023 © Harper Stone</span>
      </footer>
    </div>
  )
}

export default Contact
