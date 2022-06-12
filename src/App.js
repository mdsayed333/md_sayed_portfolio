import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Home/Projects/ProjectDetails';
import Blog from './Pages/Blog/Blog';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/projectDetails/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
