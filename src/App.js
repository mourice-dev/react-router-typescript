/** @format */

import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { RootLayout } from "./layout/RootLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { HelpLayout } from "./layout/HelpLayout.jsx";
import { Service } from "./pages/Help/service.jsx";
import { Faq } from "./pages/Help/faq.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='help' element={<HelpLayout />}>
          <Route path='service' element={<Service />} />
          <Route path='faq' element={<Faq />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={Router} />;
}

export default App;
