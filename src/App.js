import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import createRoutes from "./Helpers/FetchRoutes";

function App() {
  const [currentPageNumber, updatePage] = useState(0);
  const routes = createRoutes(currentPageNumber);
  return (
    <div className="App">
      <NavBar currentPageNumber={currentPageNumber} updatePage={updatePage} />
      {routes}
    </div>
  );
}

export default App;
