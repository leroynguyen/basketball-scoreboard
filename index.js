//Home

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreEl = document.getElementById("home-score-el")
let homeScore = 0

//Guest

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreEl = document.getElementById("guest-score-el")
let guestScore = 0

//New Game button
let newGameBtn = document.getElementById("new-game-btn")

//

function increaseHomeScoreOne() {
  homeScore += 1
  homeScoreEl.textContent = homeScore
  winnerHighlight()
}

function increaseHomeScoreTwo() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
  winnerHighlight()
}

function increaseHomeScoreThree() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
  winnerHighlight()
}

//

function increaseGuestScoreOne() {
  guestScore += 1
  guestScoreEl.textContent = guestScore
  winnerHighlight()
}

function increaseGuestScoreTwo() {
  guestScore += 2
  guestScoreEl.textContent = guestScore
  winnerHighlight()
}

function increaseGuestScoreThree() {
  guestScore += 3
  guestScoreEl.textContent = guestScore
  winnerHighlight()
}

//New Game

function newGame() {
  homeScore = 0
  guestScore = 0
  homeScoreEl.textContent = homeScore
  guestScoreEl.textContent = guestScore
  winnerHighlight()
}

function winnerHighlight() {
  homeScoreEl.classList.remove("winner")
  guestScoreEl.classList.remove("winner")

  if (homeScore > guestScore) {
    homeScoreEl.classList.add("winner")
  } else if (guestScore > homeScore) {
    guestScoreEl.classList.add("winner")
  }
}

winnerHighlight()
