import { WidthContainer } from "../src/components/width-container/WidthContainer";
import "./App.css";
import { links } from "./constants";

function App() {

  const emailMe = () => {
    window.open("mailto:jsextonprofessional@protonmail.com");
  };

  return (
    <div className="bg-black h-screen">
      <WidthContainer>
        {links.map((link) => (
          <a
            key={link.key}
            href={link.url}
            target="_blank"
            className={`bg-black border-8 border-white font-black py-4 text-center text-white text-5xl 
              ${link.bgColor}`}
            onClick={link.title === "email me" ? emailMe : undefined}
          >
            {link.title}
          </a>
        ))}
      </WidthContainer>
    </div>
  );
}

export default App;
