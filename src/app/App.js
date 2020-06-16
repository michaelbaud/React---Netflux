import React, { useState, useEffect } from 'react'

// Components
import { Header } from '../components'
import { Home } from '../routes'

// dbMovie
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../dbMovie/config'

// CSS
import './App.css'

const App = () => {

  const [state, setState] = useState({
    loading: false,
    movies: [
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475557,
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias, a cumque voluptatem enim blanditiis. Impedit eos obcaecati error molestiae.",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      },
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475558,
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias, a cumque voluptatem enim blanditiis. Impedit eos obcaecati error molestiae.",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      },
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475559,
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias, a cumque voluptatem enim blanditiis. Impedit eos obcaecati error molestiae.",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      },
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475554,
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias, a cumque voluptatem enim blanditiis. Impedit eos obcaecati error molestiae.",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      }
    ],
    badge: 0,
    image: "",
    mTitle: "",
    mDesc: "",
    activePage: 0,
    totalPages: 0,
    searchText: ""
  })

  const fetchDbMovie = async () => {
    const npage = state.activePage + 1
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${npage}&language=fr`
    const response = await fetch(url)
    return response.json()
  }

  useEffect(() => {
    try {
      const loadMovies = async () => {
        const { results, page, total_pages } = await fetchDbMovie()
        setState({
          ...state,
          movies: results,
          loading: false,
          activePage: page,
          totalPages: total_pages,
          image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDesc: results[0].overview
        })
      }
      loadMovies()
    } catch (err) {
      console.log('loadMovie', err.stack)
    }
    // eslint-disable-next-line
  }, [])

  const handleSearch = value => {
    console.log(value)
  }

  const loadMore = async () => {
    try {
      setState({ ...state, loading: true })
      const { results, page, total_pages } = await fetchDbMovie()
      setState({
        ...state,
        movies: [...state.movies, ...results],
        loading: false,
        activePage: page,
        totalPages: total_pages,
      })
    } catch (err) {
      console.log('loadMore', err.stack)
    }
  }

  return (
    <div className="App">
      <Header badge={state.badge} />
      <Home
        state={state}
        onSearchClick={handleSearch}
        onButtonClick={loadMore}
      />
    </div>
  )
}

export default App
