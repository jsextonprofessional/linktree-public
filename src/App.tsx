import { WidthContainer } from "../src/components/width-container/WidthContainer";
import { Link } from "../src/components/link/Link";
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
      url: "https://www.instagram.com/jsextonprofessional/",
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
        {/* map over links */}
        {links.map((link) => (
          <Link url={link.url} title={link.title} />
        ))}
        <a href="https://www.github.com/jsextonprofessional" target="_blank">
          spoink
        </a>
      </WidthContainer>
    </div>
  );
}

export default App;
