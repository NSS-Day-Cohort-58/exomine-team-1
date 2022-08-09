import {getFacilityMinerals, getFacilities, getMinerals, setMineral, getTransientState, setFacility} from "./database.js"





export const facilityMinerals = () => {
    let facilityMinerals = getFacilityMinerals()
    let facilities = getFacilities()
    let minerals = getMinerals()
    const transientState = getTransientState()
   
    let HTMLstr = ""
    for (let facility of facilities) {
        if (facility.id === transientState.selectedFacility) {
            HTMLstr +=`<div>Facility Minerals for ${facility.name}</div>`
            for (let facilityMineral of facilityMinerals) {
                if (facility.id === facilityMineral.facilityId) {
                    for (let mineral of minerals) {
                        if (mineral.id === facilityMineral.mineralId) {
                            HTMLstr +=`<li>
                            <input type="radio" name="mineral" value="${facilityMineral.mineralId}" /> ${facilityMineral.quantity} tons of ${mineral.name}
                            </li>`
                        }
                    }
                }
            }
        }
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

document.addEventListener( 
    "change",
    (event) => {
        if (event.target.id === "facilitySelect") {
            setFacility(parseInt(event.target.value)) 
        }
        
    }
)
  
