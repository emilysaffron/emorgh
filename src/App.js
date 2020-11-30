import Data from "./Data";
import React, { useState } from "react";

function App() {
  const [pageNo, updatePage] = useState(1);

  const loadArticle = () => {
    updatePage(pageNo + 1);
    console.log(pageNo);
  };
  return (
    <div className="App">
      <Data num={pageNo} />

      <button onClick={loadArticle}></button>
    </div>
  );
}

export default App;
