import { WidthContainer } from "../src/components/width-container/WidthContainer";
import "./App.css";

function App() {
  const links = [
    {
      url: "https://www.google.com",
      title: "Portfolio",
    },
    {
      url: "https://www.github.com/jsextonprofessional",
      title: "Github",
    },
    {
      url: "https://www.linkedin.com/in/jsextonprofessional/",
      title: "LinkedIn",
    },
    {
      url: "https://www.instagram.com/jacob._.sexton/",
      title: "Instagram",
    },
    {
      url: "#",
      title: "Email Me",
    },
    {
      url: "#",
      title: "Resume",
    },
  ];

  return (
    <div className="App">
      <WidthContainer>
        {/* map over links using anchor tags where href=url and id=title  */}
        {links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            className="border-4 border-blue-500  text-center"
          >
            {link.title}
          </a>
        ))}
      </WidthContainer>
    </div>
  );
}

export default App;
