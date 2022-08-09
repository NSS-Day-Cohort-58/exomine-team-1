import { getGovernors, getColonies } from "./database.js"

const governors = getGovernors()

//function that creates the html for the governors dropdown
export const governorsHtml = () => {
    return `<h3>Governors</h3><select id="governorSelect">
    <option value="">Choose One</option>
    ${
        governors.map(
            governor => {
                if(governor.active === true){
                return `<option value="${governor.id}">${governor.name}</option>`
                }
            }
        ).join("")
    }

    </select>`
}

let colonies = getColonies()
//Change Event listener to change the Colony name to depending on the Governor who is currently selected 
document.addEventListener("change", (changeEvent) => {
    const colonyNameChange = document.querySelector('.colony-mineral-heading')
    if (changeEvent.target.id === "governorSelect") {
        for (const governor of governors) {
            if (parseInt(changeEvent.target.value) === governor.id) {
            for (const colony of colonies) {
                if (governor.colonyId === colony.id) {
                    colonyNameChange.innerText = `${colony.name} Minerals`
            }
        }
    }
    }
}
})

//set main container
const mainContainer = document.querySelector("#container")

//change event listener to set the GovernorId in transient state
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governorSelect"){
            // setGovernor(parseInt(event.target.value))
        }
    })