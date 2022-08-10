import {getFacilityMinerals, getFacilities, getMinerals, setMineral, getTransientState, setFacility} from "./database.js"




        

export const facilityMinerals = () => { //creates the facility mineral header and radio buttons depending on what facility was clicked
    let facilityMinerals = getFacilityMinerals()
    let facilities = getFacilities()
    let minerals = getMinerals()
    const transientState = getTransientState()


    let HTMLstr = ""
    for (let facility of facilities) {
        if (facility.id === transientState.selectedFacility) {
            HTMLstr +=`<h3>Facility Minerals for ${facility.name}</h3>`
            for (let facilityMineral of facilityMinerals) {
                if (facility.id === facilityMineral.facilityId) {
                    for (let mineral of minerals) {
                        if (mineral.id === facilityMineral.mineralId && facilityMineral.quantity > 0) {
                            let selected = ""
                            if(transientState.selectedMineral === mineral.id){
                                selected = "checked"
                            }
                            HTMLstr +=`<li>
                            <input ${selected} type="radio" name="mineral" value="${facilityMineral.mineralId}" /> ${facilityMineral.quantity} tons of ${mineral.name}
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
            setMineral(parseInt(event.target.value))  //pushes selectedMineral key into transient state
        }
        
    }
)


document.addEventListener( 
    "change",
    (event) => {
        if (event.target.id === "facilitySelect") {
            setFacility(parseInt(event.target.value)) //pushes selectedFacility key into transient state  
        }
    }
)



