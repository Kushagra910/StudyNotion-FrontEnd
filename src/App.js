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
import ProtectedRoute from "./components/core/Auth/ProtectedRoute";
import Settings from "./components/core/Dashboard/settings/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/cart/Cart";
import { ACCOUNT_TYPE } from "./data/constants";
import { useSelector } from "react-redux";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Error = React.lazy(() => import("./pages/Error"));
const MyProfile = React.lazy(() =>
  import("./components/core/Dashboard/MyProfile")
);

function App() {
  const {user} = useSelector((state)=>state.profile);
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
            <Suspense fallback={<div className="spinner"></div>}>
              <Dashboard />
            </Suspense>
          }
        >
          <Route
            path="/dashboard/my-profile"
            element={
              <Suspense
                fallback={<div className="spinner w-screen h-screen"></div>}
              >
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route path="/dashboard/Settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
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
