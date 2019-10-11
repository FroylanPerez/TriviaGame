$(document).ready(function() {

    var questions = [{
        questionText: "Who was the first driver to win the F1 championship?", 
        answers: ["Juan Manuel Fangio", "Ayrton Senna", "Alain Prost", "Giuseppe Farina"],  
        correctAnswer: "Giuseppe Farina",
        image: "<img src='assets/images/giuseppeFarina.jpg' width='550px'/>",
        next: true,
        },
        {
        questionText: "How many mexican drivers have been in F1?", 
        answers: ["cero", "seven", "six", "three"],       
        correctAnswer: "six", 
        image: "<img src='assets/images/mexicanos.jpg' width='550px'/>",
        next: true,
        },
        {
        questionText: "Who of them is not a F1 driver?", 
        answers: ["Charles Leclerc", "Aaron Rodgers", "Sebastian Vettel", "Sergio Perez"],       
        correctAnswer: "Aaron Rodgers", 
        image: "<img src='assets/images/rodgers.jpg' width='550px'/>",
        next: true,
        },
        {
        questionText: "Where was Daniel Ricciardo born?", 
        answers: ["Mexico", "France", "Belgium", "Australia"],       
        correctAnswer: "Australia", 
        image: "<img src='assets/images/danielRicciardo.jpg' width='550px'/>",
        next: true,
        },
        {
        questionText: "Why did Ayrton Senna stop driving in F1?", 
        answers: ["He was to old", "Get sick", "He had won enough races", "None of this options"],       
        correctAnswer: "None of this options", 
        image: "<img src='assets/images/ayrtonSenna.gif' width='550px'/>",
        next: true,
        },
        {
        questionText: "What is the purpose of DRS device?",
        answers: ["Provide greater stability", "Increase speed", "Improves breaking force", "Allow drivers to listen his technical team"],
        correctAnswer: "Increase speed",
        image: "<img src='assets/images/drs.jpg' width='550px'/>",
        next: false,
        },
    ];


    var intervalCount;
    var intervalTimeOver;
    var intervalWin;
    var intervalLosse;
    var intervalEnd;
    var intervalStartOver;
    var time = 31;
    var nextQuestion = false;
    var currentQuestion = 0;
    var imageShown = false;
    var win = 0;
    var losse = 0;
    var questionsLength = questions.length;

    console.log(questionsLength);

    var correctAnswerEvaluate = questions[currentQuestion].currentCorrectAnswer; 

    $(document).on("click", "#start, #startOver", start);
    function start() {
        time = 31;
        win = 0;
        losse = 0;
        nextQuestion = false;
        currentQuestion = 0;
        imageShown = false;
        clearInterval(intervalEnd);
        $("#timeRemaining").css('visibility', 'visible');
        $("#secondsText").css('visibility', 'visible');
        $("#altDisplay").html("<img src='assets/images/ticking.gif' width='210px'/>");
        $("#timeRemaining").text("Time Remaining: ");
        intervalCount = setInterval(count, 1000);
        $("#secondsText").text("Seconds");
        $("#hiddenButton").css('visibility', 'hidden');
        $("#startOver").css('visibility', 'hidden');
        $("#clock").css("color", "aqua");
        displayQuestionAnswers();
    }

    function count() {
        time--;
        $("#clock").text(time);
        if(time === 0) {
            TimeOver(); 
        }
    }
    
    function displayQuestionAnswers() {
        // if(imageShown === true) {
        // $("#altDisplay").css('visibility', 'hidden'); //Esta debe estar en la funcion que mande las siguientes preguntas x q sino desde el inicio la oculta y nunca la muestra
        // }
        $("ul").remove();
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

    $(document).on("click", ".answer, .nextAnswer", function() {
       
            if($(this).text() === questions[currentQuestion].correctAnswer) {
                $("#clock").text("Excellent, you really like F1!!!");
                $("#clock").css("color", "chartreuse");
                // $("#question").css('visibility', 'hidden');
                $("#timeRemaining").css('visibility', 'hidden');
                $("#secondsText").css('visibility', 'hidden');
                $(".answer").css('visibility', 'hidden');
                $(".nextAnswer").css('visibility', 'hidden');
                $("#altDisplay").html(questions[currentQuestion].image); 
                clearInterval(intervalCount);
                currentQuestion++;
                win++;
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
                $(".nextAnswer").css('visibility', 'hidden');
                $("#altDisplay").html(questions[currentQuestion].image); 
                clearInterval(intervalCount);
                currentQuestion++;
                losse++;
                intervalLosse = setInterval(continueQuestionAnswers, 3000);
                imageShown = true;
            }

            if(currentQuestion === questionsLength) {
                intervalEnd = setInterval(finishGame, 3000);
            }



    });

    function TimeOver() {
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
        if(currentQuestion === questionsLength) {
            intervalEnd = setInterval(finishGame, 3000);
        }
    }

    function continueQuestionAnswers() {
        $("#altDisplay").html("<img src='assets/images/ticking.gif' width='210px'/>"); // se pone por q no encontre la forma de ocultarla y luego volverla a mostrar
        imageShown = false;
        $("ul").remove();
        $(".nextAnswer").css('visibility', 'visible');
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
        time = 31;
        intervalCount = setInterval(count, 1000);
        $("#clock").css("color", "aqua");
        $("#timeRemaining").css('visibility', 'visible');
        $("#secondsText").css('visibility', 'visible');

    }
    
    function finishGame() {
        // if(currentQuestion === questionsLength) {
            $("ul").remove();
            clearInterval(intervalTimeOver);
            clearInterval(intervalWin);
            clearInterval(intervalLosse);
            clearInterval(intervalCount);
            $("#question").text("Your score in this F1 Trivia is:");  
            $("#question").css("color", "orange");
            $("#clock").text("Click in the button under the image to try again");
            $("#clock").css("color", "pink");
            $("#timeRemaining").css('visibility', 'hidden');
            $("#secondsText").css('visibility', 'hidden');
            $(".nextAnswer").css('visibility', 'hidden');
            $("#altDisplay").html("<img src='assets/images/logo.jpg' width='450px'/>"); 
            var winHolder = $("<ul>");
            winHolder.addClass("wins");
            winHolder.text(win + " correct answers");
            $(".results").append(winHolder);
            var losseHolder = $("<ul>");
            losseHolder.addClass("losses");
            losseHolder.text(losse + " wrong answers");
            $(".results").append(losseHolder);
            $("#startOver").css('visibility', 'visible');
    };

    // $("#startOver").on("click", function() {
    //     time=31;
    //     currentQuestion=0;
    //     win=0;
    //     losse=0;
    //     nextQuestion=false;
    //     imageShown=false;
    //     start();
        // intervalCount = setInterval(count, 1000);
        // $("#timeRemaining").css('visibility', 'visible');
        // $("#secondsText").css('visibility', 'visible');
        // $("#timeRemaining").text("Time Remaining: ");
        // intervalCount = setInterval(count, 1000);
        // $("#secondsText").text("Seconds");
        // $("#startOver").css('visibility', 'hidden');
        // displayQuestionAnswers();
        // intervalStartOver = setInterval(displayQuestionAnswers, 2000);
    // });



})