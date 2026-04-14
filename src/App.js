/** @format */

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <span>
            {" "}
            <h1>Joborute</h1>{" "}
          </span>
          <span>
            {" "}
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </span>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;