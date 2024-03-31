import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        transition:Bounce
      />
      <AuthProvider>
        <BlogProvider>
          <SingleBlogProvider>
            <ProfileProvider>
              <Router>
                <App />
              </Router>
            </ProfileProvider>
          </SingleBlogProvider>
        </BlogProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
