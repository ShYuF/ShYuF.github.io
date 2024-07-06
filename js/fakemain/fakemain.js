const nggyu = new Audio("res/fakemain/nggyu.mp3");

function clearAccount() {
    document.getElementById("account").style.display = "none";
}

function init() {
    var form = document.getElementById("login_form");
    form.addEventListener("submit", submit);
}

function submit(event) {
    event.preventDefault();
    var username = document.getElementById("user").value;
    var password = document.getElementById("pwd").value;

    if (username == "") {
        alert("请填写用户名(Please fill in the username)");
    }
    else if (password == "") {
        alert("请填写密码(Please fill in the password)");
    }
    else {
        var form = document.getElementById("login_form");
        form.action = "fakesuccess.html";
        form.method = "get";
        form.submit();
    }
    window.session
}