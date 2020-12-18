import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Routes from "./helpers/FetchRoutes";

function App() {
  const [currentPageNumber, updatePage] = useState(1);

  return (
    <div className="App">
      <NavBar currentPageNumber={currentPageNumber} updatePage={updatePage} />
      <Routes currentPageNumber={currentPageNumber} />
    </div>
  );
}

export default App;
