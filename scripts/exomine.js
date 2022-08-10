// importing functions from other modules
import { governorsHtml } from "./governors.js"
import { facilitiesHtml } from "./facilities.js"
import { facilityMinerals } from "./facilityMinerals.js"
import { shoppingCart } from "./shoppingCart.js"
import { colonyInventory } from "./colonyMinerals.js"

export const exomine = () => {
    return `<div class="first-row">
        <article class="governors">${governorsHtml()}</article>
    <article class="colony-minerals">
        ${colonyInventory()}
    </article>
    </div>
        <article class="second-row">${facilitiesHtml()}</article>
    </div>
    <div class="third-row">
        <article class="facility-minerals">${facilityMinerals()}</article>
        <article class="shopping-cart">${shoppingCart()}</article>
    </div>`
}

{/* <article class="minerals">${mineralsHtml()}</article>

<article class="facility-minerals">${facilityMinerals()}</article>
<article class="space-cart">${spaceCart()}</article> */}