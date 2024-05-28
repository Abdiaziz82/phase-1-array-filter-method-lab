// Code your solution here

function findMatching(drivers , sam) {
    
    return drivers.filter(driver => driver.toLowerCase() === sam.toLowerCase());

}


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to check if a name matches in the data structure
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}





