
let team1Total = 0
let team2Total = 0
let team3Total = 0
let team4Total = 0


let team1Score = document.getElementById("teamScore1")
let team2Score = document.getElementById("teamScore2")
let team3Score = document.getElementById("teamScore3")
let team4Score = document.getElementById("teamScore4")


//Adding points for team 1

function add1PointT1() {
    team1Total += 1
    team1Score.textContent = team1Total
}

function add2PointsT1() {
    team1Total += 2
    team1Score.textContent = team1Total
}

function add3PointsT1() {
    team1Total += 3
    team1Score.textContent = team1Total
}

//Adding points for Team 2

function add1PointT2() {
    team2Total += 1
    team2Score.textContent = team2Total
}

function add2PointsT2() {
    team2Total += 2
    team2Score.textContent = team2Total
}

function add3PointsT2() {
    team2Total += 3
    team2Score.textContent = team2Total
}

//Adding points for Team 3

function add1PointT3() {
    team3Total += 1
    team3Score.textContent = team3Total
}

function add2PointsT3() {
    team3Total += 2
    team3Score.textContent = team3Total
}

function add3PointsT3() {
    team3Total += 3
    team3Score.textContent = team3Total
}


//Adding points for Team 4
function add1PointT4() {
    team4Total += 1
    team4Score.textContent = team4Total
}

function add2PointsT4() {
    team4Total += 2
    team4Score.textContent = team4Total
}

function add3PointsT4() {
    team4Total += 3
    team4Score.textContent = team4Total
}



function resetGame() {
    team1Total = 0
    team2Total = 0
    team3Total = 0
    team4Total = 0
    team1Score.textContent = team1Total
    team2Score.textContent = team2Total
    team3Score.textContent = team3Total
    team4Score.textContent = team4Total
}



