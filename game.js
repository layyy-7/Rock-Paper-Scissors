let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let userscore=document.querySelector("#userscore");
let compscore=document.querySelector("#compscore");
let msg=document.querySelector("#msg");
let reset=document.querySelector("#reset");

//score1 tracks userscore and score2 tracks compscore
let score1=0;
let score2=0;

function draw()
{
    score1+=0.5;
    score2+=0.5;
    
    userscore.innerText=score1;
    compscore.innerText=score2;

    msg.innerText="Game Drawn";
}

function win()
{
    score1++;
    userscore.innerText=score1;

    msg.innerText="You Win";
}

function lose()
{
    score2++;
    compscore.innerText=score2;

    msg.innerText="You Lose";
}

//this function generates a random integer in the range [0,2]
//The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
function genCompChoice()
{
    let options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);

    return options[index];
}

function play(userChoice)
{
    //getting computer choice
    let compChoice=genCompChoice();

    if(userChoice===compChoice)
    {
        draw();
        return;
    }

    if((userChoice==="rock" && compChoice==="scissors") || (userChoice==="paper" && compChoice==="rock") || (userChoice==="scissors" && compChoice==="paper"))
    {
        win();
        return;
    }

    lose();
    return;
}

function mark(evt)
{
    //very imp part
    //understand how we got the required id using target property of event object
    let userChoice=evt.target.getAttribute("id");

    play(userChoice);
}

function resetGame()
{
    score1=0;
    score2=0;

    userscore.innerText="0";
    compscore.innerText="0";

    msg.innerText="Play Your Move";
}

reset.addEventListener("click",resetGame);
rock.addEventListener("click",mark);
paper.addEventListener("click",mark);
scissors.addEventListener("click",mark);