import { WidthContainer } from "../src/components/width-container";
import { Link } from "../src/components/link";
import "./App.css";

function App() {
  const links = [
    {
      url: "https://www.google.com",
      title: "Github",
    },
  ];

  return (
    <div className="App">
      <WidthContainer>
        <Link url={"links[0].url"} title={links[0].title} />
        <Link url={"links[0].url"} title={links[0].title} />
        <Link url={"links[0].url"} title={links[0].title} />
        <Link url={"links[0].url"} title={links[0].title} />
        <Link url={"links[0].url"} title={links[0].title} />
        <Link url={"links[0].url"} title={links[0].title} />
      </WidthContainer>
    </div>
  );
}

export default App;
