import React from 'react';
import Navbar from './shared/Navbar';
import Hero from './shared/Hero';
import Category from './shared/Category';
import RecentInts from './shared/RecentInts';
import Footer from './shared/Footer';

const Home = () => {
  return (
    <div className='container'>
      <Navbar className='sticky top-0'/>
      <hr />
      <Hero/>
      <Category/>
      <RecentInts/>
      <Footer/>
    </div>
  );
}

export default Home;
