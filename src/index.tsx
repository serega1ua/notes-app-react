import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Workspace from "./components/Workspace";
import MainContext from "./context/MainContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MainContext>
    <Router>
      <Routes>
        <Route 
        path="/" 
        element={
          <Layout>
            <Workspace type="WELCOME" />
          </Layout>
        } />
        <Route
          path="/note/:id"
          element={
            <Layout>
              <Workspace type="NOTEINFO" />
            </Layout>
          }
        />
        <Route path="/create" element={
        <Layout>
              <Workspace type="CREATE" />
            </Layout>
          } />
      </Routes>
    </Router>
  </MainContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
