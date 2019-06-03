var auth = localStorage;
//auth.setItem('auth', 'false');

function login() {
    let login = document.iAccInput.iName.value;
    let password = document.iAccInput.iAccID.value;
    const trueName = 'Admin';
    const truePassword = '12345';
    if ((login == trueName) && (password == truePassword)) {
        document.location.href = 'profile.html';
        auth.setItem('auth', 'true');
    } else {
        alert("Имя пользователя или пароль введены не верно");
    }
}

window.onload = function check() {
    let url = "profile.html";
    let check = window.location.href;
    let file = check.split('/').slice(-1);
    if (url === file[0]) {
        if (auth.auth === 'false') {
            window.location = 'login.html';
        }
    }
}