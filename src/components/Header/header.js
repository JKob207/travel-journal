import React from "react";
import earth from "../../images/earth-icon.png";
import "./header.css";

export default function Header()
{
    return(
        <header className="header">
            <div className="header--logo-section">
                <img src={earth} alt="Earth icon" className="header--logo" />
                <h3 className="header--title">my travel journal</h3>
            </div>
        </header>
    );
}