import React from 'react'

// Components
import { Poster } from './index'

// dbMovie
import { IMAGE_BASE_URL, POSTER_SIZE } from '../dbMovie/config'

const PosterList = ({ movies, listMode }) => {

    const renderPoster = movies.map(movie => {

        const imgSrc = movie.poster_path !== null ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}` : 'images/no_image.jpg'
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
            <h3 className="posterList--title">
                {listMode === "popular" && "NOUVEAUX FILMS"}
                {listMode === "search" && "RESULTATS"}
            </h3>
            <div className="posterList--grid">
                {renderPoster}
            </div>
        </div>
    )
}

export { PosterList }
