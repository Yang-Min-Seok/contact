import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Shuffle from "./pages/shuffle";
import Result from "./pages/result";
import Share from "./pages/share";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/shuffle`} element={<Shuffle />}></Route>
          <Route path={`/result`} element={<Result />}></Route>
          <Route path={`/share/:data`} element={<Share />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;