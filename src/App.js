import logo from "./logo.svg";
import "./App.css";

import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://test-elie-chaaban.app.n8n.cloud/webhook/f172d164-27f6-4afb-9d2a-3ffd1797b552/chat",
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
};

export default App;
