import React from "react"
import Country from "./Country"

function CountriesContainer({countries,clickCountry})
{
    // console.log("Hey I am in body")
    return (<div className="countries-container">

        { countries.map(  (element,index)=>  (<Country key={index} countryObject={element} clickCountry={clickCountry}/>)    ) }
    </div>)
}
export default CountriesContainer;