var cavnas, context;
var xMin=-10, xMax=10, yMin=-10, yMax=10;
var xScale, yScale;
var xOffset, yOffset;

function init() {
canvas = document.getElementById("graph");
context = canvas.getContext("2d");
go();
}

function plot(x, y)
{
    y = yMax - y; // to start at bottom left instead of top left
    context.fillRect(x*xScale-2+xOffset, y*yScale-2, 4, 4);
}

function go()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    setWindow(xMin, xMax, yMin, yMax);
    var code = document.getElementById("code").value;
    eval(code);
}

function setWindow(x1, x2, y1, y2)
{
    setColor("black");
    
    xMin = x1;
    xMax = x2;
    yMin = y1;
    yMax = y2;
    
    xScale = canvas.width / (xMax - xMin);
    yScale = canvas.height / (yMax - yMin);
    
    var stepX = (xMax - xMin) / 15;
    xOffset = (xMin < 0)? (xMin*-1)*xScale : 0;
    var stepY = (yMax - yMin) / 15;
    yOffset = (yMin < 0)? (yMin*-1)*yScale : 0;
    
    for (var x=xMin; x<=xMax; x+= stepX)
        context.fillText(parseInt(x), x*xScale+xOffset, canvas.height);
    
    for (var y=yMin; y<=yMax; y+= stepY)
        context.fillText(parseInt(canvas.height/yScale - 2*yOffset/yScale - y), 0, y*yScale+yOffset);
        
}


function setColor(c)
{
    context.fillStyle = c;
}
