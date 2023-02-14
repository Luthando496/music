import React from 'react'
import Footer from '../components/Footer'
import Top from '../components/Top'
import Latest from '../components/Latest'
import Navbar from '../components/Navbar'
import {Helmet} from 'react-helmet'


const Music = () => {

  return (
    <>
    <Helmet>
        <title>Musica</title>
        <meta name="description" content="Helmet application" />
    </Helmet>

    <Navbar />
    <Top />
    <Latest />
    <Footer />
    </>
  )
}

export default Music