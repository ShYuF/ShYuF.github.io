function clearAccount() {
    document.getElementById("account").style.display = "none";
}

function init() {
    var form = document.getElementById("login_form");
    form.addEventListener("submit", submit);
}

// 使用localStorage存储用户名和密码
function submit(event) {
    try {
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
            if (localStorage.getItem(username) != null) {
                if (localStorage.getItem(username) == password){
                    var form = document.getElementById("login_form");
                    form.action = "fakesuccess.html";
                    form.method = "get";
                    form.submit();
                }
                else {
                    alert("密码错误(Incorrect password)");
                }
            }
            else {
                localStorage.setItem(username, password);
                localStorage.setItem(username + "_usage", "0.00");
                var form = document.getElementById("login_form");
                form.action = "fakesuccess.html";
                form.method = "get";
                form.submit();
            }
        }
    } catch (error) {
        console.log(error);
        alert("连接错误(Connection error)");
    }
    
}