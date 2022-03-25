function check(number){

        const attempts = document.getElementById("attempts");
        const guessDiv = document.getElementById("guess");
        const guess = guessDiv.value;
        const history = document.getElementById("history");
        const guessBtn = document.getElementById("guess-btn");
        const resultSuccess = document.getElementById("result-success");
        const resultFailure = document.getElementById("result-failure");
        const restartBtn = document.getElementById("restart-btn");

        if(guess === ""){
                history.innerHTML += "<br>No Input Provided!";
                return;
        }

        attempts.innerHTML -= 1;
        if(guess == number){
                history.innerHTML += "<br>The number is equal to " + guess;
                guessDiv.classList.add("hide");
                guessBtn.classList.add("hide");
                resultSuccess.classList.remove("hide");
                restartBtn.classList.remove("hide");
                return;
        }else if(guess > number){
                history.innerHTML = history.innerHTML + "<br>The number is smaller than " + guess;
        }else{
                history.innerHTML += "<br>The number is greater than " + guess;
        }

        if(attempts.innerHTML === "0"){
                guessDiv.classList.add("hide");
                guessBtn.classList.add("hide");
                resultFailure.classList.remove("hide");
                restartBtn.classList.remove("hide");
        }
}