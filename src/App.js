import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Courts from "./pages/courts";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/courts`} element={<Courts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;