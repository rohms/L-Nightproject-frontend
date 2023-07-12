import React from 'react'
import Gradient from 'rgt'

const NotFound = () => {
    return (
        <div className="not-found">
            <Gradient dir="left-to-right" from="#e30cad" to="#ff8000"><h1>404</h1></Gradient>
            <h2>This page was not found! Unicorns cry!</h2>
            <img src="https://media.tenor.com/0jI-YXeywSsAAAAC/nyan-cat-cat.gif" width="390" height="390" alt="Nyan Cat Cat GIF - Nyan Cat Cat Kawaii Cat GIFs" />
        </div>
    )
}

export default NotFound