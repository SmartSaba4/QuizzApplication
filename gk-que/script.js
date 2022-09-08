let index = 0;
let score = 0;
let wrong = 0;
let attempt = 0;




let questions = quizz.sort(function() {
   return 0.5 - Math.random();
});


let totalQuestion = questions.length;



function nameSubmitBtn()
{
   let name = document.querySelector("input").value;
   alert("I'm Happy to say this ,"+name+", Welcome You ! . Press Enter or OK to continue your Quizz ! ");

}



$(function()
{
   printQuestion(index);
});

function printQuestion(i) {
   $(".questionbox").text(questions[i].question);
   $(".optionbox span").eq(0).text(questions[i].option[0]);
   $(".optionbox span").eq(1).text(questions[i].option[1]);
   $(".optionbox span").eq(2).text(questions[i].option[2]);
   $(".optionbox span").eq(3).text(questions[i].option[3]);

}


function checkAnswer(option) {
   attempt++;
   let optionClicked = $(option).data("opt");
   console.log(optionClicked);

   if (optionClicked == questions[index].answer) {
       $(option).addClass("right");
       score++;
   } else {
       $(option).addClass("wrong");
       wrong++;
   }

   $(".optionbox span").attr("onclick", "");
}


function showNext() {
   if (index >= (questions.length - 1)) {
       showResult(0);
       return;
   }

   index++;

   $(".optionbox span").removeClass();
   $(".optionbox span").attr("onclick", "checkAnswer(this)");
   printQuestion(index);
}
function showResult(j) {
   if (j == 1 &&
       index < questions.length - 1 &&
       !confirm()) {
       return;
   }
   score = score*10;
   $("#totalQuestion").text("TotalQuestion : "+totalQuestion);
   $("#attemptQuestion").text("attempt : "+attempt);
   $("#score").text("You scored : "+score);

   if(score>=90)
   {
      $("#congrates").show();
      $("#morethan90").show();
   }
   else if (score>=60 && score<90)
   {
      $("#good").show();
      $("#morethan60").show();
   }
   else if (score>=40 && score<60)
   {
      $("#smart").show();
      $("#morethan40").show();
   }
   else if (score>=20 && score<40)
   {
      $("#waste").show();
      $("#morethan20").show();
   }
   else if(score>=0 && score<20)
   {
      $("#waste").show();
      $("#morethan0").show();
   }




   $("#questions").hide();
   $("#resultsBox").show();
   
}