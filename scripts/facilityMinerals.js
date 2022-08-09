import {getfacilityMinerals, getFacilities, getMinerals, setMineral} from "./database.js"
/*
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
*/
const facilityMinerals = () => {
    let facMinerals = getfacilityMinerals()
    let facilities = getFacilities()
    let minerals = getMinerals()
   
    let HTMLstr = ""
    let facilityArray = [] //will use this empty array to push facMineralObjects with matching facilityIds into it
for (let facMineral of facMinerals) {

    const foundMineral = minerals.find( 
        (min) => {
            return min.id === facMineral.mineralId //this locates the mineralObject id and matches it to the mineralId from facMineralObject
        }
    )
    mineralName = foundMineral.name //this takes that found mineralObject and sets its name to a variable

    const foundFacility = facilities.find(
        (facility) => {
            return facility.id === facMineral.facilityId
        }
    )

    facilityName = foundFacility.name
  
    for (let facility of facilities) //iterate facilities array to find matching facilityIds in the facilityMinerals array
        if (facility.id === facMineral.facilityId) {
            facilityArray.push(facMineral) //add those facMineralObjects with the matching facilityIds to the empty array above
            HTMLstr += `<div>Facility Minerals for ${facilityName}</div>`
            for (let facility in facilityArray) {//iterating the newly made array with matching facility Ids
                
                const foundInnerMineral = minerals.find(
                    (min) => {
                        return min.id === facility.mineralId
                    }
                )
                innerMineralName = foundInnerMineral.name
            
                HTMLstr +=`<li>
                    <input type="radio" name="mineral" value="${facility.mineralId}" /> ${facility.quantity} tons of ${innerMineralName}
                </li>`
            }
        }
        else {
            HTMLstr += `<div>Facility Minerals for ${facilityName}</div>`
            `<li>
            <input type="radio" name="mineral" value="${facMineral.mineralid}" /> ${facMineral.quantity} tons of ${mineralName}
            </li>`
        }}
    return HTMLstr
}




document.addEventListener( 
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value)) 
        }
        
    }
)
  
  

/*ALGORITHM
create a funciton that iterates the facilityMinerals array 
create an empty array and set to matchingFacilities variable
if facility ids are matching, then push them into the empty array.


function must pull all matching facilities (by id) and iterate through them to display all mineralIds and their quantity for a given facility

*/
