import { Route, Routes } from "react-router-dom";
import Administration from "./pages/administration/Administration";
import CategoriesListPage from "./pages/administration/categories/CategoriesListPage";
import NewsListPage from "./pages/administration/NewsListPage";
import UsersListPage from "./pages/administration/UsersListPage";
import NewsPage from "./pages/public/news/NewsPage";
import PrivateRoute from "./PrivateRoute";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/administration/news" element={<NewsListPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/administration/users" element={<UsersListPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/administration/categories" element={<CategoriesListPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/administration" element={<Administration />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
