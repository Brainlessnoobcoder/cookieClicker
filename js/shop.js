

window.addEventListener('load', function(){
    var shopSec = document.getElementById('shop');
    var item2price = 500;

    /* if section criteria kept intentionally low for testing change it later after done like 450 to 500*/
    if(actualScore >= 5 && !document.getElementById('item2')){
            var item2Card = document.createElement('div')
            item2Card.id = 'item2';
            item2Card.innerHTML = `
            <h2>Auto Clicker</h2>
            <p>Are you getting bored by clicking are Your fingers aching then you just may need this</p>
            <button id="item2Btn">Buy (${item2price} points)</button>`;
            shopSec.appendChild(item2Card);
        }
});