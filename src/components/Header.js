import React from 'react'

// Dependencies
import { BsFilm } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

const Header = ({ badge }) => {
    return (
        <header className="header">
            <div className="header--movie--container">
                <BsFilm className="header--movie" />
            </div>
            <h1>NETFLUX</h1>
            <div className="header--heart--badge--container">
                <FaHeart className="header--heart" />
                <div className="header--badge" >{badge}</div>
            </div>
        </header>
    )
}

export { Header }
