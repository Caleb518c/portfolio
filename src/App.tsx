import "./App.css";
import LargeSkillTile from "./Components/LargeSkillTile";
import SmallSkillTile from "./Components/SmallSkillTile";
import MenuDropdown from "./Components/MenuDropdown";

function App() {
  return (
    <>
      <nav>
        <div>
          <img src="public\cat-svgrepo-com.svg" alt="logo" />
          <p>Caleb Clapper | Portfolio</p>
        </div>

        <MenuDropdown />

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
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

        <section className="about">
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
            <LargeSkillTile imgSrc="public\computerScreen.png" text="Web Development" />
            <LargeSkillTile imgSrc="public\uxDesign.png" text="UI/UX Development & Design" />
            <LargeSkillTile imgSrc="public\phone.png" text="App Development" />
          </div>
          <div className="smallSkillsContainer">
            <SmallSkillTile imgSrc="public\skillIcons\react.png" text="React.js" />
            <SmallSkillTile imgSrc="public\skillIcons\nodejsLogo.png" text="Node.js" />
            <SmallSkillTile imgSrc="public\skillIcons\jsLogo.png" text="Javascript" />
            <SmallSkillTile imgSrc="public\skillIcons\tsLogo.png" text="Typescript" />
            <SmallSkillTile imgSrc="public\skillIcons\htmlLogo.png" text="HTML" />
            <SmallSkillTile imgSrc="public\skillIcons\cssLogo.png" text="CSS" />
            <SmallSkillTile imgSrc="public\skillIcons\gitLogo.png" text="Git" />
            <SmallSkillTile imgSrc="public\skillIcons\javaLogo.png" text="Java" />
            <SmallSkillTile imgSrc="public\skillIcons\sqlLogo.png" text="SQL" />
            <SmallSkillTile imgSrc="public\skillIcons\figmaLogo.png" text="Figma" />
            <SmallSkillTile imgSrc="public\skillIcons\photoshopLogo.png" text="Photoshop" />
            <SmallSkillTile imgSrc="public\skillIcons\illustratorLogo.png" text="Illustrator" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
