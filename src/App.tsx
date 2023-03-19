import { WidthContainer } from "../src/components/width-container/WidthContainer";
import "./App.css";

function App() {
  const links = [
    {
      url: "https://jacobsexton.pages.dev/",
      title: "Portfolio",
      bgColor: "purple",
    },
    {
      url: "https://www.github.com/jsextonprofessional",
      title: "Github",
      bgColor: "blue",
    },
    {
      url: "https://www.linkedin.com/in/jsextonprofessional/",
      title: "LinkedIn",
      bgColor: "green",
    },
    {
      url: "https://www.instagram.com/jacob._.sexton/",
      title: "Instagram",
      bgColor: "yellow",
    },
    {
      url: "#",
      title: "Email Me",
      bgColor: "orange",
    },
    {
      url: "#",
      title: "Resume",
      bgColor: "red",
    },
  ];

  return (
    <div className="bg-black">
      <WidthContainer>
        {links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            className={`bg-black border-8 border-white py-8 text-center text-white text-2xl font-black
              ${link.bgColor}`}
          >
            {link.title}
          </a>
        ))}
      </WidthContainer>
    </div>
  );
}

export default App;
