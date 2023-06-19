import { Route, BrowserRouter, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Main from "./pages/main/Main";
import Loyaut from "./loyaut/Loyaut";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={Loyaut}>
            <Route index element={Main} />
            <Route path="/detail" element={Detail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


