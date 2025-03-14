let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

function func() {
    let un = document.getElementById("un").value;
    let pw = document.getElementById("pw").value;
    if (un === "batch05" && pw === "MiniProject") {
        window.location = "index.html";
    } else {
        alert('Invalid username or password');
    }
}
