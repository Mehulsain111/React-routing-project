import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component /Navbar";
import { Home } from "./component /Home";
import { BookApointment } from "./component /BookApointment";
import { Dashboard } from "./component /Dashboard";
import { ErrorPage } from "./component /ErrorPage";
import { PostListProvider } from "./Store/store";

function App() {
  return (
    <PostListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookApointment" element={<BookApointment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </PostListProvider>
  );
}

export default App;
