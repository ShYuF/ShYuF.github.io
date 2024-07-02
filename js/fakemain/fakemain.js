const nggyu = new Audio("res/fakemain/nggyu.mp3");

function clearAccount() {
    document.getElementById("account").style.display = "none";
}

function cannotLogin() {
    nggyu.play();

    alert("还不能登录...");
}