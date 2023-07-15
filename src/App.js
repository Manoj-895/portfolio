import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileComponent from './pages/profilepage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProfileComponent />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
