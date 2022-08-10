const database = {
    transientState: {},
    governors: [
        {id: 1, name: "Patricia Purdy", active: true, colonyId: 1},
        {id: 2, name: "Katrina Bahnhger ", active: true, colonyId: 2},
        {id: 3, name: "Lola Wolff", active: true, colonyId: 1 },
        {id: 4, name: "Damon Hartmann", active: true, colonyId: 5},
        {id: 5, name: "Justin Dority", active: true, colonyId: 6},
        {id: 6, name: "Jonathan Woodard", active: true, colonyId: 7},
        {id: 7, name: "Nora Szeto", active: true, colonyId: 3},
        {id: 8, name: "Steve Brownlee", active: true, colonyId: 5}, 
        {id: 9, name: "Val Freeman", active: false, colonyId: 3}, 
        {id: 10, name: "Caroline Madison", active: true, colonyId: 4},
        {id: 11, name: "Devin Kent", active: false, colonyId: 4} 
    ],
    colonies: [
        {
            id: 1,
            name: "Atlas Colony"
        },
        {
            id: 2,
            name: "Orbital Colony"
        },
        {
            id: 3,
            name: "Europa Colony"
        },
        {
            id: 4,
            name: "Valhalla Colony"
        },
        {
            id: 5,
            name: "Pheonix Colony"
        },
        {
            id: 6,
            name: "Terra Colony"
        },
        {
            id: 7,
            name: "Apollo Colony"
        },
        
    ],
    minerals: [
        {
            id: 1,
            name: "Plutonium"
        },
        {
            id: 2,
            name: "Quartz"
        },
        {
            id: 3,
            name: "Topaz"
        },
        {
            id: 4,
            name: "Uranium"
        },
        {
            id: 5,
            name: "Crude Oil"
        }
    ],
    facilities: [
        {id: 1, name: "Echo Mesa", active: true},
        {id: 2, name: "Tangled Shore", active: true},
        {id: 3, name: "Arcadian Valley", active: true},
        {id: 4, name: "Hellas Basin", active: false},
        {id: 5, name: "Ishtar Sink", active: false},
    ],
    colonyMinerals: [
        {id: 1, colonyId: 1, mineralId: 1, quantity: 0},
        {id: 2, colonyId: 1, mineralId: 2, quantity: 0},
        {id: 3, colonyId: 2, mineralId: 3, quantity: 0},
        {id: 4, colonyId: 3, mineralId: 5, quantity: 0},
        {id: 5, colonyId: 5, mineralId: 4, quantity: 0},
        {id: 6, colonyId: 3, mineralId: 3, quantity: 0},
        {id: 7, colonyId: 4, mineralId: 2, quantity: 0},
        {id: 8, colonyId: 6, mineralId: 1, quantity: 0},
        {id: 9, colonyId: 7, mineralId: 4, quantity: 0},
        {id: 10, colonyId: 4, mineralId: 5, quantity: 0},
        {id: 11, colonyId: 7, mineralId: 1, quantity: 0}
    ],
    facilityMinerals: [
        {id: 1, facilityId: 1, mineralId: 4, quantity: 34},
        {id: 2, facilityId: 2, mineralId: 5, quantity: 12},
        {id: 3, facilityId: 3, mineralId: 2, quantity: 65},
        {id: 4, facilityId: 1, mineralId: 1, quantity: 200},
        {id: 5, facilityId: 4, mineralId: 1, quantity: 15},
        {id: 6, facilityId: 1, mineralId: 2, quantity: 8},
        {id: 7, facilityId: 5, mineralId: 1, quantity: 41},
        {id: 8, facilityId: 5, mineralId: 3, quantity: 60},
        {id: 9, facilityId: 2, mineralId: 1, quantity: 984},
        {id: 10, facilityId: 1, mineralId: 1, quantity: 49}
    ]
}


export const getTransientState = () => {
    return structuredClone(database.transientState) 
}
export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}


export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilitymin => ({...facilitymin}))
}


export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setMineral= (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setColonyMineral = (colonyMineralId) => {
    database.transientState.selectedColonyMineral = colonyMineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setFacilityMineral= (facilityMineralId) => {
    database.transientState.selectedFacilityMineral = facilityMineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}



//Function that will be called when the button is clicked
export const purchaseMineral = () => {

    // Copy the current state of user choices
    const state = {...database.transientState}

    //bring in colonyMinerals, facilityMinerals
    let colonyMinerals = getColonyMinerals()
    let facilityMinerals = getFacilityMinerals()

    //establish a boolean variable to see if there's an existing colonyMineral in the database
    let foundColonyMineral = false

    //look through colonyMinerals, finding where the colonyId and mineralId match transient state
    // using forEach to look through the copy of colonyMinerals
    // then using the index parameter to modify the correct record in the real database's colonyminerals
    colonyMinerals.forEach((colonyMineral, index) =>  {
        if(colonyMineral.colonyId === state.selectedColony){
            if(colonyMineral.mineralId === state.selectedMineral){
                foundColonyMineral = true
                database.colonyMinerals[index].quantity++ //increase the quantity
            }
        } 
    })

    //if the colonyMineral didn't exist yet, create it
    if(foundColonyMineral === false){
        database.colonyMinerals.push(
            {
                id: database.colonyMinerals.length + 1,
                mineralId: state.selectedMineral,
                colonyId: state.selectedColony,
                quantity: 1
            }
        )
    }

    //look through the facilityMinerals to find the one that was purchased and decrease the quantity
    // using forEach to look through the copy of facilityMinerals
    // then using the index parameter to modify the correct record in the real database's facilityMinerals
    facilityMinerals.forEach((facilityMineral, index) => {
        if(facilityMineral.facilityId === state.selectedFacility){
            if(facilityMineral.mineralId === state.selectedMineral){
                database.facilityMinerals[index].quantity--
            }
        }
    })

    //reset mineral in transient state, but keep the facility and governor (events will update state of all if they change facility of governor)
    database.transientState.selectedMineral = ""

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
