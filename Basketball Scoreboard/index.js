let homeScore = 0
let guestScore = 0
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function addHomeOne() {
   homeScore += 1
   homeEl.textContent = homeScore
}

function addHomeTwo() {
   homeScore += 2
   homeEl.textContent = homeScore
}

function addHomeThree() {
   homeScore += 3
   homeEl.textContent = homeScore
}

function addGuestOne() {
   guestScore += 1
   guestEl.textContent = guestScore
}

function addGuestTwo() {
   guestScore += 2
   guestEl.textContent = guestScore
}

function addGuestThree() {
   guestScore += 3
   guestEl.textContent = guestScore
}