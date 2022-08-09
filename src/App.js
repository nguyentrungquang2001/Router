import "./App.css";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Customers from "./components/Customers";
import Laptop from "./components/Laptop";
import Desktop from "./components/Desktop";
import BestSeller from "./components/BestSeller";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import NotFound from "./components/NotFound";
import PrivateRoutes from "./components/PrivateRoutes";
import Personal from "./components/Personal";
import Account from "./components/Account";
import Login from "./components/Login";
export const UserContext = createContext();
export default function App() {
  const courses = [
    { id: "HTML", name: "quang" },
    { id: "CSS" },
    { id: "Javascript" },
    { id: "jQuery" },
    { id: "ReactJS" },
    { id: "Angular" },
    { id: "Vue" },
  ];
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark min-height-100vh">
          <Sidebar />
        </div>
        <main className="col-10">
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />}>
                <Route index element={<BestSeller />} />
                <Route path="laptop" element={<Laptop />} />
                <Route path="desktop" element={<Desktop />} />
              </Route>
              <Route path="/customers" element={<Customers />} />
              <Route path="/courses" element={<Courses courses={courses} />} />
              <Route
                path="/courses/:courseId/:name"
                element={<CourseDetail />}
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login />}>
                <Route path="personal" element={<Personal />} />
                <Route path="account" element={<Account />} />
              </Route>
            </Routes>
          </UserContext.Provider>
        </main>
      </div>
    </div>
  );
}
