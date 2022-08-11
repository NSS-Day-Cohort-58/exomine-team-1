import {getFacilityMinerals, getFacilities, getMinerals, setMineral, getTransientState, setFacility, addFacilityMineralToCart, removeFacilityMineralFromCart } from "./database.js"




        

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
                            for(let cart of transientState.shoppingCart){
                                if(cart.mineralId === facilityMineral.mineralId && cart.facilityId === facilityMineral.facilityId){
                                    selected = "checked"
                                }
                            }
                            HTMLstr +=`<li>
                            <input ${selected} type="checkbox" name="mineral" value="${facilityMineral.facilityId}--${facilityMineral.mineralId}" /> ${facilityMineral.quantity} tons of ${mineral.name}
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
            if(event.target.checked === false){
                removeFacilityMineralFromCart(event.target.value)
            } else {
            setMineral(event.target.value)  //pushes selectedMineral key into transient state
            addFacilityMineralToCart() //adds the facility mineral to the shopping cart array
            }
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



