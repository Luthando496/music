import React from 'react'
import Header from '../components/Header'
import GridMusic from '../components/GridMusic'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'




const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home Musica</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <Header />
    <GridMusic />
    <section className="grid-album w-screen">
        <div className="album ">



            <div className="album-wrapper flex justify-center align-center mt-10">
                <div className="album-content">
                    <div className="img">
                        <img src="img/drums-gd5c5ad84d_640.jpg" alt="" />
                    </div>
                    <div className="content-wrapper">
                        <h1>Frando Kally</h1>
                        <h3>10 November, 2019</h3>
                        <h4>00:00 00:02</h4>
                    </div>
                </div>
                <div className="btn-wrapper flex items-center">
                    <Link to="/" className="btn btn-outline-dark btn-block">Buy Now</Link>
                </div>
            </div>


            <div className="album-wrapper flex justify-center align-center mt-10">
                <div className="album-content">
                    <div className="img">
                        <img src="img/drums-gd5c5ad84d_640.jpg" alt="" />
                    </div>
                    <div className="content-wrapper">
                        <h1>Frando Kally</h1>
                        <h3>10 November, 2019</h3>
                        <h4>00:00 00:02</h4>
                    </div>
                </div>
                <div className="btn-wrapper flex items-center">
                    <Link to="/" className="btn btn-outline-dark btn-block">Buy Now</Link>
                </div>
            </div>


            <div className="album-wrapper flex justify-center align-center mt-10">
                <div className="album-content">
                    <div className="img">
                        <img src="img/drums-gd5c5ad84d_640.jpg" alt="" />
                    </div>
                    <div className="content-wrapper">
                        <h1>Frando Kally</h1>
                        <h3>10 November, 2019</h3>
                        <h4>00:00 00:02</h4>
                    </div>
                </div>
                <div className="btn-wrapper flex items-center">
                    <Link to="/" className="btn btn-outline-dark btn-block">Buy Now</Link>
                </div>
            </div>



            <div className="album-wrapper flex justify-center align-center mt-10">
                <div className="album-content">
                    <div className="img">
                        <img src="img/drums-gd5c5ad84d_640.jpg" alt="" />
                    </div>
                    <div className="content-wrapper">
                        <h1>Frando Kally</h1>
                        <h3>10 November, 2019</h3>
                        <h4>00:00 00:02</h4>
                    </div>
                </div>
                <div className="btn-wrapper flex items-center">
                    <Link to="/" className="btn btn-outline-dark btn-block">Buy Now</Link>
                </div>
            </div>


            <div className="album-wrapper flex justify-center align-center mt-10">
                <div className="album-content">
                    <div className="img">
                        <img src="img/drums-gd5c5ad84d_640.jpg" alt="" />
                    </div>
                    <div className="content-wrapper">
                        <h1>Frando Kally</h1>
                        <h3>10 November, 2019</h3>
                        <h4>00:00 00:02</h4>
                    </div>
                </div>
                <div className="btn-wrapper flex items-center">
                    <Link to="/" className="btn btn-outline-dark btn-block">Buy Now</Link>
                </div>
            </div>


            <div className="album-wrapper flex justify-center align-center mt-10">
                <div className="album-content">
                    <div className="img">
                        <img src="img/drums-gd5c5ad84d_640.jpg" alt="" />
                    </div>
                    <div className="content-wrapper">
                        <h1>Frando Kally</h1>
                        <h3>10 November, 2019</h3>
                        <h4>00:00 00:02</h4>
                    </div>
                </div>
                <div className="btn-wrapper flex items-center">
                    <Link to="/" className="btn btn-outline-dark btn-block">Buy Now</Link>
                </div>
            </div>


        </div>
    </section>


    <section className="stage">
        <div className="stage-container">
            <div className="stage-img">
                <div className="stage-content">
                    <h1>OUT NOW</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae incidunt facere ad, animi cumque! Accusamus vitae sequi officia, officiis ea nemo atque! Ab dicta cupiditate ea id ducimus totam nostrum debitis .</p>
                </div>
            </div>
        </div>
    </section>


    <section className="artist-grid w-screen">
        <div className="artist-content-wrapper">
            <div className="artist-content">
                <h1>All Your Favourite Artists In 1 Place</h1>
                <h3>Play And Search for All Albums</h3>
            </div>
        </div>
        <div className="artist-container">
            <div className="artist-img art-1 relative">
                <img src="img/guitar-g2f145afc7_1280.jpg"  alt="" />
                <div className="overlay"></div>
            </div>
            <div className="artist-img art-2">
                <img src="img/guitar-g2f145afc7_1280.jpg"  alt="" />
                <div className="overlay"></div>
            </div>
            <div className="artist-img art-3">
                <img src="img/guitar-g2f145afc7_1280.jpg"  alt="" />
                <div className="overlay"></div>
            </div>
            <div className="artist-img art-4">
                <img src="img/guitar-g2f145afc7_1280.jpg"  alt="" />
                <div className="overlay"></div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Home