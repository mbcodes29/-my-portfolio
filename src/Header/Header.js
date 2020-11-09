import React, { Component } from 'react'
import './Header.css'


export default class Header extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         navbar_links: ''
    //     }
    // }

    // toggleNavbar = () => {
    //     if(this.state.navbar_links === ''){
    //         this.setState({
    //             navbar_links: 'toggled'
    //         })
    //     } else {
    //         this.setState({
    //             navbar_links: ''
    //         })
    //     }
    // }


    render() {
        // let all_navbar_links = `navbar-links ${this.state.navbar_links}`
        return(
                <div>
                    <h1 className='title'>Madison Brown</h1>
                    <header>
                        <ul className='navbar'>
                            <li><a href="https://github.com/mbcodes29" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/madison-brown-codes/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a href="mailto: mreidebrown2@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
                        </ul>
                     </header>
                </div>
        )
    }
    
}