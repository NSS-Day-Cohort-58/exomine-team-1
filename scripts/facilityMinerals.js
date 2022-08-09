import {getfacilityMinerals, getFacilities, getMinerals, setMineral} from "./database.js"




const facilityMinerals = () => {
    let facMinerals = getfacilityMinerals()
    let facilities = getFacilities()
    let minerals = getMinerals()
   
   let HTMLstr = ""

   for (let mineral of facMinerals) {
    const foundMineral = minerals.find( 
        (min) => {
            return min.id === mineral.mineralId
        }
    )
    mineralName = foundMineral.name

    const foundFacility = facilities.find(
        (facility) => {
            return facility.id === mineral.facilityId
        }
    )

    facilityName = foundFacility.name



    HTMLstr += `<div>Facility Minerals for ${facilityName}</div>
    <li>
        <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.quantity} tons of ${mineralName}
    </li>`
    }
    
    return HTMLstr
}


document.addEventListener( 
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value)) 
        }
        
    }
)
  
  

/*ALGORITHM
create a funciton that iterates the facilityMinerals array 
create HTML string for minerals 
use .find to match mineralId with mineral.id and facility.id with facilityId

*/
