import React from 'react'
import hero from "../Images/hero-placeholder.jpg"
import "../Components/Styles/Homepage.css"

const Homepage = () => {
    return (
        <div>
            <h2>Homepage</h2>
            <img className="heropicture" src={hero}></img>
            <h1>Welcome to meet new people in the L-Night.</h1>
            <h2>The group for queer and lesbian women in Berlin.</h2>
        </div>
    )
}

export default Homepage
