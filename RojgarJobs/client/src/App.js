import "./App.css";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppliedJobs from "./pages/AppliedJobs";
import Profile from "./pages/Profile";
import PostJobs from "./pages/PostJobs";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import { useState, CSSProperties, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJogs } from "./redux/actions/jobActions";
import PostedJobs from "./pages/PostedJobs";
import EditJob from "./pages/EditJob";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJogs());
  }, []);

  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <FadeLoader color={"#001529"} />
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/Appliedjobs" exact element={<AppliedJobs />} />
            <Route path="/postjobs" exact element={<PostJobs />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/jobs/:id" exact element={<JobInfo />} />
            <Route path="/posted" exact element={<PostedJobs />} />
            <Route path="/editjob/:id" exact element={<EditJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


