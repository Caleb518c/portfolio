import "./App.css";
import LargeSkillTile from "./Components/LargeSkillTile.tsx";
import SmallSkillTile from "./Components/SmallSkillTile.tsx";
import MenuDropdown from "./Components/MenuDropdown.tsx";

function App() {
  return (
    <div id="home">
      <nav>
        <div>
          <img src="public\cat-svgrepo-com.svg" alt="logo" />
          <p>Caleb Clapper | Portfolio</p>
        </div>

        <MenuDropdown />

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
          <img src="public\computer 3d image.png" alt="computer graphic" />
        </section>

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
              imgSrc="/computerScreen.png"
              text="Web Development"
            />
            <LargeSkillTile
              imgSrc="/uxDesign.png"
              text="UI/UX Development & Design"
            />
            <LargeSkillTile imgSrc="/phone.png" text="App Development" />
          </div>
          <div className="smallSkillsContainer">
            <SmallSkillTile imgSrc="/skillIcons\react.png" text="React.js" />
            <SmallSkillTile
              imgSrc="/skillIcons\nodejsLogo.png"
              text="Node.js"
            />
            <SmallSkillTile imgSrc="/skillIcons\jsLogo.png" text="Javascript" />
            <SmallSkillTile imgSrc="/skillIcons\tsLogo.png" text="Typescript" />
            <SmallSkillTile imgSrc="/skillIcons\htmlLogo.png" text="HTML" />
            <SmallSkillTile imgSrc="/skillIcons\cssLogo.png" text="CSS" />
            <SmallSkillTile imgSrc="/skillIcons\gitLogo.png" text="Git" />
            <SmallSkillTile imgSrc="/skillIcons\javaLogo.png" text="Java" />
            <SmallSkillTile imgSrc="/skillIcons\sqlLogo.png" text="SQL" />
            <SmallSkillTile imgSrc="/skillIcons\figmaLogo.png" text="Figma" />
            <SmallSkillTile
              imgSrc="/skillIcons\photoshopLogo.png"
              text="Photoshop"
            />
            <SmallSkillTile
              imgSrc="/skillIcons\illustratorLogo.png"
              text="Illustrator"
            />
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
                    src="contactImages/mail.png"
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
                    src="contactImages/profileIcon.png"
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
                    src="contactImages/pen.png"
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
              src="notificationIcons.png"
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
