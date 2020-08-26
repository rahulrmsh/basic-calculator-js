"use strict";

// var plusKey = document.querySelector("#plus");
// plusKey.onclick = function() {
//         var answerKey = document.querySelector("#answerKey").getAttribute('value');
//         var newAnswer = answerKey + 500;
//         document.querySelector("#answerKey").setAttribute('value', newAnswer);
//     }
// plusKey.addEventListener('click', function() {
//     var answerKey = document.querySelector("#answerKey").value;
//     document.querySelector("#answerKey").setAttribute('value', answerKey + 5550);
// })
// document.querySelector('#left').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
// document.querySelector('#right').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
// }
var submitBtn = document.querySelector('#submitKey');
var plusBtn = document.querySelector('#plus');

plusBtn.onclick = function () {
  var numberValue = document.getElementById("answerKey");
  numberValue.setAttribute('value', numberValue.value + ' + ');
};

submitBtn.onclick = function () {
  var numberValue = document.getElementById("answerKey").value;
  var res = numberValue.split(" ");
  alert(res);
};

function setValueKey(answerKey, minusKey, plusKey, multiKey, div) {}