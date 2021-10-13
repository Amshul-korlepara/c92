function login1()
{
    alert("hi");
    playerone=document.getElementById("input1").value;
    playertwo=document.getElementById("input2").value;
    localStorage.setItem("player8_name",playerone);
    localStorage.setItem("player9_name",playertwo);
    window.location.replace("quiz_game.html");
}