import React, { useState } from "react";
import NavBar from "./Components/NavBar Component/NavBar";
import createRoutes from "./Helpers/FetchRoutes";

function App() {
  const [currentPageNumber, updatePage] = useState(1);
  const routes = createRoutes(currentPageNumber, updatePage);
  return (
    <div className="App">
      <NavBar currentPageNumber={currentPageNumber} updatePage={updatePage} />
      {routes}
    </div>
  );
}

export default App;
