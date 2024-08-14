// React
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Components
import ScrollReset from "../ScrollReset.jsx";

// Pages
import Home from "../pages/Home.jsx";
import WWD from "../pages/WWD.jsx";
import WWA from "../pages/WWA.jsx";
import WYNW from "../pages/WYNW.jsx";
import Contacts from "../pages/Contacts.jsx";

// CSS
import "./App.css";

// Create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ScrollReset />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/vad-vi-gör" element={<WWD />} />
      <Route path="/vilka-vi-är" element={<WWA />} />
      <Route path="/du-behöver-en-hemsida" element={<WYNW />} />
      <Route path="/kontakt" element={<Contacts />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
