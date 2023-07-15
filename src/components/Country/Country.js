import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, region, population, name, flags} = props.country;
    // console.log(props.Country);
    return (
        <div className='country bg-lightblue'>
            <h2>Country: {name.common} </h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h4>Region: {region}</h4>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;