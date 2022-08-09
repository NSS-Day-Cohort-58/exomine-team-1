import { getGovernors } from "./database.js"

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