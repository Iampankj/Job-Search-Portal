import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home';
import JobInfo from './pages/JobInfo';
import {BrowserRouter, Route } from 'react-router-dom'
import AppliedJobs from './pages/AppliedJobs';
import Profile from './pages/Profile';
import PostJobs from './pages/PostJobs';



function App() {
  return (
    <div className="App">
      
      <Home/>
      

    </div>
  );
}

export default App;
