import React, { useState, useEffect, useRef } from 'react'

const HeaderImg = ({ title, overview, imgSrc }) => {

    const readMoreRef = useRef()
    const etcRef = useRef()
    const descRef = useRef()

    const [readMore, setReadMore] = useState(false)
    const [splitedDesc, setSplitedDesc] = useState([])

    useEffect(() => {
        if (overview.length > 2) {
            const splitAt = index => x => [x.slice(0, index), x.slice(index)]
            setSplitedDesc(splitAt(200)(overview))
        }
    }, [overview.length])

    const handleReadMore = () => {
        setReadMore(!readMore)

        etcRef.current.hidden = !etcRef.current.hidden
    }

    return (
        <div className="headerImg">
            <img src={imgSrc} alt="Poster du film" />
            <div className="headerImg--overlay">
                <h2 className="headerImg--overlay__title">{title}</h2>
                <p className="headerImg--overlay__desc" ref={descRef}>
                    {splitedDesc[0]}
                    {readMore && splitedDesc[1]}
                    <span ref={etcRef}>...</span>
                </p>
                {
                    readMore
                        ? <div onClick={handleReadMore} ref={readMoreRef}>Voir moins ...</div>
                        : <div onClick={handleReadMore} ref={readMoreRef}>Voir plus ...</div>
                }
            </div>
        </div>
    )
}

export { HeaderImg }
