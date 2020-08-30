var answerKey = 0;
for (var i = 0; i < document.querySelectorAll(".boxes").length; i++) {
    document.querySelectorAll(".boxes")[i].addEventListener("click", function() {
        var btnName = this.id;
        var inputValue = document.querySelector('#answerKey').value;
        if (isNaN(inputValue)) {
            alert("Enter a Valid Number.");
        } else {
            switch (btnName) {
                case 'plus':
                    answerKey = parseInt(answerKey) + parseInt(inputValue);
                    document.querySelector('#answerKey').value = '';
                    break;
                case 'minus':
                    if (parseInt(answerKey) === 0) {
                        answerKey = parseInt(inputKey);
                    } else {
                        answerKey = parseInt(answerKey) - parseInt(inputValue);
                    }
                    document.querySelector('#answerKey').value = '';
                    break;
                case 'multi':
                    if (parseInt(answerKey) === 0) {
                        answerKey = parseInt(inputKey);
                    } else {
                        answerKey = parseInt(answerKey) * parseInt(inputValue);
                    }
                    document.querySelector('#answerKey').value = '';
                    break;
                case 'div':
                    if (parseInt(answerKey) === 0) {
                        answerKey = parseInt(inputKey);
                    } else {
                        answerKey = parseInt(answerKey) / parseInt(inputValue);
                    }
                    document.querySelector('#answerKey').value = '';
                    break;
                default:
                    break;
            }
        }
    })
}

document.querySelector("#submitKey").addEventListener('click', function() {
    document.querySelector('#answerKey').value = answerKey;
    answerKey = 0;
})

document.querySelector('#cancelKey').addEventListener('click', function() {
    answerKey = 0;
    document.querySelector('#answerKey').value = '';
})