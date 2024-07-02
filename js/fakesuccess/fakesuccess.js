const maxInit = 280 - 30;
const maxUsage = 1919810;
var time = 0;


function init() {
    time = Math.ceil(Math.random() * maxInit);

    var tmp = time;
    var sec = tmp % 60;
    tmp = (tmp - sec) / 60;
    var min = tmp % 60;
    tmp = (tmp - min) / 60;
    var hour = tmp;

    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hour < 10) hour = "0" + hour

    var timeStr = hour + ":" + min + ":" + sec;
    document.getElementById("clock").innerHTML = timeStr;

    setInterval(updTime, 1000);
    setUsage();
}

function updTime() {
    time = time + 1;

    var tmp = time;
    var sec = tmp % 60;
    tmp = (tmp - sec) / 60;
    var min = tmp % 60;
    tmp = (tmp - min) / 60;
    var hour = tmp;

    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hour < 10) hour = "0" + hour

    var timeStr = hour + ":" + min + ":" + sec;
    document.getElementById("clock").innerHTML = timeStr;
}

function setUsage() {
    var usage = Math.random() * maxInit;
    document.getElementById("usage").style.width = usage + "px";
    document.getElementById("usage_text").innerHTML = (usage / 268.0 * 125).toFixed(2) + "GB";
}