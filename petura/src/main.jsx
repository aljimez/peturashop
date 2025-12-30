/* main.jsx
 * App bootstrap: mounts the React application into the DOM.
 * Keeps the entry point intentionally small; all app logic lives under `src/`.
 */
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
