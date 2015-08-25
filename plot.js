var cavnas, context;
var xMin=-10, xMax=10, yMin=-10, yMax=10;
var xScale, yScale;
var xOffset, yOffset;

function init() 
{
    canvas = document.getElementById("graph");
    context = canvas.getContext("2d");
    loadCodeMirror();

    window.onerror = function(msg, url, linenumber) {
        document.getElementById("errors").innerHTML = linenumber+": "+msg;
        editor.addLineClass(linenumber-1, 'background', 'line-error');
        return true;
    }

    window.addEventListener('hashchange', function() {
        loadFromURL();
    }, false);

    if (location.hash != "" && location.hash != "#")
        loadFromURL();

}

function loadFromURL()
{
	var content = atob(window.location.hash.substr(1));
	editor.setValue(content);
	go();
}

function setToURL()
{
	var url = btoa(editor.getValue());
	window.location.hash = "";
	window.location.hash = url;
}

function plot(x, y)
{
    y = yMax - y; // to start at bottom left instead of top left
    context.fillRect(x*xScale-2+xOffset, y*yScale-2, 4, 4);
}

function drawText(text, x, y)
{
    y = yMax - y; // to start at bottom left instead of top left
    context.fillText(text, x*xScale-2+xOffset, y*yScale-2);
}

function setFontSize(size)
{
    context.font = size+"px sans-serif";
}

function go()
{
	document.getElementById("errors").innerHTML = "";
	context.clearRect(0, 0, canvas.width, canvas.height);
    setWindow(xMin, xMax, yMin, yMax);
    var code = editor.getValue();
    eval(code);
}

function setWindow(x1, x2, y1, y2)
{
    setColor("black");
    setFontSize(10);
    
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
        context.fillText(parseInt(yMax-y+yMin), 0, y*yScale+yOffset);
        
}


function setColor(c)
{
    context.fillStyle = c;
}

function loadCodeMirror()
{
    // give the text area syntax highlighting and text editing
    window.editor = CodeMirror.fromTextArea(code, {
                    mode: "javascript",
                    lineNumbers: true,
                    lineWrapping: true,
                });
    
}