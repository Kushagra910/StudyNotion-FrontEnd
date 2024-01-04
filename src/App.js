import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Login"
          element={<OpenRoute>
              <Login />
            </OpenRoute>}
        />
        <Route
          path="/Signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
            }
        />
      </Routes>
    </div>
  );
}

export default App;
