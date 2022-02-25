import { Route, Routes } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { WorkPage } from "./pages/WorkPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} exact={true}></Route>

      <Route path="/work" element={<WorkPage />} exact={true}></Route>

      <Route path="/contact" element={<ContactPage />} exact={true}></Route>

      <Route path="/*" element={<AboutPage />}></Route>
    </Routes>
  );
};
