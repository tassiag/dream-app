import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div>

            <div className="about">
                <p>Soon.
                </p>
                <Link className="linkback" to='/'> close this 👋</Link>
            </div>

        </div>
    );

}