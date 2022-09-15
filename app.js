
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the Capital of India?", ["New Delhi", "Mumbai","Jaipur", "Kolkata"], "New Delhi"),

    new Question("National Animal of India?", ["Elephant", "Bengal Tiger","Lion", "Cow"], "Bengal Tiger"),
    

    new Question("National River of India?", ["Yamuna", "Ganga","Brahmputra", "Sindhu"], "Ganga"),
    

    new Question("Currency of India?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),
    new Question("Longest river in world?", ["Nile", "Ganga","Brahmputra", "Kaveri"], "Nile"),
    new Question("National Bird of India?", ["Parrot", "Sparrow","Peacock", "Myna"], "Peacock"),
    new Question("Country with highest population?", ["India", "China","Africa", "Indonesia"], "China"),
    new Question("Smallest country in the world?", ["Vatican City", "Australia","Japan", "Nepal"], "Vatican City"),
    
        

];


var quiz = new Quiz(questions);


populate();





