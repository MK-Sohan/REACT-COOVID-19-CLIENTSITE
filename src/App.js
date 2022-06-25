import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Navebar from "./components/Navebar/Navebar";
import Login from "./components/Authentication/Login/Login";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect } from "react";
import Chart from "./components/Dashboard/Chart/Chart";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BackTopBtn from "./components/BackTopBtn/BackTopBtn";
import Users from "./components/Dashboard/Users/Users";
import WorldcovidInfo from "./components/Dashboard/WorldcovidInfo/WorldcovidInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/Authentication/Login/Signup";
function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
    }
  }, [location]);
  return (
    <div className="overflow-x-hidden ">
      <ScrollToTop></ScrollToTop>
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Chart></Chart>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route
            path="worldcovidinfo"
            element={<WorldcovidInfo></WorldcovidInfo>}
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
      <BackTopBtn></BackTopBtn>
    </div>
  );
}

export default App;
