import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/article/:title" element={<ArticleDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
