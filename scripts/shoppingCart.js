import { getFacilities, getMinerals, getTransientState, purchaseMineral } from "./database.js"

//export and define shoppingCart function that creates the HTML for the shopping cart
export const shoppingCart = () => {
    let state = getTransientState()
    let facilities = getFacilities()
    let minerals = getMinerals()
    let htmlString = '<div class="cart"><h3>Space Cart</h3>'
    if(state.selectedFacility && state.selectedMineral){ //if state contains a facility and mineral,
        let foundMineral = minerals.find(mineral => {return mineral.id === state.selectedMineral}) //find those objects
        let foundFacility = facilities.find(facility => {return facility.id === state.selectedFacility})
        htmlString += `<p>One ton of ${foundMineral.name} from ${foundFacility.name}</p><button id='purchaseButton'>Purchase Mineral!</button></div>` //and make the html
    } else {
        htmlString += `</div>`
    }
    return htmlString
}

//invoke the purchase mineral function when the purchase button is clicked
document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === 'purchaseButton'){
            purchaseMineral()
        }
    })