"use strict";

var plusKey = document.querySelector("#plus");

plusKey.onclick = function () {
  var answerKey = document.querySelector("#answerKey").getAttribute('value');
  var newAnswer = answerKey + 500;
  document.querySelector("#answerKey").setAttribute('value', newAnswer);
}; // plusKey.addEventListener('click', function() {
//     var answerKey = document.querySelector("#answerKey").value;
//     document.querySelector("#answerKey").setAttribute('value', answerKey + 5550);
// })