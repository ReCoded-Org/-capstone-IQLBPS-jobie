import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { signup, selectUser, signout } from "./features/user/userSlice";
import { auth, onAuthStateChanged } from "./firebase";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/Login/Login";
import AboutPage from "./pages/about-us";
import ProfilePage from "./pages/profile";
import Index from "./pages/index";
import Footer from "./components/Footer/Footer";
import CombiningFilterComponents from "./components/CombiningComponents/CombiningFilterComponents";
import SignOut from "./components/signup/SignOut";
import RoadMaps from "./pages/roadmaps";
import ProfileEdit from "./pages/profile-edit";
import ContactPage from "./pages/contact";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          signup({
            email: userAuth.email,
            uid: userAuth.uid,
            fullname: userAuth.fullname,
            password: userAuth.password,
          })
        );
      } else {
        dispatch(signout());
      }
    });
  }, []);
  return (
    <div>
      <Navbar />
      <SignOut />
      <Routes>
        <Route path="/" element={user ? <Index /> : <SignUp />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/roadmap" element={<RoadMaps />} />
        <Route path="/jobs" element={<CombiningFilterComponents />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-edit" element={<ProfileEdit/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
