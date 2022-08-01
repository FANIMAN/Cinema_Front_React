import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ticket from "./../images/movie_tickets.jpg";
import "./Home.css";

export default class Home extends Component {

    render() {
        return (
            <div className="text-center">
            <h2>Find a movie to watch tonight!</h2>
            <hr />
            <Link to="/movies">
            <img src={Ticket} alt="movie ticket" />
            </Link>
            </div>
            
        );
    }
}
