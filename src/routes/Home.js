import React from 'react'

import { HeaderImg, SearchBar, PosterList, LoadButton } from '../components'

const Home = ({ state, onSearchClick, onButtonClick }) => {

    const { mTitle, mDesc, image, movies, loading } = state

    return (
        <div className="home">
            <HeaderImg
                title={mTitle}
                overview={mDesc}
                imgSrc={image}
            />
            <SearchBar onSearchClick={onSearchClick} />
            <PosterList movies={movies} />
            <LoadButton loading={loading} onButtonClick={onButtonClick} />
        </div>
    )
}

export { Home }
