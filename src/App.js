import React from "react";
import "./styles.css";
import Header from "./components/Header/header";
import Location from "./components/Location/location";
import data from "./locations";

export default function App()
{
    const locations = data.map(location => {
        return(
            <Location
                key={location.id}
                {...location}
            />
        );
    });
    return(
        <div>
            <Header />
            <section className="locations">
                {locations}
            </section>
        </div>
    );
}
