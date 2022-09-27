import "./assets/css/app.css";

import Sidebar from "./components/Sidebar";
import ContentWrapper from "./components/ContentWrapper";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />
      </div>
    </div>
  );
}

export default App;
