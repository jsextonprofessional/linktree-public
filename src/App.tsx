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
    <div className="bg-purple-500">
      <WidthContainer>
        {links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            className="border-8 border-black py-4 text-center text-black text-2xl font-black shadow-[0_1rem_1rem_1rem_rgba(255, 255, 255)] hover:text-white hover:bg-black hover:border-white"
          >
            {link.title}
          </a>
        ))}
      </WidthContainer>
    </div>
  );
}

export default App;
