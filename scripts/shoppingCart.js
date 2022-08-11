import { getFacilities, getMinerals, getTransientState, purchaseMineral } from "./database.js"

//export and define shoppingCart function that creates the HTML for the shopping cart
export const shoppingCart = () => {
    let state = getTransientState()
    let facilities = getFacilities()
    let minerals = getMinerals()
    let htmlString = '<div class="cart"><h3>Space Cart</h3>'
    if(state.shoppingCart.length > 0){ //if state contains a facility and mineral,
        for(const fm of state.shoppingCart){
            let foundMineral = minerals.find(mineral => {return mineral.id === fm.mineralId}) //find those objects
            let foundFacility = facilities.find(facility => {return facility.id === fm.facilityId})
            htmlString += `<p>One ton of ${foundMineral.name} from ${foundFacility.name}</p>` //and make the html
        }
        htmlString += `<button id='purchaseButton'>Purchase Mineral!</button></div>`
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