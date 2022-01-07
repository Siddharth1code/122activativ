x=0;
y=0;
draw_circle="";
draw=_rectangle="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("span1").innerhtml="System islistening pleas speak";
    recognition.start();
}
recognition.onresult() = function(event){
    console.log(event)
    var conent=event.results[0][0].transcript;
    document.getElementById("span1").innerHTML="The speech has been as:"+content;

    if(content == circle)
    {
        x=Math.floor(Math.round()*900);
        y=Math.floor(Math.round()*600);

        document.getElementById("span1").innerHTML="Stared drawing circle";
        draw_circle="set";

    }
    if(content == rectangle)
    {
        x=Math.floor(Math.round()*900);
        y=Math.floor(Math.round()*600);

        document.getElementById("span1").innerHTML="Stared drawing rectangle";
        draw_rectangle="set";
        
    }

}

function setup()
{
    canvas=creatCanvas(900,600)
}

function draw()
{
    if(draw_circle=="set")
    {
        raduis = Math.floor(Math.round()*100);
        circle(x,y,raduis);
        document.getElementById("span1").innerHTML="Circle has nbeen drawn";
        draw_circle="";
    }

    if(draw_rectangle=="set")
    {
        raduis = Math.floor(Math.round()*100);
        circle(x,y,raduis);
        document.getElementById("span1").innerHTML="rectangle has been drawn";
        draw_rectangle="";
    }
}