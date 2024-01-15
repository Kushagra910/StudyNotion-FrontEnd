import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import ProtectedRoute from "./components/core/Auth/ProtectedRoute";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <div className="w-screen min-h-screen  bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/Signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
          path="/about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />

        <Route
          element={
            <Suspense fallback={
              <div className="spinner"></div>}>
              <Dashboard />
            </Suspense>
          }
        >
          <Route
            path="/dashboard/my-profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<div className="spinner w-full h-full"></div>}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
