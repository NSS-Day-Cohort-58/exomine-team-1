import { governorsHtml } from "./governors.js"
import { facilitiesHtml } from "./facilities.js"
import { facilityMinerals } from "./facilityMinerals.js"
import { shoppingCart } from "./shoppingCart.js"

export const exomine = () => {
    return `<div class="first-row">
        <article class="governors">${governorsHtml()}</article>
    </div>
    <article class="colony-minerals">
        <h3 class="colony-mineral-heading">Colony Minerals</h3></article>
        <article class="second-row">${facilitiesHtml()}</article>
        <article class="facility-minerals">${facilityMinerals()}${shoppingCart()}</article>
    </div>`
}

{/* <article class="minerals">${mineralsHtml()}</article>

<article class="facility-minerals">${facilityMinerals()}</article>
<article class="space-cart">${spaceCart()}</article> */}



