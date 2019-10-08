$(document).ready(function() {

    var intervalId;
    var time = 31;
    var nextQuestion;
    var currentQuestion = 0;
    var isAnswering = true;


    var questionIndex = 0
    var questions = [{
        questionText: "Who was the first driver to win the F1 championship?", 
        answers: ["Juan Manuel Fangio", "Ayrton Senna", "Alain Prost", "Giuseppe Farina"],  
        correctAnswer: 3 
        },
        {
        questionText: "How many mexican drivers have been in F1?", 
        answers: ["0", "7", "5", "3"],       
        correctAnswer: 2, 
        },
        {
        questionText: "What is the purpose of DRS device?",
        answers: ["Provide greater stability", "Increase speed", "Improves breaking force", "Allow drivers to listen his technical team"],
        correctAnswer: 1,
        },
    ];
    var currentCorrectAnswer = questions[currentQuestion].correctAnswer;
    // questions[0].answers[]


    $("#start").on("click", function() {
        $("#timeRemaining").text("Time Remaining: ");
        intervalId = setInterval(count, 1000);
        $("#secondsText").text("Seconds");
        $("#start").css('visibility', 'hidden');
        firstQuestion();
    });
      
    
    function count() {
        time--;
        $("#clock").text(time);
        if(time === 0) {
            $("#clock").text("Time is Over!!!");
            $("#timeRemaining").css('visibility', 'hidden');
            $("#secondsText").css('visibility', 'hidden');
            // $("#question").text("The correct answer is Giuseppe Farina");
            $("#question").css("color", "red");
            $("#altDisplay").html("<img src='assets/images/giuseppeFarina.jpg' width='550px'/>");
            $(".answer").css('visibility', 'hidden');
            time = 31;
            nextQuestion = setInterval(secondQuestion, 2000);
            
            // setTimeout(secondQuestion, 3000);
            // hideAndNext();
            // console.log("yujuu");
        }
    }



    function firstQuestion() {
        for (var i = 0; i <= questions.length; i++) {
            $("#question").text(questions[i].questionText);
            var answersText = $("<ul>");
            answersText.addClass("answer");
            answersText.attr("data-answer", questions[i].answers[i]);
            answersText.text(questions[i].answers[i]);
            $(".answersDisplay").append(answersText);
        }
    
        // $(".answer").on("click", function hideAndNext() {
        //     $("#question").text("Wrong answer!!! The correct option is Giuseppe Farina");
        //     $("#question").css("color", "red");
        //     $("#altDisplay").html("<img src='assets/images/giuseppeFarina.jpg' width='550px'/>");
        //     $(".answer").css('visibility', 'hidden');
        //     nextQuestion = setInterval(secondQuestion, 3000);
        // });
    }



    // function start() {
    //     for (var i = 0; i <= questions.length; i++) {
    //     $("#question").text(questions[i].questionText);
    //     $("#answer1").text(questions[i].answers[0]);
    //     $("#answer2").text(questions[i].answers[1]);
    //     $("#answer3").text(questions[i].answers[2]);
    //     $("#answer4").text(questions[i].answers[3]);
      
    //     }
    // }


    // function secondQuestion() {
    //     var answer1 = "Provide greater stability";
    //     var answer2 = "Increase speed";
    //     var answer3 = "Improves breaking force";
    //     var answer4 = "Allow drivers to listen his technical team";
    //     $("#question").text("What is the purpose of DRS device");
    //     $("#answer1").text(answer1);
    //     $("#answer2").text(answer2);
    //     $("#answer3").text(answer3);
    //     $("#answer4").text(answer4);
    //     $("#answer1").on("click", function hideAndNext() {
    //         $("#question").text("Wrong answer!!! The correct option is 'Increase speed'");
    //         $("#question").css("color", "red");
    //         $("#altDisplay").html("<img src='assets/images/giuseppeFarina.jpg' width='550px'/>");
    //         $(".answer").css('visibility', 'hidden');
    //         nextQuestion = setInterval(secondQuestion, 3000);
    //     });
    // }


            // if(time === 0) {
            // $("#question").text("Time is Over!!! The answer is Giuseppe Farina");
            // $("#question").css("color", "red");
            // $("#altDisplay").html("<img src='assets/images/giuseppeFarina.jpg' width='550px'/>");
            // $(".answer").css('visibility', 'hidden');
            // setTimeout(secondQuestion, 3000);
        //     hideAndNext();
        //     console.log("yujuu");
        // }


})


// data dinamica con arrey d objetos