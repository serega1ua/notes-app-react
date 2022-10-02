import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Workspace from "./components/Workspace";
import MainContext from "./context/MainContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // TS тип указываем, который получаем
);
root.render(
  <MainContext>  {/* реакт-контекст, встроенный state-менеджер, чтобы не про-кидывать пропсы вниз между компонентами*/}
    <Router>  {/*создает SPA без перезагрузки страницы*/}
      <Routes>
        <Route 
        path="/" //для нас это http://localhost:3001/, т.е. КУДА рендерить
        element={
          <Layout> {/*именно этот рендерится, ЧТО рендерить*/}
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
