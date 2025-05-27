import {useState} from 'react';
import './App.css'
import movieInfo from './movies.json';

function NavBar() {
  const [status, setStatus] = useState(true)

  return (
    <header>
      <h1>Assignment 1</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Login" : "Logout"}
      </button>
    </header>
  )
}

function Movie({name, year, rating}) {
  return (
    <>
    <p>{name}</p>
    <p>{year}</p>
    <p>{rating}</p>
    </>
  )
}

function MovieList({data}) {
  return (
    <>
    {
      data.map((movie) => {
        return <Movie name={movie.name} year={movie.year} rating={movie.rating}/>
      })
    }
    </>
  )
}

function App() {
  return (
  <div>
    <NavBar />
    <MovieList data={movieInfo.movielist}/>
  </div>)
}

export default App
