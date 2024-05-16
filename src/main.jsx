import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../public/assets/css/style.css";

import "../node_modules/react-modal-video/css/modal-video.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>
);
