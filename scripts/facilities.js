// *Importing our facilities getter Function from database.js
import { getFacilities, getTransientState } from "./database.js";

// *Storing the getFacilities() function inside of the facilities variale.
let facilities = getFacilities()


// *create htmlstring to display dropdown menu for facility choice.
// *store the beginning of the html inside of the htmlstring variable.
// *Using a for of loop, Iterate through each facility object of the facilities array and add the specified string to the htmlstring variable, using string interpolation. 
// *When loop finish, add the closing dropdown tag to the string.
// *Return htmlString variable. 
export const facilitiesHtml = () => {
    let state = getTransientState()
    let htmlString = `<h3>Facilities</h3><select id="facilitySelect">
    <option value="">Choose One</option>`
    
    for (const facility of facilities) {
        if (facility.active === true) {
        htmlString += `<option value="${facility.id}"`
        if(facility.id === state.selectedFacility){ //checking state to see if current iterating facility matches transient state, making it selected if so
            htmlString += `selected`
        }
        htmlString += `>${facility.name}</option>`
    }

}
htmlString += `</select>`
    return htmlString
}



