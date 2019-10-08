$(document).ready(function() {

    var questions = [{
        questionText: "Who was the first driver to win the F1 championship?", 
        answers: ["Juan Manuel Fangio", "Ayrton Senna", "Alain Prost", "Giuseppe Farina"],  
        correctAnswer: "Giuseppe Farina",
        image: "<img src='assets/images/giuseppeFarina.jpg' width='550px'/>",
        // index: answers.indexOf(correctAnswer),
        // currentCorrectAnswer: answers[index],
            // $("#question").text("The correct answer is: " + currentCorrectAnswer);
        },
        {
        questionText: "How many mexican drivers have been in F1?", 
        answers: ["cero", "seven", "six", "three"],       
        correctAnswer: "six", 
        image: "<img src='assets/images/mexicanos.jpg' width='550px'/>",
        // index: answers.indexOf(correctAnswer),
        // currentCorrectAnswer: answers[index],
        },
        {
        questionText: "What is the purpose of DRS device?",
        answers: ["Provide greater stability", "Increase speed", "Improves breaking force", "Allow drivers to listen his technical team"],
        correctAnswer: "Increase speed",
        image: "<img src='assets/images/drs.jpg' width='550px'/>",
        // index: answers.indexOf(correctAnswer),
        // currentCorrectAnswer: answers[index],
        },
    ];


    var intervalCount;
    var intervalTimeOver;
    var intervalWin;
    var intervalLosse;
    var time = 11;
    var nextQuestion = false;
    var currentQuestion = 0;
    var imageShown = false;

    var correctAnswerEvaluate = questions[currentQuestion].currentCorrectAnswer; // se mete en funcion count para que ahi vaya cambiando segun aumente currentQuestion

    $("#start").on("click", function() {
        $("#timeRemaining").text("Time Remaining: ");
        intervalCount = setInterval(count, 1000);
        $("#secondsText").text("Seconds");
        $("#start").css('visibility', 'hidden');
        displayQuestionAnswers();
    });

    function count() {
        time--;
        $("#clock").text(time);
        if(time === 0) {
            // currentQuestion++;   Estaba duplicado dentro de la funcion Time Over
            TimeOver(); //falta mandar a una función que mande msj de Time Over y despues de 2 seg pase a la siguiente pregunta
        }
    }
    
    function displayQuestionAnswers() {
        if(imageShown === true) {
        $("#altDisplay").css('visibility', 'hidden'); //Esta debe estar en la funcion que mande las siguientes preguntas x q sino desde el inicio la oculta y nunca la muestra
        }
        clearInterval(intervalTimeOver);
        $("#question").text(questions[currentQuestion].questionText);
        $("#question").css("color", "aqua");
        $(".answer").css('visibility', 'visible');
        var questionHolder1 = $("<ul>");
        questionHolder1.addClass("answer");
        questionHolder1.text(questions[currentQuestion].answers[0]);
        $(".answersDisplay").append(questionHolder1);
        var questionHolder2 = $("<ul>");
        questionHolder2.addClass("answer");
        questionHolder2.text(questions[currentQuestion].answers[1]);
        $(".answersDisplay").append(questionHolder2);
        var questionHolder3 = $("<ul>");
        questionHolder3.addClass("answer");
        questionHolder3.text(questions[currentQuestion].answers[2]);
        $(".answersDisplay").append(questionHolder3);
        var questionHolder4 = $("<ul>");
        questionHolder4.addClass("answer");
        questionHolder4.text(questions[currentQuestion].answers[3]);
        $(".answersDisplay").append(questionHolder4);
    }

    $(".answersDisplay").on("click", function() {

            var answer1 = questions[currentQuestion].answers[0];
            var answer2 = questions[currentQuestion].answers[1];
            var answer3 = questions[currentQuestion].answers[2];
            var answer4 = questions[currentQuestion].answers[3];
            var okAnswer = questions[currentQuestion].correctAnswer;
        
            if(answer1 === okAnswer) {
                $("#clock").text("Excellent, you really like F1!!!");
                $("#clock").css("color", "chartreuse");
                // $("#question").css('visibility', 'hidden');
                $("#timeRemaining").css('visibility', 'hidden');
                $("#secondsText").css('visibility', 'hidden');
                $(".answer").css('visibility', 'hidden');
                $("#altDisplay").html(questions[currentQuestion].image); 
                clearInterval(intervalCount);
                currentQuestion++;
                intervalWin = setInterval(continueQuestionAnswers, 3000);
                imageShown = true;
            }
            else if(answer2 === okAnswer) {
                $("#clock").text("Excellent, you really like F1!!!");
                $("#clock").css("color", "chartreuse");
                // $("#question").css('visibility', 'hidden');
                $("#timeRemaining").css('visibility', 'hidden');
                $("#secondsText").css('visibility', 'hidden');
                $(".answer").css('visibility', 'hidden');
                $("#altDisplay").html(questions[currentQuestion].image); 
                clearInterval(intervalCount);
                currentQuestion++;
                intervalWin = setInterval(continueQuestionAnswers, 3000);
                imageShown = true;
            }
            else if(answer3 === okAnswer) {
                $("#clock").text("Excellent, you really like F1!!!");
                $("#clock").css("color", "chartreuse");
                // $("#question").css('visibility', 'hidden');
                $("#timeRemaining").css('visibility', 'hidden');
                $("#secondsText").css('visibility', 'hidden');
                $(".answer").css('visibility', 'hidden');
                $("#altDisplay").html(questions[currentQuestion].image); 
                clearInterval(intervalCount);
                currentQuestion++;
                intervalWin = setInterval(continueQuestionAnswers, 3000);
                imageShown = true;
            }
            else if(answer4 === okAnswer) {
                $("#clock").text("Excellent, you really like F1!!!");
                $("#clock").css("color", "chartreuse");
                // $("#question").css('visibility', 'hidden');
                $("#timeRemaining").css('visibility', 'hidden');
                $("#secondsText").css('visibility', 'hidden');
                $(".answer").css('visibility', 'hidden');
                $("#altDisplay").html(questions[currentQuestion].image); 
                clearInterval(intervalCount);
                currentQuestion++;
                intervalWin = setInterval(continueQuestionAnswers, 3000);
                imageShown = true;
            }
            else {
                $("#clock").text("I think you don't know anything about F1!!!");
                $("#clock").css("color", "red");
                $("#question").text("The correct answer is: " + questions[currentQuestion].correctAnswer);
                $("#timeRemaining").css('visibility', 'hidden');
                $("#secondsText").css('visibility', 'hidden');
                $(".answer").css('visibility', 'hidden');
                $("#altDisplay").html(questions[currentQuestion].image); 
                clearInterval(intervalCount);
                currentQuestion++;
                intervalLosse = setInterval(continueQuestionAnswers, 3000);
                imageShown = true;
            }
    });

    function TimeOver() {
        // var currentCorrectAnswer = questions[currentQuestion].answers[answerCheck]; // AQUI
        $("#clock").text("Time is Over!!!");
        $("#timeRemaining").css('visibility', 'hidden');
        $("#secondsText").css('visibility', 'hidden');
        $("#question").text("The correct answer is: " + questions[currentQuestion].correctAnswer);
        $("#question").css("color", "red");
        $("#clock").css("color", "red");
        $("#altDisplay").html(questions[currentQuestion].image); // cambiar a array de iamges de respuestas correctas para despues tomar de ahi cada iamgen//
        $(".answer").css('visibility', 'hidden');
        $(".nextAnswer").css('visibility', 'hidden');
        clearInterval(intervalCount);
        currentQuestion++;
        intervalTimeOver = setInterval(continueQuestionAnswers, 4000); //duda si funcionara o habra q crear nueva variable para este intervalo
        imageShown = true;
    }

    function continueQuestionAnswers() {
        $("#altDisplay").html("<img src='assets/images/ticking.gif' width='250px'/>"); // se pone por q no encontre la forma de ocultarla y luego volverla a mostrar
        imageShown = false;
        $("ul").remove();
        clearInterval(intervalTimeOver);
        clearInterval(intervalWin);
        clearInterval(intervalLosse);
        $("#question").text(questions[currentQuestion].questionText);
        $("#question").css("color", "aqua");
        var questionHolder1 = $("<ul>");
        questionHolder1.addClass("nextAnswer");
        questionHolder1.text(questions[currentQuestion].answers[0]);
        $(".answersDisplay").append(questionHolder1);
        var questionHolder2 = $("<ul>");
        questionHolder2.addClass("nextAnswer");
        questionHolder2.text(questions[currentQuestion].answers[1]);
        $(".answersDisplay").append(questionHolder2);
        var questionHolder3 = $("<ul>");
        questionHolder3.addClass("nextAnswer");
        questionHolder3.text(questions[currentQuestion].answers[2]);
        $(".answersDisplay").append(questionHolder3);
        var questionHolder4 = $("<ul>");
        questionHolder4.addClass("nextAnswer");
        questionHolder4.text(questions[currentQuestion].answers[3]);
        $(".answersDisplay").append(questionHolder4);
        time = 11;
        intervalCount = setInterval(count, 1000);
        $("#clock").css("color", "aqua");
    }


    // function userWin() {
    //     $("#clock").text("Excellent, you really like F1!!!");
    //     $("#clock").css("color", "green");
    //     $("#question").css('visibility', 'hidden');
    //     $("#timeRemaining").css('visibility', 'hidden');
    //     $("#secondsText").css('visibility', 'hidden');
    //     $(".answer").css('visibility', 'hidden');
    //     $("#altDisplay").html(questions[currentQuestion].image); 
    //     clearInterval(intervalCount);
    //     currentQuestion++;
    //     intervalWin = setInterval(continueQuestionAnswers, 3000);
    //     imageShown = true;
    // }

    // function userLosse() {
    //     $("#clock").text("I think you don't know anything about F1!!!");
    //     $("#clock").css("color", "red");
    //     $("#question").text("The correct answer is: " + questions[currentQuestion].correctAnswer);
    //     $("#timeRemaining").css('visibility', 'hidden');
    //     $("#secondsText").css('visibility', 'hidden');
    //     $(".answer").css('visibility', 'hidden');
    //     $("#altDisplay").html(questions[currentQuestion].image); 
    //     clearInterval(intervalCount);
    //     currentQuestion++;
    //     intervalLosse = setInterval(continueQuestionAnswers, 3000);
    //     imageShown = true;
    // }

})