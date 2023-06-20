import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Main from "./pages/main/Main";
import Layout from "./loyaut/Loyaut";
import Catalog from "./pages/catalog/Catalog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/catalog" element={<Catalog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

