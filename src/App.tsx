import { WidthContainer } from "../src/components/width-container";
import { Link } from "../src/components/link";
import "./App.css";

function App() {
  const links = [
    {
      url: "https://www.google.com",
      title: "Google",
    },
  ];

  return (
    <div className="App">
      <WidthContainer>
        <h2 className="text-blue-500">This is a WidthContainer</h2>
        <Link url={"links[0].url"} title={links[0].title} />
      </WidthContainer>
    </div>
  );
}

export default App;
