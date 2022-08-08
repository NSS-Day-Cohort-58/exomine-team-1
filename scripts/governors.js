import { getGovernors } from "./database.js"

const governors = getGovernors()


export const governorsHtml = () => {
    return `<h3>Governors</h3><select id="governorSelect">
    <option value="">Choose One</option>
    ${
        governors.map(
            governor => {
                return `<option value="${governor.id}">${governor.name}</option>`
            }
        ).join("")
    }

    </select>`
}