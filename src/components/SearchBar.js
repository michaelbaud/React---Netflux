import React, { useState } from 'react'

// Dependencies
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ onSearchClick }) => {

    const [value, setValue] = useState("")

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <div className="searchBar--container">
            <div className="searchBar">
                <input
                    type="text"
                    className="searchBar--input"
                    placeholder="Rechercher un film"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={e => e.keyCode === 13 && onSearchClick(value)}
                />
                <span
                    className="searchBar--submit"
                    onClick={() => onSearchClick(value)}
                >
                    <FaSearch className="searchIcon" />
                </span>
            </div>
        </div>
    )
}

export { SearchBar }
