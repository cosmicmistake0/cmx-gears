import { BrowserRouter, Routes, Route } from "react-router";

import { HomePage } from "./pages/homepage/HomePage";
// import "./App.css";
// import { Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
