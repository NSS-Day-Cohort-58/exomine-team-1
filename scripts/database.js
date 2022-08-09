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
        {id: 1, facilityId: 1, mineralId: 4, quantity: 0},
        {id: 2, facilityId: 2, mineralId: 5, quantity: 0},
        {id: 3, facilityId: 3, mineralId: 2, quantity: 0},
        {id: 4, facilityId: 1, mineralId: 1, quantity: 0},
        {id: 5, facilityId: 4, mineralId: 1, quantity: 0},
        {id: 6, facilityId: 1, mineralId: 2, quantity: 0},
        {id: 7, facilityId: 5, mineralId: 1, quantity: 0},
        {id: 8, facilityId: 5, mineralId: 3, quantity: 0},
        {id: 9, facilityId: 2, mineralId: 1, quantity: 0},
        {id: 10, facilityId: 1, mineralId: 1, quantity: 0}
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

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
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



export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }


