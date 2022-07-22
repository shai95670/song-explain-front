import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import SongProfile from "./pages/songProfile/SongProfile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songProfile" element={<SongProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
