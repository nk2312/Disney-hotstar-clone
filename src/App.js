import React from "react";
import Header from "./components/UI/Header";
import "./App.css";
import Home from "./components/Home/Home";
import { Link, Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Details from "./components/Details/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Router/ErrorPage";
import Login from "./components/Login/Login";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
     </Router>
    // <React.Fragment>
    //   <Header />
    //   <RouterProvider router={router} />
    // </React.Fragment>
  );
}

export default App;
