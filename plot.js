var canvas, context;
var xMin = -10, xMax = 10, yMin = -10, yMax = 10;
var xScale, yScale;
var xOffset, yOffset;

function init() {
    canvas = document.getElementById("graph");
    context = canvas.getContext("2d");
    loadCodeMirror();

    window.onerror = function (msg, url, linenumber) {
        const errorEl = document.getElementById("errors");
        errorEl.innerHTML = "Line " + linenumber + ": " + msg;
        editor.addLineClass(linenumber - 1, 'background', 'line-error');
        return true;
    }

    window.addEventListener('hashchange', function () {
        loadFromURL();
    }, false);

    renderExamples();

    if (location.hash != "" && location.hash != "#") {
        loadFromURL();
    } else {
        // load default "Hello World" example
        loadExample("hello", true);
    }
}

function renderExamples() {
    const grid = document.getElementById("examples-grid");
    if (!grid) return;

    examples.forEach(ex => {
        const card = document.createElement("div");
        card.className = "example-card";
        card.onclick = () => loadExample(ex.id);
        card.innerHTML = `
            <h3>${ex.title}</h3>
            <p>${ex.description}</p>
        `;
        grid.appendChild(card);
    });
}

function loadExample(id, isInitial = false) {
    const ex = examples.find(e => e.id === id);
    if (!ex) return;

    // if it's not the initial load and the editor has been modified, ask to confirm
    if (!isInitial && !editor.isClean()) {
        if (!confirm("This will replace your current code. Are you sure?")) {
            return;
        }
    }

    editor.setValue(ex.code);
    editor.markClean(); // Mark as clean after loading an example
    go();
}

function clearEditor() {
    if (!editor.isClean() && !confirm("Clear the editor?")) {
        return;
    }
    editor.setValue("");
    editor.markClean();
    go();
}

function loadFromURL() {
    try {
        var content = atob(window.location.hash.substr(1));
        editor.setValue(content);
        editor.markClean();
        go();
    } catch (e) {
        console.error("Failed to load from URL", e);
    }
}

function setToURL() {
    var url = btoa(editor.getValue());
    window.location.hash = "";
    window.location.hash = url;
}

function plot(x, y) {
    y = yMax - y; // to start at bottom left instead of top left
    context.fillRect(x * xScale - 2 + xOffset, y * yScale - 2, 4, 4);
}

function drawText(text, x, y) {
    y = yMax - y; // to start at bottom left instead of top left
    context.fillText(text, x * xScale - 2 + xOffset, y * yScale - 2);
}

function setFontSize(size) {
    context.font = "500 " + size + "px 'Inter', sans-serif";
}

function go() {
    document.getElementById("errors").innerHTML = "";
    // clear all line errors
    for (var i = 0; i < editor.lineCount(); i++) {
        editor.removeLineClass(i, 'background', 'line-error');
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    setWindow(xMin, xMax, yMin, yMax);
    var code = editor.getValue();
    try {
        eval(code);
    } catch (e) {
        // update error message on screen
        document.getElementById("errors").innerHTML = "Execution Error: " + e.message;
    }
}

function setWindow(x1, x2, y1, y2) {
    setColor("#64748b");
    setFontSize(10);

    xMin = x1;
    xMax = x2;
    yMin = y1;
    yMax = y2;

    xScale = canvas.width / (xMax - xMin);
    yScale = canvas.height / (yMax - yMin);

    var stepX = (xMax - xMin) / 10;
    xOffset = (xMin < 0) ? (xMin * -1) * xScale : 0;
    var stepY = (yMax - yMin) / 10;
    yOffset = (yMin < 0) ? (yMin * -1) * yScale : 0;

    context.textAlign = "center";
    for (var x = xMin; x <= xMax; x += stepX) {
        if (Math.abs(x) < 0.001) continue;
        context.fillText(Math.round(x), x * xScale + xOffset, canvas.height - 5);
    }

    context.textAlign = "left";
    for (var y = yMin; y <= yMax; y += stepY) {
        if (Math.abs(y) < 0.001) continue;
        context.fillText(Math.round(y), 5, (yMax - y + yMin) * yScale + yOffset);
    }
}

function setColor(c) {
    context.fillStyle = c;
}

function loadCodeMirror() {
    window.editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "javascript",
        lineNumbers: true,
        lineWrapping: true,
        theme: "default",
        viewportMargin: Infinity
    });
    editor.markClean(); // init = clean
}

function share() {
    prompt("Copy and paste this whole link to share your code:", window.location.href);
}