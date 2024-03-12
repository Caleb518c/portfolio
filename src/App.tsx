import "./App.css";
import LargeSkillTile from "./Components/LargeSkillTile";
import SmallSkillTile from "./Components/SmallSkillTile";

import logo from "/cat-svgrepo-com.svg";
import downArrow from "/downArrow.png";

import emailIcon from "/contactImages/mail.png";
import penIcon from "/contactImages/pen.png";
import profileIcon from "/contactImages/profileIcon.png";

import computerGraphic from "/computerGraphic.png";
import notificationIcons from "/notificationIcons.png";

import whitePhoneIcon from "/bigSkillIcons/phone.png";
import whiteComputerScreenIcon from "/bigSkillIcons/computerScreen.png";
import whiteUxDesignIcon from "/bigSkillIcons/uxDesign.png";

import cssIcon from "/skillIcons/cssLogo.png";
import figmaIcon from "/skillIcons/figmaLogo.png";
import gitIcon from "/skillIcons/gitLogo.png";
import htmlIcon from "/skillIcons/htmlLogo.png";
import javaIcon from "/skillIcons/javaLogo.png";
import jsIcon from "/skillIcons/jsLogo.png";
import nodeJsIcon from "/skillIcons/nodejsLogo.png";
import reactIcon from "/skillIcons/react.png";
import sqlIcon from "/skillIcons/sqlLogo.png";
import tsIcon from "/skillIcons/tsLogo.png";
import photoshopIcon from "/skillIcons/photoshopLogo.png";
import illustratorIcon from "/skillIcons/illustratorLogo.png";


function App() {
  return (
    <div id="home">
      <nav>
        <div>
          <img src={logo} alt="logo" />
          <p>Caleb Clapper | Portfolio</p>
        </div>

        <ul>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>

      <main>
        <section className="intro">
          <div>
            <h1>Hi, I'm Caleb</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              nulla omnis qui ut quae incidunt architecto ad dolor quidem
              placeat iusto dolorem magni, numquam est. Laborum magni quidem
              mollitia tempora.
            </p>
          </div>
          <img src={computerGraphic} alt="computer graphic" />
        </section>

        <a href="#about">
          <img src={downArrow} alt="arrow icon" 
          className="arrowIcon animate__animated animate__bounce 
          animate__infinite animate__slow"  />
        </a>

        <section className="about" id="about">
          <div className="aboutText">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              nulla omnis qui ut quae incidunt architecto ad dolor quidem
              placeat iusto dolorem magni, numquam est. Laborum magni quidem
              mollitia tempora.
            </p>
          </div>
          <div className="largeSkillsContainer">
            <LargeSkillTile
              imgSrc={whiteComputerScreenIcon}
              text="Web Development"
            />
            <LargeSkillTile
              imgSrc={whiteUxDesignIcon}
              text="UI/UX Development & Design"
            />
            <LargeSkillTile imgSrc={whitePhoneIcon} text="App Development" />
          </div>
          <div className="smallSkillsContainerCenter">
            <div className="smallSkillsContainer">
              <SmallSkillTile imgSrc={reactIcon} text="React.js" />
              <SmallSkillTile imgSrc={nodeJsIcon} text="Node.js"/>
              <SmallSkillTile imgSrc={jsIcon} text="Javascript" />
              <SmallSkillTile imgSrc={tsIcon} text="Typescript" />
              <SmallSkillTile imgSrc={htmlIcon} text="HTML" />
              <SmallSkillTile imgSrc={cssIcon} text="CSS" />
              <SmallSkillTile imgSrc={gitIcon} text="Git" />
              <SmallSkillTile imgSrc={javaIcon} text="Java" />
              <SmallSkillTile imgSrc={sqlIcon} text="SQL" />
              <SmallSkillTile imgSrc={photoshopIcon} text="Photoshop" />
              <SmallSkillTile imgSrc={illustratorIcon} text="Illustrator" />  
              <SmallSkillTile imgSrc={figmaIcon} text="Figma" />
            </div>
          </div>
        </section>

        <section id="projects"></section>
        <section id="contact" className="contact">
          <h1>Contact</h1>
          <div className="contactRow2">
            <form action="submit">
              <div className="contactContainer">
                <form className="contactForm">
                  <img
                    src={emailIcon}
                    alt="email icon"
                    className="mailIcon"
                  />
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="What's your email?"
                      required
                    />
                  </div>
                </form>
                <form className="contactForm">
                  <img
                    src={profileIcon}
                    alt="profile icon"
                    className="profileIcon"
                  />
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="What's your name?"
                      required
                    />
                  </div>
                </form>
                <form className="messageForm">
                  <img
                    src={penIcon}
                    alt="pen icon"
                    className="messageIcon"
                  />
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="What do you want to say?"
                      required
                    />
                  </div>
                </form>
                <button>Send</button>
              </div>
            </form>
            <img
              src={ notificationIcons}
              alt="notification icons"
              className="notificationIcons"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
