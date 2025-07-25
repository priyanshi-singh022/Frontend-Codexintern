import React from "react";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Footer from "./components/footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
