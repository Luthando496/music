import React from 'react'
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, facilis praesentium. Hic explicabo, distinctio odit doloribus adipisci dolorem officiis dolore aperiam quam, eius reiciendis dignissimos mollitia! Provident, beatae quasi! Molestiae natus aperiam culpa unde ratione dolorem error ipsum, accusantium odit voluptas perferendis quibusdam debitis id.</p>
        </div>
    </section>
    </>
  )
}

export default About;