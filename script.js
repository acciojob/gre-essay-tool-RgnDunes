//your code here
var textbox = document.getElementById("evaluatedText");
  var wordCount = document.getElementById("wordCount");

  textbox.addEventListener("input", function() {
    var text = textbox.value.trim();
    var count = text.length > 0 ? text.split(" ").length : 0;
    wordCount.innerHTML = count;
  });