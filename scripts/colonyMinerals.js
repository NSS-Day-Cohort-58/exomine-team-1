import { getTransientState, getGovernors, getColonies, getMinerals, getColonyMinerals } from "./database.js"
import { facilityMinerals } from "./facilityMinerals.js"


let governors = getGovernors()
let minerals = getMinerals()
let colonies = getColonies()
let colonyMinerals = getColonyMinerals()

//Change Event listener to change the Colony name to depending on the Governor who is currently selected 

// when a governor is selected, display the name of their colony 

export const colonyInventory = () => {
    let htmlString = ""
    let quantityCounter = 0
let transientState = getTransientState()

    if (transientState.selectedGovernor) {
    for (const governor of governors) {
        if (governor.id === transientState.selectedGovernor) {
            for (const colony of colonies) {
                if (colony.id === governor.colonyId) {
                    htmlString += `<h3>${colony.name} minerals</h3>`
                }
            }
    if (transientState.selectedMineral) {
        for (const colonyMineral of colonyMinerals) {
            if (transientState.selectedMineral === colonyMineral.mineralId) {
                let foundMineral = minerals.find(mineral => {return mineral.id === transientState.selectedMineral})
                htmlString += `<li>${quantityCounter} tons of ${foundMineral.name}</li>`
            }
        }
    }
            }
        }
return htmlString
    }
    }


