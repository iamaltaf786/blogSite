import "./App.css";
import { Homepage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/blog/:id" element={<BlogContentPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
