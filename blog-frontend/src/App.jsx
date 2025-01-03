import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import ErrorPage from "./error/ErrorPage";
import "./assets/bootstrap.min.css";
import Profile from "./admin/Profile";
import Dashboard from "./admin/Dashboard";
import CreateBlog from "./component/CreateBlog";
import Navbar from "./component/Nav&Footer/Navbar";
import MobileSidebar from "./component/Nav&Footer/MobileSidebar";
import Footer from "./component/Nav&Footer/Footer";
import Home from "./component/homePage/Home";
import Contact from "./component/Contact/Contact";
import Blogs from "./component/Blog/Blog";
import BlogDetails from "./component/Blog/BlogDetails";
import { DataContext } from "./component/context/store";
import { useState } from "react";
import ScrollToTop from "./component/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Category from "./component/Blog/Category";
function App() {
  const [email, setEmail] = useState("");
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <ToastContainer />
        <MobileSidebar />
        <DataContext.Provider value={{ email, setEmail }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/create/blog" element={<CreateBlog />} />
            <Route path="/user/profile/:id" element={<Profile />} />
            <Route path="/user/admin/dashboard" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </DataContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
