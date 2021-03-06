import React, { useState } from 'react'

// Dependencies
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

const Poster = ({ imgSrc, wished, mTitle }) => {

    const [hover, setHover] = useState(false)

    const remove = () => {
        // A implémenter à Redux
        console.log('Remove avec Redux')
    }

    const add = () => {
        // A implémenter à Redux
        console.log('Add avec Redux')
    }

    const deleteAccent = (str) => {
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        return str
    }

    return (
        <div className="posterList--grid__item">
            <div
                className="poster"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <img src={imgSrc} alt="Poster" className="poster--img" />
                {
                    hover ? (
                        <div className="poster--overlay">
                            <h2>{deleteAccent(mTitle)}</h2>
                            <h3 className="poster--overlay__title">LISTE DE SOUHAITS</h3>
                            {
                                wished ?
                                    <FaHeart className="poster--icon" name="heart" onClick={remove} />
                                    : <FiHeart className="poster--icon" name="heart-o" onClick={add} />
                            }
                        </div>
                    ) : null
                }
            </div>
        </div >
    )
}

export { Poster }
