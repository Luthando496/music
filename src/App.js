import { Routes,Route } from 'react-router-dom';
import './App.css';
import Music from './pages/Music';
import Home from './pages/Home';
import Search from './pages/Search';
import MusicResults from './pages/MusicResults';
import About from './pages/About';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/music/search/:name" element={<Search />} />
        <Route path="/music/:id" element={<MusicResults />} />
        {/* <Route path="/artist/:id" element={<ArtistResults />} /> */}
      </Routes>
    </>
  );
}

export default App;
