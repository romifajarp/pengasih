import './App.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {
        <HashRouter >
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </HashRouter>
      }
    </div>
  );
}

export default App;

// <Route path="/dashboard" element={<Dashboard />}/>