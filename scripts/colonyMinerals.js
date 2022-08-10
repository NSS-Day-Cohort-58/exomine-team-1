
// If governor.id === transientState.selectedgovernor 

let htmlstring = ""

for (const governor of governors) {
    if (governor.id === transientState.selectedgovernor) {

    }
}

let colonies = getColonies()
//Change Event listener to change the Colony name to depending on the Governor who is currently selected 
document.addEventListener("click", (clickEvent) => {
    const inventoryList = document.querySelector('.colony-mineral-heading')
    if (clickEvent.target.id === "inventory") {
        for (const governor of governors) {
            if (transientState.selectedgovernor === governor.id) {
            for (const colony of colonies) {
                if (governor.colonyId === colony.id) {
                   inventoryList.innerText = `${colony.name} Minerals`
            }
        }
    }
    }
}
})

export const colonyInventory = () => {
    let htmlString = ""
    for const
}

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