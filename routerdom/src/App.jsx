import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
      {/* <Home/>
     <About/>
     <Contact/> */}
    </>
  );
}

export default App;
