/** @format */

import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
  Form,
} from "react-router-dom";

import { RootLayout } from "./layout/RootLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { HelpLayout } from "./layout/HelpLayout.jsx";
import { Service } from "./pages/Help/service.jsx";
import { Faq } from "./pages/Help/faq.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { CareersLayout } from "./layout/CareersLayout.jsx";
import Careers, { careersLoader } from "./pages/careers/careers.jsx";
import { CareerDetails, careerDetailsLoader } from "./pages/careers/CareerDetails.jsx"

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
        <Route path='careers' element={<CareersLayout />}>
          <Route index element={<Careers />} loader={careersLoader} />
          <Route path=':id' loader={careerDetailsLoader} element={<CareerDetails />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={Router} />;
}

export default App;
