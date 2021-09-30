
let scores = [0, 0];            // scores is the array of two elements to store
let roundScore = 0;         //roundScore is a temporary variable that holds the score for a while p=> CURRENT
let activePlayer = 0;           //activeplayer is a variable that indicates whose turn is there P=> unvisible element but important

document.querySelector('.dice').style.display = 'none';        // none qilib olib boshlang'ich q holatda dice image ni ko'rinmaydigan qilib olamiz

document.getElementById('current--0').textContent = 0;      //hamma elementlarni 0 ga tenglab olamiz
document.getElementById('current--1').textContent = 0;
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

document.querySelector('.btn--roll').addEventListener('click', function(){ 
    //1 Random number
    let dice = Math.floor(Math.random()*6 + 1);
    
    //2 Display the result diceDom => img
    let diceDom = document.querySelector('.dice');      
    diceDom.style.display = 'block ';       // block qilib olib random tushgan raqamni dice image ga oladigan qilamiz va u window da korinadi

    // diceDom.setAttribute('src', 'dice-' + dice+'.png')
    diceDom.src = 'dice-' + dice + '.png';      //bu elementni source iga random ga tushgan sonni images orqali implitatsiya qiladi
    
    //3 Update the round
    if(dice !== 1){
        roundScore += dice; //console.log(roundScore);
        document.querySelector("#current--" + activePlayer).textContent = roundScore;
    }
    else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //agar dice 1 chiqib qolsa va shu paytni o'zida active o'yinchimizni 0 bilan solishtiradi va uni 1 ga tengalydi
        roundScore = 0;
        document.getElementById("current--"+activePlayer).textContent = roundScore;
        document.getElementById('current--0').textContent = 0;
        document.getElementById('current--1').textContent = 0;
        
        document.querySelector('.player--1').classList.toggle('player--active');
        document.querySelector('.player--0').classList.toggle('player--active');
        diceDom.style.display = 'none';
    }
});






