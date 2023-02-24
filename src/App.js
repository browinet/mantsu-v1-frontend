import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthorList from "./pages/AuthorList";
import AuthorPage from "./pages/AuthorPage";
import BookList from "./pages/BookList";
import BookPage from "./pages/BookPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="app container">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/authorlist" element={<AuthorList />} />
          <Route path="/api/authorlist/:authorpage" element={<AuthorPage />} />
          <Route path="/api/booklist" element={<BookList />} />
          <Route path="/api/booklist/:bookpage" element={<BookPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
