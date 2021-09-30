
let scores = [0, 0];            // scores is the array of two elements to store
let roundScore = 0;             //roundScore is a temporary variable that holds the score for a while p=> CURRENT
let activePlayer = 0;           //activeplayer is a variable that indicates whose turn is there P=> unvisible element but important
let diceDom = document.querySelector('.dice');  

diceDom.style.display = 'none';        // none qilib olib boshlang'ich q holatda dice image ni ko'rinmaydigan qilib olamiz

document.getElementById('current--0').textContent = 0;        //hamma elementlarni 0 ga tenglab olamiz
document.getElementById('current--1').textContent = 0;
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

document.querySelector('.btn--roll').addEventListener('click', function(){ 
    //1 Random number
    let dice = Math.floor(Math.random()*6 + 1);
    
    //2 Display the result diceDom => img
    // let diceDom = document.querySelector('.dice');      
    diceDom.style.display = 'block ';           // block qilib olib random tushgan raqamni dice image ga oladigan qilamiz va u window da korinadi

    // diceDom.setAttribute('src', 'dice-' + dice+'.png')
    diceDom.src = 'dice-' + dice + '.png';      //bu elementni source iga random ga tushgan sonni images orqali implitatsiya qiladi
    
    //3 Update the round
    if(dice !== 1){
        roundScore += dice; //console.log(roundScore);
        document.querySelector("#current--" + activePlayer).textContent = roundScore;
    }
    else{
        nextPlayer();
    }
});
document.querySelector('.btn--hold').addEventListener("click", function(){
    
    //Add current score to Global score
    scores[activePlayer] += roundScore;         //score array iga activePlayer=0 bolsa shu index elementiga roundScore dagi qiymatni qoshib qo'yadi

    //Update the UI (user interface)
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    
    
    //Check if the player won the game
    if(scores[activePlayer] >= 20){
        document.querySelector('#name--' + activePlayer).textContent = "winner!"
        diceDom.style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');

    }
    else{
        //Nextplayer function that make some changes happen
        nextPlayer();

    }


});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    document.getElementById("current--"+activePlayer).textContent = roundScore;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.player--0').classList.toggle('player--active');
    diceDom.style.display = "none";
}

function init(){
    scores = [0, 0];  
    roundScore = 0;   
    activePlayer = 0; 
    diceDom.style.display = 'none';  
    document.getElementById('current--0').textContent = 0; 
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    
    document.querySelector('.player--0').classList.add('player--active'); // yana player 1 ni active qilib qoyish kerak
}

document.querySelector('.btn--new').addEventListener('click', init)
