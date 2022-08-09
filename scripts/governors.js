import { getGovernors, setColony } from "./database.js"

const governors = getGovernors()

//define and export a function that creates the html for the governors dropdown
export const governorsHtml = () => {
    return `<h3>Governors</h3><select id="governorSelect">
    <option value="">Choose One</option>
    ${
        governors.map(
            governor => {
                if(governor.active === true){ //only if the governor is active
                return `<option value="${governor.colonyId}">${governor.name}</option>`
                }
            }
        ).join("")
    }

    </select>`
}

//set main container
const mainContainer = document.querySelector("#container")

//change event listener to set the governor's associated colonyId in transient state
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governorSelect"){
            setColony(parseInt(event.target.value))
        }
    })