
let team1Total = 0
let team2Total = 0
let team3Total = 0
let team4Total = 0
let team5Total = 0
let team6Total = 0
let team7Total = 0
let team8Total = 0


let team1Score = document.getElementById("teamScore1")
let team2Score = document.getElementById("teamScore2")
let team3Score = document.getElementById("teamScore3")
let team4Score = document.getElementById("teamScore4")
let team5Score = document.getElementById("teamScore5")
let team6Score = document.getElementById("teamScore6")
let team7Score = document.getElementById("teamScore7")
let team8Score = document.getElementById("teamScore8")

let secondsArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let isBuzzerOn = false;
let timerInterval = 0 
const buzzerBtn = document.getElementById('timer')


//for displaying player input for team 1
const t1PlayerNames = document.getElementById("team1Players")
const t1NamesDisplay = document.getElementById("t1-player-names")
const enterBtnT1 = document.getElementById("enter-btn-t1")

enterBtnT1.addEventListener("click", function(){
    //t1Players.push(t1PlayerNames.value)
    t1NamesDisplay.textContent += t1PlayerNames.value + " "
})


//for displaying player input for team 2

const t2PlayerNames = document.getElementById("team2Players")
const t2NamesDisplay = document.getElementById("t2-player-names")
const enterBtnT2 = document.getElementById("enter-btn-t2")

enterBtnT2.addEventListener("click", function(){
    //t1Players.push(t1PlayerNames.value)
    t2NamesDisplay.textContent += t2PlayerNames.value + " "
})

//for displaying player input for team 3
const t3PlayerNames = document.getElementById("team3Players")
const t3NamesDisplay = document.getElementById("t3-player-names")
const enterBtnT3 = document.getElementById("enter-btn-t3")

enterBtnT3.addEventListener("click", function(){
    //t1Players.push(t1PlayerNames.value)
    t3NamesDisplay.textContent += t3PlayerNames.value + " "
})

//for displaying player input for team 4

const t4PlayerNames = document.getElementById("team4Players")
const t4NamesDisplay = document.getElementById("t4-player-names")
const enterBtnT4 = document.getElementById("enter-btn-t4")

enterBtnT4.addEventListener("click", function(){
    //t1Players.push(t1PlayerNames.value)
    t4NamesDisplay.textContent += t4PlayerNames.value + " "
})



//for displaying player input for team 5

const t5PlayerNames = document.getElementById("team5Players")
const t5NamesDisplay = document.getElementById("t5-player-names")
const enterBtnT5 = document.getElementById("enter-btn-t5")

enterBtnT5.addEventListener("click", function(){
    //t1Players.push(t1PlayerNames.value)
    t5NamesDisplay.textContent += t5PlayerNames.value + " "
})


//for displaying player input for team 6

const t6PlayerNames = document.getElementById("team6Players")
const t6NamesDisplay = document.getElementById("t6-player-names")
const enterBtnT6 = document.getElementById("enter-btn-t6")

enterBtnT6.addEventListener("click", function(){
    //t1Players.push(t1PlayerNames.value)
    t6NamesDisplay.textContent += t6PlayerNames.value + " "
})

//for displaying player input for team 7

const t7PlayerNames = document.getElementById("team7Players")
const t7NamesDisplay = document.getElementById("t7-player-names")
const enterBtnT7 = document.getElementById("enter-btn-t7")

enterBtnT7.addEventListener("click", function(){
    //t1Players.push(t1PlayerNames.value)
    t7NamesDisplay.textContent += t7PlayerNames.value + " "
})

//for displaying player input for team 8

const t8PlayerNames = document.getElementById("team8Players")
const t8NamesDisplay = document.getElementById("t8-player-names")
const enterBtnT8 = document.getElementById("enter-btn-t8")

enterBtnT8.addEventListener("click", function(){
    //t1Players.push(t1PlayerNames.value)
    t8NamesDisplay.textContent += t8PlayerNames.value + " "
})


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


//Adding points for Team 5
function add1PointT5() {
    team5Total += 1
    team5Score.textContent = team5Total
}

function add2PointsT5() {
    team5Total += 2
    team5Score.textContent = team5Total
}

function add3PointsT5() {
    team5Total += 3
    team5Score.textContent = team5Total
}

//Adding points for Team 6
function add1PointT6() {
    team6Total += 1
    team6Score.textContent = team6Total
}

function add2PointsT6() {
    team6Total += 2
    team6Score.textContent = team6Total
}

function add3PointsT6() {
    team6Total += 3
    team6Score.textContent = team6Total
}

//Adding points for Team 7
function add1PointT7() {
    team7Total += 1
    team7Score.textContent = team7Total
}

function add2PointsT7() {
    team7Total += 2
    team7Score.textContent = team7Total
}

function add3PointsT7() {
    team7Total += 3
    team7Score.textContent = team7Total
}

//Adding points for Team 8
function add1PointT8() {
    team8Total += 1
    team8Score.textContent = team8Total
}

function add2PointsT8() {
    team8Total += 2
    team8Score.textContent = team8Total
}

function add3PointsT8() {
    team8Total += 3
    team8Score.textContent = team8Total
}


function startQuiz() {
    const inputContainers = document.querySelectorAll(".playerDeets");
    inputContainers.forEach(container => {
        container.classList.remove('visible');
        container.classList.add('hidden');
    });
}

function resetGame() {
    team1Total = 0
    team2Total = 0
    team3Total = 0
    team4Total = 0
    team5Total = 0
    team6Total = 0
    team7Total = 0
    team8Total = 0

    team1Score.textContent = team1Total
    team2Score.textContent = team2Total
    team3Score.textContent = team3Total
    team4Score.textContent = team4Total
    team5Score.textContent = team5Total
    team6Score.textContent = team6Total
    team7Score.textContent = team7Total
    team8Score.textContent = team8Total

    const playerDeetsSections = document.querySelectorAll(".playerDeets");
    playerDeetsSections.forEach(section => {
        section.classList.remove('hidden');
        section.classList.add('visible');
    });

    const playerNamesDisplay = document.querySelectorAll(".player-names");
    playerNamesDisplay.forEach(display => {
        display.textContent = ""; // Clearing the text content
    });

    // Reattach event listeners if necessary (not needed if using class-based visibility)
}

function toggleBuzzer() {
    if (!isBuzzerOn) {
      startBuzzer()
      //buzzerBtn.textContent = 'Stop Buzzer'
    } else {
      //buzzerBtn.textContent = 'Start Buzzer'
      stopBuzzer()
    }
  }

function startBuzzer() {
    isBuzzerOn = true
    timerInterval = setInterval(updateTimer, 1000)
  }
  
function stopBuzzer() {
    isBuzzerOn = false
    clearInterval(timerInterval)
    secondsArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] //reset seconds array
    document.getElementById('timer').textContent = "0"
    buzzSound() 
  }
  
  function updateTimer() {
    const secondsRemaining = secondsArray.pop()
  
    if (secondsRemaining === undefined) {
      clearInterval(timerInterval)
      buzzerBtn.textContent = 'Start Buzzer'
      stopBuzzer()
        // Stop the buzzer after it finishes
    } else {
      document.getElementById('timer').textContent = secondsRemaining
    }
  }

  function buzzSound() {
    const buzzAudio = new Audio('buzzer.mp3');
    buzzAudio.play();
  }