var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server! Try again after sometime!")
}
 

function clickHandler() {
  // outputDiv.innerText = "ajdnakdnakd " + textInput.value;
  var inputText = textInput.value;

  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;

    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);