function showProfile(name) {
    alert('You clicked on ' + name + ' profile!');
}

function subscribe(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('subscribe-msg').textContent = 'Thank you for subscribing, ' + email + '!';
    document.getElementById('email').value = '';
}
