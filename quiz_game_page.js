
Username_1=localStorage.getItem("player8_name");
Username_2=localStorage.getItem("player9_name");
answer_turn=Username_1;
question_turn=Username_2;
actual_answer=0;
player1_scoref=0;
player2_scoref=0;
document.getElementById("player_question").innerHTML="question turn -"+question_turn;
document.getElementById("player_answer").innerHTML=" answer turn -"+answer_turn;
document.getElementById("player1_name").innerHTML=Username_1;
document.getElementById("player2_name").innerHTML=Username_2;
document.getElementById("player1_score").innerHTML=player2_scoref;
document.getElementById("player2_score").innerHTML=player1_scoref;

function send(){
    number1=document.getElementById("Number1").value;
    number2=document.getElementById("Number2").value;
            actual_answer= parseInt(number1) / parseInt(number2);
        question="<h4 id='math_display'></h4>";
        input_box="<br> Answer: <input id='Answer' type='text'>";
        check_button="<br> <br> <button onclick='Check()' class='btn btn-primary'>Check</button";
        row=question+input_box+check_button;
        document.getElementById("output").innerHTML=row;
      document.getElementById("math_display").innerHTML=number1+"/"+number2;
      document.getElementById("Number1").value="";
      document.getElementById("Number2").value="";

}

function Check(){
getanswer= document.getElementById("Answer").value;
if(getanswer==actual_answer){
if (answer_turn==Username_1){
player1_scoref+=1;
document.getElementById("player1_score").innerHTML=player1_scoref;

}

else{
  player2_scoref+=1;
document.getElementById("player2_score").innerHTML=player2_scoref;
}

}
if(question_turn=Username_2){
answer_turn=Username_1;

document.getElementById("player_question").innerHTML="question turn -"+question_turn;
document.getElementById("player_answer").innerHTML=" answer turn -"+answer_turn;

}
else{
  question_turn=Username_1;
  answer_turn=Username_2;
    document.getElementById("player_answer").innerHTML=" answer turn -"+answer_turn;
  document.getElementById("player_question").innerHTML="question turn -"+question_turn;
}
document.getElementById("output").innerHTML="";
}