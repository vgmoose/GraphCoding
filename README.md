# GraphCoding
An introduction to basic coding concepts (loops, conditionals, arrays) using mathematical graphs. Play with it and learn at the website [here](http://vgmoose.github.io/GraphCoding).

![Image](http://i.imgur.com/0mhmsLJ.png)

## Syntax
#### Plotting a point on the graph
```JavaScript
plot(x, y)
```

#### Set the bounds of the graph (window size)
```JavaScript
setWindow(xMin, xMax, yMin, yMax);
```

#### Set the color of the next plot command
```JavaScript
setColor(colorString)
```

## Examples
Paste any one or combination of these examples in the textbox and hit "go" to see the graph be drawn.

```JavaScript
// plot a point at (5,5)
plot(5, 5);
```

```JavaScript
// set the window to the first quadrant
var xMin = 0; var xMax = 20;
var yMin = 0; var yMax = 20;
setWindow(xMin, xMax, yMin, yMax);
```

```JavaScript
// plot y=0 and x=0 (axes) in purple
setColor("purple");
for (var y=yMin; y<yMax; y+=0.1)
    plot(0, y);
for (var x=xMin; x<xMax; x+=0.1)
    plot(x, 0);
```

```JavaScript
// plot y=2x in blue 
setColor("blue");
var x = xMin;
while (x < xMax)
{
    var y = 2*x;
    x = x+0.3;
    plot(x, y);
}
```

```JavaScript
// plot y=x in green
setColor("green");
for (var x=xMin; x<xMax; x+=0.4)
{
    var y = x;
    plot(x, y);
}
```

```JavaScript
// plot x=y^2 in red
setColor("red")
var y = yMin;
while (y < yMax)
{
    var x = y*y;
    y = y+0.2;
    plot(x, y);
}
```

```JavaScript
// plot x=-0.4y in orange
setColor("orange")
for (var y=yMin; y < yMax; y+=0.5)
{
    var x = -y*0.4;
    plot(x, y);
}
```
```JavaScript
// plot 100 random points within the window
var width = xMax - xMin;
var height = yMax - yMin;

for (var i=0; i<100; i++)
{
    // Math.random() is a random number between 0 and 1
	var x = xMin + Math.random()*width;    
	var y = yMin + Math.random()*height;
	plot(x, y);
}
```


```JavaScript
// plot 1500 random points within the window of random colors
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
}
```

```JavaScript
// create a function for drawing parabolas with a given offset
function drawParabola(color, offset)
{
    setColor(color);
    for (var x=xMin; x<xMax; x+=0.1)
        plot(x, x*x+offset);
}

drawParabola("red", 2);
drawParabola("blue", 3);
drawParabola("yellow", 4);
```

```JavaScript
// plot a bell curve
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
}
```

```JavaScript
// draw the USA flag

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
        plot(x, y);
```
