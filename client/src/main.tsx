import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./app.css";
import { ThemeProvider } from "./components/layout/theme-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
