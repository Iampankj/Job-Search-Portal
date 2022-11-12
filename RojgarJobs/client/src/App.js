import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home';
import JobInfo from './pages/JobInfo';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AppliedJobs from './pages/AppliedJobs';
import Profile from './pages/Profile';
import PostJobs from './pages/PostJobs';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Appliedjobs' exact element={<AppliedJobs/>} />
          <Route path='/postjobs' exact element={<PostJobs/>} />
          <Route path='/profile' exact element={<Profile/>} />
          <Route path='/jobinfo' exact element={<JobInfo/>} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
