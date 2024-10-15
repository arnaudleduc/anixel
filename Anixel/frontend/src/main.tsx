import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "../i18n";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
