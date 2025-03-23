let result;
let yourpick;
let compick;
let score= JSON.parse(localStorage.getItem('score'))||{
    yourscore:0,
    computerscore:0
} ;

updateScoree();

function compMove(){
    return Math.floor(Math.random()*3);
}

function game(hand,compMove){
    if(hand===0){
        yourpick='rock';
        if(compMove===0){
            console.log('rock-rock --- draw');
            result='tie';
            compick='rock';

        }
        else if(compMove===1){
        console.log('rock-paper---lose');
        result="you lose";
        compick='paper';
        score.computerscore++;
        }
        else{
        console.log('rock-scissors--- won');
        result="you won";
        compick='scissors';
        score.yourscore++;
        }
    }
    else if(hand===1){
        yourpick='paper'
        if(compMove===0){
            console.log('paper-rock---won');
            result="you won";
            compick='rock';
            score.yourscore++;
        }
        else if(compMove===1){
            console.log('paper-paper---draw');
            result =' draw';
            compick='paper';

        }
        else{
            console.log('paper-scissors--lose');
            score.computerscore++;
            result='you lose';
            compick='scissors';
        }
    }
    else{
        yourpick='scissors';
        if(compMove===0){
            console.log('scissors-rock---lose');
            score.computerscore++;
            result='you lose';
            compick='rock';

        }
        else if(compMove===1){
            console.log('scissors-paper---won');
            score.yourscore++;
            result='won';
            compick='paper';

        }
        else{
            console.log('scissors-scissors--draw');
            result='draw';
            compick='scissors';
    
        }
    }

   updateScoree();

    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-hands').innerHTML=`you
<img src="./${yourpick}-emoji.png" class="hand-css">
<img src="./${compick}-emoji.png" class="hand-css">
computer `
    
}
function updateScoree(){
    document.querySelector('.js-score').innerHTML=`your score ${score.yourscore} ... computerscore: ${score.computerscore}`;
}