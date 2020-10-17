import React from "react"

function Country({countryObject,clickCountry})
{
    // console.log(countryObject.region);

    function handleClick()
    {
        clickCountry(countryObject);
    }

    return(
        <div className="country" onClick={handleClick}>
            <img src={countryObject.flag} alt="Flag" className="flag"></img>
            <h2 className="country-name">{countryObject.name}</h2>
            <ul className="description-list">
                <li>population = {countryObject.population}</li>
                <li>Region= {countryObject.region}</li>
                <li>Capital= {countryObject.capital}</li> 
            </ul>
        </div>
    )
}
// name popluation region capital

export default Country;