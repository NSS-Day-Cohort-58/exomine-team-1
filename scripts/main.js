import { exomine } from "./exomine.js";

const mainContainer = document.querySelector("#container")

export const renderHtml = () => {
    mainContainer.innerHTML = exomine()
}

//state changed listener to reload html
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderHtml()
})

renderHtml()