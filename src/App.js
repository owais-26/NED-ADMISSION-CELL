import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faqs from "./component/Navbar/Faqs";
import Footer from "./component/Nav&foot/Footer";
import Home from "./component/Navbar/Home";
import Navbar from "./component/Nav&foot/Navbar";
import Dept from "./component/Navbar/Dept";
import Guidelines from "./component/Navbar/Guidelines";
import Merit from "./component/Navbar/Merit";
import PastPaper from "./component/Navbar/PastPaper";
import News from "./component/Navbar/News";
import Test from "./component/Navbar/Test";
import Courses from "./component/Navbar/Courses";
import WhatsApp from "./component/Navbar/WhatsApp";
import Blogs from "./component/Navbar/Blogs";
import Blog1 from "./component/Navbar/Blog1";

import Editor from "./component/Navbar/Editor";
import AddBlogs from "./component/Navbar/AddBlogs";






function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route  path="/" element={<Home />}>
            {" "}
          </Route>
          <Route  path="/faqs" element={<Faqs />}>
            {" "}
          </Route>
          <Route  path="/dept" element={<Dept />}>
            {" "}
          </Route>
          <Route  path="/guidelines"  element={<Guidelines />}>
            {" "}
          </Route>
          <Route  path="/merit"  element={<Merit />}>
            {" "}
          </Route>
          <Route  path="/pastpaper"  element={<PastPaper />}>
            {" "}
          </Route>
          <Route  path="/news"  element={<News />}>
            {" "}
          </Route>
          <Route  path="/tests"  element={<Test />}>
            {" "}
          </Route>
          <Route  path="/onlinecourses" element={<Courses />}>
            {" "}
          </Route>
          <Route  path="/blogs" element={<Blogs />}>
            {" "}
          </Route>
          <Route  path="/addblog" element={<AddBlogs/>}>
            {" "}
          </Route>
          <Route  path="/editor" element={<Editor />}>
            {" "}
          </Route>
          <Route path="/blogs/:id/:title" element={<Blog1/>} >

          </Route>
          
          
        </Routes>
        <WhatsApp  />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
