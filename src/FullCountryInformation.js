import React,{useState} from "react"
import CountryFlag from "./CountryFlag"
import CountryDetails from "./CountryDetails"

function FullCountryInformation({countryInfo,goToMainPage})
{
  // console.log("Yoooo")
  // console.log(countryInfo)
    let [fullCountry,setFullCountry]=useState(countryInfo);
    let CountryList = require("./data.json");
    function updateFullCountry (alphaCode)
    {
      let NewFullCountryObject=CountryList.filter((country) =>
        country.alpha3Code.includes(alphaCode)
      );
      console.log("i am here");
      console.log(NewFullCountryObject[0].languages);
      setFullCountry(NewFullCountryObject[0])
    }
    return (
        <div className="full-country">
        
                 <CountryFlag fullCountry ={fullCountry} />
                 <CountryDetails fullCountry ={fullCountry} updateFullCountry={updateFullCountry} />
                 <button class="back-button"onClick={goToMainPage}>Back</button>
        </div>
    )
}

export default FullCountryInformation;