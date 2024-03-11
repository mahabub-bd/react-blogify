import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";
import {
  AuthProvider,
  BlogProvider,
  ProfileProvider,
  SingleBlogProvider,
} from "./providers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        transition:Bounce
      />
      <ProfileProvider>
        <BlogProvider>
          <SingleBlogProvider>
            <Router>
              <App />
            </Router>
          </SingleBlogProvider>
        </BlogProvider>
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);
