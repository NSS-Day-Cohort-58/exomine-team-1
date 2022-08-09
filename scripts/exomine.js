import { governorsHtml } from "./governors.js"
import { facilitiesHtml } from "./facilities.js"

export const exomine = () => {
    return `<div class="first-row">
        <article class="governors">${governorsHtml()}</article>
    </div>
        <article class="second-row">${facilitiesHtml()}</article>
   
    </div>`
}

{/* <article class="minerals">${mineralsHtml()}</article>

<article class="facility-minerals">${facilityMinerals()}</article>
<article class="space-cart">${spaceCart()}</article> */}