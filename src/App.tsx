import "./App.css";
import LargeSkillTile from "./Components/LargeSkillTile";

function App() {
  return (
    <>
      <nav>
        <div>
          <img src="public\cat-svgrepo-com.svg" alt="logo" />
          <p>Caleb Clapper | Portfolio</p>
        </div>
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
            <LargeSkillTile imgSrc="public\react.png" text="asdf" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
