import React, { Component } from 'react'
import './Projects.css'
import hogwarts from '../images/hogwarts.png'
import speakez from '../images/speakez.png'
import goat from '../images/goat.png'


export default class Projects extends Component {
    render(){
        return(
            <section className="projects">
               <div className="projects-row">
               <div className="speak-ez">
                   <h2>Speak EZ</h2>
                        <img src={speakez} className="speak-ez-img" alt="speak-ez screenshot"/>
                        <p className="projects-p">
                        'Speak-EZ' is an app that utilizes spaced repetition to allow the user to learn a foreign language in a quick and efficient manner.
                        <br/>
                        <br/>

                        Technologies: React, Node.js, PostgreSQL, JavaScript, Express, HTML, CSS
                        </p>
                </div>
                <div className="goat">
                   <h2>GOAT</h2>
                        <img src={goat} className="goat-img" alt="GOAT screenshot"/>
                        <p className="projects-p">
                        'Goat' is a free goal tracking app that allows you to create new goals, earn points for goals completed, and redeem those points for rewards.
                        <br/>
                        <br/>
                        
                        Technologies: React, Node.js, PostgreSQL, JavaScript, Express, HTML, CSS, Cypress.
                        </p>
                </div>
                <div className="hogwarts">
                   <h2>Create a Hogwarts Student</h2>
                        <img src={hogwarts} className="hogwarts-img" alt="Create a Hogwarts Student screenshot"/>
                        <p className="projects-p">
                        'Create a Hogwarts Student' allows the user to create their own Hogwarts student as part of the Harry Potter franchise. The user can login to their account, choose student characteristics which are stored in a database, and are then randomly sorted into a Hogwarts house.
                        <br/>
                        <br/>

                        Technologies: React, Node.js, PostgreSQL, JavaScript, Express, HTML, CSS.
                        </p>
                </div>
               </div>

            </section>
        )
    }
}