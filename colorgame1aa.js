var numsquares=6;
 var colors=generateRandomColors(6);

var squares=document.querySelectorAll(".square");
var selected=selectcolor();
var changevalue=document.getElementById("selec");
changevalue.textContent=selected;
var heading=document.querySelector("h1");
var failure=document.getElementById("fail");
var resetbutt=document.querySelector("#reset");
resetbutt.addEventListener("click",function(){

colors=generateRandomColors(numsquares);
selected=selectcolor();
changevalue.textContent=selected;
this.textContent="New colors";
failure.textContent="";
for(var f=0;f<squares.length;f++)
{
squares[f].style.backgroundColor=colors[f];
}
});

for(var i=0;i<squares.length;i++)
{
  squares[i].style.background=colors[i];

  squares[i].addEventListener("click",function(){
    var clickedone=this.style.background;
    if(clickedone==selected)
    {
    failure.textContent="CORRECT OPTION";
    changecolor(clickedone);
    heading.style.background=clickedone;
    resetbutt.textContent="Play Again";
    heading.style.background="#99CC99";
    }
    else{
      this.style.background= "#99CC99";
      failure.textContent="TRY AGAIN";
      $("this").ready(function(){
      $("squares[i]").click(function(){
      $("this").fadeOut(2000);
    });
  }) ;
    }
  });
}

function changecolor(color){
  for(var a=0;a<squares.length;a++)
  {
    squares[a].style.background=color;
  }
}

function selectcolor()
{
  var random= Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num)
{
  var arr=[];
  for(var d=0;d<num;d++)
{
arr.push(randomNumbers());

}
  return arr;
}

function randomNumbers(){
var red=  Math.floor(Math.random()*256);
var green=Math.floor(Math.random()*256);
var blue=Math.floor(Math.random()*256);

return "rgb(" +red +", " +green+", " +blue+ ")";
}
var easybutton=document.querySelector("#easybutt");
var hardbutton=document.querySelector("#hardbutt");

easybutton.addEventListener("click",function(){
numsquares=3;
colors=generateRandomColors(numsquares);
selected=selectcolor();
changevalue.textContent=selected;
for(var i=0;i<squares.length;i++)
{
if(colors[i])
{
  squares[i].style.background=colors[i];
}
else{
  squares[i].style.display="none";
}
}
});
hardbutton.addEventListener("click",function(){
  numsquares=6;
  colors=generateRandomColors(numsquares);
  selected=selectcolor();
  changevalue.textContent=selected;
  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.background=colors[i];
    squares[i].style.display="block";
  }
});

  $("document").ready(function(){
  $("#easybutt").click(function(){
  $("body").css("background-color","red");
  });
});

function colorbutton(){
document.querySelector("#easybutt").style.background="blue";
}

function secondcolorbutton(){
document.querySelector("#hardbutt").style.background="blue";
}
