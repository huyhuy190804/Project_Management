import { useState } from "react";
import User from "./page/User";
import Project from "./page/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
