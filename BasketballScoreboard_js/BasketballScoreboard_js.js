let pointsOfTeam1 = document.getElementById("scoreboxOfTeam1")
let pointsOfTeam2 = document.getElementById("scoreboxOfTeam2")

let team1Score = 0
let team2Score = 0

function onePointsForTeam1(){
    team1Score += 1
    pointsOfTeam1.textContent = team1Score
    console.log(team1Score)
}

function twoPointsForTeam1(){
    team1Score += 2
    pointsOfTeam1.textContent = team1Score
    console.log(team1Score)
}

function threePointsForTeam1(){
    team1Score += 3
    pointsOfTeam1.textContent = team1Score
    console.log(team1Score)
}

function onePointsForTeam2(){
    team2Score += 1
    pointsOfTeam2.textContent = team2Score
    console.log(team1Score)
}

function twoPointsForTeam2(){
    team2Score += 2
    pointsOfTeam2.textContent = team2Score
    console.log(team1Score)
}

function threePointsForTeam2(){
    team2Score += 3
    pointsOfTeam2.textContent = team2Score
    console.log(team1Score)
}
