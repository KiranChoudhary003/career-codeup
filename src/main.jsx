import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </StrictMode>
);
