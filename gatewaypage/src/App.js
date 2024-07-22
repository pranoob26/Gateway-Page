import "./App.css";
import Page from "./components/page";
import { tab, email } from "./context/tabcontext";
import { useState } from "react";
function App() {
  const [Tab, setTab] = useState(1);
  const [Email, setEmail] = useState("");

  return (
    <div className="App">
      <tab.Provider value={{ Tab, setTab }}>
        <email.Provider value={{ Email, setEmail }}>
          <Page></Page>
        </email.Provider>
      </tab.Provider>
    </div>
  );
}

export default App;
