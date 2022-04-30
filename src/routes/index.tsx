import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FilmPage,
  HomePage,
} from "../pages";
import NoMatchRoute from "./no-match-route";

export default function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<FilmPage />} />

          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
    </BrowserRouter>
  );
}
