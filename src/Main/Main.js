import React, { Component } from 'react'
import './Main.css';



export default class Main extends Component {
    render(){
        return(
            <div className="main-text">
                <p>
                I am a software developer, an aspiring game developer and 3D artist based in Chicago, Illinois who is passionate about creating valuable and memorable user experiences.
                </p>
                <br/>
                <p>
                I have an interest in tech, video games, film, and art in a variety of mediums. My main career goals are developing and improving apps and software that encourage cultivating new and creative ideas, designing websites that are informative, aesthetically pleasing, and user-friendly, and collaborating and foster productive friendships with other like-minded developers and creatives in tech.
                </p>
                <br/>
                <p>
                If you like what you see here and are interested in working with me, please <a href="mailto: mreidebrown2@gmail.com" target="_blank" rel="noreferrer">contact me!</a>
                </p>
            </div>
        )
    }
}