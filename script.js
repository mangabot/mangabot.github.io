var md = window.markdownit();

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  };
  rawFile.send(null);
}

// readTextFile("./README.md");

fetch("./README.md")
  .then(response => response.text())
  .then(text => {
    document.getElementById("markdown-container").innerHTML = text;
  });
