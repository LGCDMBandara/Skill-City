import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Builders from './Services/Builders';
import Labour from './Services/Labour';
import Other from './Services/Other';
import Project from './Projects/Project';
import Blog from './Blogs/Blog';
import Contact from './Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/builders' element={<Builders />} />
          <Route path='/labours' element={<Labour />} />
          <Route path='/others' element={<Other />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
