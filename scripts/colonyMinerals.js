
// If governor.id === transientState.selectedgovernor 

let htmlstring = ""

for (const governor of governors) {
    if (governor.id === transientState.selectedgovernor) {

    }
}

let colonies = getColonies()
//Change Event listener to change the Colony name to depending on the Governor who is currently selected 
document.addEventListener("click", (clickEvent) => {
    const inventoryList = document.querySelector('.colony-mineral-heading')
    if (clickEvent.target.id === "inventory") {
        for (const governor of governors) {
            if (transientState.selectedgovernor === governor.id) {
            for (const colony of colonies) {
                if (governor.colonyId === colony.id) {
                   inventoryList.innerText = `${colony.name} Minerals`
            }
        }
    }
    }
}
})