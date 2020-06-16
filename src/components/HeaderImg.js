import React from 'react'

const HeaderImg = ({ title, overview, imgSrc }) => {

    return (
        <div className="headerImg">
            <img src={imgSrc} alt="Poster du film" />
            <div className="headerImg--overlay">
                <h2 className="headerImg--overlay__title">{title}</h2>
                <p className="headerImg--overlay__desc">{overview}</p>
            </div>
        </div>
    )
}

export { HeaderImg }
