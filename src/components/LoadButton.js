import React from 'react'

// Components
import { Spinner } from './index'

const LoadButton = ({ loading, onButtonClick }) => {
    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) : (
                        <div className="loadButton" onClick={onButtonClick}>
                            <h3 className="loadButton--text">VOIR PLUS</h3>
                        </div>
                    )
            }
        </>
    )
}

export { LoadButton }
