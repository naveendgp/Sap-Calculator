import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AdminContextProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    
    <AdminContextProvider>
        <App />
    </AdminContextProvider>

);
