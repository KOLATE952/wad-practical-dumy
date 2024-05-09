function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementBild('email').value;

    var data = {
        username: username,
        email: email
    };


    var xhr = new XMLHttpRequest() {
        xhr.open('POST', 'http://datalist.html.com/register',true);
        xhr.setRequestHeader('Content-Type','application/json');

        xhr.onreadystatechange = functio()
        if (xhr.readystate == 4 && xhr.status == 200) {
            window.location.href = 'datalist.html';
        }
    
    };
    xhr.send(JSON.stringify(data));

}