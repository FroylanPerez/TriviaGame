var questions = [
    "Who was the first driver to win the F1 championship?", 
    "How many mexican drivers have been in F1 history?", 
    "What is the purposse of DRS device",
];

var answers = [
    ["Juan Manuel Fangio", "Ayrton Senna", "Alain Prost", "Giuseppe Farina"],
    ["cero", "seven", "five", "three"],
    ["Provide greater stability", "Increase speed", "Improves breaking force", "Allow drivers to listen his technical team"],
];

var randomIndex = Math.floor(Math.random()*questions.length);

var posibleAnswers = answers[randomIndex];

var positions = [0,1,2,3];

var reorderedAnswers = [];

// este for se puede evitar si no queremos modificar cada vez el orden de las respuetas//
for (i in posibleAnswers) {
    var randomPosition = Math.floor(Math.random()*positions.length);
    reorderedAnswers[i] = posibleAnswers[positions[randomPosition]];
    positions.splice(randomPosition, 1);
}

// aqui habria que cambiar reorderedAnswers por posibleAnswers //
var answersText = "";
for (i in reorderedAnswers) {
    answersText += "<input type='radio'><label>" + reorderedAnswers[i] + "</label><br>";
}

$("#answers").html(answersText);
$("#question").html(questions[randomIndex]);