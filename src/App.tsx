import { WidthContainer } from "../src/components/width-container/WidthContainer";
import "./App.css";

function App() {
  const links = [
    {
      key: 0,
      url: "https://jacobsexton.cool/",
      title: "portfolio",
      bgColor: "purple",
    },
    {
      key: 1,
      url: "https://www.github.com/jsextonprofessional",
      title: "github",
      bgColor: "blue",
    },
    {
      key: 2,
      url: "https://www.linkedin.com/in/jsextonprofessional/",
      title: "linkedin",
      bgColor: "green",
    },
    {
      key: 3,
      url: "https://www.instagram.com/jacob._.sexton/",
      title: "instagram",
      bgColor: "yellow",
    },
    {
      key: 4,
      url: "#",
      title: "email me",
      bgColor: "orange",
    },
    {
      key: 5,
      url: "https://drive.google.com/file/d/10KY_fKrHSc-dCFXdmrWmDdDH7h-3mpfx/view?usp=sharing",
      title: "resume",
      bgColor: "red",
    },
  ];

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
