document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var targetId = this.getAttribute('href').substring(1);

            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function playMusic(musicFileName) {

    console.log('Playing music:', musicFileName);
}




