import React from "react";
// import CountryList from "./CountryList";
// import Country from "./Country"

const CountryDetails = ({fullCountry,updateFullCountry }) => {
 
  const handleClick = (event) => {
    let alphaCode = event.target.value; 
    updateFullCountry(alphaCode);
   
    
  };
  return (
    <div>
      <div>
        <h2 className="country-name">{fullCountry.name}</h2>
        <ul>
          <li>Native Name</li>
          <li>population : {fullCountry.population}</li>
          <li>Region: {fullCountry.region}</li>
          <li>Capital: {fullCountry.capital}</li>
          <li>Top Level Domain:{fullCountry.topLevelDomain}</li>
          <li>
            Languages:{" "}
            {fullCountry.languages.map((language, index) => {
              return <span key={index}>{language.name + " "}</span>;
            })}
          </li>
        </ul>
      </div>
      <div>
        Border Countries{" "}
        {fullCountry.borders.map((borderCountry, index) => {
          return (
            <button key={index} value={borderCountry} onClick={handleClick}>
              {borderCountry}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default CountryDetails;
