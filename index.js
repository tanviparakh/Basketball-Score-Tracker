
let homeTotal = 0
let guestTotal = 0


let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")


//Adding points for home

function add1PointHome() {
    homeTotal += 1
    homeScore.textContent = homeTotal
}

function add2PointsHome() {
    homeTotal += 2
    homeScore.textContent = homeTotal
}

function add3PointsHome() {
    homeTotal += 3
    homeScore.textContent = homeTotal
}

//Adding points for guest

function add1PointGuest() {
    guestTotal += 1
    guestScore.textContent = guestTotal
}

function add2PointsGuest() {
    guestTotal += 2
    guestScore.textContent = guestTotal
}

function add3PointsGuest() {
    guestTotal += 3
    guestScore.textContent = guestTotal
}

function resetGame() {
    homeTotal = 0
    guestTotal = 0
    homeScore.textContent = homeTotal
    guestScore.textContent = guestTotal
}



