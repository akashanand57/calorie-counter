import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";
import VantaBackground from "./components/VantaBackground";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className="vanta-wrapper" style={{ position: "relative", height: "100vh" }}>
      {/* Vanta Background Component */}
      <VantaBackground />

      {/* App Wrapper */}
      <div
        className="app-wrapper"
        style={{
          position: "relative",
          zIndex: 1, // Ensures App content is layered above the Vanta background
        }}
      >
        <App />
      </div>
    </div>
  </Provider>
);
