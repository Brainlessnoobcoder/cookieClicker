window.addEventListener('load', function() {
    var mainClickBtn = document.getElementById("mainClickBtn");
    var scorePanel = document.getElementById("score");
    var item1Button = document.getElementById('item1Btn');
    var item1Value = 99;
    var actualScore = 0;
    var scoreAdder = 1;
    var item1Status = false;

    item1Button.innerHTML = `Buy (${item1Value} Points)`;

    mainClickBtn.onclick = function() {
        actualScore += scoreAdder;
        scorePanel.innerHTML = actualScore;
    };

    item1Button.onclick = function() {
        if (actualScore >= item1Value) {
            actualScore -= item1Value;
            item1Status = true;
            scoreAdder *= 2;
            item1Value *= 2;
            
            scorePanel.innerHTML = actualScore;
            item1Button.innerText = `Buy (${item1Value} Points)`;
        } else {
            alert("Not enough points!");
        }
    };
    
    

});