import React from 'react'
import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ImageToText from './components/ImageToText';
import Footer from './components/Footer';

function Home() {

  return (
    <div className="home--page">
      <div className="wavy--background">
        <Navbar />
        <FirstSection />
      </div>
      <SecondSection />
      <ImageToText />
      <Footer />
    </div>
  );
}

export default Home
