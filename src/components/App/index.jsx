import Layout from "components/Layout";
import FavoritesPage from "pages/FavoritesPage";
import WelcomePage from "pages/WelcomePage";
import NanniesPage from "pages/NanniesPage";

const { Routes, Route } = require("react-router-dom");

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
