import React from 'react'

// Components
import { Poster } from './index'

// dbMovie
import { IMAGE_BASE_URL, POSTER_SIZE } from '../dbMovie/config'

const PosterList = ({ movies }) => {

    const renderPoster = movies.map(movie => {
        const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`
        return (
            <Poster
                key={movie.id}
                imgSrc={imgSrc}
                wished={false}
                mTitle={movie.title}
                mDesc={movie.overview}
            />
        )
    })

    return (
        <div className="posterList">
            <h3 className="posterList--title">NOUVEAUX FILMS</h3>
            <div className="posterList--grid">
                {renderPoster}
            </div>
        </div>
    )
}

export { PosterList }
