import React from 'react'
import { Link } from "react-router-dom";



export default function Home() {
    return (

        <div id="container">
            <Link className="homepage-name" exact activeClassName="active" to="./contact" >
                <p id="me-intro" style={{ zIndex: "3", position: "sticky" }}>
                    Bradley
                </p>
                <p id="me-intro" className="mulick" style={{ zIndex: "2", position: "sticky" }}>
                    Mulick
                </p>
            </Link>
            <h1 className="home-links">
                <Link to="/work">WORK</Link>
                -
                <a href="https://github.com/BradleyMulick">

                    GITHUB
                </a>
            </h1>
        </div>

    )
}
