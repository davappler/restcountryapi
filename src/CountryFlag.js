import React from "react"

const CountryFlag =({fullCountry}) => {
return (
    <img className="full-country-flag" src = {fullCountry.flag} alt = ""  />
)
}
export default CountryFlag