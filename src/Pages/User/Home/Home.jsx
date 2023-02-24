import React from 'react';
import Navbar from '../../../components/User/Navbar';
import Footer from './Footer';
import './home.css';
function Home() {
  return (
    <>
    <Navbar/>
       <img
            className="image"
            src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          />
           <div className="contant">
          <h1 className="index-contant">Welcome to our collage</h1>
          <div className="harvi">
            <div className="btn-1 c1">GET STARTED</div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home