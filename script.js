function validateUsername(){
    var username = document.getElementById('username'); 
    if (!username.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.innerHTML="Invalid Username";
        return false;
    }
    error.innerHTML="";
    return true;

}

function validatePassword(){
    var password = document.getElementById('password');
    if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*@)[a-zA-Z0-9@]+$/)) {
        perror.innerHTML="Invalid Password";
        return false;
    }
    perror.innerHTML="";
    return true;

}

function validateLogin() {
   
    // // Check for a specific password to redirect to the dashboard
    var password = document.getElementById('password').value;

    if (password === 'SmartServTest@123') {
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}



function forgotPassword() {
    // Open default email client with a new email to support@smartserv.io
    window.location.href = 'mailto:support@smartserv.io?subject=Password Reset Request&body=Please reset my password.';
}
