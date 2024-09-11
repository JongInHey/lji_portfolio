import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { TopBtn } from "./components/TopBtn";

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <TopBtn />
    </HashRouter>
  );
}

export default Router;
