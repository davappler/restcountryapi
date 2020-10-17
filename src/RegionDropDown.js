import React from "react"
// regions will be a list of total regions 
function RegionDropDown({Regions,updateRegion})
{
    function handleClick(event)
    {
        updateRegion(event.target.value)   
    }

    return(<div>
<form>
    <label htmlFor="regions"></label>
    <select onChange={ handleClick } name="regions" id="regions">
     {
         Regions.map((singleRegion,index)=> <option key={index} value={singleRegion}>{singleRegion}</option>)
     }
    </select>
</form>

    </div>)
}

export default RegionDropDown;