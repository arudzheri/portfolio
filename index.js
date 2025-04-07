document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const navbar = document.querySelector("nav");

//sets the active page to be underlined (underline works with css)
const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav a');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }
})

window.addEventListener('scroll', function () {
    var parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function (element) {
        var scrolled = window.scrollY;
        var rate = parseFloat(element.getAttribute('data-rate')) || 0.5; // Default rate is 0.5
        var isBackgroundImage = getComputedStyle(element).backgroundImage !== 'none';
        
        if (isBackgroundImage) {
            element.style.backgroundPositionY = -(scrolled * rate) + 'px';
        } else {
            element.style.transform = 'translateY(' + -(scrolled * rate) + 'px)';
        }
    });
});

function loadImages(type, count) {
    // clear existing images
    thumbBar.innerHTML = '';

    // path for images
    let basePath = "assets/portfolio_pictures/";

    // choose folder
    let filenamePattern;
    if (type === "india") {
        filenamePattern = "india/india ";
    } else if (type === "cambridge") {
        filenamePattern = "cambridge/cambridge ";
    }
    else if (type === "london") {
        filenamePattern = "london/london ";
    }
    else if (type === "spain") {
        filenamePattern = "spain/spain ";
    }
    else {
        console.error("Invalid type specified");
        return;
    }

    // load and append images according to the specified count and type
    for (let i = 1; i <= count; i++) {
        const link = document.createElement('a');
        link.className = 'gallery-link';
        link.href = `${basePath}${type}/${type} (${i}).JPG`;

        const figure = document.createElement('figure');
        figure.className = 'gallery-image';

        const image = document.createElement('img');
        image.src = `${basePath}${type}/${type} (${i}).JPG`;
        image.alt = `Gallery image ${i}`;

        figure.appendChild(image);
        link.appendChild(figure);
        thumbBar.appendChild(link);
    }
}

document.getElementById('contact_form').addEventListener('submit', function (event) {
    event.preventDefault(); // prevent default form submission
    // validations pass, show success message and reset form
    document.getElementById('contact_form').reset(); // reset form fields
    document.querySelector('.alert.alert-success').style.display = 'block'; 
});