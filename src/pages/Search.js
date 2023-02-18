import React,{useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import {useDispatch,useSelector} from 'react-redux'
import { fetchSingleProduct } from '../store/actions'
import Navbar from '../components/Navbar'
import {Helmet} from 'react-helmet'
import Loader from '../components/Loader'
import Error from '../components/Error'



const Search = () => {
    const {name} = useParams()

    const dispatch = useDispatch()
    const {singlePro,loading} = useSelector(state => state.product)



    useEffect(()=>{
        dispatch(fetchSingleProduct(name))
    },[dispatch,name])

    console.log(singlePro)

  return (
    <>
    <Helmet>
        <title>{name} Results</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <Navbar />

    {loading && <Loader />}

<section className="albums">
    <h1 className="h1">Most Popular Songs of {name}</h1>
    

    {loading && <Loader />}
    
    
    {singlePro && singlePro.data && singlePro.data.length < 1 && <Error name={'No Results of that search available'} />}
    {singlePro === null && <Error name={'No Results. Netlify'} />}


    <div className="albums-container">
    {singlePro && singlePro.length > 0 && singlePro.map(music => (
            music.albums && music.albums.items.map(i =>(
        <>
        {/* <Link to={`/music/${music.id}`} key={music.id}> */}
        <div className="card">
            <div className="card-img">

                 <img src={i.data.coverArt.sources[2].url} alt="artist1" />
            </div>
            <div className="card-body">
                <h1 className="m-4">Artist: {i.data.artists.items[0].profile.name} {i.data.artists.items[1] && i.data.artists.items[1].profile.name}</h1>
                <h1 className="m-4">Album: {i.data.name}</h1>
                {/* <h1 className="m-4 ">Title: {music.title_short}</h1> */}
                <h2 className="m-4">Year : {i.data.date.year}</h2>
            </div>
        </div>
        {/* </Link> */}
        </>
            ))
    ))}
    </div>

    <div className="albums-container">
    {singlePro && singlePro.length > 0 && singlePro.map(music => (
            music.tracks && music.tracks.map(i =>(
        <>
        <Link to={`/music/${i.data.id}`} key={i.data.id}>
        <div className="card">
            <div className="card-img">

                 <img src={i.data.albumOfTrack.coverArt.sources[2].url} alt="artist1" />
            </div>
            <div className="card-body">
                <h1 className="m-4">Song: {i.data.albumOfTrack.name}</h1>
                <h1 className="m-4">Artist: {i.data.artists.items[0].profile.name} {i.data.artists.items[1] && i.data.artists.items[1].profile.name}</h1>
                {/* <h2 className="m-4">Year : {i.data.date.year}</h2> */}
            </div>
        </div>
        </Link>
        </>
            ))
    ))}
    </div>

    </section>

    <Footer />
    </>
  )
}

export default Search