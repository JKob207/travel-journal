import React from "react";
import "./location.css";
import photo from "../../images/japan.jpg";
import pin from "../../images/pin.png";

export default function Location()
{
    return(
        <div className="location">
            <img src={photo} alt="location photo" className="location--photo" />
            <div className="location--info">
                <div className="location--map-info">
                    <div className="location--country">
                        <img src={pin} alt="Pin" className="location--country-pin" />
                        <h4 className="location--country-name">JAPAN</h4>
                    </div>
                    <a href="#" className="location--map-google-maps">View on Google Maps</a>
                </div>
                <h2 className="location--title">Mount Fuji</h2>
                <p className="location--date"><strong>12 Jan, 2021 - 24 Jan, 2021</strong></p>
                <p className="location--desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    );
}