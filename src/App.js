import { Headline } from "@bbc/psammead-headings";
import Data from "./data";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headline>
          <Data />
        </Headline>
      </header>
    </div>
  );
}

export default App;
