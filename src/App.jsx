import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/p/:id" element={<PostPage />} />
        <Route
          path="*"
          element={
            <div className="p-6 text-center text-neutral-400">
              Page not found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
