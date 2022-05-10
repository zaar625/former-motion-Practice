
import './App.css';
import { useEffect, useState } from 'react'
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion'

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  console.log(filtered)

  useEffect(() => {
    fetchPopular();
  }, [])

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko&page=1')
    const movies = await data.json();
    // console.log(movies)
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        layout
        className='popular-movies'>
        <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}

export default App;
