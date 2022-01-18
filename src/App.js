import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
