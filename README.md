# GraphCoding
An introduction to basic coding concepts (loops, conditionals, arrays) using mathematical graphs. Play with it and learn [here](http://vgmoose.github.io/GraphCoding)

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
// setup the window bounds
var xMin = -10; var xMax = 10;
var yMin = -10; var yMax = 10;
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
while (var y=yMin; y < yMax; y+=0.5)
{
    var x = -y*0.4;
    plot(x, y);
}
```
