import { getGovernors, setColony, getColonies, getTransientState, setGovernor } from "./database.js"

const governors = getGovernors()

//define and export a function that creates the html for the governors dropdown
export const governorsHtml = () => {
    let state = getTransientState()
    return `<h3>Governors</h3><select id="governorSelect">
    <option value="">Choose One</option>
    ${
        governors.map(
            governor => {
                let selected = "" //will use this to add selected property only on the option that matches state (if any)
                if(governor.id === state.selectedGovernor){
                    selected = "selected" //setting this to "selected" if it matches state
                }
                if(governor.active === true){ //only if the governor is active
                return `<option value="${governor.id}--${governor.colonyId}" ${selected}>${governor.name}</option>`
                }
            }
        ).join("")
    }

    </select>`
}
let transientState = getTransientState()
let colonies = getColonies()
//Change Event listener to change the Colony name to depending on the Governor who is currently selected 
document.addEventListener("change", (changeEvent) => {
    const colonyNameChange = document.querySelector('.colony-minerals')
    if (changeEvent.target.id === "governorSelect") {
        for (const governor of governors) {
            if (transientState.selectedGovernor === governor.id) {
            for (const colony of colonies) {
                if (governor.colonyId === colony.id) {
                    colonyNameChange.innerText = `${colony.name} Minerals`
            }
        }
    }
    }
}
})


//change event listener to set the governor's associated colonyId in transient state
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governorSelect"){
            let [governorId, colonyId] = event.target.value.split("--")
            setColony(parseInt(colonyId))
            setGovernor(parseInt(governorId))
        }
    })