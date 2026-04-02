const examples = [
  {
    id: "hello",
    title: "Hello World",
    description: "A simple introduction with axes, a function, and text.",
    code: `// Welcome to GraphCoding!
// Let's plot some axes and a simple function.

setWindow(-10, 10, -10, 10);

// Plot axes in gray
setColor("#ccc");
for (var x=-10; x<=10; x+=0.1) plot(x, 0);
for (var y=-10; y<=10; y+=0.1) plot(0, y);

// Plot y = x in blue
setColor("#3b82f6");
for (var x=-10; x<=10; x+=0.5) {
    plot(x, x);
}

// Draw some text
setColor("#1e293b");
setFontSize(24);
drawText("Hello Graph!", -4, 2);`
  },
  {
    id: "point",
    title: "Simple Point",
    description: "Plot a single point at (5, 5).",
    code: `// plot a point at (5,5)
plot(5, 5);`
  },
  {
    id: "window",
    title: "Set Window",
    description: "Set the boundaries of the graph to the first quadrant.",
    code: `// set the window to the first quadrant
var xMin = 0; var xMax = 20;
var yMin = 0; var yMax = 20;
setWindow(xMin, xMax, yMin, yMax);

// (add your own plotting code here)
`
  },
  {
    id: "axes",
    title: "Purple Axes",
    description: "Draw X and Y axes using loops and custom colors.",
    code: `var xMin = -10; var xMax = 10;
var yMin = -10; var yMax = 10;
setWindow(xMin, xMax, yMin, yMax);

// plot y=0 and x=0 (axes) in purple
setColor("purple");
for (var y=yMin; y<yMax; y+=0.1)
    plot(0, y);
for (var x=xMin; x<xMax; x+=0.1)
    plot(x, 0);`
  },
  {
    id: "y2x",
    title: "Linear (y=2x)",
    description: "Plot a linear function in blue.",
    code: `var xMin = -10; var xMax = 10;
var yMin = -10; var yMax = 10;
setWindow(xMin, xMax, yMin, yMax);

// plot y=2x in blue 
setColor("blue");
var x = xMin;
while (x < xMax)
{
    var y = 2*x;
    x = x+0.3;
    plot(x, y);
}`
  },
  {
    id: "parabola",
    title: "Parabola (x=y²)",
    description: "Plot a sideways parabola in red.",
    code: `var xMin = -10; var xMax = 10;
var yMin = -10; var yMax = 10;
setWindow(xMin, xMax, yMin, yMax);

// plot x=y^2 in red
setColor("red")
var y = yMin;
while (y < yMax)
{
    var x = y*y;
    y = y+0.2;
    plot(x, y);
}`
  },
  {
    id: "random100",
    title: "100 Random Points",
    description: "Scatter 100 points randomly within the window.",
    code: `setWindow(0, 20, 0, 20);
var xMin = 0; var xMax = 20;
var yMin = 0; var yMax = 20;

var width = xMax - xMin;
var height = yMax - yMin;

for (var i=0; i<100; i++)
{
    // Math.random() is a random number between 0 and 1
	var x = xMin + Math.random()*width;    
	var y = yMin + Math.random()*height;
	plot(x, y);
}`
  },
  {
    id: "random1500",
    title: "1500 Color Points",
    description: "A dense scatter plot with random colors.",
    code: `setWindow(0, 20, 0, 20);
var xMin = 0; var xMax = 20;
var yMin = 0; var yMax = 20;

var width = xMax - xMin;
var height = yMax - yMin;
var colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange", "#c2c2c2"];

for (var i=0; i<1500; i++)
{
	var choice = Math.floor( Math.random()*colors.length );
	setColor(colors[choice]);
	
	var x = xMin + Math.random()*width;    
	var y = yMin + Math.random()*height;
	plot(x, y);
}`
  },
  {
    id: "functions",
    title: "Custom Functions",
    description: "Using JavaScript functions to draw multiple parabolas.",
    code: `setWindow(-10, 10, -10, 10);
var xMin = -10; var xMax = 10;

// create a function for drawing parabolas with a given offset
function drawParabola(color, offset)
{
    setColor(color);
    for (var x=xMin; x<xMax; x+=0.1)
        plot(x, x*x+offset);
}

drawParabola("red", 2);
drawParabola("blue", 3);
drawParabola("yellow", 4);`
  },
  {
    id: "bell",
    title: "Bell Curve",
    description: "Plot a Gaussian distribution curve.",
    code: `// plot a bell curve
var xMin = -5; var xMax = 5;
var yMin = 0; var yMax = 1;
setWindow(xMin, xMax, yMin, yMax);

setColor("red");
function gaussian(x) {
	var gaussianConstant = 1 / Math.sqrt(2 * Math.PI),
		mean = 0,
		sigma = 1;

	x = (x - mean) / sigma;
	return gaussianConstant * Math.exp(-.5 * x * x) / sigma;
};

for (var x=xMin; x<xMax; x+=0.1)
{
	plot(x, gaussian(x));
}`
  },
  {
    id: "usa",
    title: "USA Flag",
    description: "Simple drawing example using nested loops.",
    code: `setWindow(-15, 15, -15, 15);

// draw the 7 red stripes
setColor("red")
for (var y=3; y>-4; y--)
{
    for (var x=-7; x<7; x+=0.25)
    {
        plot(x, y);
        plot(x, y+0.25);
    }
}

// draw the big blue square
setColor("blue")
for (var y=3; y>-1; y-=0.25)
{
    for (var x=-7; x<-1; x+=0.25)
    {
        plot(x, y);
        plot(x, y+0.25);
    }
}

// draw a bunch of dots
setColor("white")
for (var y=3; y>-1; y-=.5)
    for (var x=-7; x<-1; x+=.5)
        plot(x, y);`
  },
  {
    id: "waves",
    title: "Sine & Cosine",
    description: "Visualize trigonometric waves in different colors.",
    code: `setWindow(-10, 10, -10, 10);
var xMin = -10; var xMax = 10;

// set the font and draw these words
setFontSize(17);
drawText("hello", -5, 8);
drawText("these are some words", -4, 6);
drawText("neat", -3, 4);

// draw sine and cosine waves
for (var x=xMin; x<xMax; x+=0.2)
{
  setColor("green")
  plot(x+1, Math.sin(x) - 5);
  setColor("purple")
  plot(x, Math.cos(x) - 5);
}`
  }
];
