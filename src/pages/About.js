import React from 'react'
import Footer from '../components/Footer';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>

    <Navbar />
    <section className='about'>
        <header className="about-header">
            <div className="about-content flex justify-center items-center">
                <div className="about-inner border-solid border-cyan-400">
                <h1 className=''>Music For You Brought<br /> To You By People Who<br /> Care For You.</h1>
                </div>
            </div>
        </header>

        <div className="about-hero">
            <Latest />

        </div>

        <Footer />
    </section>
    </>
  )
}

export default About;