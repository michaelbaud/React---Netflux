import React, { useState, useEffect } from 'react'

// Components
import { Header } from '../components'
import { Home } from '../routes'

// dbMovie
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../dbMovie/config'

// CSS
import './App.css'

const App = () => {

  const [state, setState] = useState({
    loading: false,
    movies: [],
    badge: 0,
    image: "",
    mTitle: "",
    mDesc: "",
    activePage: 0,
    totalPages: 0,
    listMode: "popular",
    searchedText: ""
  })

  const fetchPopularDbMovies = async () => {
    const newPage = state.activePage + 1
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${newPage}&language=fr`
    const response = await fetch(url)
    return response.json()
  }

  const fetchSearchedMovie = async () => {
    const newPage = state.activePage + 1
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${state.searchedText}&page=${newPage}&language=fr`
    const response = await fetch(url)
    return response.json()
  }

  useEffect(() => {
    const loadMovies = async () => {
      setState({ ...state, loading: true })
      let resultS, pagE, total_pageS
      try {
        if (state.listMode === "popular") {
          console.log(state.listMode)
          const { results, page, total_pages } = await fetchPopularDbMovies()
          resultS = results
          pagE = page
          total_pageS = total_pages
        } else if (state.listMode === "search") {
          console.log(state.listMode)
          const { results, page, total_pages } = await fetchSearchedMovie()
          resultS = results
          pagE = page
          total_pageS = total_pages
        }
      } catch (err) {
        console.error("loadMovies : ", err)
      }
      setState({
        ...state,
        movies: [...state.movies, ...resultS],
        loading: false,
        activePage: pagE,
        totalPages: total_pageS,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${resultS[0].backdrop_path}`,
        mTitle: resultS[0].title,
        mDesc: resultS[0].overview
      })
    }
    loadMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.listMode])

  const loadMore = async () => {
    setState({ ...state, loading: true })
    let resultS, pagE, total_pageS
    try {
      if (state.listMode === "popular") {
        const { results, page, total_pages } = await fetchPopularDbMovies()
        resultS = results
        pagE = page
        total_pageS = total_pages
      } else if (state.listMode === "search") {
        const { results, page, total_pages } = await fetchSearchedMovie()
        resultS = results
        pagE = page
        total_pageS = total_pages
      }
    } catch (err) {
      console.error("loadMore : ", err)
    }
    setState({
      ...state,
      movies: [...state.movies, ...resultS],
      loading: false,
      activePage: pagE,
      totalPages: total_pageS,
    })
  }

  const handleSearch = (value) => {
    setState({ ...state, listMode: "search", movies: [], activePage: 0, searchedText: value, loading: true })
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
