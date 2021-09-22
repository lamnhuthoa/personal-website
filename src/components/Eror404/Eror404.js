import React from 'react'
import "./Error404.css"

export default function Eror404() {
    return (
        <div className="error-content" style={{position: 'absolute', top: "0", left: "0"}}>
            <div className="error-container">
                <h1>Uh-oh...</h1>
                <img src="./img/under-construction.png" />
                <h1>Coming Soon</h1>
            </div>
        </div>
    )
}
