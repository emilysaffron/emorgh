import { Headline, SubHeading } from "@bbc/psammead-headings";
const data = require("./data/article-1.json");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headline>{data.title}</Headline>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
