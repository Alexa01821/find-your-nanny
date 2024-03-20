import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoading } from "store/appState/selectors";
import Layout from "components/Layout";
import FavoritesPage from "pages/FavoritesPage";
import WelcomePage from "pages/WelcomePage";
import NanniesPage from "pages/NanniesPage";
import Loader from "components/Loader";

const App = () => {
  const openLoader = useSelector(selectIsLoading);

  return (
    <>
      {openLoader && <Loader />}
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
