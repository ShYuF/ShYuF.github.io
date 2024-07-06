const maxInit = 1919810;
const maxUsage = 280 - 30;
var time = 0;


function init() {
    // time = Math.ceil(Math.random() * maxInit);

    // var tmp = time;
    // var sec = tmp % 60;
    // tmp = (tmp - sec) / 60;
    // var min = tmp % 60;
    // tmp = (tmp - min) / 60;
    // var hour = tmp;

    // if (sec < 10) sec = "0" + sec;
    // if (min < 10) min = "0" + min;
    // if (hour < 10) hour = "0" + hour;

    // var timeStr = hour + ":" + min + ":" + sec;
    var timeStr = "00:00:00";
    document.getElementById("clock").innerHTML = timeStr;

    // 解析用户名并修改
    var href = window.location.href;
    var regex = new RegExp(".*\?username=(.*)&password=.*");
    var results = regex.exec(href);
    document.getElementById("name").innerHTML = results[1];

    setInterval(updTime, 1000);
    setInterval(updUsage, 1000, results[1]);
    setUsage(results[1]);
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

function setUsage(username) {
    // var usage = Math.random() * maxUsage;
    var usage = parseFloat(localStorage.getItem(username + "_usage"));
    document.getElementById("usage").style.width = (usage * 268.0 / 125.0).toFixed(0) + "px";
    document.getElementById("usage_text").innerHTML = usage.toFixed(2) + "GB";
}

function updUsage(username) {
    var usage = parseFloat(localStorage.getItem(username + "_usage"));
    usage = usage + 3.33;
    if (usage > 50.00) {
        usage = 50.00;
    }
    localStorage.setItem(username + "_usage", String(usage));
}