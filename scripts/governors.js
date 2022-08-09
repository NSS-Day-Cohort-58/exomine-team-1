import { getGovernors } from "./database.js"

const governors = getGovernors()

// define and export a function to render the governors html dropdown
export const governorsHtml = () => {
    return `<h3>Governors</h3><select id="governorSelect">
    <option value="">Choose One</option>
    ${
        governors.map(
            governor => {
                if(governor.active === true){  //only if the governor is active
                    return `<option value="${governor.id}">${governor.name}</option>`
                
                }
            }
        ).join("")
    }

    </select>`
}