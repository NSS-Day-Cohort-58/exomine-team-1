import { getTransientState, getGovernors, getColonies, getMinerals, getColonyMinerals } from "./database.js"
import { facilityMinerals } from "./facilityMinerals.js"


let governors = getGovernors()
let minerals = getMinerals()
let colonies = getColonies()



//Change Event listener to change the Colony name to depending on the Governor who is currently selected 

// when a governor is selected, display the name of their colony 

export const colonyInventory = () => {
    let colonyMinerals = getColonyMinerals()
    let htmlString = ""
let transientState = getTransientState()

    if (transientState.selectedGovernor) {
    for (const governor of governors) {
        if (governor.id === transientState.selectedGovernor) {
            for (const colony of colonies) {
                if (colony.id === governor.colonyId) {
                    htmlString += `<h3>${colony.name} minerals</h3>`
                }
            }
        for (const colonyMineral of colonyMinerals) {
            if (transientState.selectedColony === colonyMineral.colonyId) {
                let foundMineral = minerals.find(mineral => {return mineral.id === colonyMineral.mineralId})
                if(colonyMineral.quantity === 1){
                    htmlString += `<li>${colonyMineral.quantity} ton of ${foundMineral.name}</li>`
                } else {
                    htmlString += `<li>${colonyMineral.quantity} tons of ${foundMineral.name}</li>`
                }
            }
        }
    
            }
        }

    }
    return htmlString
    }


