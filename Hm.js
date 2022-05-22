//letters
const letters = 'abcdefghijklmnopqrstuvwxyz';
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector('.letters');
let duration = 20000;
lettersArray.forEach(letter =>{
    let span = document.createElement('span');
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className= 'letter-box';
    lettersContainer.appendChild(span);

});
const words = {
    wegz:['kan nefsy','hesla','tnt','atm','sokarty','tayeh','khod w hat','wahec w eshreen'],
    paplo:['el hob fen' ,'atary','wish','el gholaf','ghaba','free','el gemaza','denamete'],
    aboELAnwar:['sco sco','ymken','mmm mmm','khalsana','ko'],
    santa:['goal','teki taka','ahmer fe ahmer','el lela de','el naw wy','sambo']
}
//get random property
let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];
// console.log(randomPropValue)
// console.log(randomValueNumber)
// console.log(randomValueName)
document.querySelector('.game-info .category span').innerHTML = randomPropName;
let lettersGuessContainer = document.querySelector('.letters-guess');
let lettersAndSpace = Array.from(randomValueValue);
lettersAndSpace.forEach(letter => {
    let span = document.createElement('span');
    if (letter == " "){
        span.className="with-space";

    }
    lettersGuessContainer.appendChild(span);
});
let guessSpans = document.querySelectorAll('.letters-guess span');
let wrongAttempts = 0;
let complete = 1;
let theDraw = document.querySelector('.hangman-draw')
document.addEventListener('click',(e)=>{
    let theStatus = false;
    if(e.target.className ==='letter-box'){
        e.target.classList.add('clicked');
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        let theChosenWord = Array.from(randomValueValue.toLowerCase());
        // let completeArray = [];
        theChosenWord.forEach((wordLetter,wordIndex) =>{
            if (theClickedLetter == wordLetter){
                theStatus= true;
                guessSpans.forEach((span,spanIndex) =>{
                    if (wordIndex === spanIndex){
                        span.innerHTML = wordLetter;
                        complete++;
                        // completeArray= completeArray.push(spanIndex);
                        // console.log(completeArray);
                        // console.log(completeArray);
                    }
                });
            }
            
        });
        if (theStatus!== true){
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            if(wrongAttempts == 5){
                endGame();
                lettersContainer.classList.add('finished');

            }

        }else{
            // if (completeArray.length == randomPropValue.length){
            //     lettersContainer.classList.add('finished');
            //     let divSucc = document.createElement('div');
            //     let divText = document.createTextNode(`CONGRATULATIONS YOU WIN`);
            //     divSucc.appendChild(divText);
            //     divSucc.className = 'success-popup';
            //     document.body.appendChild(divSucc);
            //     console.log('done')

            // }
            // complete++;  
            console.log(complete);
            console.log(randomValueValue.length)
            if (randomValueValue.length == complete){       
                lettersContainer.classList.add('finished');
                let divSucc = document.createElement('div');
                let divText = document.createTextNode(`CONGRATULATIONS YOU WIN`);
                divSucc.appendChild(divText);
                divSucc.className = 'success-popup';
                document.body.appendChild(divSucc);



            }
           

        }
    }
});

function endGame (){
    let divFail = document.createElement('div');
    let divText = document.createTextNode(`GAME OVER the word is ${randomValueValue}`);
    divFail.appendChild(divText);
    divFail.className = 'popup';
    document.body.appendChild(divFail);

}
setTimeout(() => {
    
    let divTimeOut = document.createElement('div');
    let divText = document.createTextNode(`mmmm... the time is out `);
    divTimeOut.appendChild(divText);
    divTimeOut.className = 'popup';
    document.body.appendChild(divTimeOut);
}, duration)