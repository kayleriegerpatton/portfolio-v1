import { Route, Routes } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { WorkPage } from "./pages/WorkPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />}></Route>

      <Route path="/work" element={<WorkPage />}></Route>

      <Route path="/contact" element={<ContactPage />}></Route>

      <Route path="/*" element={<AboutPage />}></Route>
    </Routes>
  );
};
