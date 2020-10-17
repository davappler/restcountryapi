// eslint-disable-next-line
import React,{useState,useEffect} from 'react';
import './App.css';
import CountriesContainer from "./CountriesContainer"
import SearchBox from "./SearchBox"
import RegionDropDown from "./RegionDropDown"
import FullCountryInformation from "./FullCountryInformation"

//need to add a back button which will simply set displayFullCountry as null
function App() {

  // eslint-disable-next-line
  let data=require("./data.json");
  let regionsList=["Asia"];

  let [displayFullCountry,setdisplayFullCountry]=useState(null);
  let [searchValue,setSearchValue]=useState("");
  let [countriesList,setCountriesList]=useState(data);
  let [theme,setTheme]=useState("light");

  //this function sets the valye of displayFullCountry to the clicked country then it does conditional rendering between main content and full display of selected country.
  function clickCountry(country)
  {
    setdisplayFullCountry(country);
  }

  function changeTheme()
  {
    if(theme==="light")
    setTheme("dark")
    else
    setTheme("light")
  }
 

  function CreateRegionsList()
  {
    for(let i=0;i<data.length;i++)
    {
      let region=data[i].region;
      if( !(regionsList.includes(region)) ) // If does not include then add
      {
        regionsList.push(region);
      }
    }
  }

  CreateRegionsList();

  function selectedRegion(value)
  {
    let regionList=data.filter(country=>country.region.toLowerCase().includes(value.toLowerCase()))
    setCountriesList(regionList);
  }

  function searchAndUpdate(inputValue)
  {
    setSearchValue(inputValue);
    let searchList=data.filter(country=>country.name.toLowerCase().includes(searchValue.toLowerCase()))
    setCountriesList(searchList);
  }

  function goToMainPage()
  {
    setdisplayFullCountry(null);
  }

  return (
  <div className={theme}>
    {
      displayFullCountry? (
  <>
  <button className="change-theme" onClick={changeTheme}>Change Theme</button>
  <FullCountryInformation countryInfo={displayFullCountry} goToMainPage={goToMainPage}/>
  </>
  
  )
  :
  (<div>
  <button className="change-theme" onClick={changeTheme}>Change Theme</button>
    <SearchBox searchUpdate={searchAndUpdate}/>
    <RegionDropDown Regions={regionsList} updateRegion={selectedRegion}/>
    <CountriesContainer countries={countriesList} clickCountry={clickCountry}/>
    </div>)
    }
  </div> 
  );

  // return(<fullCountryInfo displayFullCountry={displayFullCountry} />)
}

// data.map( (country) => function(country){
//   console.log("I am morr inside")
//   console.log(country.region)
//   let region=country.region;
//   if( !regionsList.includes(region) ) // If does not include then add
//   {
//     regionsList.concat(region);
//   }

// } )

export default App;
