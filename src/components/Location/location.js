import React from "react";
import "./location.css";
import pin from "../../images/pin.png";

export default function Location(props)
{
    return(
        <div className="location">
            <img src={require("../../images/"+props.photo)} alt="location photo" className="location--photo" />
            <div className="location--info">
                <div className="location--map-info">
                    <div className="location--country">
                        <img src={pin} alt="Pin" className="location--country-pin" />
                        <h4 className="location--country-name">{props.country}</h4>
                    </div>
                    <a href={props.googleMapsLink} className="location--map-google-maps">View on Google Maps</a>
                </div>
                <h2 className="location--title">{props.title}</h2>
                <p className="location--date"><strong>{props.date}</strong></p>
                <p className="location--desc">{props.description}</p>
            </div>
        </div>
    );
}