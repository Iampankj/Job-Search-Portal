import "./App.css";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppliedJobs from "./pages/AppliedJobs";
import Profile from "./pages/Profile";
import PostJobs from "./pages/PostJobs";
import { useState, CSSProperties, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJogs } from "./redux/actions/jobActions";


function App() {
  const {loader} = useSelector(state=>state.loaderReducer)

  const dispatch = useDispatch()
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
          <Route path="/" exact element={<Home />} />
          <Route path="/Appliedjobs" exact element={<AppliedJobs />} />
          <Route path="/postjobs" exact element={<PostJobs />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/jobs/:id" exact element={<JobInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
