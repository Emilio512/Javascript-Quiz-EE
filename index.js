var count=60;
var interval = setInterval(function(){
    document.getElementById('count').addEventListener(click);
    count--
    if (count === 0){
        clearInterval(interval);
        alert("You are out of time!");
    }
}, 1000);