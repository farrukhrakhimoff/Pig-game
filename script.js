// scores are the number of two elements to store
//roundScore is a temporary variable that holds the score for a while
//activeplayer is a variable that indicates whose turn is there
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

document.querySelector('.btn--roll').addEventListener('click', function(){
    //1 Random number
    let dice = Math.floor(Math.random()*6 + 1);
    
    //2 Display the result diceDom => img
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block ';

    // diceDom.setAttribute('src', 'dice-' + dice+'.png')
    diceDom.src = 'dice-' + dice + '.png'; 
    
    //3 Update the round
    if(dice !== 1){
        roundScore += dice; // console.log(roundScore);
        document.querySelector("#current--" + activePlayer).textContent = roundScore;
    }
    else{
        activePlayer = 0 ? activePlayer = 1 : activePlayer = 0; //Ternary operator
        roundScore = 0;
        document.getElementById("current--"+activePlayer).textContent = roundScore;
        document.getElementById('current--0').textContent = 0;
        document.getElementById('current--1').textContent = 0;
        // if (activePlayer = 0){
        //     activePlayer = 1;
        // }                        //agar asosiy o'yinchi(ya'ni navbati bo'lyatgan o'yinchi) ga 1 tushib qolsa, navbatni keyinga o'yinchi(Player) ga berish uchun
        // else{
        //     activePlayer = 0;
        // }
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        diceDom.style.display = 'none';
        

    }

});




