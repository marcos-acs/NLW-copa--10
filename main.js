function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./public/icon=${player1}.svg" alt="${player1}">
    <strong>${hour}</strong>
    <img src="./public/icon=${player2}.svg" alt="${player2}">
  </li>
  `
}

let delay = 0;
function creatCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>  
      </div>
  `
}

document.querySelector("#container-cards").innerHTML = 
    creatCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
    creatCard(
      "21/11",
      "segunda",
      createGame("england", "10:00", "iran") +
        createGame("senegal", "13:00", "netherlands") +
        createGame("united-states", "16:00", "wales")
    ) +
    creatCard(
      "22/11",
      "terça",
      createGame("argentina", "07:00", "saudi-arabia") +
        createGame("denmark", "10:00", "tunisia") +
        createGame("mexico", "13:00", "poland") +
        createGame("france", "16:00", "australia")
    )



const body = document.querySelector(body)
if (body.contains) {
  body.contains.classList()
}