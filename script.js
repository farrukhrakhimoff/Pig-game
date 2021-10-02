let scores = [0, 0]; // scores is the array of two elements to store
let roundScore = 0; //roundScore is a temporary variable that holds the score for a while p=> CURRENT
let activePlayer = 0; //activeplayer is a variable that indicates whose turn is there P=> unvisible element but important
let isGamePlaying;
let winningScore;
let lastDice;
let diceDom = document.querySelector(".dice");

diceDom.style.display = "none"; // none qilib olib boshlang'ich q holatda dice image ni ko'rinmaydigan qilib olamiz

init();

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (isGamePlaying) {
    //1 Random number
    let dice = Math.floor(Math.random() * 6 + 1);

    //2 Display the result diceDom => img
    // let diceDom = document.querySelector('.dice');
    diceDom.style.display = "block "; // block qilib olib random tushgan raqamni dice image ga oladigan qilamiz va u window da korinadi

    // diceDom.setAttribute('src', 'dice-' + dice+'.png')
    diceDom.src = "dice-" + dice + ".png"; //bu elementni source iga random ga tushgan sonni images orqali implitatsiya qiladi
    
    //5 When number 6 is brought one after another suddenly, It makes the points/scores zero
    if (dice === 6 && lastDice === 6) {
      scores[activePlayer] = 0;
      document.getElementById("score--" + activePlayer).textContent = "0";
      alert('The side 6 has been brought one after another, twice!')
      nextPlayer();
    }

    //4 Update the round
    if (dice !== 1) {
      roundScore += dice; //console.log(roundScore);
      document.querySelector("#current--" + activePlayer).textContent =
        roundScore;
    } else {
      nextPlayer();
    }
    lastDice = dice;
  }
});
document.querySelector(".btn--hold").addEventListener("click", function () {
  if (isGamePlaying) {
    //Add current score to Global score
    scores[activePlayer] += roundScore; //score array iga activePlayer=0 bolsa shu index elementiga roundScore dagi qiymatni qoshib qo'yadi

    //Update the UI (user interface)
    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];
    let input = document.querySelector(".finalScore").value;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 50;
    }

    //Check if the player won the game
  }
  if (scores[activePlayer] >= winningScore) {
    document.querySelector("#name--" + activePlayer).textContent = "winner!";
    diceDom.style.display = "none";
    document
      .querySelector(".player--" + activePlayer)
      .classList.add("player--winner");
    document
      .querySelector(".player--" + activePlayer)
      .classList.remove("player--active");
    isGamePlaying = false;
  } else {
    //Nextplayer function that make some changes happen
    nextPlayer();
  }
});
document.querySelector(".btn--new").addEventListener("click", init);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current--" + activePlayer).textContent = roundScore;
  document.getElementById("current--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;

  document.querySelector(".player--1").classList.toggle("player--active");
  document.querySelector(".player--0").classList.toggle("player--active");
  diceDom.style.display = "none";
}

function init() {
  isGamePlaying = true;
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  diceDom.style.display = "none";
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");

  document.querySelector(".player--0").classList.add("player--active"); // yana player 1 ni active qilib qoyish kerak
}
