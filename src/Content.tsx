import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/public/news/NewsPage";
import AdministrationPage from "./pages/administration/AdministrationPage";

const Content = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/administration" element={<AdministrationPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Content;
