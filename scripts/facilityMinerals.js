import {getfacilityMinerals, getFacilities, getMinerals, setMineral} from "./database.js"
/*
facilityMinerals: [
    {id: 1, facilityId: 1, mineralId: 4, quantity: 0},
    {id: 2, facilityId: 2, mineralId: 5, quantity: 0},
    {id: 3, facilityId: 3, mineralId: 2, quantity: 0},
    {id: 4, facilityId: 1, mineralId: 1, quantity: 0},
    {id: 5, facilityId: 4, mineralId: 1, quantity: 0},
    {id: 6, facilityId: 1, mineralId: 2, quantity: 0},
    {id: 7, facilityId: 5, mineralId: 1, quantity: 0},
    {id: 8, facilityId: 5, mineralId: 3, quantity: 0},
    {id: 9, facilityId: 2, mineralId: 1, quantity: 0},
    {id: 10, facilityId: 1, mineralId: 1, quantity: 0}
]
*/
const facilityMinerals = () => {
    let facMinerals = getfacilityMinerals()
    let facilities = getFacilities()
    let minerals = getMinerals()
   
   let HTMLstr = ""

   for (let mineral of facMinerals) {
    const foundMineral = minerals.find( 
        (min) => {
            return min.id === mineral.mineralId //this locates the mineralObject id and matches it to the mineralId from facilityMineralObject
        }
    )
    mineralName = foundMineral.name //this takes that found mineralObject and sets its name to a variable

    const foundFacility = facilities.find(
        (facility) => {
            return facility.id === mineral.facilityId
        }
    )

    facilityName = foundFacility.name



    HTMLstr += `<div>Facility Minerals for ${facilityName}</div>
    if foundMineral 
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
